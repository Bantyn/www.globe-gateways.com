import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';
import Navbar from './components/navbar.jsx';
import Login from './components/login.jsx';
import Template from './components/template.jsx';

import Articals from '../src/pages/articals.jsx';
import PhotoOfDay from '../src/pages/photoOfDay.jsx';
import Account from '../src/pages/account.jsx';
import About from '../src/pages/about.jsx';


import './assets/css/style.css';
import './assets/js/main.js';
import GlowingCursor from "../src/components/glowingCursor.jsx";


export default function App() {
  return (
    <>
      <GlowingCursor />
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/articals' element={<Articals />} />
          <Route path='/login' element={<Login />} />
          <Route path='/template' element={<Template />} />
          <Route path='/photoofday' element={<PhotoOfDay />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <footer>
          {/* Footer content */}
        </footer>
    </>
  );
}
