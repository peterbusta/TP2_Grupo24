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
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        // Esta API devuelve los datos dentro de un array llamado "data"
        const listaPaises = json.data; 
        
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
        <h1 className="titulo-neon font-oswald text-uppercase text-white m-0 mb-3">
          EL DESAFÍO DEL BANQUERO
        </h1>
        <p className="portada-bajada text-secondary mb-0 mt-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          El Banco Central busca expandir el monopolio al extranjero. Demostrá tu conocimiento consumiendo los datos de nuestra red global: identificá la bandera misteriosa, asegurá la propiedad internacional y acumulá fondos antes del próximo turno.
        </p>
      </div>

      <div className="tarjeta-hud-organica shadow-lg" style={{ '--color-tarjeta': '#f39c12', maxWidth: '550px', width: '100%', height: 'auto', backgroundColor: 'rgba(11, 17, 24, 0.82)' }}>
        
        <div className="cabecera-tarjeta d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#1a1610', borderBottom: '2px solid #f39c12', borderRadius: '10px 10px 0 0' }}>
          <span className="text-warning font-oswald fw-bold text-uppercase m-0 fs-5">
            PUNTOS: <span className="simbolo-moneda text-white">₩</span><span className="text-white">{puntaje}</span>
          </span>
          <span className="text-warning font-oswald fw-bold text-uppercase m-0 fs-5">
            RACHA: <span className="text-white">{racha}</span> 🔥
          </span>
        </div>

        <div className="cuerpo-tarjeta p-4 d-flex flex-column align-items-center text-center">
          <h4 className="text-white font-oswald text-uppercase letter-spacing-1 mb-4" style={{ fontSize: '1.1rem' }}>
            ¿A qué país pertenece esta bandera?
          </h4>
          
          <div className="marco-icono-especial mb-4" style={{ width: 'auto', height: 'auto', padding: '15px', borderRadius: '8px' }}>
            <img 
              src={desafioActual.flag} 
              alt="Bandera misteriosa" 
              className="img-fluid rounded"
              style={{ height: '120px', objectFit: 'contain', filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.5))' }}
            />
          </div>

          <div className="d-grid gap-3 w-100 mb-4">
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
            <div className="feedback-banquero w-100 p-3 text-center border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {estadoRespuesta === 'correcta' ? (
                <p className="text-success font-oswald text-uppercase m-0 mb-3 fs-6 letter-spacing-1">
                  💰 ¡Propiedad adquirida! Sumaste 300 ₩.
                </p>
              ) : (
                <p className="text-danger font-oswald text-uppercase m-0 mb-3 fs-6 letter-spacing-1">
                  🚫 Hipoteca rechazada. ¡Era {desafioActual.name}!
                </p>
              )}

              <button 
                className="btn-accion-especial w-100 font-oswald text-uppercase"
                style={{ '--color-tarjeta': '#f39c12' }}
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