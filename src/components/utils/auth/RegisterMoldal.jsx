import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import './stylesLogin.css';

function RegisterModal({ isOpen, clickModal }) {
  // Estado del formulario y de los errores
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    birthdate: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Actualiza el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Valida el formulario
  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.length < 8) {
      newErrors.fullName = 'El nombre debe tener al menos 8 caracteres.';
    }
    if (!/^[0-9]{4,}$/.test(formData.idNumber)) {
      newErrors.idNumber = 'El número de identificación debe tener al menos 4 dígitos y no contener letras.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingrese un email válido.';
    }
    if (!formData.birthdate) {
      newErrors.birthdate = 'La fecha de nacimiento es obligatoria.';
    } else if (new Date(formData.birthdate) >= new Date()) {
      newErrors.birthdate = 'La fecha de nacimiento no puede ser mayor a la fecha actual.';
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(formData.password)) {
      newErrors.password = 'La contraseña debe contener al menos 10 caracteres, una mayúscula, una minúscula, un número y un carácter especial.';
    }

    return newErrors;
  };

  // Maneja el registro
  const handleRegister = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert('Registro exitoso');
      // Lógica para enviar los datos o continuar con el flujo
    }
  };

  return (
    <Modal show={isOpen} onHide={clickModal} centered size="lg">
      <Modal.Body>
        <Button variant="danger" onClick={clickModal} style={{ float: 'right' }}>X</Button>
        <Modal.Title className="text-center">Bienvenido al Registro</Modal.Title>
        <Row>
          <Col md={6} className="image-col">
            <img src="/assets/loslagos.png" alt="Logo" className="logo-img" />
          </Col>
          <Col md={6} className="form-col">
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Nombre Completo"
                  value={formData.fullName}
                  onChange={handleChange}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Número de Identificación</Form.Label>
                <Form.Control
                  type="text"
                  name="idNumber"
                  placeholder="Número de Identificación"
                  value={formData.idNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.idNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.idNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  isInvalid={!!errors.birthdate}
                />
                <Form.Control.Feedback type="invalid">{errors.birthdate}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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
