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

  return (
    <li className="arbol-nodo">
      <div className="arbol-nodo-contenido" style={{ "--nivel": nivel }}>
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
    <section className="arbol-componentes layout-devopoly">
      <header className="arbol-encabezado text-center">
        <p className="portada-sello mb-2">ARQUITECTURA DEVOPOLY</p>
        <h1 className="titulo-neon font-oswald text-uppercase m-0">
          Árbol de componentes
        </h1>
        <p className="text-secondary mt-3 mb-0">
          La jerarquía muestra cómo se compone la aplicación y qué componentes
          participan en cada sección.
        </p>
      </header>

      <div className="arbol-panel" aria-label="Árbol de componentes de Devopoly">
        <ul className="arbol-lista arbol-raiz">
          <NodoArbol nodo={arbol} />
        </ul>
      </div>
    </section>
  );
}

export default ArbolComponentes;
