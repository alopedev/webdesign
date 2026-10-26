'use client';
// Ejemplo de entrada orquestada con GSAP: los hijos con [data-entra] aparecen
// escalonados. El contenido está en el HTML del servidor, así que se ve sin JS;
// GSAP solo añade la animación. Con prefers-reduced-motion, solo fundido.
import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Entrada({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-entra]', { opacity: 0, y: 24, duration: 0.6, ease: 'power2.out', stagger: 0.06 });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('[data-entra]', { opacity: 0, duration: 0.4, ease: 'none', stagger: 0.06 });
      });
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
