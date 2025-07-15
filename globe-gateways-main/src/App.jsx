import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';
import Navbar from './components/navbar.jsx';
import Sign from './components/sign.jsx';
import Login from './components/login.jsx';
import Template from './components/template.jsx';
import './assets/css/style.css';
import './assets/js/main.js';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // important!
import GlowingCursor from "../src/components/glowingCursor.jsx";

export default function App() {
  const containerRef = useRef(null);
  
  return (
    <>
        <GlowingCursor></GlowingCursor>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/template' element={<Template/>}></Route>
        </Routes>        
      </>
  );
}