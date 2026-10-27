/**
 * Brasil por Séries de Fourier (Epicycles)
 * Reprodução do que é demonstrado em:
 * https://youtube.com/shorts/CPDtGtcx6PM
 *
 * A curva fechada do Brasil é decomposta via DFT.
 * Cada coeficiente vira um círculo (epiciclo) com
 * frequência, amplitude e fase. A ponta do último
 * vetor traça o contorno.
 */

// Pontos simplificados do contorno do Brasil (coordenadas normalizadas ~ [-1,1])
const BRAZIL_POINTS = [
  // Costa leste / nordeste → sul
  [0.72, -0.55], [0.78, -0.48], [0.82, -0.38], [0.85, -0.25],
  [0.86, -0.12], [0.84, 0.02],  [0.80, 0.15],  [0.74, 0.28],
  [0.68, 0.40],  [0.62, 0.50],  [0.55, 0.58],  [0.48, 0.64],
  [0.40, 0.68],  [0.32, 0.70],  [0.24, 0.69],  [0.18, 0.65],
  [0.14, 0.58],  [0.12, 0.50],  [0.10, 0.42],  [0.08, 0.34],
  // Sul
  [0.06, 0.26],  [0.04, 0.18],  [0.02, 0.10],  [0.00, 0.02],
  [-0.02, -0.06],[-0.04, -0.14],[-0.06, -0.22],[-0.08, -0.30],
  [-0.10, -0.38],[-0.12, -0.46],[-0.14, -0.52],[-0.16, -0.56],
  // Sudoeste / fronteira
  [-0.20, -0.58],[-0.26, -0.57],[-0.32, -0.54],[-0.38, -0.50],
  [-0.44, -0.46],[-0.50, -0.42],[-0.55, -0.36],[-0.58, -0.28],
  [-0.60, -0.20],[-0.60, -0.12],[-0.58, -0.04],[-0.55, 0.04],
  // Oeste / Amazônia
  [-0.52, 0.12], [-0.50, 0.20], [-0.48, 0.28], [-0.46, 0.36],
  [-0.44, 0.44], [-0.42, 0.52], [-0.40, 0.58], [-0.38, 0.62],
  [-0.34, 0.64], [-0.28, 0.64], [-0.22, 0.62], [-0.16, 0.58],
  // Norte
  [-0.10, 0.54], [-0.04, 0.50], [0.02, 0.46],  [0.08, 0.42],
  [0.14, 0.38],  [0.20, 0.34],  [0.26, 0.28],  [0.32, 0.20],
  [0.38, 0.10],  [0.44, -0.02], [0.50, -0.14], [0.56, -0.26],
  [0.62, -0.36], [0.66, -0.44], [0.70, -0.50], [0.72, -0.55]
];

// ---------- Tipos e utilitários ----------
class Complex {
  constructor(re = 0, im = 0) {
    this.re = re;
    this.im = im;
  }
  add(other) {
    return new Complex(this.re + other.re, this.im + other.im);
  }
  mult(other) {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }
  scale(s) {
    return new Complex(this.re * s, this.im * s);
  }
  magnitude() {
    return Math.hypot(this.re, this.im);
  }
  phase() {
    return Math.atan2(this.im, this.re);
  }
}

/**
 * Discrete Fourier Transform (O(N²) — suficiente para ~100-200 pontos)
 * Retorna array de { freq, amp, phase }
 */
function dft(points) {
  const N = points.length;
  const X = [];

  for (let k = 0; k < N; k++) {
    let sum = new Complex(0, 0);
    for (let n = 0; n < N; n++) {
      const phi = (2 * Math.PI * k * n) / N;
      const c = new Complex(Math.cos(phi), -Math.sin(phi));
      sum = sum.add(new Complex(points[n][0], points[n][1]).mult(c));
    }
    sum = sum.scale(1 / N);
    X.push({
      freq: k,
      amp: sum.magnitude(),
      phase: sum.phase()
    });
  }

  // Ordena por amplitude (maior primeiro) — visualmente mais agradável
  X.sort((a, b) => b.amp - a.amp);
  return X;
}

// ---------- Canvas e animação ----------
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circlesSlider = document.getElementById("circles");
const circlesValue = document.getElementById("circlesValue");
const speedSlider = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");
const btnPlay = document.getElementById("btnPlay");
const btnReset = document.getElementById("btnReset");
const showCirclesCheck = document.getElementById("showCircles");

let fourier = [];
let path = [];
let time = 0;
let playing = true;
let animationId = null;

function resize() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function setup() {
  // Reamostra para ter número de pontos adequado
  const N = 120;
  const pts = [];
  for (let i = 0; i < N; i++) {
    const t = i / N;
    const idx = t * (BRAZIL_POINTS.length - 1);
    const i0 = Math.floor(idx);
    const i1 = Math.min(i0 + 1, BRAZIL_POINTS.length - 1);
    const f = idx - i0;
    const x = BRAZIL_POINTS[i0][0] * (1 - f) + BRAZIL_POINTS[i1][0] * f;
    const y = BRAZIL_POINTS[i0][1] * (1 - f) + BRAZIL_POINTS[i1][1] * f;
    pts.push([x, y]);
  }
  fourier = dft(pts);
  path = [];
  time = 0;
}

function epicycles(cx, cy, rotation, terms) {
  let x = cx;
  let y = cy;

  const maxCircles = Math.min(terms, fourier.length);

  for (let i = 0; i < maxCircles; i++) {
    const prevX = x;
    const prevY = y;
    const { freq, amp, phase } = fourier[i];
    const scale = Math.min(canvas.clientWidth, canvas.clientHeight) * 0.38;

    x += amp * scale * Math.cos(freq * time + phase + rotation);
    y += amp * scale * Math.sin(freq * time + phase + rotation);

    if (showCirclesCheck.checked) {
      // círculo
      ctx.beginPath();
      ctx.strokeStyle = "rgba(96, 165, 250, 0.28)";
      ctx.lineWidth = 1;
      ctx.arc(prevX, prevY, amp * scale, 0, Math.PI * 2);
      ctx.stroke();

      // raio
      ctx.beginPath();
      ctx.strokeStyle = "rgba(147, 197, 253, 0.55)";
      ctx.lineWidth = 1.2;
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  return { x, y };
}

function draw() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;

  ctx.clearRect(0, 0, w, h);

  // fundo sutil
  ctx.fillStyle = "#0a0e17";
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2 + 10;

  const terms = parseInt(circlesSlider.value, 10);
  const tip = epicycles(cx, cy, 0, terms);

  // adiciona ponto ao caminho
  path.unshift(tip);
  const maxPath = Math.floor(fourier.length * 1.1);
  if (path.length > maxPath) path.pop();

  // desenha o traço
  if (path.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = "#60a5fa";
    ctx.lineWidth = 2.2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
  }

  // ponto atual
  ctx.beginPath();
  ctx.fillStyle = "#93c5fd";
  ctx.arc(tip.x, tip.y, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  if (playing) {
    const speed = parseInt(speedSlider.value, 10) * 0.012;
    time += (2 * Math.PI) / fourier.length * speed;
    if (time > 2 * Math.PI * 2) {
      // deixa o traço completo e reinicia suavemente
      path = [];
      time = 0;
    }
  }
  draw();
  animationId = requestAnimationFrame(animate);
}

// Eventos
circlesSlider.addEventListener("input", () => {
  circlesValue.textContent = circlesSlider.value;
});
speedSlider.addEventListener("input", () => {
  speedValue.textContent = speedSlider.value;
});
btnPlay.addEventListener("click", () => {
  playing = !playing;
  btnPlay.textContent = playing ? "Pausar" : "Continuar";
});
btnReset.addEventListener("click", () => {
  path = [];
  time = 0;
});
window.addEventListener("resize", () => {
  resize();
});

// Inicialização
resize();
setup();
animate();
