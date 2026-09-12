const scene = document.getElementById('scene');
const bloom = document.querySelector('.bloom-wrap');
const petals = document.getElementById('petals');
const cursorGlow = document.getElementById('cursorGlow');

for (let i = 0; i < 14; i++) {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.style.setProperty('--a', `${(360 / 14) * i}deg`);
  petal.style.opacity = 0.62 + (i % 4) * 0.08;
  petals.appendChild(petal);
}

let targetX = 0;
let targetY = 0;
let x = 0;
let y = 0;

function updatePointer(clientX, clientY) {
  const nx = clientX / innerWidth - 0.5;
  const ny = clientY / innerHeight - 0.5;
  targetX = nx;
  targetY = ny;
  cursorGlow.style.left = `${clientX}px`;
  cursorGlow.style.top = `${clientY}px`;
}

addEventListener('pointermove', (event) => updatePointer(event.clientX, event.clientY), { passive: true });
addEventListener('pointerdown', () => {
  scene.classList.add('pulse');
  clearTimeout(scene._pulseTimer);
  scene._pulseTimer = setTimeout(() => scene.classList.remove('pulse'), 220);
});

function animate() {
  x += (targetX - x) * 0.06;
  y += (targetY - y) * 0.06;

  bloom.style.setProperty('--px', `${x * 18}px`);
  bloom.style.setProperty('--py', `${y * 18}px`);
  bloom.style.setProperty('--ry', `${x * 8}deg`);
  bloom.style.setProperty('--rx', `${-y * 8}deg`);

  requestAnimationFrame(animate);
}

animate();