import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function CabinTable({ show, onHide }) {
  const [formData, setFormData] = useState({
    cabinName: '',
    description: '',
    status: 'en servicio',
    capacity: '',
    amenities: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleAddAmenity = () => {
    setFormData({ ...formData, amenities: [...formData.amenities, ''] });
  };

  const handleRemoveAmenity = (index) => {
    const newAmenities = formData.amenities.filter((_, i) => i !== index);
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleAmenityChange = (index, value) => {
    const newAmenities = [...formData.amenities];
    newAmenities[index] = value;
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleSubmit = () => {
    // Lógica para manejar el submit del formulario
    console.log(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Agregar Cabaña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la Cabaña</Form.Label>
            <Form.Control
              type="text"
              name="cabinName"
              value={formData.cabinName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="en servicio">En Servicio</option>
              <option value="en mantenimiento">En Mantenimiento</option>
              <option value="fuera de servicio">Fuera de Servicio</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Capacidad de Personas</Form.Label>
            <Form.Control
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comodidades</Form.Label>
            {formData.amenities.map((amenity, index) => (
              <Row key={index} className="mb-2">
                <Col>
                  <Form.Control
                    type="text"
                    value={amenity}
                    onChange={(e) => handleAmenityChange(index, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button variant="danger" onClick={() => handleRemoveAmenity(index)}>
                    Eliminar
                  </Button>
                </Col>
              </Row>
            ))}
            <Button variant="secondary" onClick={handleAddAmenity}>
              Añadir Comodidad
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subir Imagen</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CabinTable;
