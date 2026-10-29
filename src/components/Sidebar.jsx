import { useState, useEffect } from 'react'; 
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Offcanvas, Button, Nav, Collapse } from 'react-bootstrap';
import '../styles.css';

function Sidebar() {
  const [show, setShow] = useState(false);
  const [showPerfiles, setShowPerfiles] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/perfiles') {
      setShowPerfiles(true);
    }
  }, [location.pathname]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { path: '/', label: 'Portada' },
    { path: '/datos', label: 'Mazo Tecnológico' },
    { path: '/api', label: 'API Pública' },
    { path: '/arbol', label: 'Componentes' },
    { path: '/bitacora', label: 'Bitácora' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const integrantes = ['Flavia', 'Brian', 'Ludmila', 'Pedro'];

  const handlePerfilesClick = () => {
    if (location.pathname !== '/perfiles' || location.state?.jugador) {
      navigate('/perfiles', { state: null });
      setShowPerfiles(true);
    } else {
      setShowPerfiles(!showPerfiles);
    }
  };

  return (
    <>
      <Button 
        variant="outline-secondary" 
        className="d-md-none position-fixed top-0 start-0 m-3 z-3 bg-dark text-white" 
        onClick={handleShow}
      >
        ☰
      </Button>

      <Offcanvas 
        show={show} 
        onHide={handleClose} 
        responsive="md" 
        className="sidebar-devopoly d-flex flex-column" 
        style={{ width: '280px' }}
      >
        <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
          <Offcanvas.Title>
            <img src="/img/logo.png" alt="Devopoly Logo" style={{ height: '35px' }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="d-flex flex-column p-0">
          
          <div className="d-none d-md-flex flex-column align-items-center mt-4 mb-2 pb-2 mx-3">
             <img src="/img/logo.png" alt="Devopoly Logo" className="img-fluid logo-3d" style={{ maxHeight: '85px' }} />
          </div>
          
          <Nav className="flex-column px-3 mt-2 gap-2 flex-grow-1">
            
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link-custom text-decoration-none ${isActive ? 'active' : ''}`}
              onClick={handleClose}
            >
              <span className="nav-link-inner">Portada</span>
            </NavLink>

            {/* LINK 2: perfiles con submenú */}
            <div className="nav-item-group d-flex flex-column" style={{ gap: '2px' }}>
              
              {/* Botón padre */}
              <div 
                className={`nav-link-custom cursor-pointer text-decoration-none ${location.pathname === '/perfiles' ? 'active' : ''}`}
                onClick={handlePerfilesClick}
              >
                <div className="nav-link-inner d-flex justify-content-between align-items-center">
                  <span>Perfiles</span>
                  <span 
                    className="text-secondary fw-bold"
                    style={{ 
                      fontSize: '0.7rem', 
                      transition: 'transform 0.3s ease', 
                      transform: showPerfiles ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
              
              {/* Submenú de integrantes */}
              <Collapse in={showPerfiles}>
                <div className="px-4 pt-1 pb-2">
                  {integrantes.map(nombre => {
                    const isSubActive = location.state?.jugador === nombre;
                    return (
                      <NavLink
                        key={nombre}
                        to="/perfiles"
                        state={{ jugador: nombre }} 
                        className={() => `nav-link-custom text-decoration-none submenu-rebelde ${isSubActive ? 'active' : ''}`}
                        onClick={handleClose}
                      >
                        <span className="nav-link-inner-compact">{nombre}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </Collapse>
            </div>

            {/* RESTO DE LINKS */}
            {links.filter(l => l.path !== '/').map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) => `nav-link-custom text-decoration-none ${isActive ? 'active' : ''}`}
                onClick={handleClose}
              >
                <span className="nav-link-inner">{link.label}</span>
              </NavLink>
            ))}
          </Nav>

          {/* FOOTER */}
      <div 
        className="mt-5 pt-4 pb-3 w-100 text-center d-flex flex-column align-items-center" 
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }} 
      >
        <a 
          href="https://github.com/peterbusta/TP2_Grupo24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary text-decoration-none mb-2 hover-brillo"
          style={{ transition: 'all 0.3s ease' }}
        >
          <i className="bi bi-github fs-5 opacity-75"></i>
        </a>
        <small className="d-block text-secondary fw-medium" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
          © 2026 Devopoly
        </small>
        <small className="d-block text-secondary opacity-50 mt-1" style={{ fontSize: '0.7rem' }}>
          Todos los derechos reservados.
        </small>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;