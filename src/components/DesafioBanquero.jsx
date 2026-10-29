import { useState, useEffect } from 'react';
import '../styles.css';

function DesafioBanquero() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [desafioActual, setDesafioActual] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [estadoRespuesta, setEstadoRespuesta] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [racha, setRacha] = useState(0);

  useEffect(() => {
    // CAMBIAMOS DE API: Usamos CountriesNow que es estable y no está en mantenimiento
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        // Esta API devuelve los datos dentro de un array llamado "data"
        const listaPaises = json.data; 
        
        // Filtramos para asegurarnos de que tengan nombre y bandera válida
        const paisesValidos = listaPaises.filter(p => p.name && p.flag);
        
        if (paisesValidos.length < 4) {
          throw new Error("No hay suficientes datos de países.");
        }

        setPaises(paisesValidos);
        armarNuevaRonda(paisesValidos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error exacto:", err);
        setMensajeError(err.message);
        setError(true);
        setLoading(false);
      });
  }, []);

  const armarNuevaRonda = (listaBase = paises) => {
    if (listaBase.length < 4) return;
    
    // Mezclamos y elegimos 4
    const mezclados = [...listaBase].sort(() => 0.5 - Math.random());
    const seleccionados = mezclados.slice(0, 4);
    
    const paisCorrecto = seleccionados[0];
    const opcionesMezcladas = [...seleccionados].sort(() => 0.5 - Math.random());

    setDesafioActual(paisCorrecto);
    setOpciones(opcionesMezcladas);
    setEstadoRespuesta(null);
  };

  const manejarRespuesta = (paisElegido) => {
    if (estadoRespuesta !== null) return;

    if (paisElegido.name === desafioActual.name) {
      setEstadoRespuesta('correcta');
      setPuntaje(p => p + 300);
      setRacha(r => r + 1);
    } else {
      setEstadoRespuesta('incorrecta');
      setRacha(0);
    }
  };

  if (loading || (!error && !desafioActual)) {
    return (
      <div className="layout-devopoly d-flex justify-content-center align-items-center flex-column text-center pt-5">
        <div className="spinner-border text-warning mb-3" role="status"></div>
        <h2 className="text-white font-oswald text-uppercase">🎲 El banquero está buscando una nueva propiedad...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="layout-devopoly d-flex justify-content-center align-items-center flex-column text-center pt-5">
        <h1 className="text-danger font-oswald text-uppercase" style={{ fontSize: '4rem' }}>🚨</h1>
        <h2 className="text-white font-oswald text-uppercase mt-2">¡El banco perdió conexión!</h2>
        <p className="text-secondary mt-2">Detalle: <span className="text-warning fw-bold">{mensajeError}</span></p>
      </div>
    );
  }

  return (
    <div className="layout-devopoly d-flex flex-column align-items-center pt-4">
      <div className="header-tablero text-center mb-5 w-100">
        <h6 className="text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
          DEVOPOLY BANK - SECCIÓN INTERNACIONAL
        </h6>
        
        <h1 className="titulo-neon font-oswald text-uppercase text-white m-0">
          EL DESAFÍO DEL BANQUERO
        </h1>
        
        <p className="portada-bajada text-secondary mb-0 mt-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Identificá la bandera, adquirí la propiedad y sumá monedas a tu cuenta.
        </p>
      </div>

      <div className="tarjeta-hud-organica shadow-lg" style={{ '--color-tarjeta': '#f39c12', maxWidth: '500px', width: '100%', height: 'auto' }}>
        <div className="cabecera-tarjeta d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#f39c12' }}>
          <span className="text-white font-oswald fw-bold text-uppercase m-0 fs-5">PUNTOS: <span className="simbolo-moneda">₩</span>{puntaje}</span>
          <span className="text-white font-oswald fw-bold text-uppercase m-0 fs-5">RACHA: {racha} 🔥</span>
        </div>

        <div className="cuerpo-tarjeta p-4 d-flex flex-column align-items-center text-center">
          <h4 className="text-white mb-3">¿A qué país pertenece esta bandera?</h4>
          
          <img 
            src={desafioActual.flag} 
            alt="Bandera misteriosa" 
            className="img-fluid border border-2 border-secondary rounded shadow-sm mb-4 bg-white"
            style={{ height: '150px', objectFit: 'contain', padding: '10px' }}
          />

          <div className="d-grid gap-2 w-100 mb-4">
            {opciones.map((pais, index) => {
              let claseBoton = "btn-opcion-banquero";
              
              if (estadoRespuesta !== null) {
                if (pais.name === desafioActual.name) claseBoton += " btn-correcta";
                else claseBoton += " btn-incorrecta";
              }

              return (
                <button 
                  key={index}
                  className={claseBoton}
                  onClick={() => manejarRespuesta(pais)}
                  disabled={estadoRespuesta !== null}
                >
                  {pais.name}
                </button>
              );
            })}
          </div>

          {estadoRespuesta && (
            <div className="feedback-banquero w-100 p-3 rounded text-start">
              {estadoRespuesta === 'correcta' ? (
                <p className="text-success font-oswald text-uppercase m-0 mb-2 fs-5">💰 ¡Propiedad adquirida! Sumaste monedas.</p>
              ) : (
                <p className="text-danger font-oswald text-uppercase m-0 mb-2 fs-5">🚫 Hipoteca rechazada. ¡La respuesta era {desafioActual.name}!</p>
              )}

              <button 
                className="btn-accion-especial w-100 mt-3"
                onClick={() => armarNuevaRonda()}
              >
                ✦ Siguiente Turno
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesafioBanquero;