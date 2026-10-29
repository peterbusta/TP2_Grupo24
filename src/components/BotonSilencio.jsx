import { useSilencio } from "../context/SilencioContext.jsx";

// Mismo botón que tenía la portada, ahora disponible en todas las secciones (se monta una vez en App.jsx)
function BotonSilencio() {
  const { silenciado, alternar } = useSilencio();
  const etiqueta = silenciado ? "Activar sonido" : "Silenciar sonido";

  return (
    <button
      type="button"
      className="btn btn-dark position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center shadow border-secondary"
      style={{ width: "45px", height: "45px", zIndex: 1050, backgroundColor: "rgba(11, 17, 24, 0.8)", backdropFilter: "blur(5px)" }}
      onClick={alternar}
      aria-pressed={silenciado}
      aria-label={etiqueta}
      title={etiqueta}
    >
      <span style={{ fontSize: "1.2rem" }} aria-hidden="true">{silenciado ? "🔇" : "🔊"}</span>
    </button>
  );
}

export default BotonSilencio;
