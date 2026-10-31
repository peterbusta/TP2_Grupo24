import { useState } from "react";
import "./Bitacora.css";

const seccionesIniciales = [
  { 
    titulo: "Planificación y concepto", 
    icono: "/img/dados.png", 
    color: "#c0392b",
    contenido: (
      <>
        <p className="bitacora-parrafo">Antes de escribir código, el equipo definió una estructura modular basada en componentes y un documento inicial con la propuesta de diseño.</p>
        <p className="bitacora-parrafo">Se evaluó la temática comparándola con otros proyectos, optando por adoptar el juego de mesa <strong>Monopoly</strong> como eje conceptual. Esto permitió unificar visual y funcionalmente todas las secciones de la aplicación (portada interactiva, perfiles de integrantes, mazo tecnológico y bitácora).</p>
        <p className="bitacora-parrafo">La estrategia de trabajo consistió en estructurar primero el layout global en React, avanzando en paralelo en ramas independientes para evitar bloqueos entre los miembros del equipo.</p>
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
            <p className="bitacora-parrafo">Creación de ramas de trabajo individuales para cada integrante, permitiendo desarrollar perfiles y secciones sin interferir en el código base.</p>
          </div>
        </div>
        <div className="paso-turno">
          <span className="numero-paso numero-celeste">2.</span>
          <div className="detalle-paso">
            <h3>Proceso de Merge</h3>
            <p className="bitacora-parrafo">Consolidación del trabajo colaborativo en la rama principal (`main`). Durante este proceso se debieron reajustar estilos responsive que se habían superpuesto tras integrar los aportes de todos.</p>
          </div>
        </div>
        <div className="paso-turno">
          <span className="numero-paso numero-celeste">3.</span>
          <div className="detalle-paso">
            <h3>Resolución de conflictos</h3>
            <p className="bitacora-parrafo">Depuración conjunta de conflictos en archivos CSS y sincronización de rutas con React Router DOM.</p>
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
          <p className="bitacora-parrafo">Se abandonó la manipulación imperativa del DOM por una arquitectura declarativa basada en componentes funcionales. Se implementó el Hook <code>useState</code> para controlar de forma reactiva la apertura de los acordeones de la bitácora, los estados de los dados, las tiradas de cartas y la gestión de modales.</p>
        </div>
      </div>
    )
  },
  { 
    titulo: "Diseño responsive", 
    icono: "/img/agua.png", 
    color: "#27ae60",
    contenido: (
      <p className="bitacora-parrafo">Para asegurar una correcta experiencia de usuario en distintos dispositivos, se diseñó un sistema flexible basado en CSS Grid y contenedores adaptativos. Fue necesario revisar reiteradamente los <em>breakpoints</em> (especialmente en vistas móviles y tablets) para corregir desbordes visuales en las tarjetas interactivas del tablero y los perfiles.</p>
    )
  },
  { 
    titulo: "Navegación y enlaces", 
    icono: "/img/salida.png", 
    color: "#2c3e50",
    contenido: (
      <>
        <p className="bitacora-parrafo">Se implementó <strong>React Router DOM</strong> para manejar una navegación fluida tipo SPA (Single Page Application) sin recargar la página.</p>
        <p className="bitacora-parrafo">Durante las pruebas de integración se detectaron y corrigieron enlaces rotos en las tarjetas de perfil y pequeños desalineamientos en el menú hamburguesa responsivo, asegurando accesibilidad y coherencia visual en toda la aplicación.</p>
      </>
    )
  },
  { 
    titulo: "Uso de IA", 
    icono: "/img/electricidad.png", 
    color: "#f1c40f",
    contenido: (
      <>
        <p className="bitacora-parrafo">El equipo integró herramientas de IA de última generación como soporte técnico y creativo, validando rigurosamente cada solución. Cabe destacar que <strong>todos los integrantes</strong> utilizaron <strong>Meta IA</strong> para la generación y animación en video de sus respectivos avatares:</p>
        
        <div className="opcion-carta">
          <div className="encabezado-opcion">
            <span className="badge-opcion">A</span>
            <h4>Flavia (GPT-5.6 Luna & Gemini 3.8 Flash / 4 Argon)</h4>
          </div>
          <p className="bitacora-parrafo">Creación de logos y el favicon del proyecto con GPT-5.6 Luna. Optimización de responsividad mediante funciones <code>clamp()</code>, rediseño del formulario "Declaración de Bancarrota" y unificación de vistas asistida por las distintas versiones de Gemini.</p>
        </div>
        
        <div className="opcion-carta">
          <div className="encabezado-opcion">
            <span className="badge-opcion">B</span>
            <h4>Brian (Claude Sonnet 5.5)</h4>
          </div>
          <p className="bitacora-parrafo">Asistencia en la lógica asíncrona para el consumo de la API de banderas (CountriesNow), estructuración de los estados de carga/error en el "Desafío del Banquero" y revisión del estado global de la app.</p>
        </div>

        <div className="opcion-carta">
          <div className="encabezado-opcion">
            <span className="badge-opcion">C</span>
            <h4>Ludmila (GPT-5.6 Luna)</h4>
          </div>
          <p className="bitacora-parrafo">Soporte en la redacción técnica del README, estructuración de los datos base en los archivos JSON locales y organización narrativa del contenido de esta bitácora.</p>
        </div>

        <div className="opcion-carta">
          <div className="encabezado-opcion">
            <span className="badge-opcion">D</span>
            <h4>Pedro (Gemini 4 Argon & Canva)</h4>
          </div>
          <p className="bitacora-parrafo">Generación de la paleta de colores, post-producción gráfica de los avatares 3D generados por el equipo, y soporte técnico de alto nivel para la resolución de bugs de renderizado (rutas de imágenes) en el componente de Perfiles.</p>
        </div>
      </>
    )
  }
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
    <section className="bitacora-devopoly layout-devopoly d-flex flex-column align-items-center pt-4">
      <header className="header-tablero text-center mb-5 w-100">
        <h6 className="text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
          EXPEDIENTE DEVOPOLY
        </h6>
        
        <h1 className="titulo-neon font-oswald text-uppercase text-white m-0 mb-3">
          BITÁCORA DE DESARROLLO
        </h1>
        
        <p className="portada-bajada text-secondary mb-0 mt-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Revisá los archivos confidenciales del proyecto. Un registro detallado de las decisiones arquitectónicas, procesos y aprendizajes que mantuvieron al equipo fuera de la bancarrota durante cada iteración.
        </p>
      </header>

      <div className="bitacora-lista w-100" style={{ maxWidth: '900px' }}>
        {seccionesIniciales.map((seccion) => (
          <EntradaBitacora key={seccion.titulo} seccion={seccion} />
        ))}
      </div>
    </section>
  );
}

export default Bitacora;