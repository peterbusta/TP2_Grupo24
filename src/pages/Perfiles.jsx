import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css';
import { useSilencio } from '../context/SilencioContext.jsx';

const equipo = [
  {
    id: 1,
    nombre: 'FLAVIA BERZUINI',
    rol: 'DESARROLLADORA',
    color: '#9b59b6',
    logo: '/img/sombrero.png',
    avatar: '/img/avatar-flavia.png',
    videoTransformacion: '/img/flavia_transformacion.mp4',
    ubicacion: 'Mendoza, Argentina',
    edad: 43,
    caracteristica: 'Cobra alquiler por cada píxel desalineado.',
    tecnologias: [
      { nivel: 'Renta', nombre: 'HTML / CSS', casitas: 0 },
      { nivel: 'Renta con grupo de color', nombre: 'JavaScript', casitas: 0 },
      { nivel: 'Renta con 1 Casa', nombre: 'Figma / UI Design', casitas: 1 },
      { nivel: 'Renta con 2 Casas', nombre: 'Git / GitHub', casitas: 2 },
      { nivel: 'Renta con 3 Casas', nombre: 'Node.js / Express', casitas: 3 },
      { nivel: 'Renta con 4 Casas', nombre: 'Kotlin / Android', casitas: 4 },
      { nivel: 'Renta con 1 Hotel', nombre: 'AWS Cloud', hotel: true }
    ],
    peliculas: [
      { titulo: 'Avengers: Infinity War', url: 'https://www.youtube.com/embed/6ZfuNTqbHE8?si=Z6W5rU-aFh64V-L3' },
      { titulo: 'Black Panther', url: 'https://www.youtube.com/embed/xjDjIWPwcPU?si=3vK_P8eH7rT2G9nK' },
      { titulo: 'Esperando la carroza', url: 'https://www.youtube.com/embed/DgZQwmjdcp8' }
    ],
    discos: [
      { album: 'Libertinaje', cancion: 'Vuelos - Bersuit', pista: '/audio/vuelos.mp3' },
      { album: 'Fuerza Natural', cancion: 'Cactus - Cerati', pista: '/audio/cactus.mp3' },
      { album: 'Oktubre', cancion: 'Jijiji - Los Redondos', pista: '/audio/redondos.mp3' }
    ]
  },
  {
    id: 2,
    nombre: 'BRIAN SABIO',
    rol: 'DESARROLLADOR',
    color: '#1e3799',
    logo: '/img/perro.png',
    avatar: '/img/avatar-brian.png',
    ubicacion: 'La Plata, Argentina',
    edad: 28,
    caracteristica: 'Si saca un doble, refactoriza todo el tablero.',
    tecnologias: [
      { nivel: 'Renta', nombre: 'React', casitas: 0 },
      { nivel: 'Renta con grupo de color', nombre: 'Vite', casitas: 0 },
      { nivel: 'Renta con 1 Casa', nombre: 'Bootstrap', casitas: 1 },
      { nivel: 'Renta con 2 Casas', nombre: 'CSS Avanzado', casitas: 2 },
      { nivel: 'Renta con 3 Casas', nombre: 'REST APIs', casitas: 3 },
      { nivel: 'Renta con 4 Casas', nombre: 'MongoDB', casitas: 4 },
      { nivel: 'Renta con 1 Hotel', nombre: 'Docker', hotel: true }
    ]
  },
  {
    id: 3,
    nombre: 'LUDMILA QUIROZ',
    rol: 'DESARROLLADORA',
    color: '#2ecc71',
    logo: '/img/dedal.png',
    avatar: '/img/avatar-ludmila.png',
    ubicacion: 'CABA, Argentina',
    edad: 25,
    caracteristica: 'Dueña del backend y de los ferrocarriles.',
    tecnologias: [
      { nivel: 'Renta', nombre: 'Python', casitas: 0 },
      { nivel: 'Renta con grupo de color', nombre: 'Django', casitas: 0 },
      { nivel: 'Renta con 1 Casa', nombre: 'SQL', casitas: 1 },
      { nivel: 'Renta con 2 Casas', nombre: 'PostgreSQL', casitas: 2 },
      { nivel: 'Renta con 3 Casas', nombre: 'Linux', casitas: 3 },
      { nivel: 'Renta con 4 Casas', nombre: 'Bash', casitas: 4 },
      { nivel: 'Renta con 1 Hotel', nombre: 'AWS EC2', hotel: true }
    ]
  },
  {
    id: 4,
    nombre: 'PEDRO BUSTAMANTE',
    rol: 'DESARROLLADOR',
    color: '#f39c12',
    logo: '/img/auto.png',
    avatar: '/img/avatar-pedro.png',
    ubicacion: 'La Plata, Argentina',
    edad: 35,
    caracteristica: 'Mantiene el monopolio de los componentes Java.',
    tecnologias: [
      { nivel: 'Renta', nombre: 'Java', casitas: 0 },
      { nivel: 'Renta con grupo de color', nombre: 'Spring Boot', casitas: 0 },
      { nivel: 'Renta con 1 Casa', nombre: 'Angular', casitas: 1 },
      { nivel: 'Renta con 2 Casas', nombre: 'TypeScript', casitas: 2 },
      { nivel: 'Renta con 3 Casas', nombre: 'RxJS', casitas: 3 },
      { nivel: 'Renta con 4 Casas', nombre: 'Jira', casitas: 4 },
      { nivel: 'Renta con 1 Hotel', nombre: 'Scrum', hotel: true }
    ]
  }
];

function Perfiles() {
  const location = useLocation();
  const { silenciado } = useSilencio();
  
  const [jugadorActivo, setJugadorActivo] = useState(() => {
    if (location.state && location.state.jugador) {
      return equipo.find(j => j.nombre.includes(location.state.jugador.toUpperCase())) || null;
    }
    return null;
  });

  const [suerteIndex, setSuerteIndex] = useState(-1);
  const [arcaIndex, setArcaIndex] = useState(-1);
  const [reaccionesSuerte, setReaccionesSuerte] = useState([]);
  const [reaccionesArca, setReaccionesArca] = useState([]);

  useEffect(() => {
    if (location.state && location.state.jugador) {
      
      const jugadorEncontrado = equipo.find(j => j.nombre.includes(location.state.jugador.toUpperCase()));
      
      if (jugadorEncontrado) {
        setJugadorActivo(jugadorEncontrado);
      }
      
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const currentIndex = jugadorActivo ? equipo.findIndex(j => j.id === jugadorActivo.id) : -1;
  const prevJugador = currentIndex >= 0 ? equipo[(currentIndex - 1 + equipo.length) % equipo.length] : null;
  const nextJugador = currentIndex >= 0 ? equipo[(currentIndex + 1) % equipo.length] : null;

  const cerrarPanel = () => {
    setJugadorActivo(null);
    setSuerteIndex(-1);
    setArcaIndex(-1);
    setReaccionesSuerte([]);
    setReaccionesArca([]);
  };

  const cambiarJugador = (nuevoJugador) => {
    setJugadorActivo(nuevoJugador);
    setSuerteIndex(-1);
    setArcaIndex(-1);
    setReaccionesSuerte([]);
    setReaccionesArca([]);
  };

  const sacarSuerte = () => {
    if (!jugadorActivo) return;
    setReaccionesSuerte([]); 
    if (suerteIndex >= jugadorActivo.discos.length - 1) {
      setSuerteIndex(-1);
    } else {
      setSuerteIndex(prev => prev + 1);
    }
  };

  const sacarArca = () => {
    if (!jugadorActivo) return;
    setReaccionesArca([]); 
    if (arcaIndex >= jugadorActivo.peliculas.length - 1) {
      setArcaIndex(-1);
    } else {
      setArcaIndex(prev => prev + 1);
    }
  };

  const dispararReaccion = (tipoMazo, emoji) => {
    const cantidad = Math.floor(Math.random() * 3) + 3; 
    const nuevasReacciones = Array.from({ length: cantidad }).map(() => ({
      id: Date.now() + Math.random(),
      emoji,
      x: Math.random() * 80 - 40,
      escala: Math.random() * 0.8 + 1.2, 
      retraso: Math.random() * 0.2 
    }));
    
    if (tipoMazo === 'suerte') {
      setReaccionesSuerte(prev => [...prev, ...nuevasReacciones]);
    } else {
      setReaccionesArca(prev => [...prev, ...nuevasReacciones]);
    }

    setTimeout(() => {
      if (tipoMazo === 'suerte') {
        setReaccionesSuerte(prev => prev.filter(r => !nuevasReacciones.some(nr => nr.id === r.id)));
      } else {
        setReaccionesArca(prev => prev.filter(r => !nuevasReacciones.some(nr => nr.id === r.id)));
      }
    }, 1500);
  };

  const renderizarCasitas = (tech) => {
    if (tech.hotel) return <div className="icono-casa icono-hotel"></div>;
    let casitas = [];
    for (let i = 0; i < tech.casitas; i++) {
      casitas.push(<div key={i} className="icono-casa"></div>);
    }
    return casitas;
  };

  return (
    <div className="container-fluid pt-3 pb-5 relative">
      <div className="text-center mb-5">
        <h2 className="text-warning font-oswald text-uppercase fs-1">Mesa de Jugadores</h2>
        <p className="text-secondary">Elegí una carta para revelar a su desarrollador</p>
      </div>
      
      {/* 1. SOLO mostramos las 4 cartas si NO hay nadie seleccionado */}
      {!jugadorActivo && (
        <div className="mesa-cartas mt-4">
          {equipo.map(jugador => (
            <div key={jugador.id} className="carta-contenedor" style={{ '--color-jugador': jugador.color }} onClick={() => cambiarJugador(jugador)}>
              <img src={jugador.avatar} alt="Avatar" className="avatar-escondido" />
              <div className="carta-esparcida">
                <div className="w-100 p-2 mb-3" style={{ backgroundColor: jugador.color }}>
                  <small className="d-block text-white fw-bold text-uppercase" style={{ fontSize: '0.65rem' }}>TÍTULO DE {jugador.rol}</small>
                </div>
                <img src={jugador.logo} alt="Ficha" style={{ width: '80px', filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.5))' }} />
                <h3 className="text-white mt-4 fs-5 px-2 font-oswald">{jugador.nombre}</h3>
                <p className="small mt-3 px-3 fst-italic" style={{ color: '#aeb5be', lineHeight: '1.2' }}>
                  "{jugador.caracteristica}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {jugadorActivo && (
        <div className="vista-cinematica">
          
          {/* Flecha izquierda */}
          <button className="btn-carrusel prev" onClick={() => cambiarJugador(prevJugador)} style={{ '--color-jugador': jugadorActivo.color }}>
            <span className="flecha fs-4 fw-bold">❮</span>
            <span className="nombre-nav">{prevJugador.nombre}</span>
          </button>

          <div className="panel-panoramico" style={{ '--color-jugador': jugadorActivo.color }}>
            
            <div className="columna-video">
              {jugadorActivo.id === 1 ? (
                jugadorActivo.videoTransformacion ? (
                  <video className="video-vertical" autoPlay playsInline>
                    <source src={jugadorActivo.videoTransformacion} type="video/mp4" />
                  </video>
                ) : (
                  <img src={jugadorActivo.avatar} alt="Avatar" className="video-vertical bg-dark" />
                )
              ) : (
                <div className="video-vertical bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '220px', border: `2px dashed ${jugadorActivo.color}` }}>
                   <small className="text-secondary">Avatar</small>
                </div>
              )}
              
              <h2 className="text-white font-oswald text-center mt-2">{jugadorActivo.nombre}</h2>
              <p className="fw-bold m-0" style={{ color: jugadorActivo.color }}>{jugadorActivo.ubicacion}</p>
              <small className="text-secondary">{jugadorActivo.edad} años</small>
            </div>

            <div className="columna-datos">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-2">
                <h4 className="text-white m-0 font-oswald">HABILIDADES TÉCNICAS</h4>
                <button className="btn-cerrar-panel" onClick={cerrarPanel}>X CERRAR</button>
              </div>

              <div className="flex-grow-1 overflow-auto pe-2">
                {jugadorActivo.tecnologias.map((tech, index) => (
                  <div key={index} className="habilidad-item">
                    <div className="habilidad-nivel">
                      <span>{tech.nivel}</span>
                      <div className="d-flex gap-1">{renderizarCasitas(tech)}</div>
                    </div>
                    <strong className="text-white">₩ {tech.nombre}</strong>
                  </div>
                ))}
              </div>

              {jugadorActivo.id === 1 && (
                <div className="seccion-gustos">
                  <div className="titulo-gustos">
                    <h4 className="text-white font-oswald m-0">DISCOS Y PELÍCULAS</h4>
                  </div>
                  
                  <div className="contenedor-mazos">
                    
                    <div className="mazo-slot">
                      <div className="mazo-estatico suerte" onClick={sacarSuerte}>
                        <img src="/img/suerte.png" alt="Mazo Suerte" />
                      </div>
                      <span className="texto-instruccion">👆 Toca para robar</span>
                      
                      {suerteIndex >= 0 && (
                        <div key={`suerte-${suerteIndex}`} className={`carta-revelada suerte-revelada anim-${suerteIndex}`}>
                          <div className="w-100">
                            <small className="titulo-carta text-uppercase">DISCO</small>
                            <p className="nombre-obra">{jugadorActivo.discos[suerteIndex].album}</p>
                            <span className="subtitulo-obra">{jugadorActivo.discos[suerteIndex].cancion}</span>
                          </div>
                          
                          <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: '95px' }}>
                            <audio 
                              controls 
                              muted={silenciado} 
                              controlsList="nodownload noplaybackrate" 
                              className="w-100" 
                              style={{ height: '40px', outline: 'none' }}
                              src={jugadorActivo.discos[suerteIndex].pista}
                            ></audio>
                          </div>

                          <div className="d-flex justify-content-center gap-4 mt-2 position-relative w-100 border-top pt-2">
                            <button className="btn p-0 border-0 fs-5" onClick={() => dispararReaccion('suerte', '👍')}>👍</button>
                            <button className="btn p-0 border-0 fs-5" onClick={() => dispararReaccion('suerte', '👎')}>👎</button>
                            
                            {reaccionesSuerte.map(r => (
                              <span 
                                key={r.id} 
                                className="reaccion-emoji" 
                                style={{ 
                                  '--desplazamiento-x': `${r.x}px`,
                                  '--escala': r.escala,
                                  '--retraso': `${r.retraso}s`
                                }}
                              >{r.emoji}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mazo-slot">
                      <div className="mazo-estatico arca" onClick={sacarArca}>
                        <img src="/img/arca.png" alt="Mazo Arca Comunal" />
                      </div>
                      <span className="texto-instruccion">👆 Toca para robar</span>

                      {arcaIndex >= 0 && (
                        <div key={`arca-${arcaIndex}`} className={`carta-revelada arca-revelada anim-${arcaIndex}`}>
                          <div className="w-100">
                            <small className="titulo-carta text-uppercase">PELÍCULA</small>
                            <p className="nombre-obra">{jugadorActivo.peliculas[arcaIndex].titulo}</p>
                            <span className="subtitulo-obra">Trailer Oficial</span>
                          </div>
                          
                          <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: '95px' }}>
                            <iframe 
                              width="100%" 
                              height="100%" 
                              src={jugadorActivo.peliculas[arcaIndex].url} 
                              title="YouTube Trailer" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                              style={{ borderRadius: '6px', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)' }}
                            ></iframe>
                          </div>

                          <div className="d-flex justify-content-center gap-4 mt-2 position-relative w-100 border-top pt-2">
                            <button className="btn p-0 border-0 fs-5" onClick={() => dispararReaccion('arca', '👍')}>👍</button>
                            <button className="btn p-0 border-0 fs-5" onClick={() => dispararReaccion('arca', '👎')}>👎</button>
                            
                            {reaccionesArca.map(r => (
                              <span 
                                key={r.id} 
                                className="reaccion-emoji" 
                                style={{ 
                                  '--desplazamiento-x': `${r.x}px`,
                                  '--escala': r.escala,
                                  '--retraso': `${r.retraso}s`
                                }}
                              >{r.emoji}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Flecha derecha */}
          <button className="btn-carrusel next" onClick={() => cambiarJugador(nextJugador)} style={{ '--color-jugador': jugadorActivo.color }}>
            <span className="nombre-nav">{nextJugador.nombre}</span>
            <span className="flecha fs-4 fw-bold">❯</span>
          </button>

        </div>
      )}
    </div>
  );
}

export default Perfiles;