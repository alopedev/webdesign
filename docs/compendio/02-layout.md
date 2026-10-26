# Layout, composición y jerarquía visual

> Investigación: 26-10-2026. Las fuentes marcadas [verificada] se abrieron en esa fecha. Complementa `PRINCIPIOS-ESTILO.md` §3, §4 y §8 sin repetirlos.

## Referentes clave

**1. Josef Müller-Brockmann — *Grid Systems in Graphic Design* (Niggli, 1981; 10.ª ed. revisada 2016).** [draw-down.com](https://draw-down.com/products/grid-systems-in-graphic-design) · [niggli.ch](https://www.niggli.ch/en/products/rastersysteme-fur-die-visuelle-gestaltung)
El manual canónico de la retícula suiza: sistemas de 8 a 32 campos. Presentó su idea de la retícula en 1961.
- La retícula es una herramienta, no el diseño: "The grid system is an aid, not a guarantee" (cita reproducida en la ficha del libro del distribuidor; no la he cotejado con la página del libro).
- Enseñanza práctica: los campos se derivan de la unidad del texto (interlineado), no de un número de columnas elegido al azar. Por eso, en la web, la retícula debe salir de `line-height` y de la medida.

**2. Jan Tschichold — *The New Typography* (1928; ed. inglesa UC Press, 1995/2006).** [ucpress.edu](https://www.ucpress.edu/books/the-new-typography/paper)
Fijó la composición asimétrica y funcional de la modernidad. Importa sobre todo por lo que vino después: en 1945–46 se retractó en parte y volvió a la tipografía simétrica para libros, lo que provocó una polémica con Max Bill ([reseña de Brigitte Schuster sobre *Max Bill kontra Jan Tschichold*](https://brigitteschuster.com/book-review-bill-tschichold-dispute)). Tschichold acusó a los modernistas de compartir la misma «manía del orden» que los nazis.
- Enseñanza: la asimetría es una herramienta para textos funcionales (carteles, anuncios, interfaces), y la simetría sigue sirviendo para la lectura larga. Elige según el contenido, no por ideología.

**3. Ethan Marcotte — «Responsive Web Design» (A List Apart, 25-5-2010).** [alistapart.com](https://alistapart.com/article/responsive-web-design/)
Tres ingredientes: retícula fluida (proporciones, no píxeles), imágenes flexibles y media queries. El epígrafe (de John Allsopp) resume la actitud: "design for this flexibility".
- Enseñanza vigente: proporciones antes que anchos fijos.
- Enseñanza envejecida: la media query por *viewport* como mecanismo principal (ver Tensiones).

**4. Jen Simmons — Intrinsic Web Design y Experimental Layout Lab.** [Transcripción en The Big Web Show](https://zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) · [talks.jensimmons.com](https://talks.jensimmons.com/OlkvV7) · [labs.jensimmons.com](https://labs.jensimmons.com/)
Puso nombre a la «nueva era» del layout: Grid + Flexbox + multicolumna + flujo como un único sistema. Mezcla de pistas fijas, `fr`, `minmax()` y `auto` que se encogen en «fases» distintas, "all without any media queries". Su laboratorio recrea carteles y portadas (Vignelli, *Die Neue Typographie*, Grace Hopper como portada de revista) para demostrar la dirección de arte en la web.
- Enseñanza: diseña cómo se *comporta* cada pista al encoger (cuál colapsa, cuál se detiene, cuál nunca cambia), no tres maquetas fijas.

**5. Heydon Pickering y Andy Bell — *Every Layout*.** [every-layout.dev](https://every-layout.dev/rudiments/axioms/)
Primitivas de layout algorítmicas (Stack, Sidebar, Switcher, Cluster, Cover…) que responden al espacio del contenedor, no al viewport.
- "Think of yourself as the browser's mentor, rather than its micro-manager."
- Axioma de la medida en `ch`, aplicado globalmente con excepciones.
- Stack: "style the context, not the individual element(s)" — el espaciado vertical lo pone el padre con `.stack > * + *`.

**6. Andy Bell — CUBE CSS.** [cube.fyi](https://cube.fyi/) · [Composition](https://cube.fyi/composition.html)
Composición, Utilidad, Bloque, Excepción. Acepta la cascada ("embraced, not avoided"). La capa de composición es "a skeleton": cómo fluyen y se espacian los elementos, separado de su aspecto.

**7. James Gilyead y Trys Mudford — Utopia.** [utopia.fyi](https://utopia.fyi/blog/designing-with-fluid-type-scales/) · [calculadora de espacio](https://utopia.fyi/space/calculator/)
Dos escalas (p. ej. ratio 1,2 a 320 px y 1,333 a 1500 px) y el navegador interpola entre ellas. El espacio se deriva del paso 0 del tipo con multiplicadores (3xs 0,25 … 3xl 6), y los pares (`s-l`) cambian más de lo que cambia una sola talla.

**8. Adam Wathan y Steve Schoger — *Refactoring UI*.** [refactoringui.com](https://refactoringui.com/)
Jerarquía y espaciado para quien no es diseñador. Capítulos verificados en el índice: «Not all elements are equal», «De-emphasize to emphasize», «Labels are a last resort», «Start with too much white space», «Avoid ambiguous spacing». Proponen más espacio en lugar de más bordes.

**9. Mark Boulton — «A Richer Canvas».** [markboulton.co.uk](https://www.markboulton.co.uk/journal/a-richer-canvas/)
En la web no hay página. La restricción de la retícula debe salir del contenido: "Start designing from the content out, rather than the canvas in."

**10. Ahmad Shadeed — *Defensive CSS*.** [ishadeed.com](https://ishadeed.com/article/defensive-css/) · [defensivecss.dev](https://defensivecss.dev/)
Layouts que no se rompen con contenido real: `flex-wrap`, `min-width: 0`, `minmax(0, 1fr)`, `auto-fill` frente a `auto-fit`, `gap` en vez de `space-between`.

**11. Nielsen Norman Group — Ley de proximidad (Gestalt).** [nngroup.com](https://www.nngroup.com/articles/gestalt-proximity/)
"Items close together are likely to be perceived as part of the same group." La proximidad puede pesar más que el color o la forma.

## Principios

**1. La retícula sale del contenido, no del lienzo.**
**Por qué:** en la web no hay formato fijo. Una retícula de 12 columnas sin motivo produce la plantilla media.
**Cómo aplicarlo:** antes de escribir CSS, identifica la unidad del contenido (la medida del texto, el formato de la foto del cliente, la ficha de producto) y deriva las pistas de ella: `grid-template-columns: [full-start] 1fr [content-start] min(65ch, 100% - 2rem) [content-end] 1fr [full-end]`.
**Fuentes:** Boulton; Müller-Brockmann.

**2. Una retícula editorial con salidas a sangre, no un contenedor centrado.**
**Por qué:** el `max-width: 1200px; margin: auto` deja la página en una sola columna gris. Con líneas con nombre puedes romper la columna de forma controlada.
**Cómo aplicarlo:** usa un grid de tres pistas en el `main`, con `> * { grid-column: content }` y las excepciones `.bleed { grid-column: full }`. Ojo: `ch` depende del `font-size` del elemento, así que un pie de foto más pequeño se desalinea; Comeau acaba usando `rem` en la versión final.
**Fuentes:** [Josh W. Comeau, «Full-Bleed Layout»](https://www.joshwcomeau.com/css/full-bleed/).

**3. El espaciado pertenece al contexto (el padre), no al elemento.**
**Por qué:** el margen describe una relación entre vecinos. `p { margin-bottom }` deja huecos sobrantes al final de los contenedores.
**Cómo aplicarlo:** `.stack > * + * { margin-block-start: var(--space, 1.5em) }`, o `display: flex; flex-direction: column; gap`. Usa `margin-block-end: auto` en un hijo para separar grupos (arriba y abajo).
**Fuentes:** Every Layout (Stack); CUBE CSS (Composition).

**4. Proximidad antes que líneas: el espacio dentro de un grupo debe ser claramente menor que entre grupos.**
**Por qué:** el espaciado ambiguo (igual por todas partes) borra los grupos y obliga a añadir bordes y tarjetas.
**Cómo aplicarlo:** al menos un salto de escala entre niveles: dentro del grupo `--space-xs`, entre grupos `--space-l`, entre secciones `--space-2xl`. Comprueba en 375 px que, al apilarse, una etiqueta no queda más cerca del bloque siguiente que del suyo.
**Fuentes:** NN/g (proximidad); Refactoring UI («Avoid ambiguous spacing»).

**5. Empieza con demasiado espacio en blanco y recorta.**
**Por qué:** añadir espacio «hasta que deja de verse mal» da el mínimo, no el adecuado.
**Cómo aplicarlo:** primer pase con el doble del espaciado previsto entre secciones; reduce solo donde se rompa la relación entre bloques. Sustituye bordes y fondos por espacio antes de añadir otro separador.
**Fuentes:** Refactoring UI (título de capítulo verificado; el razonamiento procede de resúmenes de terceros [sin verificar en el libro]).

**6. Jerarquía por contraste de peso y color, también hacia abajo.**
**Por qué:** si solo haces grande lo importante, todo crece. Atenuar lo secundario es más barato y más limpio.
**Cómo aplicarlo:** tres niveles de color de texto (`--ink`, `--ink-soft`, `--ink-faint` con contraste AA) y dos pesos. Elimina las etiquetas cuando el formato del dato ya lo explica («Labels are a last resort»). Prueba: desenfoca la captura (`filter: blur(4px)`) y comprueba que se lee el orden de lectura.
**Fuentes:** Refactoring UI (capítulos «De-emphasize to emphasize», «Labels are a last resort»).

**7. Escala fluida de tipo y de espacio, con un único origen.**
**Por qué:** los saltos por breakpoint crean tamaños sin relación. Un mismo sistema da ritmo coherente en cualquier ancho.
**Cómo aplicarlo:** genera los tokens en utopia.fyi (`--step-0…5`, `--space-3xs…3xl`, pares `--space-s-l`). Usa los pares en el padding de sección para que el aire crezca más que el texto en escritorio.
**Fuentes:** Utopia.

**8. Clamp accesible: `rem` en los extremos, poco `vw`, máximo ≤ 2,5× el mínimo.**
**Por qué:** un tamaño basado en `vw` no crece con el zoom y puede incumplir WCAG 1.4.4.
**Cómo aplicarlo:** `font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)`; nunca `font-size: 5vw` a secas; `:root { font-size: 100% }`. Prueba al 200 % de zoom en Firefox y Safari. Esto afecta sobre todo a los titulares gigantes del «momento audaz».
**Fuentes:** [Adrian Roselli](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html); [web.dev, dic. 2025](https://web.dev/articles/baseline-in-action-fluid-type) (cita la regla ≤ 2,5× de Maxwell Barvian).

**9. Layout intrínseco: el componente responde a su espacio, no al viewport.**
**Por qué:** la misma tarjeta en una barra lateral de 300 px y en un main de 900 px ve el mismo viewport.
**Cómo aplicarlo:** Sidebar (`flex-wrap: wrap`; lateral `flex-basis: 20rem`; principal `flex-grow: 999; min-inline-size: 50%`), Switcher (`flex-basis: calc((40rem - 100%) * 999)`) o `@container`. Reserva `@media` para decisiones de página (navegación, retícula general).
**Fuentes:** Every Layout (Sidebar, Switcher); Jen Simmons.

**10. Diseña las fases del encogimiento.**
**Por qué:** una composición asimétrica que se convierte en una columna a 768 px pierde toda su identidad en móvil.
**Cómo aplicarlo:** combina tipos de pista: `grid-template-columns: minmax(1rem, 1fr) minmax(0, 8rem) minmax(20ch, 60ch) minmax(1rem, 3fr)`. La pista vacía `fr` colapsa primero; la de imagen, después; el texto nunca baja de su mínimo. Revisa a 375, 600, 900 y 1440 px.
**Fuentes:** Jen Simmons (Big Web Show).

**11. La asimetría necesita un eje; la simetría, un motivo.**
**Por qué:** la composición asimétrica suiza funciona porque todo se alinea a pocas líneas fuertes; sin eso es solo desorden.
**Cómo aplicarlo:** máximo 2 o 3 ejes verticales de alineación en toda la página (por ejemplo, la línea `content-start` y una línea a 1/3). Centra solo cuando el contenido es una pieza única (portada, cita) o lectura larga.
**Fuentes:** Tschichold y la polémica con Bill; Müller-Brockmann.

**12. Programa para el contenido real (CSS defensivo).**
**Por qué:** los títulos largos, los nombres en catalán o alemán y las listas de 1 o 7 elementos rompen las maquetas pensadas para 3.
**Cómo aplicarlo:** `flex-wrap: wrap` por defecto; `minmax(0, 1fr)` en lugar de `1fr`; `min-width: 0` en hijos de grid y flex; `gap` en lugar de `space-between`; `auto-fill` cuando un elemento solo no deba estirarse. Prueba con el texto más largo del brief y con 1 elemento.
**Fuentes:** Shadeed.

**13. Mide en caracteres y equilibra los titulares.**
**Por qué:** la medida es el axioma del que cuelga el resto, y los titulares con una viuda rompen la composición.
**Cómo aplicarlo:** `max-inline-size: 60ch` en texto (con la excepción global en `html, body, div, header, nav, main, footer`); `h1, h2 { text-wrap: balance }` (≤ 6 líneas en Chromium, ≤ 10 en Firefox); `p { text-wrap: pretty }`.
**Fuentes:** Every Layout (Axioms); [MDN text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap).

## Antipatrones

- **El contenedor centrado de 1200 px con todo dentro.** Es el layout más probable de una IA, y en pantallas anchas deja dos bandas muertas. Usa la retícula de líneas con nombre (principios 1 y 2).
- **La rejilla de 12 columnas por costumbre.** Una retícula de Bootstrap no tiene relación con el contenido (Boulton).
- **El espaciado uniforme (`gap: 2rem` en todo).** Sin diferencia entre «dentro» y «entre», no hay grupos (NN/g, Refactoring UI).
- **Bordes y tarjetas para separar lo que el espacio ya separaría** (Refactoring UI). Complementa el antipatrón de «filetes por todas partes».
- **Breakpoints en 768 y 1024 px.** Son tallas de dispositivo, no puntos donde el contenido se rompe (Marcotte, Simmons). Pon el punto de corte donde falla el componente, en `rem`.
- **Colapsar a una sola columna centrada en móvil, perdiendo la asimetría.** Diseña las fases (principio 10).
- **Titulares en `vw` puros**, que incumplen el zoom (Roselli).
- **`p { margin-bottom }` y espacio sobrante al final de cada bloque** (Every Layout, Stack).
- **El orden visual distinto del orden del DOM** (`order`, `grid-area`, `dense`, grid-lanes) sin probar con el teclado (WebKit).
- **El «layout roto» sin eje.** Superponer y rotar sin líneas de alineación comunes se lee como un error, no como una decisión.
- **Etiquetas para todo** («Precio:», «Fecha:») cuando el formato ya lo dice (Refactoring UI).

## Técnicas modernas (soporte consultado el 26-10-2026)

| Técnica | Estado | Uso en layout |
|---|---|---|
| `subgrid` | Baseline amplio desde sept. 2023 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)) | Alinear títulos, textos y botones de tarjetas hermanas a las mismas filas: `grid-row: span 3; grid-template-rows: subgrid`. Hereda las líneas con nombre del padre, de modo que un componente puede salir a `full` sin saber dónde está. |
| Container queries de tamaño y unidades `cqi` | Chrome 106, Firefox 110, Safari 16; ~95,9 % global ([caniuse](https://caniuse.com/css-container-queries)) | `container-type: inline-size` en el contenedor; `@container (inline-size > 40rem)`; `font-size: clamp(1.5rem, 4cqi, 3rem)` para titulares que se adaptan a su columna. |
| Container style queries | Parcial en Chrome (111+) y Safari (18+); completo en Firefox 151+ ([caniuse](https://caniuse.com/css-container-queries-style)) | Solo como mejora progresiva, p. ej. `@container style(--tema: oscuro)`. No basar el layout en ellas. |
| `:has()` | Baseline amplio desde dic. 2023 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)) | Layout según el contenido: `.card:has(> img)` pasa a dos columnas; `.grid:has(> :nth-child(5))` cambia la retícula según la cantidad. Ánclalo a contenedores concretos y usa `>`; no lo pongas en `body` ni en `*` (rendimiento). |
| `text-wrap: balance / pretty` | `text-wrap` Baseline amplio desde mar. 2024; los valores varían ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)) | Titulares equilibrados y párrafos sin viudas. Mejora progresiva sin coste. |
| `clamp()`, `min()`, `max()` | Ampliamente soportados | Medidas (`min(65ch, 100%)`), escalas fluidas (Utopia), padding de sección. |
| `display: grid-lanes` (masonry) | Solo Safari (Technology Preview 234, dic. 2025; una propiedad renombrada a `fit-tolerance` en Safari 27.2). Otros motores: no consta ([WebKit](https://webkit.org/blog/17660/introducing-css-grid-lanes/)). Datos de caniuse no cargados [sin verificar]. | Solo dentro de `@supports (display: grid-lanes)` con grid normal como fallback. El orden visual puede saltar respecto al DOM: prueba con el tabulador. |

## Tensiones y debates

- **Simetría contra asimetría (Tschichold contra Tschichold).** El autor de la asimetría moderna la abandonó para el libro y Max Bill lo acusó de reaccionario. Lección: ninguna de las dos es «moderna» por sí misma. Para lectura larga, eje centrado y medida estrecha. Para composición de cartel o portada, asimetría con ejes fuertes.
- **La retícula como dogma o como ayuda.** Müller-Brockmann la defiende como sistema, pero la llama ayuda y no garantía. Boulton y Simmons añaden que en la web la retícula no puede ser un lienzo fijo. Las retículas de 12 columnas de los frameworks son la versión degradada del sistema suizo: conservan la regla y pierden la derivación desde el contenido.
- **Media queries contra layout intrínseco.** El RWD de Marcotte (2010) se basa en media queries de viewport; Simmons (2018–19) y Every Layout demuestran layouts sin ellas, y las container queries cierran el hueco. Lo que ha envejecido es la media query como herramienta principal para componentes, no las media queries en sí (siguen siendo correctas para la página, `prefers-*` e impresión).
- **`ch` contra `rem` para la medida.** Every Layout eleva `ch` a axioma; Comeau señala que `ch` varía con el tamaño de letra de cada elemento y desalinea las columnas, y termina en `rem`. Usa `ch` para limitar texto y `rem` para pistas de retícula compartidas.
- **Tipografía fluida contra accesibilidad.** Utopia populariza el `clamp()` con `vw`; Roselli advierte de que puede incumplir 1.4.4, y web.dev (2025) lo hace compatible con la regla ≤ 2,5× y los extremos en `rem`. El titular gigante del «momento audaz» es justo el caso límite.
- **`auto-fit` contra `auto-fill`.** Shadeed prefiere `auto-fill` (anchos constantes); muchos ejemplos usan `auto-fit` (estirar el último elemento). Decide según si un elemento solo debe parecer protagonista o uno más de una serie.
- **Herramientas rápidas contra criterio.** *Refactoring UI* da reglas para no diseñadores. Son útiles como suelo, pero aplicadas al pie de la letra producen la estética SaaS limpia y genérica que los antipatrones del proyecto ya señalan. Úsalas para el espaciado y la jerarquía, no para la identidad.

## Fuentes

- Müller-Brockmann, *Grid Systems in Graphic Design*, ficha del distribuidor: https://draw-down.com/products/grid-systems-in-graphic-design [verificada]
- Niggli, catálogo (título listado; autor no visible en la página): https://www.niggli.ch/en/ [verificada]
- Tschichold, *The New Typography*, UC Press: https://www.ucpress.edu/books/the-new-typography/paper [verificada]
- B. Schuster, reseña de *Max Bill kontra Jan Tschichold*: https://brigitteschuster.com/book-review-bill-tschichold-dispute [verificada]
- E. Marcotte, «Responsive Web Design», A List Apart (2010): https://alistapart.com/article/responsive-web-design/ [verificada]
- J. Simmons, entrevista en The Big Web Show (transcripción, 2018): https://zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/ [verificada]
- J. Simmons, «Designing Intrinsic Layouts» (AEA Seattle, 2019): https://talks.jensimmons.com/OlkvV7 [verificada]
- J. Simmons, Experimental Layout Lab: https://labs.jensimmons.com/ [verificada]
- Every Layout, Axioms: https://every-layout.dev/rudiments/axioms/ [verificada]
- Every Layout, Stack: https://every-layout.dev/layouts/stack/ [verificada]
- Every Layout, Sidebar: https://every-layout.dev/layouts/sidebar/ [verificada]
- Every Layout, Switcher: https://every-layout.dev/layouts/switcher/ [verificada]
- CUBE CSS: https://cube.fyi/ y https://cube.fyi/composition.html [verificada]
- Utopia, «Designing with fluid type scales» (2020): https://utopia.fyi/blog/designing-with-fluid-type-scales/ [verificada]
- Utopia, calculadora de espacio: https://utopia.fyi/space/calculator/ [verificada]
- Refactoring UI (índice del libro): https://refactoringui.com/ [verificada]
- Refactoring UI, razonamiento de «start with too much white space» (resúmenes de terceros) [sin verificar]
- M. Boulton, «A Richer Canvas»: https://www.markboulton.co.uk/journal/a-richer-canvas/ [verificada]
- A. Shadeed, «Defensive CSS»: https://ishadeed.com/article/defensive-css/ y https://defensivecss.dev/ [verificada]
- NN/g, «Proximity Principle in Visual Design»: https://www.nngroup.com/articles/gestalt-proximity/ [verificada]
- J. W. Comeau, «Full-Bleed Layout Using CSS Grid»: https://www.joshwcomeau.com/css/full-bleed/ [verificada]
- A. Roselli, «Responsive Type and Zoom» (2019, act. 2025): https://adrianroselli.com/2019/12/responsive-type-and-zoom.html [verificada]
- web.dev, «Baseline in action: fluid type» (dic. 2025): https://web.dev/articles/baseline-in-action-fluid-type [verificada]
- MDN, Subgrid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid [verificada]
- MDN, :has(): https://developer.mozilla.org/en-US/docs/Web/CSS/:has [verificada]
- MDN, text-wrap: https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap [verificada]
- MDN, Container queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries [verificada; sin datos de soporte en el extracto]
- caniuse, container queries: https://caniuse.com/css-container-queries [verificada]
- caniuse, container style queries: https://caniuse.com/css-container-queries-style [verificada]
- WebKit, «Introducing CSS Grid Lanes» (19-12-2025): https://webkit.org/blog/17660/introducing-css-grid-lanes/ [verificada]
- caniuse, grid-lanes (tabla no cargada) [sin verificar]
