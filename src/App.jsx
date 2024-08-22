import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTable from './components/pages/users/UserTable';
import CabinsPage from './components/pages/Cabins/CabinPage';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserTable />} />
        <Route path='/Cabins' element={<CabinsPage />}/>
        
        
      </Routes>
      
    </Router>
  );
}


export default App;
