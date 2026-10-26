import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fuentes } from './fuentes';
import './globals.css';
// import ScrollSuave from '@/components/ScrollSuave';

export const metadata: Metadata = {
  title: 'Nombre del cliente · qué hace',
  description: 'Una frase con lo que el visitante obtiene.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={fuentes}>
      <body>
        {/* Scroll suave solo si el plan lo pide: <ScrollSuave /> */}
        {children}
      </body>
    </html>
  );
}
