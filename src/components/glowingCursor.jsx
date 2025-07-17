import React, { useEffect, useRef } from 'react';
import '../assets/css/glowingCursor.css';
export default function GlowingCursor() {
  const dotRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current;
    const moveDot = (e) => {
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
    }

    window.addEventListener('mousemove', moveDot);
    return () => {
      window.removeEventListener('mousemove', moveDot);
    };
  }, []);

  return <div ref={dotRef} className="glowing-cursor"></div>;
}
