const cursor = document.querySelector('.glow-cursor');

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 700) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
});
