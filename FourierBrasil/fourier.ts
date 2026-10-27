/**
 * Brasil por Séries de Fourier (Epicycles) — versão TypeScript
 * Reprodução do que é demonstrado em:
 * https://youtube.com/shorts/CPDtGtcx6PM
 */

interface Point {
  x: number;
  y: number;
}

interface FourierTerm {
  freq: number;
  amp: number;
  phase: number;
}

class Complex {
  constructor(public re: number = 0, public im: number = 0) {}

  add(other: Complex): Complex {
    return new Complex(this.re + other.re, this.im + other.im);
  }

  mult(other: Complex): Complex {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }

  scale(s: number): Complex {
    return new Complex(this.re * s, this.im * s);
  }

  magnitude(): number {
    return Math.hypot(this.re, this.im);
  }

  phase(): number {
    return Math.atan2(this.im, this.re);
  }
}

// Pontos simplificados do contorno do Brasil
const BRAZIL_POINTS: [number, number][] = [
  [0.72, -0.55], [0.78, -0.48], [0.82, -0.38], [0.85, -0.25],
  [0.86, -0.12], [0.84, 0.02],  [0.80, 0.15],  [0.74, 0.28],
  [0.68, 0.40],  [0.62, 0.50],  [0.55, 0.58],  [0.48, 0.64],
  [0.40, 0.68],  [0.32, 0.70],  [0.24, 0.69],  [0.18, 0.65],
  [0.14, 0.58],  [0.12, 0.50],  [0.10, 0.42],  [0.08, 0.34],
  [0.06, 0.26],  [0.04, 0.18],  [0.02, 0.10],  [0.00, 0.02],
  [-0.02, -0.06],[-0.04, -0.14],[-0.06, -0.22],[-0.08, -0.30],
  [-0.10, -0.38],[-0.12, -0.46],[-0.14, -0.52],[-0.16, -0.56],
  [-0.20, -0.58],[-0.26, -0.57],[-0.32, -0.54],[-0.38, -0.50],
  [-0.44, -0.46],[-0.50, -0.42],[-0.55, -0.36],[-0.58, -0.28],
  [-0.60, -0.20],[-0.60, -0.12],[-0.58, -0.04],[-0.55, 0.04],
  [-0.52, 0.12], [-0.50, 0.20], [-0.48, 0.28], [-0.46, 0.36],
  [-0.44, 0.44], [-0.42, 0.52], [-0.40, 0.58], [-0.38, 0.62],
  [-0.34, 0.64], [-0.28, 0.64], [-0.22, 0.62], [-0.16, 0.58],
  [-0.10, 0.54], [-0.04, 0.50], [0.02, 0.46],  [0.08, 0.42],
  [0.14, 0.38],  [0.20, 0.34],  [0.26, 0.28],  [0.32, 0.20],
  [0.38, 0.10],  [0.44, -0.02], [0.50, -0.14], [0.56, -0.26],
  [0.62, -0.36], [0.66, -0.44], [0.70, -0.50], [0.72, -0.55]
];

function dft(points: [number, number][]): FourierTerm[] {
  const N = points.length;
  const X: FourierTerm[] = [];

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

  X.sort((a, b) => b.amp - a.amp);
  return X;
}

// O restante do código de animação pode ser adaptado a partir de fourier.js
// (DOM, canvas, requestAnimationFrame etc.)
// Este arquivo serve como referência tipada da matemática central.

export { Complex, dft, BRAZIL_POINTS };
export type { Point, FourierTerm };
