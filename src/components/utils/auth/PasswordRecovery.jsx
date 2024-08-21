import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RecovyPassword({ show, onHide }) {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validEmails = ['admin@example.com', 'test@test.com'];

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validEmails.includes(email)) {
      setSuccessMessage('Se ha enviado un correo electrónico para la recuperación de su contraseña.');
      setErrorMessage('');
    } else {
      setErrorMessage('El correo electrónico no está registrado.');
      setSuccessMessage('');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body>
        <Button variant="danger" onClick={onHide} style={{ float: 'right' }}>X</Button>
        <Modal.Title className="text-center">Recuperación de Contraseña</Modal.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              Ingrese su correo
            </Form.Text>
          </Form.Group>
          {successMessage && (
            <Form.Text className="text-success d-block mb-3">
              {successMessage}
            </Form.Text>
          )}
          {errorMessage && (
            <Form.Text className="text-danger d-block mb-3">
              {errorMessage}
            </Form.Text>
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RecovyPassword;
