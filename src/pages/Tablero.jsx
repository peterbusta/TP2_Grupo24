import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import tecnologiasData from '../data/tecnologias.json';
import { useSilencio } from '../context/SilencioContext.jsx';

function Tablero() {
  const navigate = useNavigate();
  const [posicionActual, setPosicionActual] = useState(0);
  const [tirando, setTirando] = useState(false);
  const [resultadoDados, setResultadoDados] = useState(null);
  const [cierreRevelado, setCierreRevelado] = useState(false);
  const [versionTarjeta, setVersionTarjeta] = useState(0);
  const { silenciado } = useSilencio();

  const [tarjetaActiva, setTarjetaActiva] = useState({
    tipo: 'equipo',
    nombre: 'NUESTRO EQUIPO',
    color: '#f39c12'
  });

  const [textoPropuesta, setTextoPropuesta] = useState('');
  const propuestaCompleta = "Desarrollar soluciones de software donde el código limpio paga la renta, los bugs van directo a la cárcel, y cada iteración es un paso más hacia el monopolio de las mejores experiencias web.";

  const mazos = {
    suerte: {
      nombre: 'SUERTE',
      color: '#e67e22',
      img: '/img/suerte.png',
      mensajes: [
        'El docente dijo “es sencillo”. Perdías dos horas de paz mental.',
        'Tu código funcionó a la primera. Avanzá tres casillas antes de que alguien lo vea.',
        'Te felicitaron por un trabajo que todavía no entregaste. Cobrá un recreo.',
        'Desafío sorpresa: ¿qué usa un dev cuando se queda a oscuras? Tema claro, lágrimas seguras.'
      ]
    },
    arca: {
      nombre: 'ARCA',
      color: '#3498db',
      img: '/img/arca.png',
      mensajes: [
        'Un compañero encontró el error. Devolvé un favor.',
        'Compartiste tus apuntes. Ganaste un mate.',
        'Todo el equipo colaboró. Recuperás una tarde libre.',
        'La rama quedó ordenada y nadie rompió producción. El equipo celebra el logro.'
      ]
    }
  };

  useEffect(() => {
    if (tarjetaActiva && tarjetaActiva.tipo === 'equipo') {
      setTextoPropuesta('');
      let i = 0;
      const interval = setInterval(() => {
        setTextoPropuesta(propuestaCompleta.slice(0, i + 1));
        i++;
        if (i === propuestaCompleta.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [tarjetaActiva]);

  useEffect(() => {
    if (versionTarjeta > 0 && !silenciado) {
      const sonidoCarta = new Audio('/audio/carta.mp3');
      sonidoCarta.volume = 0.3;
      sonidoCarta.play().catch(error => console.log("Sonido bloqueado", error));
    }
  }, [versionTarjeta, silenciado]);
  const temasGamificados = {
    'HTML5': {
      subtitulo: 'La creatividad sin presupuesto',
      valores: ['Un mate', 'Un favor', 'Un recreo', 'La paciencia', 'El finde', 'Tu paz mental'],
      cierre: 'Era una página sencilla. Ahora tiene 14 secciones.'
    },
    'CSS3': {
      subtitulo: 'La perfección visual',
      valores: ['Dos píxeles', 'Un retoque', 'Un cafecito', 'Una tarde', 'El domingo', 'Tu estabilidad'],
      cierre: 'Era solamente cambiar un color. Hace tres horas.'
    },
    'GIT': {
      subtitulo: 'El viaje de ida y vuelta',
      valores: ['Un commit', 'Un perdón', 'Un compañero', 'La rama', 'La amistad', 'La dignidad'],
      cierre: 'Conflicto resuelto. La amistad sigue en revisión.'
    },
    'GITHUB': {
      subtitulo: 'La memoria colectiva del equipo',
      valores: ['Un mensaje', 'Un commit', 'Una explicación', 'Una captura', 'Una madrugada', 'La evidencia'],
      cierre: 'Último commit: ahora sí funciona. No lo abras.'
    },
    'NODE.JS': {
      subtitulo: 'La promesa eterna',
      valores: ['Un mate', 'Un favor', 'Un finde', 'La paciencia', 'El aguinaldo', 'Tu paz mental'],
      cierre: 'Era una tarea sencilla. Hace tres días.'
    },
    'EXPRESS': {
      subtitulo: 'El combustible del equipo',
      valores: ['Sin azúcar', 'Cortado', 'Lágrima', 'Capuchino', 'Mocca', 'Latte doble'],
      cierre: 'Una ruta más y nos vamos. Mentira.'
    },
    'AWS': {
      subtitulo: 'La nube también pasa factura',
      valores: ['Un peso', 'Un café', 'Un vuelto', 'La tarjeta', 'El aguinaldo', 'El presupuesto'],
      cierre: '¡Felicidades! El servicio funcionó. Revisá la factura.'
    },
    'JAVASCRIPT': {
      subtitulo: 'La lógica de las sorpresas',
      valores: ['Un click', 'Un intento', 'Un console.log', 'Una hipótesis', 'Una madrugada', 'Un exorcismo'],
      cierre: 'No sé por qué funciona. No pienso tocarlo.'
    },
    'REACT': {
      subtitulo: 'La familia de componentes',
      valores: ['Un prop', 'Un estado', 'Un hook', 'Un refactor', 'El finde', 'La paciencia'],
      cierre: 'Ahora sí es reutilizable. En 17 componentes.'
    },
    'SQL': {
      subtitulo: 'El interrogatorio de los datos',
      valores: ['Un dato', 'Un filtro', 'Un JOIN', 'Un respaldo', 'Una auditoría', 'La evidencia'],
      cierre: 'La consulta era correcta. La tabla, no tanto.'
    },
    'KOTLIN': {
      subtitulo: 'La calma antes del compilador',
      valores: ['Un mate', 'Un null', 'Un warning', 'Un tutorial', 'Un feriado', 'La cordura'],
      cierre: 'Compiló a la primera. Hay que llamar a alguien.'
    },
    'FIGMA': {
      subtitulo: 'El diseño que nunca termina',
      valores: ['Un color', 'Dos píxeles', 'Un retoque', 'Otra versión', 'Otra reunión', 'El archivo FINAL'],
      cierre: 'final_v8_ahora_si_este.fig.'
    },
    'ANDROID': {
      subtitulo: 'La prueba en el dispositivo ajeno',
      valores: ['Un click', 'Un permiso', 'Un reinicio', 'Otro teléfono', 'Una actualización', 'Un celular nuevo'],
      cierre: 'Probado en un dispositivo. El tuyo es otra historia.'
    },
  };

  const getTema = (nombre) => {
    return temasGamificados[nombre] || {
      subtitulo: '"El equipo debatiendo qué comer"',
      valores: ['1 porción', '2 porciones', 'Media pizza', 'Pizza entera', 'Empanadas', 'Asado'],
      cierre: 'La deuda queda registrada en el tablero.'
    };
  };

  const accionesEspeciales = {
    'VISITA': {
      titulo: 'VISITA / CÁRCEL', texto: 'Pasá a declarar cómo sobrevivimos a este sprint.',
      boton: 'Consultar el expediente', destino: '/bitacora', color: '#8e44ad'
    },
    'A LA CÁRCEL': {
      titulo: 'A LA CÁRCEL', texto: 'Fuiste sorprendido enviando código sin probar.',
      boton: 'Declarar ante el banco', destino: '/contacto', color: '#c0392b'
    },
    'PARADA LIBRE': {
      titulo: 'PARADA LIBRE', texto: 'Acá descansan los que todavía no tienen bugs.',
      boton: 'Conocer al equipo', destino: '/perfiles', color: '#27ae60'
    },
    'SALIDA': {
      titulo: 'SALIDA', texto: 'Cobrá tu bienvenida y empezá el recorrido.',
      boton: 'Comenzar recorrido', destino: '/', color: '#f39c12'
    },
    'GIT': {
      titulo: 'GIT', texto: 'Llegó la hora de pagar tu cuota mensual de commits.',
      boton: 'Pagar en GitHub', destino: 'https://github.com/peterbusta/TP2_Grupo24', color: '#34495e', externa: true
    },
    'ENERGÍA': {
      titulo: 'ENERGÍA', texto: 'Conectando los cables de alta tensión a la red externa.',
      boton: 'Consumir API pública', destino: '/api', color: '#f1c40f'
    },
    'AGUA': {
      titulo: 'AGUA', texto: 'Navegá por las tuberías y el flujo de nuestro código.',
      boton: 'Ver árbol de componentes', destino: '/arbol', color: '#3498db'
    },
    'IMPUESTO': {
      titulo: 'IMPUESTO', texto: 'Consultá el inventario de herramientas, lenguajes y recursos del equipo.',
      boton: 'Abrir mazo', destino: '/datos', color: '#7f8c8d'
    }
  };


  const casillas = [
    { id: 0, nombre: 'SALIDA', tipo: 'esquina', img: '/img/salida.png', row: 1, col: 1 },
    { id: 1, nombre: 'HTML5', tipo: 'propiedad', color: '#8b4513', row: 1, col: 2 },
    { id: 2, nombre: 'CSS3', tipo: 'propiedad', color: '#8b4513', row: 1, col: 3 },
    { id: 3, nombre: 'GIT', tipo: 'ferrocarril', img: '/img/ferrocarril.png', row: 1, col: 4 },
    { id: 4, nombre: 'GITHUB', tipo: 'propiedad', color: '#87ceeb', row: 1, col: 5 },
    { id: 5, nombre: 'VISITA', tipo: 'esquina', img: '/img/visitacarcel.png', row: 1, col: 6 },
    { id: 6, nombre: 'NODE.JS', tipo: 'propiedad', color: '#da70d6', row: 2, col: 6 },
    { id: 7, nombre: 'EXPRESS', tipo: 'propiedad', color: '#da70d6', row: 3, col: 6 },
    { id: 8, nombre: 'ENERGÍA', tipo: 'servicio', img: '/img/electricidad.png', row: 4, col: 6 },
    { id: 9, nombre: 'AWS', tipo: 'propiedad', color: '#ffa500', row: 5, col: 6 },
    { id: 10, nombre: 'PARADA LIBRE', tipo: 'esquina', img: '/img/parada.png', row: 6, col: 6 },
    { id: 11, nombre: 'JAVASCRIPT', tipo: 'propiedad', color: '#ff4500', row: 6, col: 5 },
    { id: 12, nombre: 'REACT', tipo: 'propiedad', color: '#ff4500', row: 6, col: 4 },
    { id: 13, nombre: 'AGUA', tipo: 'servicio', img: '/img/agua.png', row: 6, col: 3 },
    { id: 14, nombre: 'SQL', tipo: 'propiedad', color: '#ffd700', row: 6, col: 2 },
    { id: 15, nombre: 'A LA CÁRCEL', tipo: 'esquina', img: '/img/policia.png', row: 6, col: 1 },
    { id: 16, nombre: 'KOTLIN', tipo: 'propiedad', color: '#32cd32', row: 5, col: 1 },
    { id: 17, nombre: 'FIGMA', tipo: 'propiedad', color: '#32cd32', row: 4, col: 1 },
    { id: 18, nombre: 'IMPUESTO', tipo: 'impuesto', img: '/img/impuestos.png', row: 3, col: 1 },
    { id: 19, nombre: 'ANDROID', tipo: 'propiedad', color: '#0000cd', row: 2, col: 1 },
  ];

  const peones = [
    { id: 1, img: '/img/sombrero.png', avatar: '/img/avatar-flavia.png', pos: posicionActual, nombre: 'FLAVIA BERZUINI', color: '#9b59b6' },
    { id: 2, img: '/img/perro.png', avatar: '/img/avatar-brian.png', pos: 0, nombre: 'BRIAN SABIO', color: '#1e3799' },
    { id: 3, img: '/img/dedal.png', avatar: '/img/avatar-ludmila.png', pos: 0, nombre: 'LUDMILA QUIROZ', color: '#2ecc71' },
    { id: 4, img: '/img/auto.png', avatar: '/img/avatar-pedro.png', pos: 0, nombre: 'PEDRO BUSTAMANTE', color: '#f39c12' }
  ];

  const datosEquipo = [
    "Flavia: Cobra alquiler por cada píxel desalineado.",
    "Brian: Refactoriza todo el tablero si saca doble.",
    "Ludmila: Dueña absoluta de los ferrocarriles y el backend.",
    "Pedro: Mantiene el monopolio de los componentes."
  ];

  const obtenerAcertijo = () => {
    const acertijos = [
      { q: "¿Qué hace un dev cuando se queda a oscuras?", a: "Llora porque usa tema claro." },
      { q: "¿Por qué el desarrollador quebró?", a: "Porque usó todo su caché." },
      { q: "Toc toc. - ¿Quién es? - (pausa)...", a: "Java (tardó en compilar)." }
    ];
    return acertijos[Math.floor(Math.random() * acertijos.length)];
  };

  const tirarDados = () => {
    if (tirando) return;
    setTirando(true);

    if (!silenciado) {
      const sonidoDados = new Audio('/audio/dados.mp3');
      sonidoDados.volume = 0.5;
      sonidoDados.play().catch(error => console.log(error));
    }

    setTimeout(() => {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const total = d1 + d2;
      
      setResultadoDados({ d1, d2, total });
      const nuevaPosicion = (posicionActual + total) % 20;
      setPosicionActual(nuevaPosicion);
      setTirando(false);

      const casillaDestino = casillas.find(c => c.id === nuevaPosicion);
      
      if (accionesEspeciales[casillaDestino.nombre]) {
        setTarjetaActiva({
          tipo: 'especial', nombre: casillaDestino.nombre, img: casillaDestino.img,
          ...accionesEspeciales[casillaDestino.nombre]
        });
      } else if (casillaDestino.tipo === 'propiedad' && tecnologiasData[casillaDestino.nombre]) {
        const datoRandom = datosEquipo[Math.floor(Math.random() * datosEquipo.length)];
        setTarjetaActiva({ ...tecnologiasData[casillaDestino.nombre], nombre: casillaDestino.nombre, tipo: 'propiedad', datoCurioso: datoRandom });
      } else {
        setTarjetaActiva({
          tipo: 'acertijo',
          nombre: casillaDestino.nombre,
          img: casillaDestino.img,
          color: '#4b6584',
          ...obtenerAcertijo()
        });
      }
      setCierreRevelado(false);
      setVersionTarjeta(version => version + 1);
    }, 600);
  };

  const seleccionarCasilla = (casilla) => {
    if (accionesEspeciales[casilla.nombre]) {
      setTarjetaActiva({
        tipo: 'especial', nombre: casilla.nombre, img: casilla.img,
        ...accionesEspeciales[casilla.nombre]
      });
    } else if (casilla.tipo === 'propiedad' && tecnologiasData[casilla.nombre]) {
      const datoRandom = datosEquipo[Math.floor(Math.random() * datosEquipo.length)];
      setTarjetaActiva({
        ...tecnologiasData[casilla.nombre], nombre: casilla.nombre, tipo: 'propiedad', datoCurioso: datoRandom
      });
    } else {
      return;
    }
    setCierreRevelado(false);
    setVersionTarjeta(version => version + 1);
  };

  const esCasillaExplorable = (casilla) => Boolean(
    accionesEspeciales[casilla.nombre] || (casilla.tipo === 'propiedad' && tecnologiasData[casilla.nombre])
  );

  const ejecutarAccionEspecial = () => {
    if (!silenciado) {
      const sonidoClic = new Audio('/audio/clic.mp3');
      sonidoClic.volume = 0.5;
      sonidoClic.play().catch(error => console.log(error));
    }

    if (tarjetaActiva.externa || /^https?:\/\//i.test(tarjetaActiva.destino || '')) {
      window.open(tarjetaActiva.destino, '_blank', 'noopener,noreferrer');
      return;
    }
    if (tarjetaActiva.destino === '/') {
      setTarjetaActiva({ tipo: 'equipo', nombre: 'NUESTRO EQUIPO', color: '#f39c12' });
      setVersionTarjeta(version => version + 1);
      return;
    }
    navigate(tarjetaActiva.destino);
  };


  const sacarCarta = (tipo) => {
    const mazo = mazos[tipo];
    const mensaje = mazo.mensajes[Math.floor(Math.random() * mazo.mensajes.length)];
    setTarjetaActiva({ tipo: 'mazo', mazo: tipo, nombre: mazo.nombre, color: mazo.color, img: mazo.img, mensaje });
    setVersionTarjeta(version => version + 1);
  };

  const renderCasitas = (cantidad) => {
    return Array.from({ length: cantidad }).map((_, i) => (
      <div key={i} className="icono-casa d-inline-block me-1"></div>
    ));
  };

  const nivelesRenta = [
    { etiqueta: 'Renta', casas: 0 },
    { etiqueta: 'Renta con 1 casa', casas: 1 },
    { etiqueta: 'Renta con 2 casas', casas: 2 },
    { etiqueta: 'Renta con 3 casas', casas: 3 },
    { etiqueta: 'Renta con 4 casas', casas: 4 },
    { etiqueta: 'Renta con 1 hotel', hotel: true },
  ];

  return (
    <div className="layout-devopoly">

      <div className="header-tablero text-center mb-5 w-100">
        <p className="portada-sello mb-3">GRUPO 24 · FRONT END</p>
        <h1 className="titulo-neon font-oswald text-uppercase mb-4  mt-0">¡Bienvenidos a Devopoly!</h1>
        <p className="portada-bajada text-secondary mb-3" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
          Somos cuatro estudiantes de la Tecnicatura en Desarrollo de Software. Convertimos el
          Monopoly en una app React: cada propiedad es una tecnología, cada carta una excusa para
          aprender algo nuevo. Tirá los dados, abrí las fichas y entrá a los perfiles del equipo.
        </p>
        <p className="portada-lema fst-italic mb-0 mt-3">Donde los bugs pagan alquiler y el código limpio gana la partida.</p>
      </div>

      <div className="fila-portada d-flex w-100 flex-column flex-xl-row justify-content-between align-items-center gap-4">
        
        <div className="zona-tablero-wrapper">
          <div className="contenedor-isometrico">
            <div className="tablero-grid">
              <div className="centro-tablero">
                <img src="/img/logo.png" alt="Devopoly" className="logo-devopoly-img img-brillo" />
                <div className="mazos-tablero" aria-label="Mazos de cartas">
                  {Object.entries(mazos).map(([tipo, mazo]) => (
                    <button
                      key={tipo}
                      type="button"
                      className={`mazo-tablero mazo-${tipo}`}
                      onClick={() => sacarCarta(tipo)}
                      aria-label={`Sacar una carta de ${mazo.nombre}`}
                    >
                      <span className="mazo-capa mazo-capa-dos" aria-hidden="true" />
                      <span className="mazo-capa mazo-capa-uno" aria-hidden="true" />
                      <span className="mazo-frontal">
                        <img src={mazo.img} alt="" />
                        <span className="mazo-etiqueta">{mazo.nombre}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {casillas.map((casilla) => (
                <div 
                  key={casilla.id} 
                  className={`casilla-3d ${casilla.tipo} ${esCasillaExplorable(casilla) ? 'casilla-explorable' : ''} ${accionesEspeciales[casilla.nombre] ? 'casilla-navegacion' : ''} ${posicionActual === casilla.id && posicionActual !== 0 ? 'casilla-activa' : ''}`}
                  style={{ gridColumn: casilla.col, gridRow: casilla.row }}
                  role={esCasillaExplorable(casilla) ? 'button' : undefined}
                  tabIndex={esCasillaExplorable(casilla) ? 0 : undefined}
                  onClick={() => seleccionarCasilla(casilla)}
                  onKeyDown={(event) => {
                    if (esCasillaExplorable(casilla) && (event.key === 'Enter' || event.key === ' ')) {
                      event.preventDefault();
                      seleccionarCasilla(casilla);
                    }
                  }}
                >
                  {casilla.tipo === 'propiedad' && (
                    <div className="franja-color" style={{ backgroundColor: casilla.color }}></div>
                  )}
                  <div className="contenido-casilla d-flex flex-column justify-content-center align-items-center">
                    {casilla.img && <img src={casilla.img} alt={casilla.nombre} className="icono-casilla mb-1" />}
                    <span className="fw-bold nombre-casilla text-center">{casilla.nombre}</span>
                  </div>
                </div>
              ))}

              {peones.map((peon, i) => {
                const casilla = casillas.find(c => c.id === peon.pos) || casillas[0];
                const isSalida = peon.pos === 0;
                const isActiva = peon.pos === posicionActual && !isSalida;
                
                // Usamos multiplicadores (1 y -1) en lugar de píxeles fijos
                const offsets = [
                  { x: -1, y: -1 },
                  { x: 1, y: -1 },
                  { x: -1, y: 1 },
                  { x: 1, y: 1 }
                ];

                // El valor bajará de 35px a 8px según el tamaño de pantalla
                const offsetX = isSalida ? `calc(${offsets[i].x} * clamp(8px, 2.5vw, 35px))` : '0px';
                const offsetY = isSalida ? `calc(${offsets[i].y} * clamp(8px, 2.5vw, 35px))` : '0px';
                const elevacionZ = isActiva ? 70 : 45;

                return (
                  <div 
                    key={`peon-${peon.id}`}
                    className="peon-en-grilla peon-interactivo"
                    style={{
                      gridColumn: casilla.col,
                      gridRow: casilla.row,
                      // Actualizamos el transform para usar las nuevas variables dinámicas
                      transform: `translate(${offsetX}, ${offsetY}) translateZ(${elevacionZ}px) rotateZ(var(--giro-peon, 45deg)) rotateX(var(--inclinacion-peon, -50deg))`,
                      zIndex: 100 + i,
                      '--color-peon': peon.color
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver el perfil de ${peon.nombre}`}
                    onClick={() => navigate('/perfiles', { state: { jugador: peon.nombre } })}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        navigate('/perfiles', { state: { jugador: peon.nombre } });
                      }
                    }}
                  >
                    <div className={`ficha-animada ${isSalida ? 'esperando-salida' : ''}`}>
                      <img src={peon.img} alt={peon.nombre} />
                      <span className="nombre-peon-flotante">{peon.nombre.split(' ')[0].toLowerCase()}</span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        <div className="zona-interactiva-derecha d-flex flex-column align-items-center gap-3">
          
          <div className="contenedor-controles d-flex flex-column align-items-center mb-2 w-100">
            <div className="escena-dados d-flex gap-3 mb-3">
              {[resultadoDados?.d1 || 3, resultadoDados?.d2 || 4].map((valor, index) => (
                <div key={index} className={`dado-3d ${tirando ? 'girando' : ''}`}>
                  <div className="cara frontal">{valor}</div>
                  <div className="cara trasera">6</div>
                  <div className="cara derecha">5</div>
                  <div className="cara izquierda">2</div>
                  <div className="cara arriba">4</div>
                  <div className="cara abajo">1</div>
                </div>
              ))}
            </div>
            
            <button 
              className="btn-tirar-dados font-oswald text-uppercase shadow-sm"
              onClick={tirarDados}
              disabled={tirando}
            >
              {tirando ? 'TIRANDO...' : 'TIRAR DADOS'}
            </button>
            
            <div className="contenedor-resultado-fijo mt-2 w-100">
              <div className={`badge-resultado px-3 py-1 fw-bold text-warning font-oswald shadow-sm ${resultadoDados && !tirando ? 'visible' : 'invisible'}`}>
                RESULTADO: {resultadoDados?.total || '-'}
              </div>
            </div>
          </div>

          {tarjetaActiva && (
            <div 
              key={versionTarjeta}
              className="tarjeta-hud-organica shadow-lg estilo-perfil cambio-pagina-carta" 
              style={{ '--color-tarjeta': tarjetaActiva.color }}
            >
              <div className={`cabecera-tarjeta cabecera-${tarjetaActiva.tipo} d-flex flex-column justify-content-center align-items-center`} style={{ backgroundColor: tarjetaActiva.color }}>
                <span className="titulo-tarjeta text-white font-oswald text-uppercase letter-spacing-1 text-center w-100">
                  {tarjetaActiva.tipo === 'especial' ? tarjetaActiva.titulo :
                   tarjetaActiva.tipo === 'equipo' ? 'NUESTRO EQUIPO' : tarjetaActiva.nombre}
                </span>
                {tarjetaActiva.tipo === 'propiedad' && (
                  <small className="text-white opacity-90 fst-italic mt-1" style={{ fontSize: '0.9rem', textTransform: 'none', fontWeight: 'normal' }}>
                    {getTema(tarjetaActiva.nombre).subtitulo}
                  </small>
                )}
              </div>
              
              <div className="cuerpo-tarjeta px-3 py-3 d-flex flex-column justify-content-between">
                
                {tarjetaActiva.tipo === 'equipo' ? (
                  <div className="contenido-equipo h-100 d-flex flex-column justify-content-between text-center">
                    <div className="equipo-avatares mt-1">
                      {peones.map(peon => (
                        <button 
                          key={`btn-${peon.id}`} 
                          className="btn-peon-circular d-flex flex-column align-items-center"
                          onClick={() => navigate('/perfiles', { state: { jugador: peon.nombre } })}
                          style={{ '--color-peon': peon.color }}
                          aria-label={`Ver el perfil de ${peon.nombre}`}
                        >
                          <div className="circulo-peon">
                            <img src={peon.avatar} alt={`Avatar de ${peon.nombre}`} loading="lazy" />
                          </div>
                          <span className="nombre-peon mt-2">{peon.nombre.split(' ')[0]}</span>
                          <span className="rol-peon">{peon.rol}</span>
                          <span className="tooltip-peon" role="tooltip">Ver perfil de {peon.nombre.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>

                    <div className="separador-moderno my-1">
                      <div className="linea-brillo"></div>
                    </div>

                    <div className="seccion-propuesta text-start">
                      <small className="font-oswald text-warning d-block mb-1 letter-spacing-1 text-uppercase text-center" style={{ fontSize: '0.8rem' }}>
                        Devopoly team: próposito y visión
                      </small>
                      <p className="text-white opacity-75 fst-italic m-0" style={{ fontSize: '0.8rem', lineHeight: '1.3', minHeight: '65px' }}>
                        {textoPropuesta}
                        <span className="cursor-titilante">|</span>
                      </p>
                    </div>
                  </div>

                ) : tarjetaActiva.tipo === 'propiedad' ? (
                  <div className="d-flex flex-column flex-grow-1 text-start">
                    <div className="tabla-deudas">
                      {nivelesRenta.map((nivel, indice) => (
                        <div className="fila-deuda" key={nivel.etiqueta}>
                          <span className="etiqueta-deuda">
                            {nivel.etiqueta}
                            {nivel.casas ? <span className="ms-2">{renderCasitas(nivel.casas)}</span> : null}
                            {nivel.hotel ? <span className="icono-casa icono-hotel d-inline-block ms-2"></span> : null}
                          </span>
                          <span className="pago-deuda"><span className="simbolo-moneda">₩</span>{getTema(tarjetaActiva.nombre).valores[indice]}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className={`btn-accion-especial cierre-deuda mt-auto ${cierreRevelado ? 'revelado' : ''}`}
                      onClick={() => {
                        if (!cierreRevelado) {
                          const sonidoCaja = new Audio('/audio/moneda.mp3');
                          sonidoCaja.volume = 0.4;
                          sonidoCaja.play().catch(e => console.log("Audio bloqueado", e));
                        }
                        
                        setCierreRevelado(!cierreRevelado);
                      }}
                      aria-expanded={cierreRevelado}
                    >
                      <span>{cierreRevelado ? getTema(tarjetaActiva.nombre).cierre : '✦ Revelar el costo real'}</span>
                    </button>

                  </div>
                ) : tarjetaActiva.tipo === 'mazo' ? (
                  <div className="seccion-mazo text-center d-flex flex-column align-items-center justify-content-center h-100">
                    <div className="marco-icono-especial mb-3" aria-hidden="true">
                      <img src={tarjetaActiva.img} alt="" className="icono-especial" />
                    </div>
                    <p className="texto-especial text-white fw-bold fs-6 mb-4 px-2">«{tarjetaActiva.mensaje}»</p>
                    <button type="button" className="btn-accion-especial font-oswald text-uppercase" onClick={() => sacarCarta(tarjetaActiva.mazo)}>
                      Sacar otra carta
                    </button>
                  </div>
                ) : tarjetaActiva.tipo === 'especial' ? (
                  <div className="seccion-especial text-center d-flex flex-column align-items-center justify-content-center h-100">
                    {tarjetaActiva.img && (
                      <div className="marco-icono-especial mb-3" aria-hidden="true">
                        <img src={tarjetaActiva.img} alt="" className="icono-especial" />
                      </div>
                    )}
                    <p className="texto-especial text-white fw-bold fs-6 mb-4 px-2">«{tarjetaActiva.texto}»</p>
                    <button type="button" className="btn-accion-especial font-oswald text-uppercase" onClick={ejecutarAccionEspecial}>
                      {tarjetaActiva.boton}
                    </button>
                  </div>
                ) : (
                  <div className="seccion-acertijo text-center mt-1 d-flex flex-column align-items-center">
                    {tarjetaActiva.img && <img src={tarjetaActiva.img} alt="Especial" className="icono-especial mb-3" />}
                    <p className="text-white fw-bold fs-6 mb-4 px-2">"{tarjetaActiva.q}"</p>
                    
                    <div className="spoiler-container p-3 rounded border border-warning w-100 mt-2">
                      <small className="text-warning d-block mb-1 font-oswald text-uppercase">Hover para revelar</small>
                      <span className="texto-spoiler text-white fw-bold">{tarjetaActiva.a}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Tablero;
