import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Perfiles from './pages/Perfiles.jsx';
import { Container } from 'react-bootstrap';

// Componentes temporales para las rutas que todavía no armamos
const Portada = () => <h2 className="mt-4 text-white">Portada del Equipo (Próximamente)</h2>;
const Herramientas = () => <h2 className="mt-4 text-white">Datos Locales (JSON)</h2>;
const ApiExterna = () => <h2 className="mt-4 text-white">API Pública</h2>;
const Arbol = () => <h2 className="mt-4 text-white">Árbol de Componentes</h2>;
const Bitacora = () => <h2 className="mt-4 text-white">Bitácora de Trabajo</h2>;

function App() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <main className="flex-grow-1">
        <Container className="pt-5 pt-md-4 px-4">
          <Routes>
            <Route path="/" element={<Portada />} />
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