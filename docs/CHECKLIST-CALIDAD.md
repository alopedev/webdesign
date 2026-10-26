# Checklist de calidad (antes de entregar)

## Automático
- [ ] `node scripts/capture.js sitios/<nombre>/index.html` termina sin avisos, o cada aviso está justificado en la entrega. Cubre scroll horizontal, h1 de más de 2 líneas, contraste de texto y errores de consola.
- [ ] He mirado las tres capturas, no solo el informe del script.

## Diseño
- [ ] Se ve a 390px, 768px y 1440px sin scroll horizontal, con los mismos márgenes exteriores.
- [ ] Ningún titular ocupa más de 2 líneas a ningún ancho.
- [ ] El test del competidor está escrito en el plan, con su «porque».
- [ ] En la captura de 390px, lo primero que se lee es el titular y lo segundo la acción principal.
- [ ] Hay un solo momento audaz y el resto lo acompaña.
- [ ] He quitado al menos un elemento decorativo que no aportaba.

## Accesibilidad (WCAG 2.2, nivel AA)
- [ ] Contraste de texto ≥ 4.5:1; texto grande (≥ 24px, o ≥ 18.5px en negrita) ≥ 3:1.
- [ ] Iconos, bordes de campos y estados ≥ 3:1 contra su fondo.
- [ ] Rojos y colores saturados de marca medidos, no supuestos: #E61E32 da ~4,6:1 con negro y blanco (justo para texto pequeño). En escalas de neutros tintados, los pasos medios suelen quedarse en ~3:1 (solo texto grande).
- [ ] Todo se puede usar con teclado y el foco es visible; una cabecera fija no lo tapa (`scroll-padding-top`).
- [ ] Objetivos táctiles de 24×24px como mínimo; 44px en móvil.
- [ ] Con zoom al 200 % el texto crece y nada se corta.
- [ ] Contraste medido, no redondeado: 4,49:1 no cumple 4,5:1.
- [ ] Con `prefers-reduced-motion` desaparece el desplazamiento; se conservan los fundidos.
- [ ] Animaciones solo con `transform` y `opacity`; interfaz por debajo de 300ms.
- [ ] HTML semántico (`header`, `main`, `nav`, un solo `h1`), `alt` en imágenes, `lang` en `<html>`.

## Rendimiento (Core Web Vitals, percentil 75)
- [ ] LCP ≤ 2,5 s: imagen principal optimizada (AVIF/WebP), con `fetchpriority="high"` y sin `loading="lazy"`.
- [ ] La página se lee con JS desactivado (nada depende de una animación para verse).
- [ ] INP ≤ 200 ms: sin JS pesado en el hilo principal.
- [ ] CLS ≤ 0,1: imágenes y vídeos con dimensiones, fuentes con `font-display: swap` y fuente de respaldo ajustada (`size-adjust`).
- [ ] Fuentes autoalojadas en WOFF2 (cargar Google Fonts desde su servidor tiene riesgo legal en la UE).
- [ ] Máximo 2 familias tipográficas y solo los pesos usados.
- [ ] Licencia de cada fuente comprobada para uso web comercial.

## Código
- [ ] Todos los valores de diseño salen de variables CSS en `:root`.
- [ ] Sin reglas CSS que se anulen entre sí por especificidad.
- [ ] Sin errores en la consola.
- [ ] Cada decisión del plan está de verdad en el código y se ve en las capturas.

---
**Fuentes:** W3C, [Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y 1.4.11 Non-text Contrast; Google, [Web Vitals](https://web.dev/articles/vitals).
