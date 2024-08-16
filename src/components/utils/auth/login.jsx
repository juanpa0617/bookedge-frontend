import React, { useState } from 'react';
import RegisterModal from '../auth/RegisterMoldal';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import './stylesLogin.css';

function LoginSignin({ isOpen, clickModal }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const clickRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <>
      <Modal show={isOpen} onHide={clickModal} centered size="lg">
        <Modal.Body>
          <Button variant="danger" onClick={clickModal} style={{ float: 'right' }}>X</Button>
          <Modal.Title className="text-center">Bienvenido al Registro</Modal.Title>
          <Row>
            {/* Imagen grande ocupando la mitad del modal */}
            <Col md={6} className="image-col">
              <img 
                src="/assets/loslagos.png" 
                alt="Logo" 
                className="logo-img"
              />
            </Col>
            {/* Formulario */}
            <Col md={6} className="form-col">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    className="custom-control"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className="custom-control"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="custom-button">
                  Ingresar
                </Button>

                <Form.Group className="mt-3 text-center">
                  <Form.Text>
                    <a href="#!" className="link-text">¿Has olvidado tu contraseña?</a>
                  </Form.Text>
                  <br />
                  <Form.Text>
                    <a href="#!" className="link-text" onClick={clickRegister}>Registro</a>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <RegisterModal isOpen={isRegisterOpen} clickModal={closeRegister} />
    </>
  );
}

export default LoginSignin;
