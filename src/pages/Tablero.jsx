import '../styles.css';

function Tablero() {
  const casillas = [
    // Fila superior
    { id: 0, nombre: 'SALIDA', tipo: 'esquina', img: '/img/salida.png', row: 1, col: 1 },
    { id: 1, nombre: 'HTML5', tipo: 'propiedad', color: '#8b4513', row: 1, col: 2 },
    { id: 2, nombre: 'CSS3', tipo: 'propiedad', color: '#8b4513', row: 1, col: 3 },
    { id: 3, nombre: 'GIT', tipo: 'ferrocarril', img: '/img/ferrocarril.png', row: 1, col: 4 },
    { id: 4, nombre: 'GITHUB', tipo: 'propiedad', color: '#87ceeb', row: 1, col: 5 },
    { id: 5, nombre: 'VISITA', tipo: 'esquina', img: '/img/visitacarcel.png', row: 1, col: 6 },
    
    // Columna derecha
    { id: 6, nombre: 'NODE.JS', tipo: 'propiedad', color: '#da70d6', row: 2, col: 6 },
    { id: 7, nombre: 'EXPRESS', tipo: 'propiedad', color: '#da70d6', row: 3, col: 6 },
    { id: 8, nombre: 'ENERGÍA', tipo: 'servicio', img: '/img/electricidad.png', row: 4, col: 6 },
    { id: 9, nombre: 'AWS', tipo: 'propiedad', color: '#ffa500', row: 5, col: 6 },
    { id: 10, nombre: 'PARADA LIBRE', tipo: 'esquina', img: '/img/parada.png', row: 6, col: 6 },
    
    // Fila inferior
    { id: 11, nombre: 'JAVASCRIPT', tipo: 'propiedad', color: '#ff4500', row: 6, col: 5 },
    { id: 12, nombre: 'REACT', tipo: 'propiedad', color: '#ff4500', row: 6, col: 4 },
    { id: 13, nombre: 'AGUA', tipo: 'servicio', img: '/img/agua.png', row: 6, col: 3 },
    { id: 14, nombre: 'SQL', tipo: 'propiedad', color: '#ffd700', row: 6, col: 2 },
    { id: 15, nombre: 'A LA CÁRCEL', tipo: 'esquina', img: '/img/policia.png', row: 6, col: 1 },
    
    // Columna izquierda
    { id: 16, nombre: 'KOTLIN', tipo: 'propiedad', color: '#32cd32', row: 5, col: 1 },
    { id: 17, nombre: 'FIGMA', tipo: 'propiedad', color: '#32cd32', row: 4, col: 1 },
    { id: 18, nombre: 'IMPUESTO', tipo: 'impuesto', img: '/img/impuestos.png', row: 3, col: 1 },
    { id: 19, nombre: 'ANDROID', tipo: 'propiedad', color: '#0000cd', row: 2, col: 1 },
  ];

  return (
    <div className="tablero-wrapper">
      <div className="contenedor-isometrico">
        <div className="tablero-grid">
          
          {/* Centro del tablero */}
          <div className="centro-tablero">
            <img src="/img/logo.png" alt="Devopoly" className="logo-devopoly-img" />
            
            <div className="zona-controles mt-4 d-flex flex-column align-items-center">
              <img src="/img/dados.png" alt="Dados" className="dados-img mb-3" />
              <button className="btn-tirar-dados font-oswald text-uppercase shadow">
                Tirar Dados
              </button>
            </div>
          </div>

          {/* Perímetro */}
          {casillas.map((casilla) => (
            <div 
              key={casilla.id} 
              className={`casilla-3d ${casilla.tipo}`}
              style={{ gridColumn: casilla.col, gridRow: casilla.row }}
            >
              {casilla.tipo === 'propiedad' && (
                <div className="franja-color" style={{ backgroundColor: casilla.color }}></div>
              )}
              
              <div className="contenido-casilla d-flex flex-column justify-content-center align-items-center">
                {/* Casilla con imagen, la renderizamos */}
                {casilla.img && <img src={casilla.img} alt={casilla.nombre} className="icono-casilla mb-1" />}
                
                <span className="fw-bold nombre-casilla text-center">{casilla.nombre}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Tablero;