import { useState } from 'react';
import '../styles.css';

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const enviarDeclaracion = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="contacto-devopoly mx-auto w-100 d-flex flex-column align-items-center pt-4">
      <header className="header-tablero text-center mb-5 w-100">
        <h6 className="text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
          EXPEDIENTE DEVOPOLY
        </h6>
        
        <h1 className="titulo-neon font-oswald text-uppercase text-white m-0 mb-3">
          DECLARACIÓN ANTE EL BANCO
        </h1>
        
        <p className="portada-bajada text-secondary mb-0 mt-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Presentá tu declaración formal ante las autoridades del tablero. Ya sea para reportar un bug, negociar una deuda técnica o proponer una nueva regla, nuestro equipo adjuntará tu solicitud al expediente oficial.
        </p>
      </header>

      {enviado ? (
        <div className="feedback-banquero w-100 p-4 text-center rounded shadow-lg mt-4 border border-warning" style={{ maxWidth: '600px', backgroundColor: 'rgba(20, 25, 35, 0.95)' }}>
          <h3 className="text-warning font-oswald text-uppercase mb-3">🏛️ Expediente Archivado</h3>
          <p className="text-white mb-0" style={{ fontSize: '0.9rem' }}>
            El banco ha registrado su declaración de quiebra. La deuda técnica será evaluada en el próximo turno.
          </p>
        </div>
      ) : (
        <div className="tarjeta-hud-organica shadow-lg mt-4" style={{ '--color-tarjeta': '#f39c12', maxWidth: '600px', width: '100%', height: 'auto' }}>
          <div className="cabecera-tarjeta d-flex flex-column align-items-center justify-content-center p-3" style={{ backgroundColor: '#1a1610', borderBottom: '2px solid #f39c12', borderRadius: '10px 10px 0 0' }}>
            <span className="text-warning font-oswald fw-bold text-uppercase m-0 fs-4 letter-spacing-1">
              DECLARACIÓN DE BANCARROTA
            </span>
            <small className="text-white opacity-75 font-oswald text-uppercase mt-1">
              División de Auditoría - Devopoly Bank
            </small>
          </div>
          
          <div className="cuerpo-tarjeta p-4 text-start">
            <p className="text-warning font-oswald text-uppercase mb-1" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
              Aviso Financiero:
            </p>
            <p className="text-secondary mb-4" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              Toda deuda técnica declarada será auditada. Las propiedades con bugs no reportados serán embargadas por el banco.
            </p>

            <form className="w-100 d-flex flex-column gap-3" onSubmit={enviarDeclaracion}>
              
              <div className="form-group d-flex flex-column text-start">
                <label htmlFor="nombre" className="text-white font-oswald text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                  Titular en Deuda (Nombre):
                </label>
                <input 
                  id="nombre" 
                  name="nombre" 
                  type="text" 
                  required 
                  autoComplete="name"
                  placeholder="Ej: John Doe"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid #5c6670', color: '#fff', padding: '10px', borderRadius: '4px' }}
                />
              </div>

              <div className="form-group d-flex flex-column text-start">
                <label htmlFor="email" className="text-white font-oswald text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                  Casilla de Cobros (Email):
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  autoComplete="email"
                  placeholder="correo@devopoly.com"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid #5c6670', color: '#fff', padding: '10px', borderRadius: '4px' }}
                />
              </div>

              <div className="form-group d-flex flex-column text-start mb-2">
                <label htmlFor="mensaje" className="text-white font-oswald text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                  Detalle del Embargo (Mensaje):
                </label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="4" 
                  required 
                  placeholder="Declare los bugs o justifique su bancarrota aquí..." 
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid #5c6670', color: '#fff', padding: '10px', borderRadius: '4px', resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-accion-especial font-oswald text-uppercase mt-2" style={{ '--color-tarjeta': '#f39c12' }}>
                ✦ Solicitar Rescate Financiero
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacto;
