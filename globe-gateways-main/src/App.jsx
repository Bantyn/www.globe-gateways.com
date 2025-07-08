import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main'; 
import './assets/css/style.css';
import './assets/js/main.js'; 

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}
