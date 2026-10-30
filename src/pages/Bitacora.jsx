import { useState } from "react";
import "./Bitacora.css";

const seccionesIniciales = [
  { titulo: "Planificación y concepto", icono: "/img/dados.png", color: "#c0392b" },
  { titulo: "Organización del equipo", icono: "/img/ferrocarril.png", color: "#3498db" },
  { titulo: "Lógica de desarrollo", icono: "/img/arca.png", color: "#8e44ad" },
  { titulo: "Diseño responsive", icono: "/img/agua.png", color: "#27ae60" },
  { titulo: "Navegación y enlaces", icono: "/img/salida.png", color: "#2c3e50" },
  { titulo: "Uso de IA", icono: "/img/electricidad.png", color: "#f1c40f" },
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
          <p className="bitacora-vacia">
            Esta sección todavía no tiene registros.
          </p>
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
