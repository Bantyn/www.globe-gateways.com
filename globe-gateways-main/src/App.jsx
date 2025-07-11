import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Main from './components/main.jsx';
import Navbar from './components/navbar.jsx';
import Login from './components/login.jsx';
import './assets/css/style.css';
import './assets/js/main.js';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // important!

export default function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
        multiplier: 1.2,
        }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}