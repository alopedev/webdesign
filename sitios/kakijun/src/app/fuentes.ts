// Generado por scripts/fonts.js. Variables CSS: --font-biz-udpgothic, --font-shippori-mincho
import localFont from 'next/font/local';

const bizUdpgothic = localFont({
  src: [
    { path: './fonts/BIZUDPGothic-normal-9d347f.woff2', weight: '400', style: 'normal' },
    { path: './fonts/BIZUDPGothic-normal-126447.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-biz-udpgothic',
  display: 'swap',
});

const shipporiMincho = localFont({
  src: [
    { path: './fonts/ShipporiMincho-normal-65e145.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ShipporiMincho-normal-561c72.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-shippori-mincho',
  display: 'swap',
});

export const fuentes = [bizUdpgothic.variable, shipporiMincho.variable].join(' ');
