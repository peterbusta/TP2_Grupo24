import { useState } from 'react';
import '../styles.css';

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const enviarDeclaracion = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="contacto-devopoly mx-auto">
      <header className="text-center mb-4">
        <p className="contacto-sello mb-2">EXPEDIENTE DEVOPOLY</p>
        <h1 className="text-warning font-oswald text-uppercase">Declaración ante el banco</h1>
        <p className="text-secondary mb-0">Dejá tu consulta: el equipo la registrará en el expediente.</p>
      </header>

      {enviado ? (
        <div className="alert alert-success text-center" role="status">
          Declaración registrada. Gracias por contactar al equipo Devopoly.
        </div>
      ) : (
        <form className="formulario-declaracion" onSubmit={enviarDeclaracion}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" required autoComplete="name" />

          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" required autoComplete="email" />

          <label htmlFor="mensaje">Declaración</label>
          <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Contanos en qué podemos ayudarte." />

          <button type="submit" className="btn-accion-especial font-oswald text-uppercase">Registrar declaración</button>
        </form>
      )}
    </section>
  );
}

export default Contacto;
