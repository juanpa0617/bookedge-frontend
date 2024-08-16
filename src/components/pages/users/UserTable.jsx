import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import EliminarModal from './deleteUserModal';
import UserModal from './UserModel';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [modalState, setModalState] = useState({ showUserModal: false, showConfirmDelete: false, selectedUser: null });

  const toggleUserModal = (user = null) => setModalState({ ...modalState, selectedUser: user, showUserModal: !modalState.showUserModal });

  const toggleConfirmDelete = (user = null) => setModalState({ ...modalState, selectedUser: user, showConfirmDelete: !modalState.showConfirmDelete });

  const saveUser = (user) => {
    setUsers(user.id ? users.map(u => u.id === user.id ? user : u) : [...users, { ...user, id: users.length + 1 }]); // Usar el tamaño del array para el id
    toggleUserModal();
  }

  const deleteUser = () => {
    setUsers(users.filter(u => u.id !== modalState.selectedUser.id));
    toggleConfirmDelete();
  };

  return (
    <div >
      <Button variant="primary" onClick={() => toggleUserModal()} className='mb-3 ' >Agregar Usuario</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.documento}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
              <td>{user.rol}</td>
              <td className='col-md-2 col-lg-2'>
                <Button variant="warning" onClick={() => toggleUserModal(user)}>Editar</Button>{''}
                <Button variant="danger" onClick={() => toggleConfirmDelete(user)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UserModal
        show={modalState.showUserModal}
        handleClose={toggleUserModal}
        user={modalState.selectedUser}
        handleSave={saveUser}
      />

      <EliminarModal
        show={modalState.showConfirmDelete}
        handleClose={toggleConfirmDelete}
        handleConfirm={deleteUser}
        itemName={modalState.selectedUser ? modalState.selectedUser.nombre : ''}
      />
    </div>
  );
};

export default UserTable;
