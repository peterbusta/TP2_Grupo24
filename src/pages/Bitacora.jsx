import { useState } from "react";
import "./Bitacora.css";

const seccionesIniciales = [
  { 
    titulo: "Planificación y concepto", 
    icono: "/img/dados.png", 
    color: "#c0392b",
    contenido: (
      <>
  <p>Antes de escribir código, el equipo definió una estructura modular basada en componentes y un documento inicial con la propuesta de diseño.</p>
  <p>Se evaluó la temática comparándola con otros proyectos, optando por adoptar el juego de mesa <strong>Monopoly</strong> como eje conceptual. Esto permitió unificar visual y funcionalmente todas las secciones de la aplicación (portada interactiva, perfiles de integrantes, mazo tecnológico y bitácora).</p>
  <p>La estrategia de trabajo consistió en estructurar primero el layout global en React, avanzando en paralelo en ramas independientes para evitar bloqueos entre los miembros del equipo.</p>
  </>
  )
  },
  { 
    titulo: "Uso de GitHub", 
    icono: "/img/ferrocarril.png", 
    color: "#3498db",
    contenido: (
      <>
       <div className="paso-turno">
    <span className="numero-paso numero-celeste">1.</span>
    <div className="detalle-paso">
      <h3>Organización de ramas en Git</h3>
      <p>Creación de ramas de trabajo individuales para cada integrante, permitiendo desarrollar perfiles y secciones sin interferir en el código base.</p>
    </div>
  </div>
  <div className="paso-turno">
    <span className="numero-paso numero-celeste">2.</span>
    <div className="detalle-paso">
      <h3>Proceso de Merge</h3>
      <p>Consolidación del trabajo colaborativo en la rama principal (`main`). Durante este proceso se debieron reajustar estilos responsive que se habían superpuesto tras integrar los aportes de todos.</p>
    </div>
  </div>
  <div className="paso-turno">
    <span className="numero-paso numero-celeste">3.</span>
    <div className="detalle-paso">
      <h3>Resolución de conflictos</h3>
      <p>Depuración conjunta de conflictos en archivos CSS y sincronización de rutas con React Router DOM[cite: 3].</p>
    </div>
  </div>
      </>
    )
  },
  { 
    titulo: "Lógica de desarrollo", 
    icono: "/img/arca.png", 
    color: "#8e44ad",
    contenido: (
      <div className="paso-turno">
      <span className="numero-paso numero-morado">1.</span>
      <div className="detalle-paso">
        <h3>Migración a React y Hooks</h3>
        <p>Se abandonó la manipulación imperativa del DOM por una arquitectura declarativa basada en componentes funcionales. Se implementó el Hook <code>useState</code> para controlar de forma reactiva la apertura de los acordeones de la bitácora, los estados de los dados, las tiradas de cartas y la gestión de modales.</p>
      </div>
    </div>
    )
  },
  { 
    titulo: "Diseño responsive", 
    icono: "/img/agua.png", 
    color: "#27ae60",
    contenido: (
      <p>Para asegurar una correcta experiencia de usuario en distintos dispositivos, se diseñó un sistema flexible basado en CSS Grid y contenedores adaptativos. Fue necesario revisar reiteradamente los <em>breakpoints</em> (especialmente en vistas móviles y tablets) para corregir desbordes visuales en las tarjetas interactivas del tablero y los perfiles.</p>
    )
  },
  { 
    titulo: "Navegación y enlaces", 
    icono: "/img/salida.png", 
    color: "#2c3e50",
    contenido: (
      <>
  <p>Se implementó <strong>React Router DOM</strong> para manejar una navegación fluida tipo SPA (Single Page Application) sin recargar la página.</p>
  <p>Durante las pruebas de integración se detectaron y corrigieron enlaces rotos en las tarjetas de perfil y pequeños desalineamientos en el menú hamburguesa responsivo, asegurando accesibilidad y coherencia visual en toda la aplicación.</p>
</>
    )
  },
  { 
    titulo: "Uso de IA", 
    icono: "/img/electricidad.png", 
    color: "#f1c40f",
    contenido: (
      <>
  <p>El equipo integró herramientas de inteligencia artificial como soporte técnico complementario, validando y probando rigurosamente cada solución antes de incorporarla al repositorio:</p>
  
  <div className="opcion-carta">
    <div className="encabezado-opcion">
      <span className="badge-opcion">A</span>
      <h4>Generación de Avatares (ChatGPT)</h4>
    </div>
    <p>Utilizado para estandarizar los avatares 3D de los integrantes bajo un mismo criterio visual de iluminación y paleta de colores.</p>
  </div>
                                                        
  <div className="opcion-carta">
    <div className="encabezado-opcion">
      <span className="badge-opcion">B</span>
      <h4>Asistencia en Código y Debugging (Gemini y Claude)</h4>
    </div>
    <p>Consultados para optimizar la lógica matemática del avance de los peones en el tablero isométrico, la animación de los dados y la depuración de selectores CSS complejos[cite: 1].</p>
  </div>
</>
    )
  },
];
function EntradaBitacora({ seccion }) {
  const [abierta, setAbierta] = useState(false);

  return (
    <article className="bitacora-entrada" style={{ "--color-bitacora": seccion.color }}>
      <button
        type="button"
        className="bitacora-titulo"
        onClick={() => setAbierta((valor) => !valor)}
        aria-expanded={abierta}
      >
        <span className="bitacora-titulo-contenido">
          <img src={seccion.icono} alt="" aria-hidden="true" />
          <span>{seccion.titulo}</span>
        </span>
        <span className="bitacora-toggle" aria-hidden="true">
          {abierta ? "▲" : "▼"}
        </span>
      </button>

      {abierta && (
        <div className="bitacora-contenido">
          {seccion.contenido}
        </div>
      )}
    </article>
  );
}

function Bitacora() {
  return (
    <section className="bitacora-devopoly layout-devopoly">
      <header className="bitacora-encabezado text-center">
        <div className="bitacora-logo">
          <img src="/img/logo.png" alt="Devopoly" />
        </div>
        <p className="portada-sello mb-2">EXPEDIENTE DEVOPOLY</p>
        <h1 className="titulo-neon font-oswald text-uppercase m-0">
          Bitácora de desarrollo
        </h1>
        <p className="bitacora-subtitulo">
          Registro de decisiones, procesos y aprendizajes del equipo.
        </p>
      </header>

      <div className="bitacora-lista">
        {seccionesIniciales.map((seccion) => (
          <EntradaBitacora key={seccion.titulo} seccion={seccion} />
        ))}
      </div>
    </section>
  );
}

export default Bitacora;
