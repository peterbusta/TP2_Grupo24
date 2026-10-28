import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Perfiles from './pages/Perfiles.jsx';
import Tablero from './pages/Tablero.jsx';
import { Container } from 'react-bootstrap';

// Componentes temporales para las rutas que todavía no armamos
const Herramientas = () => <h2 className="mt-4 text-white">Datos locales (JSON) es muy probable que se incluya en el tablero porque lo que desaparecería esta sección</h2>;
const ApiExterna = () => <h2 className="mt-4 text-white">API pública</h2>;
const Arbol = () => <h2 className="mt-4 text-white">Árbol de componentes</h2>;
const Bitacora = () => <h2 className="mt-4 text-white">Bitácora</h2>;

function App() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <main className="flex-grow-1">
        <Container className="pt-5 pt-md-4 px-4">
          <Routes>
            <Route path="/" element={<Tablero />} />
            <Route path="/perfiles" element={<Perfiles />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/api" element={<ApiExterna />} />
            <Route path="/arbol" element={<Arbol />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;