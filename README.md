# Devopoly · TP2 Grupo 24

Aplicación web desarrollada con React para presentar al equipo, organizar sus
contenidos y convertir la propuesta de Devopoly en una experiencia interactiva optimizada
El proyecto toma la idea del Monopoly como identidad visual: las tecnologías
son propiedades, los perfiles son jugadores y las distintas secciones forman
parte del tablero.

## Enlaces

- **Repositorio:** [github.com/peterbusta/TP2_Grupo24](https://github.com/peterbusta/TP2_Grupo24)
- **Deploy en Vercel:** pendiente de publicación

## Contenidos

- [Portada y tablero](#portada-y-tablero)
- [Perfiles](#perfiles)
- [Mazo tecnológico](#mazo-tecnológico)
- [API pública](#api-pública)
- [Árbol de componentes](#árbol-de-componentes)
- [Bitácora](#bitácora)
- [Tecnologías](#tecnologías)
- [Integrantes](#integrantes)
- [Uso de inteligencia artificial](#uso-de-inteligencia-artificial)

## Portada y tablero

La portada presenta la propuesta de Devopoly mediante un tablero interactivo.
Permite tirar los dados, recorrer las casillas, consultar propiedades
tecnológicas, sacar cartas de Suerte y Arca Comunal y acceder a distintas
secciones de la aplicación.

## Perfiles

La aplicación incluye un perfil React para cada integrante del equipo. Cada
perfil presenta:

- Identidad, avatar, ubicación y edad.
- Habilidades técnicas organizadas como niveles de renta.
- Contenidos personales.
- Interacciones con mazos de películas y discos cuando corresponde.
- Trailers de películas mediante reproductores embebidos.
- Audios reproducibles desde la interfaz.

## Mazo tecnológico

El mazo se carga desde un archivo JSON local con 25 registros relacionados con
tecnologías, herramientas y conceptos del proyecto. Cada carta permite consultar
información adicional y cuenta con:

- Búsqueda por texto.
- Filtro por grupo temático.
- Ordenamiento por nombre o precio.
- Mensaje cuando no hay resultados.
- Restablecimiento de filtros.
- Animación para girar la carta.

## API pública

El desafío del banquero utiliza la API pública
[CountriesNow](https://countriesnow.space/) para consultar nombres y banderas de
países.

La interfaz contempla:

- Estado de carga.
- Estado de error.
- Selección de una respuesta.
- Puntaje y racha.
- Generación de nuevas rondas.

## Árbol de componentes

La sección **Árbol de componentes** representa la jerarquía real de la
aplicación y permite expandir o contraer sus ramas principales.

La estructura comienza en `main.jsx` y continúa por `StrictMode`,
`BrowserRouter`, `SilencioProvider`, `App`, la sidebar, el contenedor de rutas y
las páginas principales.

## Bitácora

La bitácora registra decisiones, procesos, dificultades y aprendizajes del
equipo durante el desarrollo. Está organizada en secciones desplegables para
facilitar su actualización dentro de la aplicación.

## Tecnologías

- React 18
- React Router DOM
- React Bootstrap
- Bootstrap 5
- Vite
- JavaScript
- CSS
- JSON local

## Instalación y ejecución

Requisitos:

- Node.js
- npm

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Generar la versión de producción:

```bash
npm run build
```

## Integrantes

- **Flavia Berzuini** — [GitHub](https://github.com/FlaviaBerzuini)
- **Pedro Bustamante** — [GitHub](https://github.com/peterbusta)
- **Ludmila Quiroz** — [GitHub](https://github.com/Ludmimquiroz)
- **Brian Sabio** — [GitHub](https://github.com/BrianSabio)

### Responsabilidades

- **Flavia:** estructura del sitio, funcionalidades principales y lógica general.
- **Pedro:** creación del repositorio, implementación de su perfil y
  modificaciones funcionales en los perfiles.
- **Brian:** implementación de su perfil, estructura de la bitácora y árbol de
  componentes.
- **Ludmila:** implementación de su perfil y correcciones finales.

## Uso de inteligencia artificial

El equipo utilizó herramientas de inteligencia artificial como asistencia
durante el diseño, la migración, la implementación y la depuración del
proyecto. Todas las sugerencias fueron revisadas, adaptadas y probadas por el
equipo antes de incorporarse al código.

### Aplicaciones y modelos

- **Gemini:** exploración de diseño y asistencia en la migración desde el
  proyecto anterior hacia React.
- **Claude:** mejora de funcionalidades y depuración de código.
- **ChatGPT:** diseño y generación de imágenes e íconos.

Modelos utilizados: Gemini, Claude y ChatGPT.

## Licencia y contexto académico

Proyecto realizado para la materia **Desarrollo de Sistemas Web · Front End**,
Trabajo Práctico Grupal 2, segundo cuatrimestre de 2026.
