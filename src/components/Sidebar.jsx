import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import '../styles.css';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { path: '/', label: 'Portada del equipo' },
    { path: '/perfiles', label: 'Perfiles jugadores' },
    { path: '/herramientas', label: 'Datos locales (JSON)' },
    { path: '/api', label: 'API pública' },
    { path: '/arbol', label: 'Árbol de componentes' },
    { path: '/bitacora', label: 'Bitácora' },
  ];

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
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src="/img/logo.png" alt="Devopoly Logo" style={{ height: '35px' }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="d-flex flex-column p-0 overflow-hidden">
          <div className="d-none d-md-flex flex-column align-items-center mt-5 mb-3 pb-2 mx-3">
             <img src="/img/logo.png" alt="Devopoly Logo" className="img-fluid logo-3d" style={{ maxHeight: '95px' }} />
          </div>
          
          <Nav className="flex-column px-4 mt-2 gap-3">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) => `nav-link-custom text-decoration-none ${isActive ? 'active' : ''}`}
                onClick={handleClose}
              >
                {}
                <span className="nav-link-inner">{link.label}</span>
              </NavLink>
            ))}
          </Nav>

          {}
          <div className="sidebar-footer mt-auto p-4 text-center">
            <a href="https://github.com/tu-usuario/TP2_Grupo24" target="_blank" rel="noopener noreferrer" className="github-link mb-2 d-inline-block">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <p className="footer-text m-0 mt-1">© 2026 Devopoly</p>
            <p className="footer-subtext m-0">Todos los derechos reservados.</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;