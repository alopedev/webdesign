// Convierte la línea central de un trazo de KanjiVG (viewBox 0 0 109 109) en el
// contorno de una pincelada: entra con presión, adelgaza y acaba según su tipo
// (止め parar, はね gancho, 払い barrido). Funciones puras: el servidor y el
// navegador calculan lo mismo, así que el HTML ya trae los trazos dibujados.

type P = [number, number];

// Solo los comandos que usa KanjiVG: M, C, S, L (y sus relativos)
function curvas(d: string): [P, P, P, P][] {
  const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g) ?? [];
  const out: [P, P, P, P][] = [];
  let i = 0, cmd = '', cur: P = [0, 0], prevCtrl: P | null = null;
  const num = () => parseFloat(tokens[i++]);
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) cmd = tokens[i++];
    const rel = cmd === cmd.toLowerCase();
    const pt = (): P => { const x = num(), y = num(); return rel ? [cur[0] + x, cur[1] + y] : [x, y]; };
    switch (cmd.toLowerCase()) {
      case 'm': cur = pt(); prevCtrl = null; cmd = rel ? 'l' : 'L'; break;
      case 'c': { const c1 = pt(), c2 = pt(), e = pt(); out.push([cur, c1, c2, e]); prevCtrl = c2; cur = e; break; }
      case 's': {
        const c1: P = prevCtrl ? [2 * cur[0] - prevCtrl[0], 2 * cur[1] - prevCtrl[1]] : cur;
        const c2 = pt(), e = pt(); out.push([cur, c1, c2, e]); prevCtrl = c2; cur = e; break;
      }
      case 'l': { const e = pt(); out.push([cur, cur, e, e]); prevCtrl = null; cur = e; break; }
      default: i++;
    }
  }
  return out;
}

// Puntos a distancia constante a lo largo del trazo
function muestrea(d: string, paso = 0.8): P[] {
  const poli: P[] = [];
  for (const [a, b, c, e] of curvas(d)) {
    for (let k = poli.length ? 1 : 0; k <= 24; k++) {
      const t = k / 24, u = 1 - t;
      poli.push([
        u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * e[0],
        u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * e[1],
      ]);
    }
  }
  const out: P[] = [poli[0]];
  let resto = 0;
  for (let k = 1; k < poli.length; k++) {
    const [x0, y0] = poli[k - 1], [x1, y1] = poli[k];
    const seg = Math.hypot(x1 - x0, y1 - y0);
    let s = paso - resto;
    while (s <= seg) { const t = s / seg; out.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t]); s += paso; }
    resto = seg - (s - paso);
  }
  const fin = poli[poli.length - 1];
  if (Math.hypot(fin[0] - out[out.length - 1][0], fin[1] - out[out.length - 1][1]) > 0.2) out.push(fin);
  return out;
}

const BARRIDO = /[㇒㇏㇀㇓㇙]/; // 払い: acaba afilado
const GANCHO = /[㇚㇁㇂㇃㇆㇈㇉㇌㇍㇖㇟㇢]/; // はね: gancho final
const PUNTO = /㇔/;

// Grosor relativo (0–1,3) en la posición t (0–1) del trazo
function presion(t: number, tipo: string, semilla: number): number {
  const entrada = t < 0.07 ? 0.62 + 0.5 * Math.sin((t / 0.07) * Math.PI * 0.6) : 1;
  const pulso = 0.9 + 0.06 * Math.sin(semilla * 2.3 + t * 6);
  if (PUNTO.test(tipo)) return 0.35 + 0.85 * Math.sin(Math.min(t, 0.85) / 0.85 * Math.PI * 0.5);
  if (tipo.startsWith('㇏')) {
    const ensancha = t > 0.45 ? 1 + 0.4 * Math.min(1, (t - 0.45) / 0.35) : 1;
    const afila = t > 0.82 ? 1 - ((t - 0.82) / 0.18) ** 1.2 * 0.9 : 1;
    return entrada * pulso * ensancha * afila;
  }
  if (BARRIDO.test(tipo)) return entrada * pulso * (t > 0.5 ? 1 - ((t - 0.5) / 0.5) ** 1.5 * 0.88 : 1);
  if (GANCHO.test(tipo)) return entrada * pulso * (t > 0.86 ? 1 - ((t - 0.86) / 0.14) * 0.8 : 1);
  if (!tipo) return entrada * pulso * (t > 0.7 ? 1 - ((t - 0.7) / 0.3) ** 2 * 0.55 : 1); // kana
  return entrada * pulso * (t > 0.9 ? 1.06 : 1); // 止め: se apoya al parar
}

const r = (n: number) => Math.round(n * 10) / 10;

export type Pincelada = { contorno: string; centro: string; largo: number };

export function pincelada(d: string, tipo: string, grosor: number, semilla: number): Pincelada {
  const pts = muestrea(d);
  const n = pts.length;
  const izq: P[] = [], der: P[] = [];
  const anchos: number[] = [];
  for (let k = 0; k < n; k++) {
    const a = pts[Math.max(0, k - 2)], b = pts[Math.min(n - 1, k + 2)];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / len, ny = (b[0] - a[0]) / len;
    const w = (grosor * presion(n > 1 ? k / (n - 1) : 0, tipo, semilla)) / 2;
    anchos.push(w);
    izq.push([pts[k][0] + nx * w, pts[k][1] + ny * w]);
    der.push([pts[k][0] - nx * w, pts[k][1] - ny * w]);
  }
  const wFin = Math.max(0.3, anchos[n - 1]), wIni = Math.max(0.3, anchos[0]);
  const lado = (ps: P[]) => ps.map(p => `${r(p[0])},${r(p[1])}`).join(' ');
  const contorno =
    `M${lado(izq.slice(0, 1))}L${lado(izq.slice(1))}` +
    `A${r(wFin)},${r(wFin)} 0 0 0 ${lado(der.slice(-1))}` +
    `L${lado(der.slice(0, -1).reverse())}` +
    `A${r(wIni)},${r(wIni)} 0 0 0 ${lado(izq.slice(0, 1))}Z`;
  return { contorno, centro: d, largo: (n - 1) * 0.8 };
}

// Grosor base: los caracteres con muchos trazos necesitan un pincel más fino
export const grosorPara = (trazos: number) => Math.min(8.2, Math.max(4.6, 9 - trazos * 0.3));
