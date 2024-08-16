import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const UserModal = ({ show, handleClose, handleSave, user }) => {
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    email: "",
    telefono: "",
    rol: "empleado", // Rol por defecto
  });

  // Actualiza los datos del formulario al abrir el modal
  const initializeFormData = () => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        nombre: "",
        documento: "",
        email: "",
        telefono: "",
        rol: "empleado", // Rol por defecto
      });
    }
  };

  // Maneja los cambios en los inputs
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal show={show} onHide={handleClose} onShow={initializeFormData}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? "Editar Usuario" : "Agregar Usuario"}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          {["nombre", "documento", "email", "telefono"].map((field) => (
            <Form.Group controlId={`form${field}`} key={field}>
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
            </Form.Group>
          ))}
          <Form.Group controlId="formRole">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
            >
              <option value="admin">Admin</option>
              <option value="empleado">Empleado</option>
              <option value="cliente">Cliente</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button 
          variant="primary" 
          onClick={() => handleSave(formData)} // Maneja el envío del formulario directamente
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
