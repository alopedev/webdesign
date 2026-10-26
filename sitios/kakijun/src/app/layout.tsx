import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fuentes } from './fuentes';
import { fuenteJa } from './fuente-ja';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kakijun · escribe en español, traza en japonés',
  description: 'Escribe una palabra y un pincel la traza en japonés, en el orden de trazos de un calígrafo.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${fuentes} ${fuenteJa}`}>
      <body>{children}</body>
    </html>
  );
}
