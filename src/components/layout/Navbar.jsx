import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginSignin from "../utils/auth/Login";
import RegisterModal from "../utils/auth/RegisterMoldal";
export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const clickLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const clickRegisterModal = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            BookEdge
          </NavLink>
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
                <NavLink className="nav-link" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Usuarios
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Botón para abrir el modal de inicio de sesión */}
        <div>
          <button
            type="button"
            className="btn navbar-brand bg-primary "
            onClick={clickLoginModal}
            style={{ fontSize: '14px', padding: '6px 12px' }}
          >
            Iniciar Sesión
          </button>
        </div>
        {/* Botón para abrir el modal de registro */}
        <div>
          <button
            type="button"
            className="btn navbar-brand bg-primary"
            onClick={clickRegisterModal}
            style={{ fontSize: '14px', padding: '6px 12px' }}
          >
            Registrarse
          </button>
        </div>
      </nav>

      {/* Modal que contiene el formulario de inicio de sesión */}
      {isLoginOpen && <LoginSignin isOpen={isLoginOpen} clickModal={clickLoginModal} />}

      {/* Modal que contiene el formulario de registro */}
      {isRegisterOpen && <RegisterModal isOpen={isRegisterOpen} clickModal={clickRegisterModal} />}
    </>
  );
}
