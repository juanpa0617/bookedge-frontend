import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignin from './components/utils/auth/Login'; // Asegúrate de que el nombre del componente sea correcto
import UserTable from './components/pages/users/UserTable';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/login" element={<LoginSignin />} />
      </Routes>
    </Router>
  );
}


export default App;
