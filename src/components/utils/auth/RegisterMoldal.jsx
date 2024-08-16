import React from 'react';
import './stylesLogin.css';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

function RegisterModal({ isOpen, clickModal }) {
  return (
    <Modal show={isOpen} onHide={clickModal} centered size="lg">
      <Modal.Body>
        <Button variant="danger" onClick={clickModal} style={{ float: 'right' }}>X</Button>
        <Modal.Title className="text-center">Bienvenido al Registro</Modal.Title>
        <Row>
          {/* Imagen grande ocupando la mitad del modal */}
          <Col md={6} className="image-col">
            <img src="/assets/loslagos.png" alt="Logo" className="logo-img" />
          </Col>
          {/* Formulario */}
          <Col md={6} className="form-col">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre Completo"
                  className="custom-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Número de Identificación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Número de Identificación"
                  className="custom-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  className="custom-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="custom-control"
                />
                <Form.Text className="text-muted">
                  We’ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="custom-control"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="custom-button">
                Registrarte
              </Button>

              <Form.Group className="mt-3 text-center">
                <Form.Text>
                  <a href="#!" className="link-text">¿Ya tienes cuenta?</a>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;
