import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginSignin from '../utils/auth/login';
import RegisterModal from '../utils/auth/RegisterMoldal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  
  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">BookEdge</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Usuarios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cabins">Cabañas</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn navbar-brand bg-primary"
            onClick={openLoginModal}
            style={{ fontSize: '14px', padding: '6px 12px' }}
          >
            Iniciar Sesión
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn navbar-brand bg-primary"
            onClick={openRegisterModal}
            style={{ fontSize: '14px', padding: '6px 12px' }}
          >
            Registrarse
          </button>
        </div>
      </nav>

      {isLoginOpen && <LoginSignin isOpen={isLoginOpen} closeLoginModal={closeLoginModal} />}
      {isRegisterOpen && <RegisterModal isOpen={isRegisterOpen} clickModal={closeRegisterModal} />}
    </>
  );
}
