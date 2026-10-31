import { useState } from "react";
import "./ArbolComponentes.css";

const arbol = {
  nombre: "main.jsx",
  descripcion: "Punto de entrada de la aplicación",
  hijos: [
    {
      nombre: "React.StrictMode",
      descripcion: "Detecta problemas potenciales durante el desarrollo",
      hijos: [
        {
          nombre: "BrowserRouter",
          descripcion: "Gestiona la navegación entre rutas",
          hijos: [
            {
              nombre: "SilencioProvider",
              descripcion: "Comparte la preferencia de sonido",
              hijos: [
                {
                  nombre: "App",
                  descripcion: "Layout principal y definición de rutas",
                  hijos: [
                    {
                      nombre: "Sidebar",
                      descripcion: "Identidad, navegación y perfiles del equipo",
                    },
                    {
                      nombre: "BotonSilencio",
                      descripcion: "Control global de sonido",
                    },
                    {
                      nombre: "Container",
                      descripcion: "Contenedor visual compartido de las rutas",
                      hijos: [
                        {
                          nombre: "Routes",
                          descripcion: "Contenido de cada sección",
                          hijos: [
                            { nombre: "Tablero", descripcion: "Portada y tablero interactivo" },
                            { nombre: "Perfiles", descripcion: "Perfiles de los integrantes" },
                            {
                              nombre: "MazoTecnologico",
                              descripcion: "Datos locales, búsqueda y filtros",
                              hijos: [{ nombre: "CartaRecurso", descripcion: "Tarjeta reutilizable del mazo" }],
                            },
                            {
                              nombre: "DesafioBanquero",
                              descripcion: "Consumo de API pública y desafío de banderas",
                            },
                            { nombre: "Contacto", descripcion: "Formulario de contacto" },
                            {
                              nombre: "ArbolComponentes",
                              descripcion: "Esta sección",
                            },
                            { nombre: "Bitacora", descripcion: "Registro del proceso del equipo" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function NodoArbol({ nodo, nivel = 0 }) {
  const [abierto, setAbierto] = useState(true);
  const tieneHijos = nodo.hijos?.length > 0;

  const coloresPropiedades = [
    "#f39c12", "#3498db", "#da70d6", "#f1c40f", 
    "#e74c3c", "#2ecc71", "#00a8ff", "#9b59b6"
  ];
  const colorNodo = coloresPropiedades[nivel % coloresPropiedades.length];

  return (
    <li className="arbol-nodo" style={{ "--nodo-color": colorNodo }}>
      <div className="arbol-nodo-contenido">
        {tieneHijos ? (
          <button
            type="button"
            className="arbol-toggle"
            onClick={() => setAbierto((valor) => !valor)}
            aria-expanded={abierto}
            aria-label={`${abierto ? "Contraer" : "Expandir"} ${nodo.nombre}`}
          >
            {abierto ? "−" : "+"}
          </button>
        ) : (
          <span className="arbol-hoja" aria-hidden="true">•</span>
        )}
        <div>
          <strong>{nodo.nombre}</strong>
          <span>{nodo.descripcion}</span>
        </div>
      </div>

      {tieneHijos && abierto && (
        <ul className="arbol-lista">
          {nodo.hijos.map((hijo) => (
            <NodoArbol key={hijo.nombre} nodo={hijo} nivel={nivel + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

function ArbolComponentes() {
  return (
    <section className="arbol-componentes layout-devopoly d-flex flex-column align-items-center pt-4">
      <header className="header-tablero text-center mb-5 w-100">
        <h6 className="text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
          ARQUITECTURA DEVOPOLY
        </h6>
        
        <h1 className="titulo-neon font-oswald text-uppercase text-white m-0 mb-3">
          ÁRBOL DE COMPONENTES
        </h1>
        
        <p className="portada-bajada text-secondary mb-0 mt-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Consultá los planos de construcción de la ciudad. Esta jerarquía visual revela cómo se estructuran las propiedades, los servicios y la lógica detrás de cada movimiento en nuestro tablero de React.
        </p>
      </header>

      <div className="arbol-panel w-100" aria-label="Árbol de componentes de Devopoly" style={{ maxWidth: '900px' }}>
        <ul className="arbol-lista arbol-raiz">
          <NodoArbol nodo={arbol} />
        </ul>
      </div>
    </section>
  );
}

export default ArbolComponentes;
