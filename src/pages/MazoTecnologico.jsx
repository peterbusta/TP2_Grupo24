import { useEffect, useMemo, useState } from "react";
import CartaRecurso from "../components/CartaRecurso.jsx";
import "./MazoTecnologico.css";

// Quita mayúsculas y tildes para que "diseno" encuentre "Diseño"
const limpiar = (texto) =>
  String(texto).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const ORDENES = {
  tablero: "Orden del tablero",
  precioAsc: "Precio: de menor a mayor",
  precioDesc: "Precio: de mayor a menor",
  nombre: "Nombre: de la A a la Z",
};

function ordenar(lista, criterio) {
  const copia = [...lista];
  if (criterio === "precioAsc") return copia.sort((a, b) => a.precio - b.precio);
  if (criterio === "precioDesc") return copia.sort((a, b) => b.precio - a.precio);
  if (criterio === "nombre") return copia.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  return copia; // el JSON ya viene en el orden del tablero
}

function MazoTecnologico() {
  const [recursos, setRecursos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [grupoActivo, setGrupoActivo] = useState("Todos");
  const [orden, setOrden] = useState("tablero");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function cargarRecursos() {
      try {
        setCargando(true);
        setError("");
        // Esta ruta apunta a public/data/recursos.json
        const respuesta = await fetch("/data/recursos.json", { signal: controller.signal });
        if (!respuesta.ok) throw new Error("No se pudo cargar el mazo.");

        const datos = await respuesta.json();
        if (!Array.isArray(datos)) throw new Error("El archivo no tiene un formato válido.");

        setRecursos(datos);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Ocurrió un error al cargar las cartas.");
        }
      } finally {
        if (!controller.signal.aborted) setCargando(false);
      }
    }
    cargarRecursos();
    return () => controller.abort();
  }, [intento]);

  // Grupos de color, en el orden en que aparecen en el JSON
  const grupos = useMemo(() => {
    const mapa = new Map();
    recursos.forEach((r) => {
      if (!mapa.has(r.grupo)) mapa.set(r.grupo, { grupo: r.grupo, categoria: r.categoria, color: r.color });
    });
    return [...mapa.values()];
  }, [recursos]);

  // Cartas que coinciden con el texto buscado (antes de aplicar el color)
  const porTexto = useMemo(() => {
    const texto = limpiar(busqueda.trim());
    if (!texto) return recursos;
    return recursos.filter((r) => {
      const contenido = limpiar(
        [r.nombre, r.grupo, r.categoria, r.subtitulo, r.descripcion, r.uso, r.cierre, ...r.valores].join(" ")
      );
      return contenido.includes(texto);
    });
  }, [recursos, busqueda]);

  const conteoPorGrupo = useMemo(() => {
    const conteo = {};
    porTexto.forEach((r) => {
      conteo[r.grupo] = (conteo[r.grupo] || 0) + 1;
    });
    return conteo;
  }, [porTexto]);

  const visibles = useMemo(() => {
    const filtradas = grupoActivo === "Todos" ? porTexto : porTexto.filter((r) => r.grupo === grupoActivo);
    return ordenar(filtradas, orden);
  }, [porTexto, grupoActivo, orden]);

  const hayFiltros = busqueda !== "" || grupoActivo !== "Todos" || orden !== "tablero";

  const restablecer = () => {
    setBusqueda("");
    setGrupoActivo("Todos");
    setOrden("tablero");
  };

  if (cargando) {
    return (
      <div className="layout-devopoly w-100 d-flex justify-content-center align-items-center">
        <section className="mazo-estado" aria-live="polite">
          <span className="mazo-dado" aria-hidden="true">⚄</span>
          <h2>Barajando el mazo...</h2>
          <p>El banco está organizando las cartas.</p>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="layout-devopoly w-100 d-flex justify-content-center align-items-center">
        <section className="mazo-estado mazo-error" role="alert">
          <h2>¡Vaya a la cárcel!</h2>
          <p>{error}</p>
          <button type="button" onClick={() => setIntento((n) => n + 1)}>Volver a intentar</button>
        </section>
      </div>
    );
  }

  return (
    <div className="layout-devopoly w-100 h-100 overflow-auto">
      <section className="mazo-tecnologico">
        <header className="mazo-encabezado">
          <div className="mazo-pila" aria-hidden="true">
            <span />
            <span />
            <span>
              <img src="/img/logo.png" alt="" />
            </span>
          </div>
          <div className="mazo-encabezado-texto">
            <p className="mazo-sello text-uppercase">ARCA COMUNAL · ARCHIVO DEL EQUIPO</p>
            {/* Mismas clases que el título de la portada (Tablero.jsx) */}
            <h1 className="titulo-neon font-oswald text-uppercase m-0">Mazo Tecnológico</h1>
            <p className="mazo-bajada text-secondary fst-italic">
              Herramientas, ideas y recursos para construir DEVOPOLY. Cada color es un grupo del tablero:
              elegí uno para filtrar, o girá una carta para ver su dorso.
            </p>
          </div>
        </header>

        <div className="mazo-filtros">
          <label className="mazo-buscador">
            <span>Buscar cartas</span>
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="React, diseño, API..."
            />
          </label>
          <label className="mazo-selector">
            <span>Ordenar por</span>
            <select value={orden} onChange={(e) => setOrden(e.target.value)}>
              {Object.entries(ORDENES).map(([clave, etiqueta]) => (
                <option key={clave} value={clave}>{etiqueta}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mazo-grupos" role="group" aria-label="Filtrar por color de grupo">
          <button
            type="button"
            className={`mazo-chip ${grupoActivo === "Todos" ? "activo" : ""}`}
            aria-pressed={grupoActivo === "Todos"}
            onClick={() => setGrupoActivo("Todos")}
          >
            Todas <small>{porTexto.length}</small>
          </button>
          {grupos.map((g) => (
            <button
              key={g.grupo}
              type="button"
              className={`mazo-chip ${grupoActivo === g.grupo ? "activo" : ""}`}
              style={{ "--chip-color": g.color }}
              aria-pressed={grupoActivo === g.grupo}
              aria-label={`Grupo ${g.grupo}, ${g.categoria}, ${conteoPorGrupo[g.grupo] || 0} cartas`}
              onClick={() => setGrupoActivo(grupoActivo === g.grupo ? "Todos" : g.grupo)}
            >
              <span className="mazo-chip-punto" aria-hidden="true" />
              {g.categoria} <small>{conteoPorGrupo[g.grupo] || 0}</small>
            </button>
          ))}
        </div>

        <div className="mazo-barra">
          <p className="mazo-contador" aria-live="polite">
            {visibles.length} de {recursos.length} cartas
          </p>
          {hayFiltros && (
            <button type="button" className="mazo-restablecer" onClick={restablecer}>
              Restablecer mazo
            </button>
          )}
        </div>

        {visibles.length > 0 ? (
          <div className="mazo-grid">
            {visibles.map((recurso, i) => (
              <CartaRecurso key={recurso.id} recurso={recurso} orden={i} />
            ))}
          </div>
        ) : (
          <div className="mazo-vacio">
            <h2>No encontramos esa carta</h2>
            <p>Probá con otro término o cambiá el color del grupo.</p>
            <button type="button" onClick={restablecer}>Barajar de nuevo</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default MazoTecnologico;
