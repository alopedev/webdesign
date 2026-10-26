'use client';
// Scroll suave con Lenis, sincronizado con GSAP ScrollTrigger en un solo bucle.
// Solo si el plan lo justifica: cambia cómo se siente el scroll en toda la web.
// Lenis respeta prefers-reduced-motion por defecto (respectReducedMotion: true).
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSuave() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return null;
}
