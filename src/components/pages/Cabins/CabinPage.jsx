import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import CabanaList from './CabanaList';
import RegistroCabanaForm from './RegitroCabanaForm';

const CabinsPage = () => {
  const [cabanas, setCabanas] = useState([]);
  const [cabanaEnEdicion, setCabanaEnEdicion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddCabana = (nuevaCabana) => {
    if (cabanaEnEdicion) {
      setCabanas(
        cabanas.map((cabana) =>
          cabana.id === cabanaEnEdicion.id ? { ...nuevaCabana, id: cabanaEnEdicion.id } : cabana
        )
      );
      setCabanaEnEdicion(null);
    } else {
      setCabanas([...cabanas, { ...nuevaCabana, id: cabanas.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleEditCabana = (cabana) => {
    setCabanaEnEdicion(cabana);
    setShowModal(true);
  };

  const handleRemoveCabana = (id) => {
    setCabanas(cabanas.filter(cabana => cabana.id !== id));
  };

  const handleCloseModal = () => {
    setCabanaEnEdicion(null);
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Gestión de Cabañas</h1>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>Agregar Nueva Cabaña</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CabanaList cabanas={cabanas} onEdit={handleEditCabana} onRemove={handleRemoveCabana} />
        </Col>
      </Row>

      {/* Modal para el Formulario */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{cabanaEnEdicion ? 'Editar Cabaña' : 'Registrar Nueva Cabaña'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistroCabanaForm onAddCabana={handleAddCabana} cabanaEnEdicion={cabanaEnEdicion} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CabinsPage;
