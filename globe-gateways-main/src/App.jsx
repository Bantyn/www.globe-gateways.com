import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx'; 
import Navbar from './components/navbar.jsx'; 
import './assets/css/style.css';
import './assets/js/main.js'; 

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/navbar' element={<Navbar />} />
    </Routes>
  );
}
