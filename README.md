# Devopoly · TP2 Grupo 24

> **Aplicación web interactiva desarrollada en React** que transforma la identidad visual y la dinámica del clásico juego de mesa *Monopoly* en un ecosistema de presentación para desarrolladores web, recursos técnicos y herramientas de software.

---

## Tabla de Contenidos

1. [Visión general y temática](#visión-general-y-temática)
2. [Enlaces del proyecto](#enlaces-del-proyecto)
3. [Tecnologías y librerías utilizadas](#tecnologías-y-librerías-utilizadas)
4. [Estructura del proyecto y arbol de componentes](#estructura-del-proyecto-y-arbol-de-componentes)
5. [Módulos y funcionalidades principales](#módulos-y-funcionalidades-principales)
   - [Tablero interactivo y portada](#1-tablero-interactivo-y-portada)
   - [Mesa de jugadores (Perfiles)](#2-mesa-de-jugadores-perfiles)
   - [Mazo tecnológico y recursos](#3-mazo-tecnológico-y-recursos)
   - [Desafío del banquero (API Pública)](#4-desafío-del-banquero-api-pública)
   - [Árbol de componentes dinámico](#5-árbol-de-componentes-dinámico)
   - [Bitácora de desarrollo](#6-bitácora-de-desarrollo)
   - [Declaración ante el banco (Contacto)](#7-declaración-ante-el-banco-contacto)
6. [Gestión de estado y contexto global](#gestión-de-estado-y-contexto-global)
7. [Detalles de diseño visual y paleta de colores](#detalles-de-diseño-visual-y-paleta-de-colores)
8. [Instalación y guía de ejecución](#instalación-y-guía-de-ejecución)
9. [Integrantes y distribución de roles](#integrantes-y-distribución-de-roles)
10. [Uso directo de Inteligencia Artificial](#uso-directo-de-inteligencia-artificial)
11. [Contexto académico](#contexto-académico)

---

## Visión general y temática

**Devopoly** es el resultado de la evolución del TP1 (sitio estático en HTML/CSS/JS) hacia una **Single Page Application (SPA) construida sobre React 18 y Vite**.

La aplicación gamifica la experiencia del portafolio técnico grupal mediante las siguientes equivalencias conceptuales:
* **Casillas del tablero:** Lenguajes, herramientas y conceptos (*HTML5, CSS3, Git, Node.js, React, AWS, etc.*).
* **Peones / fichas de juego:** Sombrero, Perro, Dedal y Auto, asociados a cada uno de los cuatro integrantes del grupo.
* **Propiedades y niveles de renta:** Representación del dominio técnico (desde "Renta base" hasta "Renta con 1 Hotel").
* **Cartas de suerte y arca comunal:** Desafíos, memes de programación, cultura pop, listas de música y trailers multimedia.

---

## Enlaces del proyecto

* **Repositorio oficial en GitHub:** [github.com/peterbusta/TP2_Grupo24](https://github.com/peterbusta/TP2_Grupo24)
* **Despliegue en producción (Vercel):** *Pendiente de publicación*

---

## Tecnologías y librerías utilizadas

### Núcleo y lenguajes
* **JavaScript (ES6+):** Programación funcional, promesas (`async/await`), manipulación modular de datos.
* **React:** Biblioteca principal orientada a componentes funcionales y Hooks (`useState`, `useEffect`, `useMemo`, `useContext`).
* **HTML5 & CSS3:** Uso de CSS Grid, Flexbox, transformaciones 3D e isométricas, CSS Variables (`var(--color-*)`) y Container Queries (`@container`).

### Herramientas de construcción y rutas
* **Vite:** Entorno de desarrollo ultrarrápido y empaquetador para producción con reemplazo de módulos en caliente (HMR).
* **React Router DOM:** Gestión de la navegación del cliente mediante `BrowserRouter`, `Routes`, `Route`, `useNavigate` y `useLocation`.

### UI y estilos
* **Bootstrap & React-Bootstrap:** Reutilización de grillas, alertas y estructura base para componentes de soporte.
* **Google Fonts:**
  * `Oswald`: Tipografía principal para títulos, números y estética neón estilo tablero.
  * `Montserrat`: Tipografía secundaria para encabezados y componentes.
  * `Roboto`: Lectura limpia para contenidos extensos y descripciones.

---

## Estructura del proyecto y arbol de componentes

```text
TP2_GRUPO24/
├── public/
│   ├── audio/              # Clips de sonido (.mp3) para dados, monedas, cartas y música
│   ├── data/               # Archivos JSON locales (recursos.json, tecnologias.json)
│   └── img/                # Logotipos, avatares, cartas, peones e íconos en PNG/SVG
├── src/
│   ├── components/
│   │   ├── BotonSilencio.jsx # Control global flotante de mute/unmute
│   │   ├── CartaRecurso.jsx # Tarjeta interactiva 3D con efecto flip (dorso/frente)
│   │   └── Sidebar.jsx      # Navegación lateral persistente con menú colapsable
│   ├── context/
│   │   └── SilencioContext.jsx # Context API para gestionar el estado de audio en toda la app
│   ├── data/               # Configuración de propiedades y textos adicionales
│   ├── pages/
│   │   ├── ArbolComponentes.jsx # Jerarquía gráfica interactiva (+ / -)
│   │   ├── Bitacora.jsx         # Registro en acordeón de decisiones y evoluciones
│   │   ├── Contacto.jsx         # Formulario temático "Declaración Policial"
│   │   ├── DesafioBanquero.jsx  # Juego trivia interactivo conectado a API pública
│   │   ├── MazoTecnologico.jsx  # Grid filtrable y buscador de los 25 recursos
│   │   ├── Perfiles.jsx         # Carrusel de tarjetas estilo Monopoly con audio y video
│   │   └── Tablero.jsx          # Portada principal con tablero 3D y simulación de dados
│   ├── App.jsx             # Estructura principal con Layout y Switch de rutas
│   ├── main.jsx            # Punto de entrada de React en el DOM con Providers
│   └── styles.css          # Estilos globales, variables de color y animaciones
├── index.html              # HTML base con meta-tags y fuentes
├── package.json            # Scripts y lista de dependencias
└── vite.config.js          # Configuración del empaquetador Vite
```

### Jerarquía visual de componentes:
```text
main.jsx
└── React.StrictMode
    └── BrowserRouter
        └── SilencioProvider
            └── App
                ├── Sidebar (Navegación fija / responsive)
                ├── BotonSilencio (Control flotante de audio)
                └── Container (Visualizador dinámico)
                    └── Routes
                        ├── Tablero (/ or /inicio)
                        ├── Perfiles (/perfiles)
                        ├── MazoTecnologico (/datos)
                        ├── DesafioBanquero (/api)
                        ├── Contacto (/contacto)
                        ├── ArbolComponentes (/arbol)
                        └── Bitacora (/bitacora)
```

---

## Módulos y funcionalidades principales

### 1. Tablero interactivo y portada (`Tablero.jsx`)
* **Grilla isométrica 3D:** Representación gráfica del tablero de Monopoly con 20 casillas dispuestas en cuadrícula mediante CSS Grid.
* **Simulación de dados:** Lógica JavaScript que genera dos números aleatorios (1-6), reproduce efectos de sonido de dados rodando y calcula el movimiento automático del peón por el perímetro.
* **Fichas flotantes (peones):** Movimiento dinámico con transformaciones `translate3d` ajustadas según la casilla destino. Al hacer clic en un peón, redirige mediante `useNavigate` enviando el `state` al perfil de dicho integrante.
* **HUD informativo y cartas HUD:**
  * Muestra tarjetas temáticas con precios humorísticos, valores de renta e indirectas sobre la vida de los desarrolladores.
  * Efecto de máquina de escribir (*typewriter effect*) en la tarjeta inicial de propuesta del equipo.
  * Opción para "Revelar el costo real" con animación de moneda.

### 2. Mesa de jugadores - perfiles (`Perfiles.jsx`)
* **Selección de carta:** Presentación inicial de 4 cartas esparcidas en la mesa con el logo de la ficha asignada a cada participante.
* **Visor panorámico / Carrusel:** Navegación fluida entre integrantes mediante flechas laterales sin salir del visor activo.
* **Integración multimedia integrada:**
  * **Video de transformación:** Clips verticales en formato `.mp4` para presentación.
  * **Trailers embebidos:** Reproductores `<iframe>` configurados a YouTube con formato `embed`.
  * **Reproductor de música:** Etiquetas `<audio>` para escuchar fragmentos musicales asociados al mazo de "Suerte" de cada usuario.
  * **Reacciones flotantes:** Animación de emojis (👍 / 👎) con trayectorias y escalas aleatorias mediante CSS Variables.

### 3. Mazo tecnológico y recursos (`MazoTecnologico.jsx` y `CartaRecurso.jsx`)
* **Consumo de JSON local:** Carga asíncrona vía `fetch` del archivo `recursos.json` conteniendo 25 registros organizados en grupos temáticos.
* **Buscador y filtrado dinámico:**
  * Búsqueda por coincidencia de texto ignorando acentos y mayúsculas (`normalize("NFD")`).
  * Chips de grupo temático con cálculo automático de cantidad de elementos disponibles.
* **Tarjeta 3D Reutilizable (`CartaRecurso`):**
  * Animación de flip al hacer clic o mediante interacción por teclado (`Enter` / `Espacio`).
  * Muestra el título, subtítulo, renta simulada, uso técnico recomendado y nota al dorso.

### 4. Desafío del banquero - API Pública (`DesafioBanquero.jsx`)
* **Consumo de API externa:** Conexión con `https://countriesnow.space/api/v0.1/countries/flag/images` para extraer banderas de países en tiempo real.
* **Manejo de estados de red:** Vistas diferenciadas para estado de Carga (Loader con dado barajando), Error con botón de reintento, y Respuesta procesada.
* **Lógica de trivia:**
  * Genera 4 opciones aleatorias por ronda, evaluando aciertos, racha actual y puntaje acumulado.

### 5. Árbol de componentes dinámico (`ArbolComponentes.jsx`)
* **Componente recursivo `NodoArbol`:** Muestra la arquitectura real del proyecto.
* **Interacción colapsable:** Botones `+` / `−` para contraer y expandir ramas en tiempo real mediante estados locales independientes.

### 6. Bitácora de desarrollo (`Bitacora.jsx`)
* **Registro de procesos:** Acordeón interactivo categorizado por color según los bloques del juego (Planificación, Git, Lógica, Responsividad, Navegación e IA).
* **Pasos numerados:** Línea de tiempo visual que detalla los desafíos técnicos encontrados durante el desarrollo.

### 7. Declaración ante el banco - Contacto (`Contacto.jsx`)
* **Formulario temático:** Diseñado bajo la estética de un "Acta Policial / Banco de Devopoly".
* **Retroalimentación interactiva:** Envío con alerta decorativa sin recarga de página (*Single Page Application*).

---

## Gestión de estado y contexto global

Para evitar la propagación repetitiva de propiedades (*prop drilling*), se implementó un sistema de contexto global:

* **`SilencioContext.jsx`:** Provee el estado global `silenciado` y la función `toggleSilencio()`.
* **`BotonSilencio.jsx`:** Componente flotante que permite mutear o activar los sonidos del juego (efectos de audio en dados, cartas, botones e iteraciones de audio) desde cualquier lugar de la aplicación.

---

## Detalles de diseño visual y paleta de colores

El diseño sigue una paleta en tono oscuro (*Dark Theme*) inspirada en neón y tableros clásicos de juegos nocturnos:

| Elemento / Sección | Código Hex | Referencia en Devopoly |
| :--- | :--- | :--- |
| **Fondo principal** | `#0b1118` / `#121b25` | Base oscura del tablero |
| **Acento dorado / Neón** | `#f39c12` / `#e7bd63` | Salida / Títulos principales |
| **Flavia Berzuini** | `#9b59b6` | Violeta / Ficha Sombrero |
| **Brian Sabio** | `#1e3799` | Azul Marino / Ficha Perro |
| **Ludmila Quiroz** | `#2ecc71` | Verde Esmeralda / Ficha Dedal |
| **Pedro Bustamante** | `#f39c12` | Naranja Dorado / Ficha Auto |
| **Mazo suerte** | `#e67e22` | Naranja Cálido |
| **Mazo arca comunal** | `#3498db` | Celeste / Azul Claro |
| **Lógica / IA** | `#8e44ad` / `#f1c40f` | Morado / Amarillo Electricidad |

---

## Instalación y guía de ejecución

### Requisitos previos
* Tener instalado **Node.js** (versión 18.0 o superior recomendada).
* Gestor de paquetes **npm** (incluido con Node.js).

### Instrucciones paso a paso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/peterbusta/TP2_Grupo24.git
   cd TP2_Grupo24
   ```

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   *Abre tu navegador e ingresa a `http://localhost:5173/`.*

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## Integrantes y distribución de roles

* **Flavia Berzuini** ([@FlaviaBerzuini](https://github.com/FlaviaBerzuini))
  * *Responsabilidades:* Estructura del sitio, lógica del tablero interactivo, implementación del Context API de silencio y diseño general.
* **Pedro Bustamante** ([@peterbusta](https://github.com/peterbusta))
  * *Responsabilidades:* Creación y administración del repositorio Git, desarrollo de su perfil individual, ajustes de carrusel y compatibilidad de audio.
* **Brian Sabio** ([@BrianSabio](https://github.com/BrianSabio))
  * *Responsabilidades:* Desarrollo de la sección "Árbol de Componentes", estructura de la Bitácora de desarrollo y maquetación de su perfil personal.
* **Ludmila Quiroz** ([@Ludmimquiroz](https://github.com/Ludmimquiroz))
  * *Responsabilidades:* Desarrollo de su perfil personal, integración de la descripción de la bitácora, ajustes finales de diseño responsivo y armado del Readme.

---

## 🤖 Uso directo de inteligencia artificial

El equipo integró herramientas de Inteligencia Artificial como **asistentes técnicos y creativos** en distintas etapas del desarrollo, manteniendo siempre la auditoría y reescritura humana de los resultados:

* **ChatGPT:**
  * Generación y homogeneización de prompts para los avatares estilo 3D de cada integrante.
  * Adaptación visual de logotipos e íconos.
* **Gemini (3 Flash / Pro):**
  * Asistencia técnica en la migración de arquitectura HTML/JS estática a React 18.
  * Estructuración del árbol de componentes y depuración de rutas con `react-router-dom`.
* **Claude:**
  * Refinamiento de estilos CSS avanzados (transformaciones 3D e isométricas).
  * Optimización de animaciones para la rotación de cartas y emojis reactivos.

---

## Contexto académico

* **Materia:** Desarrollo de Sistemas Web · Front End
* **Institución:** Universidad / Instituto de Formación Técnica
* **Trabajo Práctico:** Trabajo Práctico Grupal Nº 2 (TP2)
* **Cuatrimestre:** 2º Cuatrimestre de 2026
* **Grupo:** Grupo N° 24
