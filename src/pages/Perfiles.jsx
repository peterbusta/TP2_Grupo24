import { useState } from 'react';
import '../styles.css';

function Perfiles() {
  const [jugadorActivo, setJugadorActivo] = useState(null);
  const [suerteIndex, setSuerteIndex] = useState(-1);
  const [arcaIndex, setArcaIndex] = useState(-1);

  const cerrarPanel = () => {
    setJugadorActivo(null);
    setSuerteIndex(-1);
    setArcaIndex(-1);
  };

  const sacarSuerte = () => {
    if (!jugadorActivo) return;
    if (suerteIndex >= jugadorActivo.discos.length - 1) {
      setSuerteIndex(-1);
    } else {
      setSuerteIndex(prev => prev + 1);
    }
  };

  const sacarArca = () => {
    if (!jugadorActivo) return;
    if (arcaIndex >= jugadorActivo.peliculas.length - 1) {
      setArcaIndex(-1);
    } else {
      setArcaIndex(prev => prev + 1);
    }
  };

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
      peliculas: ['Avengers: Infinity War', 'Black Panther', 'El secreto de sus ojos'],
      discos: [
        { titulo: 'Vuelos - Bersuit', url: 'https://www.youtube.com/embed/wLGz5ye45sI?si=_tBQaZeBYib5WjjF' },
        { titulo: 'Cactus - Cerati', url: 'https://www.youtube.com/embed/QrU8QbORHQY?si=wjo9ERHD2EiFIhMj' },
        { titulo: 'Los Redondos', url: 'https://www.youtube.com/embed/CnJqYsSOgfg?si=iE1J9XOsT95CCfIQ' }
      ]
    },
    {
      id: 2,
      nombre: 'BRIAN SABIO',
      rol: 'DESARROLLADOR',
      color: '#1e3799',
      logo: '/img/perro.png',
      avatar: '/img/avatar-brian.png',
      videoTransformacion: '', 
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
      ],
      peliculas: ['Matrix', 'Inception', 'Hackers'],
      discos: [
        { titulo: 'Discovery - Daft Punk', url: 'https://www.youtube.com/embed/A2VpR8HahRc' },
        { titulo: 'Ok Computer - Radiohead', url: 'https://www.youtube.com/embed/n5h0qHwNpCE' },
        { titulo: 'The Dark Side of the Moon', url: 'https://www.youtube.com/embed/hsr4PmeE9GQ' }
      ]
    },
    {
      id: 3,
      nombre: 'LUDMILA QUIROZ',
      rol: 'DESARROLLADORA',
      color: '#2ecc71',
      logo: '/img/dedal.png',
      avatar: '/img/avatar-ludmila.png',
      videoTransformacion: '',
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
      ],
      peliculas: ['El Señor de los Anillos', 'Interestelar', 'Volver al Futuro'],
      discos: [
        { titulo: 'Clics Modernos - Charly García', url: 'https://www.youtube.com/embed/u_Fv0E2T-2k' },
        { titulo: 'Artaud - Pescado Rabioso', url: 'https://www.youtube.com/embed/sL2xIDiQzH0' },
        { titulo: 'Fuerza Natural - Cerati', url: 'https://www.youtube.com/embed/G6g0Y6l3p0c' }
      ]
    },
    {
      id: 4,
      nombre: 'PEDRO BUSTAMANTE',
      rol: 'DESARROLLADOR',
      color: '#f39c12',
      logo: '/img/auto.png',
      avatar: '/img/avatar-pedro.png',
      videoTransformacion: '',
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
      ],
      peliculas: ['Jurassic Park', 'Gladiador', 'Terminator 2'],
      discos: [
        { titulo: 'Abbey Road - The Beatles', url: 'https://www.youtube.com/embed/UelDrZ1aFeY' },
        { titulo: 'Thriller - Michael Jackson', url: 'https://www.youtube.com/embed/sOnqjkJTMaA' },
        { titulo: 'A Night at the Opera - Queen', url: 'https://www.youtube.com/embed/fJ9rUzIMcZQ' }
      ]
    }
  ];

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
      
      {/* VISTA 1: MESA DE CARTAS */}
      <div className="mesa-cartas mt-4">
        {equipo.map(jugador => (
          <div key={jugador.id} className="carta-contenedor" style={{ '--color-jugador': jugador.color }} onClick={() => setJugadorActivo(jugador)}>
            {/* El avatar que asoma */}
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

      {/* VISTA 2: PANEL PANORÁMICO */}
      {jugadorActivo && (
        <div className="vista-cinematica">
          <div className="panel-panoramico" style={{ '--color-jugador': jugadorActivo.color }}>
            
            {/* COLUMNA IZQUIERDA: Identidad visual */}
            <div className="columna-video">
              {jugadorActivo.videoTransformacion ? (
                <video className="video-vertical" autoPlay playsInline>
                  <source src={jugadorActivo.videoTransformacion} type="video/mp4" />
                </video>
              ) : (
                <img src={jugadorActivo.avatar} alt="Avatar" className="video-vertical bg-dark" />
              )}
              
              <h2 className="text-white font-oswald text-center mt-2">{jugadorActivo.nombre}</h2>
              <p className="fw-bold m-0" style={{ color: jugadorActivo.color }}>{jugadorActivo.ubicacion}</p>
              <small className="text-secondary">{jugadorActivo.edad} años</small>
            </div>

            {/* COLUMNA DERECHA: Habilidades y mazos */}
            <div className="columna-datos">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-2">
                <h4 className="text-white m-0 font-oswald">HABILIDADES TÉCNICAS</h4>
                <button className="btn-cerrar-panel" onClick={cerrarPanel}>X CERRAR</button>
              </div>

              {/* Lista de habilidades */}
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

              {/* Sección películas y canciones */}
              <div className="seccion-gustos">
                <div className="titulo-gustos">
                  <h4 className="text-white font-oswald m-0">ME GUSTA</h4>
                </div>
                
                <div className="contenedor-mazos">
                  {/* MAZO SUERTE */}
                  <div className="mazo-slot">
                    <div className="mazo-estatico suerte" onClick={sacarSuerte}>
                      <img src="/img/suerte.png" alt="Mazo Suerte" />
                    </div>
                    <span className="texto-instruccion">👆 Toca para robar</span>
                    
                    {suerteIndex >= 0 && (
                      <div key={`suerte-${suerteIndex}`} className={`carta-revelada suerte-revelada anim-${suerteIndex}`}>
                        <small className="titulo-carta">CANCIÓN FAVORITA</small>
                        <p className="mb-2" style={{ fontSize: '0.8rem' }}>{jugadorActivo.discos[suerteIndex].titulo}</p>
                        <iframe 
                          width="100%" 
                          height="80" 
                          src={jugadorActivo.discos[suerteIndex].url} 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          style={{ borderRadius: '6px', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)' }}
                        ></iframe>
                      </div>
                    )}
                  </div>

                  {/* MAZO ARCA COMUNAL */}
                  <div className="mazo-slot">
                    <div className="mazo-estatico arca" onClick={sacarArca}>
                      <img src="/img/arca.png" alt="Mazo Arca Comunal" />
                    </div>
                    <span className="texto-instruccion">👆 Toca para robar</span>

                    {arcaIndex >= 0 && (
                      <div key={`arca-${arcaIndex}`} className={`carta-revelada arca-revelada anim-${arcaIndex}`}>
                        <small className="titulo-carta">PELÍCULA FAVORITA</small>
                        <p>{jugadorActivo.peliculas[arcaIndex]}</p>
                        <span className="detalle-carta">Prepara los pochoclos 🍿</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfiles;