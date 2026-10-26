# Compendio de diseño web

Investigación a fondo (26-10-2026) sobre los autores, principios y técnicas que hay detrás de una web con identidad propia y bien hecha. Es material de consulta: las reglas cortas que Claude aplica siempre están en `PRINCIPIOS-ESTILO.md`, `ANTIPATRONES.md` y `CHECKLIST-CALIDAD.md`, y salen de aquí.

Cada archivo tiene la misma estructura: referentes, principios (regla + por qué + cómo aplicarlo + fuente), antipatrones, técnicas modernas con soporte de navegadores, debates entre autores y lista de fuentes marcadas como [verificada] o [sin verificar].

| Archivo | Área | Referentes principales |
|---|---|---|
| [01-tipografia.md](01-tipografia.md) | Tipografía | Bringhurst, Butterick, Tim Brown, Santa Maria, Rutter, Utopia, Fonts In Use |
| [02-layout.md](02-layout.md) | Layout, composición y jerarquía | Müller-Brockmann, Boulton, Every Layout, Jen Simmons, CUBE CSS, Refactoring UI |
| [03-color-identidad.md](03-color-identidad.md) | Color, atmósfera y dirección de arte | Albers, Ottosson (OKLab), Evil Martians, Lea Verou, Radix, Refactoring UI |
| [04-movimiento.md](04-movimiento.md) | Movimiento e interacción | Val Head, Emil Kowalski, Rauno Freiberg, Josh Comeau, Apple HIG, NN/g |
| [05-ux-accesibilidad-rendimiento.md](05-ux-accesibilidad-rendimiento.md) | UX, accesibilidad y rendimiento | Rams, Norman, Krug, Nielsen, Laws of UX, Pickering, Soueidan, Keith, WCAG 2.2, Core Web Vitals |
| [06-ia-y-proceso.md](06-ia-y-proceso.md) | Diseñar con IA sin que lo parezca | Repaint, NN/g, Goree et al. (CHI 2021), «Design Theater» (arXiv 2026), Chayka vía Pixel Envy |

Las galerías de inspiración no están aquí: viven en `../REFERENCIAS.md` §3.

## Las 12 ideas que atraviesan todo el compendio

1. **El contenido manda sobre el lienzo.** La retícula, la escala y el color salen del mundo del cliente, no de una plantilla (Boulton, Simmons; 02). El caso Tubik para Awwwards convirtió el contenido real en el patrón visual (06).
2. **La homogeneización viene de los valores por defecto, no de la IA.** Los layouts web se parecen más de un 30 % más desde 2007 (Goree et al., CHI 2021; 06). La IA amplifica lo que ya pasaba con Bootstrap y las plantillas (Butterick; 01).
3. **Claude tiene su propio cliché, ya con nombre en prensa:** crema o beige, acento óxido, serif grande en cursiva y subtítulos espaciados (Chayka en The New Yorker, vía Pixel Envy; 06). Si la web se parece a eso, se leerá como IA.
4. **Prohibir no basta: cada «no» necesita un «sí» elegido por el brief.** Vetar fuentes solo empuja al modelo a la siguiente más probable (Repaint 2026; 06).
5. **Las referencias visuales guían más que los adjetivos, pero hay que elegirlas bien.** Son lo que mejor funciona (NN/g, Repaint), pero un moodboard pobre sigue dando «AI-average» (Pollock; 06).
6. **Lo convencional en la interacción, lo original en la forma.** Navegación, enlaces y botones siguen convenciones (ley de Jakob, Krug); la identidad va en composición, tipografía y color (05).
7. **Escalas fluidas, pero respetando el zoom.** `clamp()` con extremos en `rem`, máximo unas 2,5 veces el mínimo, y prueba al 200 % (Utopia, Roselli, web.dev; 01 y 02).
8. **El espaciado lo pone el contexto y la proximidad sustituye a los bordes.** Al menos un salto de escala entre «dentro del grupo» y «entre grupos» (Every Layout, CUBE CSS, NN/g; 02).
9. **Color en OKLCH, con la base elegida a ojo y los estados derivados.** El contraste queda garantizado por la escala (Radix, Stripe). WCAG 2 (4.5:1) es el suelo; APCA sirve para afinar, no es norma (03 y 05).
10. **La frecuencia decide si se anima.** Lo que se ve muchas veces, nada o casi nada; 100–300 ms en UI; nada nace de `scale(0)`; transiciones interrumpibles (Kowalski, Rauno, Apple HIG; 04).
11. **Movimiento reducido no es cero movimiento, y el contenido nunca depende de JS para verse.** Se cambian desplazamientos por fundidos; nada parte de `opacity: 0` en el CSS inicial; la imagen del hero lleva `fetchpriority="high"` (Keith, web.dev; 04 y 05).
12. **Verifica que el código cumple lo que promete el plan.** Más del 25 % de las justificaciones de diseño de las herramientas generativas no están implementadas («Design Theater»; 06).

## Cómo usarlo

- Al empezar una web: el protocolo de `CLAUDE.md` (sale del de [06-ia-y-proceso.md](06-ia-y-proceso.md#protocolo-10-pasos-para-que-claude-diseñe-con-identidad), que queda como origen).
- Al decidir tipografía, layout, color o movimiento: el archivo del área, sección «Principios» y «Técnicas modernas».
- Antes de entregar: «Antipatrones» de cada área como complemento de `CHECKLIST-CALIDAD.md`.
- Las cifras de soporte de navegadores son del 26-10-2026. Revísalas cada pocos meses.

## Fiabilidad

Unas 190 fuentes verificadas (más de 200 URL distintas) por seis investigaciones independientes. Lo que no se pudo abrir está marcado [sin verificar] en cada archivo y no debe tratarse como dato firme. Las citas textuales son cortas y en su idioma original.
