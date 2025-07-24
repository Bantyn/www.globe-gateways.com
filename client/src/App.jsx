import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';
import Navbar from './components/navbar.jsx';
import Login from './components/login.jsx';
import Sign from './components/sign.jsx';
import Home from './pages/home.jsx';
import Template from './components/template.jsx';

import Articals from './pages/articals.jsx';
import PhotoOfDay from './pages/photoOfDay.jsx';
import Account from './pages/account.jsx';
import About from './pages/about.jsx';
import './assets/css/style.css';
import './assets/js/main.js';
import GlowingCursor from "./components/glowingCursor.jsx";
export default function App() {
  return (
    <>
        <header> 
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
          <Route path='/articals' element={<Articals />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign' element={<Sign />} />
          {/* <Route path='/template' element={<Template />} /> */}
          <Route path='/photoofday' element={<PhotoOfDay />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>

        <footer>
          {/* Footer content */}
        </footer>
    </>
  );
}
