function showMessage() {
  document.getElementById("hidden-message").classList.remove("hidden");
}

// Canvas untuk efek love dan bunga
const canvas = document.getElementById('effect-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const emojis = ["💖", "🌸", "🌹", "💘", "🌷"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 30 + 20;
    this.speedY = Math.random() * 1 + 0.5;
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  update() {
    this.y -= this.speedY;
    this.opacity -= 0.002;
    if (this.opacity <= 0) {
      this.reset();
    }
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${this.size}px serif`;
    ctx.fillText(this.emoji, this.x, this.y);
    ctx.globalAlpha = 1;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 30 + 20;
    this.speedY = Math.random() * 1 + 0.5;
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
    this.opacity = Math.random() * 0.5 + 0.5;
  }
}

function initParticles() {
  for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

initParticles();
animate();
