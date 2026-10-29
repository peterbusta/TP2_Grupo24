import { useState } from "react";
import { reproducir } from "../utils/sonido.js";
import "./CartaRecurso.css";

const NIVELES = [
  { etiqueta: "Renta", casas: 0 },
  { etiqueta: "Renta con 1 casa", casas: 1 },
  { etiqueta: "Renta con 2 casas", casas: 2 },
  { etiqueta: "Renta con 3 casas", casas: 3 },
  { etiqueta: "Renta con 4 casas", casas: 4 },
  { etiqueta: "Renta con 1 hotel", hotel: true },
];

function Casitas({ cantidad }) {
  return Array.from({ length: cantidad }).map((_, i) => (
    <span key={i} className="icono-casa d-inline-block me-1" />
  ));
}

function CartaRecurso({ recurso, orden = 0 }) {
  const [volteada, setVolteada] = useState(false);
  const [revelado, setRevelado] = useState(false);

  const { nombre, grupo, categoria, color, precio, subtitulo, valores, cierre, descripcion, uso } = recurso;

  const girar = (haciaDorso) => {
    reproducir("carta.mp3", 0.3);
    setVolteada(haciaDorso);
  };

  const alternarCosto = () => {
    if (!revelado) reproducir("moneda.mp3", 0.4);
    setRevelado(!revelado);
  };

  return (
    <article
      className={`carta-recurso ${volteada ? "volteada" : ""}`}
      style={{ "--color-tarjeta": color, "--orden": orden }}
      aria-label={`Carta ${nombre}, grupo ${grupo}`}
    >
      <div className="carta-interior">
        <div className="carta-cara carta-frente">
          <span className="carta-grupo">{categoria}</span>
          <button
            type="button"
            className="carta-girar"
            onClick={() => girar(true)}
            aria-label={`Dar vuelta la carta de ${nombre}`}
          >
            <span className="carta-girar-icono" aria-hidden="true">↻</span>
            Girar carta
          </button>

          <div
            className="cabecera-tarjeta cabecera-propiedad d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: color }}
          >
            <span className="titulo-tarjeta text-white font-oswald text-uppercase text-center w-100">{nombre}</span>
            <small className="carta-subtitulo">{subtitulo}</small>
          </div>

          <div className="carta-cuerpo">
            <div className="tabla-deudas">
              {NIVELES.map((nivel, i) => (
                <div className="fila-deuda" key={nivel.etiqueta}>
                  <span className="etiqueta-deuda">
                    {nivel.etiqueta}
                    {nivel.casas ? (
                      <span className="ms-2">
                        <Casitas cantidad={nivel.casas} />
                      </span>
                    ) : null}
                    {nivel.hotel ? <span className="icono-casa icono-hotel d-inline-block ms-2" /> : null}
                  </span>
                  <span className="pago-deuda">
                    <span className="simbolo-moneda">₩</span>
                    {valores[i]}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`btn-accion-especial cierre-deuda mt-auto ${revelado ? "revelado" : ""}`}
              onClick={alternarCosto}
              aria-expanded={revelado}
            >
              <span>{revelado ? cierre : "✦ Revelar el costo real"}</span>
            </button>
          </div>
        </div>

        <div className="carta-cara carta-dorso">
          <span className="carta-grupo">{categoria}</span>
          <button
            type="button"
            className="carta-girar"
            onClick={() => girar(false)}
            aria-label={`Volver al frente de la carta de ${nombre}`}
          >
            <span className="carta-girar-icono" aria-hidden="true">↻</span>
            Ver frente
          </button>

          <div
            className="cabecera-tarjeta cabecera-propiedad d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: color }}
          >
            <span className="titulo-tarjeta text-white font-oswald text-uppercase text-center w-100">{nombre}</span>
            <small className="carta-subtitulo">
              Grupo {grupo}: {categoria}
            </small>
          </div>

          <div className="carta-cuerpo">
            <p className="carta-dato-titulo">Qué es</p>
            <p className="carta-dato">{descripcion}</p>

            <p className="carta-dato-titulo">Para qué sirve en Devopoly</p>
            <p className="carta-dato">{uso}</p>

            <div className="carta-precio">
              <span>Precio de compra</span>
              <strong>
                <span className="simbolo-moneda">₩</span>
                {precio}
              </strong>
            </div>

            <img src="/img/logo.png" alt="" className="carta-sello" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartaRecurso;
