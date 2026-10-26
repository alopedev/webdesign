# Enseñanzas de los posts guardados en Threads

Registro de entrada: qué post aportó qué y en qué documento se colocó.
El material concreto (fuentes, paletas, webs, herramientas) vive en `REFERENCIAS.md`. Las reglas, en `PRINCIPIOS-ESTILO.md`, `ANTIPATRONES.md` y `CHECKLIST-CALIDAD.md`.

## Cómo añadir posts nuevos
1. Àlex pega enlaces, capturas o vídeos.
2. Leer el texto completo (los enlaces `threads.com/share/...` solo dan el inicio; renderizar el post con Playwright lo muestra entero, sin login).
3. Comprobar que cada web citada existe y hace lo que dice. Medir el contraste de cada paleta. Mirar la licencia de cada fuente.
4. Por cada hallazgo, decidir destino:
   - Regla que vale para cualquier web → `PRINCIPIOS-ESTILO.md`
   - Algo que delata IA, con su alternativa → `ANTIPATRONES.md`
   - Algo que se puede comprobar al entregar → `CHECKLIST-CALIDAD.md`
   - Material concreto para elegir (fuente, paleta, web, herramienta) → `REFERENCIAS.md`
   - Algo sobre cómo pedir el encargo → `BRIEF-PLANTILLA.md`
5. Si choca con una regla existente, anotarlo abajo y preguntar a Àlex.
6. Añadir una fila a la tabla de abajo.

## Resumen de lo aprendido (26/10/2026)
1. **El objeto real del cliente es el mejor hero** (Two Coats, .raw coffee).
2. **Un color, llevado al extremo, ya es una identidad** (Atla, Dyslove).
3. **Neutros con tinte, no grises puros**, en escalas de 6 pasos (@uiux.build).
4. **El contraste de tamaño entre dos familias hace la jerarquía** (@robiinluca).
5. **El gusto se da con referencias concretas, no con adjetivos.** Las librerías de prompts ayudan a estudiar, pero copiarlas lleva a la web de siempre.

## Registro

| Fecha | Post | Qué aporta | Dónde se colocó |
|---|---|---|---|
| 26/10/2026 | Vídeo: web Two Coats (pinturas) | Objeto del oficio como hero interactivo; la página se tiñe del color elegido | PRINCIPIOS §1 · REFERENCIAS §3 |
| 26/10/2026 | Vídeo: showcase packaging (.raw coffee, Soft Services, Atticosoap) | Ficha técnica en monoespaciada, matriz de puntos, troquel como imagen, objetos recortados | PRINCIPIOS §1 · ANTIPATRONES (monoespaciada con motivo) · REFERENCIAS §1 y §3 |
| 26/10/2026 | Capturas: identidad Atla (3) | Un color + negro en todos los soportes; serif de wordmark; choque de épocas; mayúsculas pequeñas con contenido | PRINCIPIOS §5 · ANTIPATRONES (eyebrows matizado) · REFERENCIAS §2 y §3 |
| 26/10/2026 | Captura: iconos Platen, DayCity, tone, Pool | Textura material en lo digital | PRINCIPIOS §6 · REFERENCIAS §3 |
| 26/10/2026 | Capturas: paletas @uiux.build (lila, café, azul) | Neutros tintados en 6 pasos; P4 no vale para texto | PRINCIPIOS §5 · CHECKLIST (contraste) · REFERENCIAS §2 |
| 26/10/2026 | [@dyslove.design — New Color Combos](https://www.threads.com/@dyslove.design/post/De9gzSeCG7b) | Colores con nombre y material; rojo saturado justo de contraste | PRINCIPIOS §5 · CHECKLIST · REFERENCIAS §2 |
| 26/10/2026 | [@robiinluca — font pairings](https://www.threads.com/@robiinluca/post/De7hsH-EewT) | Serif pequeña sobre sans enorme; licencias a revisar | PRINCIPIOS §4 · CHECKLIST (licencias) · ANTIPATRONES (Inter matizado) · REFERENCIAS §1 |
| 26/10/2026 | [@textura.eu — 6 design resources](https://www.threads.com/@textura.eu/post/De7reS_jFIN) (promete 6, lista 5) | getlayers, land-book, grainient, motionin, reelfolio | REFERENCIAS §2, §3, §4, §5 |
| 26/10/2026 | [@textura.eu — If you design with AI…](https://www.threads.com/@textura.eu/post/De2UaSjkVVC) | godly, landdding, fontinlogo, 60fps | REFERENCIAS §1 y §3 |
| 26/10/2026 | [@heytanzil — mismo título](https://www.threads.com/@heytanzil/post/De6v5RmDxrj) (promociona su jiro.build) | Variante del anterior; relacionado: siteinspire, loadmo.re, logosystem, collectui | REFERENCIAS §3 y §5 |
| 26/10/2026 | [@refilkae — Goated sites to get rid of AI slop UI](https://www.threads.com/@refilkae/post/DexWztHiC9x) | uncut.wtf, paper shaders, tweakcn, dialkit, number-flow | REFERENCIAS §1, §2, §4 |
| 26/10/2026 | @elux.space (relacionado en Threads) | "El prompt es el brief": estructura, referencias reales, gusto concreto | ANTIPATRONES (proceso) · BRIEF-PLANTILLA |

## Choques con reglas existentes
- **Inter, eyebrows en mayúsculas, fondo crema:** algunos guardados los usan bien. Resuelto 26/10/2026: Àlex eligió matizar, no quitar. Aplicado en `ANTIPATRONES.md`.
- **Monoespaciada fuera del código:** `taste-skill` la prohíbe; .raw coffee la usa con acierto. Resuelto: permitida si la idea central lo pide.
