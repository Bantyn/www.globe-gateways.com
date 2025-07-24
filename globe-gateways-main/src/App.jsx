import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';
import Navbar from './components/navbar.jsx';
import Login from './components/login.jsx';
import Sign from './components/sign.jsx';
import Home from './pages/home.jsx';
import Template from './components/template.jsx';

import Articals from '../src/pages/articals.jsx';
import PhotoOfDay from '../src/pages/photoOfDay.jsx';
import Account from '../src/pages/account.jsx';
import About from '../src/pages/about.jsx';

// import Shery from "sheryjs";
import './assets/css/style.css';
import './assets/js/main.js';
import GlowingCursor from "../src/components/glowingCursor.jsx";



// import React, { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';

// gsap.registerPlugin(ScrollTrigger);

// const Main = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // Initialize Locomotive Scroll
//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 0.08,
//       multiplier: 1,
//     });

//     // Tell ScrollTrigger to use proxy with Locomotive Scroll
//     ScrollTrigger.scrollerProxy(scrollRef.current, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
//     });

//     // Update ScrollTrigger on scroll
//     locoScroll.on('scroll', ScrollTrigger.update);

//     // Refresh ScrollTrigger when window resizes or content updates
//     ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

//     // Manually refresh after setup
//     ScrollTrigger.refresh();

//     // Cleanup
//     return () => {
//       ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
//       locoScroll.destroy();
//     };
//   }, []);

//   return (
//     <div id="main" data-scroll-container ref={scrollRef}>
//       <App />
//     </div>
//   );
// };

// // ReactDOM.createRoot(document.getElementById('root')).render(<Main />);?


export default function App() {
  return (
    <>
      <GlowingCursor />
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articals' element={<Articals />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/template' element={<Template />} />
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
