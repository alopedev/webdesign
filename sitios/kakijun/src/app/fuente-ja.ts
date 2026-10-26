// Subconjunto japonés de Shippori Mincho (lo genera scripts/fuente-ja.mjs).
// Va aparte de fuentes.ts para que scripts/fonts.js no lo borre al regenerarlo.
// En tokens.css se encadena detrás de la versión latina de la misma familia.
import localFont from 'next/font/local';

const shipporiJa = localFont({
  src: './fonts/ShipporiMincho-ja.woff2',
  weight: '500',
  variable: '--font-shippori-ja',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
});

export const fuenteJa = shipporiJa.variable;
