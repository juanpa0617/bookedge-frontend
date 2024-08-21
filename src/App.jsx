import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTable from './components/pages/users/UserTable';
import Cabins from './components/pages/Cabins/Cabinstable';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/cabins" element={<Cabins />} />
        
        
      </Routes>
      
    </Router>
  );
}


export default App;
