# Color, atmósfera, identidad visual y dirección de arte

> Fuentes consultadas el 2026-10-26. Lo que no se ha podido abrir está marcado [sin verificar] o se ha descartado.

## Referentes clave

**Josef Albers, *Interaction of Color* (Yale University Press, 1963; ed. 50.º aniversario 2013).** [yalebooks.yale.edu](https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/) · edición digital con más de 60 láminas manipulables: [interactionofcolor.com](https://interactionofcolor.com/).
Por qué importa: según la editorial, el libro enseña que el color es relativo y engañoso, y lo hace con experimentos de percepción, no con teoría ni sistemas fijos.
- Un hex no tiene un color fijo: depende de lo que tiene alrededor. Decide los colores en la composición, no en una muestra suelta.
- Primero experimenta y luego fija la regla: haz pruebas reales de fondo/figura antes de congelar los tokens.

**Björn Ottosson, «A perceptual color space for image processing» (23-12-2020).** [bottosson.github.io/posts/oklab](https://bottosson.github.io/posts/oklab/)
Creó Oklab, la base de `oklab()`/`oklch()` en CSS.
- En HSV, con el mismo valor, el amarillo, el magenta y el cian se ven mucho más claros que el rojo y el azul. Una escala HSL no es perceptual.
- Oklab mejora la predicción de tono de CIELAB, que falla sobre todo en los azules. Por eso los azules en `lch()` pueden virar a violeta y en `oklch()` no.

**Andrey Sitnik y Travis Turner (Evil Martians), «OKLCH in CSS: why we moved from RGB and HSL».** [evilmartians.com](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
Es el manifiesto práctico de OKLCH para producción.
- «HSL lightness is not consistent across hue axes.»
- Con la sintaxis de color relativo, una base genera las variantes de hover, secundaria y error.
- Un valor sRGB por defecto y un override P3 en `@media (color-gamut: p3)`. Cuidado con el recorte de gama: según el artículo, Chrome y Safari recortan en vez de mapear, y eso puede desviar el tono.

**Lea Verou, «LCH colors in CSS: what, why, and how?» (2020).** [lea.verou.me](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/)
Fue el primer alegato influyente por los espacios perceptuales en CSS.
- Sobre amarillo y azul con la misma L de HSL: «they are most certainly not equally light». Si comparas pesos visuales, usa L perceptual.
- Su queja de que CSS no podía acceder a P3 ya ha caducado (ver Tensiones).

**Adam Wathan y Steve Schoger, *Refactoring UI*, capítulo «Building your color palette».** [refactoringui.com](https://www.refactoringui.com/previews/building-your-color-palette)
- Entre 8 y 10 grises, más 1 o 2 primarios y acentos semánticos, cada uno con 5 a 10 tonos (100–900). Empieza por el 500, que debe servir como fondo de botón. Luego fija los extremos: el 900 para texto y el 100 para fondos tintados. Por último, rellena los huecos.
- Evita el negro puro: según los autores, «true black tends to look pretty unnatural».
- No generes los tonos con `lighten()`/`darken()` sobre la marcha: «Trust your eyes, not the numbers.»

**Daryl Koopersmith y Wilson Miner (Stripe), «Designing accessible color systems» (15-10-2019).** [stripe.com/blog](https://stripe.com/blog/accessible-color-systems)
- Organiza la escala por contraste y no por «bonito». Así el contraste queda garantizado por construcción: «at least five levels apart» bastan para texto pequeño.
- Ajusta cada tono en espacio perceptual (CIELAB) para que todos los matices tengan un rango de contraste equivalente.

**Radix Colors (WorkOS), escala de 12 pasos.** [Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale) · [Composing a palette](https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette)
Es el modelo más claro de **rol por paso**:
- Pasos 1–2: fondos.
- Pasos 3–5: fondos de componente en reposo, hover y pulsado.
- Pasos 6–8: bordes. El 8 sirve para el anillo de foco.
- Pasos 9–10: sólido y su hover.
- Pasos 11–12: texto. El 11 y el 12 garantizan APCA Lc 60 y Lc 90 sobre el paso 2.

Los grises van tintados según el acento: mauve con morado, slate con azul, sage con verde, olive con lima y sand con amarillo. Si hay muchos componentes de color, ojo con los grises saturados en modo oscuro.

**Andrew Somers, APCA (Accessible Perceptual Contrast Algorithm).** [APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell)
Contraste según el tamaño y el peso del texto:
- Lc 90: preferido para texto corrido.
- Lc 75: mínimo para columnas de texto.
- Lc 60: otro texto de contenido.
- Lc 45: titulares grandes y gruesos.
- Lc 30: placeholder y texto desactivado.
- Lc 15: separadores. Por debajo de Lc 15, el elemento se considera invisible.

**Jen Simmons, «Revolutionize Your Page: Real Art Direction on the Web» (An Event Apart Orlando, oct. 2016).** [talks.jensimmons.com](https://talks.jensimmons.com/qdBZvG)
- «Layout shouldn't be a multiple choice question.» Construye una rejilla a medida del contenido con Grid, Flexbox, Shapes, multicolumna y unidades de viewport, y con mejora progresiva.

**Jason Santa Maria y Trent Walton: la dirección de arte por artículo (2008–2010).** [Zeldman, «Art direction on the web?» (2008)](https://zeldman.com/2008/06/19/art-direction-on-the-web/) · [Smashing (2009)](https://www.smashingmagazine.com/2009/11/20-extraordinary-blogs-unique-post-designs)
- Santa Maria proponía un sistema de plantillas que permitiera cambiar colores, tipos y la forma de los bloques en cada post. Cada pieza toma «a look of their own within that system». Esto separa el **diseño** (el sistema) de la **dirección de arte** (la decisión para esta pieza).
- Walton cambiaba en cada post la imagen grande de cabecera, y a menudo el fondo. No he encontrado su ensayo propio sobre el tema [sin verificar].

**Pascal Deville, brutalistwebsites.com (2014), frente a David Bryant Copeland, brutalist-web.design.** [brutalistwebsites.com](https://brutalistwebsites.com/) · [brutalist-web.design](https://brutalist-web.design/)
- Deville presenta el brutalismo como reacción de una generación joven contra la ligereza, el optimismo y la frivolidad del diseño web actual.
- Copeland propone un brutalismo «de materiales honestos»: enlaces subrayados, botones que parecen botones, que solo enlaces y botones respondan al clic, decoración con propósito y rendimiento. «A website is not a magazine…»

**Estudios de identidad: Pentagram y Collins.**
- Pentagram es un estudio independiente de 23 socios que diseñan ellos mismos y llevan el trato con el cliente ([about](https://www.pentagram.com/about)).
- Collins resume su posicionamiento en «Don't Become the Best. Become the Only.» ([wearecollins.com](https://www.wearecollins.com/)).

La lección para una web: la identidad es **singularidad defendible**, no pulido. Las afirmaciones sobre Locomotive y otros estudios quedan [sin verificar].

## Principios

1. **Define el color en OKLCH, no en HSL ni en hex.**
   - **Por qué:** la L de HSL no es perceptual (Verou, Ottosson, Evil Martians). Dos tonos con la «misma» luminosidad pueden diferir mucho en contraste.
   - **Cómo aplicarlo:** usa tokens del tipo `--ink: oklch(0.22 0.03 265)`. Para comparar pesos visuales entre acentos, iguala la L y varía C y H.
   - **Fuente(s):** Ottosson; Evil Martians; Verou.

2. **Asigna un rol a cada paso de la escala, no solo un nombre.**
   - **Por qué:** el rol hace que el contraste sea predecible y evita elegir a ojo en cada componente.
   - **Cómo aplicarlo:** una escala de 10 a 12 pasos por tono, con una tabla de rol al estilo Radix: pasos 1–2 fondo, 3–5 superficie interactiva, 6–8 borde y foco, 9–10 sólido, 11–12 texto. En CSS, exponlo como tokens semánticos (`--surface-hover: var(--sand-4)`).
   - **Fuente(s):** Radix; Refactoring UI.

3. **Garantiza el contraste por construcción.**
   - **Por qué:** comprobar el contraste par a par no escala. Stripe y Radix fijan distancias mínimas entre pasos.
   - **Cómo aplicarlo:** documenta reglas del tipo «texto = paso 11/12 sobre 1/2» o «texto pequeño ≥ 5 niveles de distancia». Verifica cada par con WCAG 2 (4.5:1) y anota también el Lc de APCA.
   - **Fuente(s):** Stripe; Radix; APCA.

4. **Mide el contraste con WCAG 2 como suelo legal y usa APCA como criterio de diseño.**
   - **Por qué:** APCA modela mejor el efecto del tamaño, el peso y la polaridad, pero no es norma. Se retiró del borrador de WCAG 3 en julio de 2023 y su algoritmo de contraste sigue sin decidir (Roselli, abril de 2026).
   - **Cómo aplicarlo:** exige ≥ 4.5:1 en texto normal y busca además Lc ≥ 75 en texto corrido y Lc ≥ 45 en titulares gruesos. Un gris claro sobre blanco con Lc < 60 no sirve para texto que haya que leer, aunque pase el 3:1 de texto grande.
   - **Fuente(s):** APCA; [Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html).

5. **Tiñe los neutros con el tono del acento o del material.**
   - **Por qué:** cohesión sin que se note. El gris puro vale como opción neutra, pero hace la web anónima.
   - **Cómo aplicarlo:** usa neutros con croma muy baja (0.005–0.02) y el H del acento: `oklch(0.97 0.01 80)` para papel cálido u `oklch(0.18 0.015 265)` para tinta azul noche. En modo oscuro, reduce la croma del gris si hay badges de color.
   - **Fuente(s):** Radix (Composing a palette).

6. **Evita el negro puro y el blanco puro como base.**
   - **Por qué:** Refactoring UI dice que el negro puro se ve antinatural. Material recomienda #121212 en lugar de #000 para las superficies oscuras.
   - **Cómo aplicarlo:** usa como texto el paso más oscuro de la escala tintada (L ≈ 0.18–0.25) y como fondo oscuro una L ≈ 0.16–0.20 con algo de croma.
   - **Fuente(s):** Refactoring UI; [Material dark theme](https://m2.material.io/design/color/dark-theme.html).

7. **Diseña el modo oscuro, no lo inviertas.**
   - **Por qué:** los acentos saturados vibran sobre fondo oscuro, y la elevación no puede expresarse con sombras.
   - **Cómo aplicarlo:**
     - Baja la croma del acento entre un 15 y un 30 % y sube un poco su L.
     - Expresa la elevación con superficies más claras. Material usa capas superpuestas.
     - Usa `color-scheme: light dark` y `light-dark()` en los tokens.
     - Comprueba de nuevo todos los pares, porque los Lc cambian con la polaridad.
   - **Fuente(s):** Material; MDN `light-dark()`.

8. **Deriva las variantes en el navegador, pero congela la paleta base a ojo.**
   - **Por qué:** Evil Martians genera las paletas con fórmula; Refactoring UI desconfía de `lighten()`. La síntesis: fija a mano la base y los extremos, y deriva solo los estados (hover, pulsado, alfa).
   - **Cómo aplicarlo:** `--accent-hover: oklch(from var(--accent) calc(l - 0.06) c h)` y `--accent-wash: color-mix(in oklab, var(--accent) 12%, var(--bg))`.
   - **Fuente(s):** Evil Martians; Refactoring UI; MDN.

9. **Decide el color en contexto.**
   - **Por qué:** Albers mostró que un mismo color cambia según su vecino. Un acento que funciona sobre blanco puede apagarse sobre papel crema.
   - **Cómo aplicarlo:** crea una página de pruebas con el acento sobre cada superficie real y sobre fotos del cliente. Ajusta L y C ahí, no en el selector de color.
   - **Fuente(s):** Albers (Yale UP).

10. **Usa P3 para el momento audaz, con sRGB como red de seguridad.**
    - **Por qué:** las pantallas modernas muestran colores fuera de sRGB, y un acento P3 puede ser un rasgo de identidad.
    - **Cómo aplicarlo:** `--accent: oklch(0.65 0.2 30)` como base y `@media (color-gamut: p3) { --accent: oklch(0.65 0.27 30) }`. Mantén la croma de los neutros y del texto dentro de sRGB.
    - **Fuente(s):** Evil Martians.

11. **Aplica la textura con criterio.**
    - **Por qué:** el ruido hace más creíbles los degradados y las superficies planas. Chion lo resume así: «Adding noise makes otherwise solid colors or smooth gradients… more realistic».
    - **Cómo aplicarlo:** un SVG inline con `<feTurbulence type="fractalNoise" baseFrequency="0.7–0.9" numOctaves="3" stitchTiles="stitch">` como `background-image` en un pseudo-elemento fijo. Dale `opacity: .04–.12` y `mix-blend-mode: multiply` (claro) o `overlay` (oscuro). Ponlo encima del fondo y debajo del texto, nunca entre texto y fondo.
    - **Fuente(s):** [CSS-Tricks, Jimmy Chion (2021)](https://css-tricks.com/grainy-gradients/); [MDN feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence).

12. **Separa el sistema de la dirección de arte.**
    - **Por qué:** Santa Maria y Simmons coinciden en que la plantilla da coherencia y la dirección de arte da singularidad, y que el layout no debe salir de un menú.
    - **Cómo aplicarlo:** deja que cada sección o pieza principal sobrescriba 2 o 3 tokens (`--accent`, `--bg`, display), con una rejilla específica para su contenido. Por ejemplo: `[data-piece="x"] { --accent: …; }`.
    - **Fuente(s):** Zeldman sobre Santa Maria; Simmons.

13. **Si eliges el brutalismo, elige también cuál.**
    - **Por qué:** el de Deville es estético (rugoso, antipulido). El de Copeland es ético-funcional (materiales honestos). Mezclarlos al azar da una web fea y además difícil de usar.
    - **Cómo aplicarlo:** el brutalismo estético puede romper la rejilla y la paleta, pero conserva las reglas de Copeland: enlaces subrayados, botones con aspecto de botón y back que funcione.
    - **Fuente(s):** brutalistwebsites.com; brutalist-web.design.

14. **Busca ser la única, no la mejor.**
    - **Por qué:** el lema de Collins resume el objetivo de una identidad. Las galerías premian el pulido, que es fácil de imitar. Lo difícil de imitar es la pertenencia al mundo del cliente.
    - **Cómo aplicarlo:** antes de elegir la paleta, nombra 3 materiales u objetos reales del cliente y extrae de ellos los H y L de tu escala. Usa las galerías solo para estudiar recursos concretos (cómo resuelven un menú o una transición), nunca la paleta completa.
    - **Fuente(s):** Collins; Pentagram.

## Antipatrones

- **Escalas HSL «a pasos de 10 %».** Producen amarillos lavados y azules hundidos con la misma L, con contrastes imprevisibles (Verou, Ottosson, Evil Martians).
- **Un `color-mix()` sin espacio explícito, o con `in srgb`.** Las mezclas quedan grisáceas u oscuras. MDN recomienda oklab para mezclas uniformes y oklch para conservar la croma. El valor por defecto ya es oklab, pero escríbelo para dejar clara la intención.
- **Modo oscuro = invertir.** Da negro puro (#000), los mismos acentos saturados y sombras invisibles (Material; Refactoring UI).
- **Texto gris claro «elegante» sobre blanco** que pasa 3:1 pero queda por debajo de Lc 60, o placeholders usados como etiqueta (APCA).
- **Afirmar que APCA es la norma de WCAG 3.** Es falso desde julio de 2023 (Roselli). Muchas «skills» y blogs lo repiten.
- **Grano aplicado con `filter: contrast(170%) brightness(1000%)` sobre áreas grandes.** Es caro y destruye tonos sutiles, como avisan los comentarios del propio artículo de CSS-Tricks. Mejor un SVG pequeño en mosaico con opacidad baja.
- **Colores fuera de gama sin mapeo.** Chrome y Safari los recortan y el tono puede desviarse (Evil Martians). Comprueba los tokens con [stylelint-gamut] [sin verificar: no abierto] o con oklch.com.
- **Paleta copiada de una galería.** La web parece «de Awwwards», pero no del cliente. Además, las galerías cambian: godly.website ya redirige a recent.design (comprobado el 2026-10-26).
- **Acento repartido a partes iguales con otros cuatro colores.** Sin dominante no hay identidad (complementa ANTIPATRONES.md).
- **Grises de un hue y acento de otro sin intención.** Por ejemplo, slate azul con acento amarillo: la pequeña disonancia se lee como «plantilla» (Radix recomienda emparejar el hue).

## Técnicas modernas

Soporte consultado el 2026-10-26.

| Técnica | Uso | Soporte |
|---|---|---|
| `oklch()` / `oklab()` | Tokens perceptuales. L 0–1, C práctica ≤ 0.4, H en grados (no coincide con los ángulos de HSL) | Baseline amplio desde may-2023 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)) |
| `color-mix(in oklab, a x%, b)` | Lavados, tintes de superficie, transparencia (`color-mix(in oklab, var(--c) 40%, transparent)`) | Baseline amplio desde may-2023. Espacio por defecto: oklab ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)) |
| Color relativo `oklch(from var(--c) calc(l - .06) c h)` | Hover y estados derivados. Los canales son números: no uses `%` en `calc()` | Completo en Chrome 131+, Firefox 133+, Safari 18+, parcial antes, ~93 % global ([caniuse](https://caniuse.com/css-relative-colors)). `@supports` debe probarse con un color literal, no con `var()` (MDN) |
| `light-dark(a, b)` | Tokens de tema en una línea. Requiere `color-scheme: light dark`. Acepta también imágenes, con soporte más irregular | Baseline 2024, «newly available» desde may-2024 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)) |
| `@media (color-gamut: p3)` | Override de croma para pantallas P3 | Recomendado por Evil Martians. Versiones exactas [sin verificar] |
| `<feTurbulence>` | Grano y ruido procedural sin imágenes | Baseline amplio desde jul-2015 ([MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence)) |

Patrón mínimo de tokens:

```css
:root{
  color-scheme: light dark;
  --h: 60;                                   /* hue del material del cliente */
  --bg:      light-dark(oklch(.97 .012 var(--h)), oklch(.18 .015 var(--h)));
  --surface: light-dark(oklch(.94 .015 var(--h)), oklch(.22 .018 var(--h)));
  --ink:     light-dark(oklch(.22 .02 var(--h)),  oklch(.93 .01 var(--h)));
  --ink-2:   color-mix(in oklab, var(--ink) 70%, var(--bg));  /* verificar ≥4.5:1 */
  --accent:  oklch(.62 .19 28);
  --accent-hover: oklch(from var(--accent) calc(l - .06) c h);
}
@media (color-gamut: p3){ :root{ --accent: oklch(.62 .25 28); } }
```

Con un selector de tema manual (`[data-theme]`), fija `color-scheme: light` o `dark` en ese atributo: `light-dark()` lo obedece.

## Tensiones y debates

- **Generar o elegir a ojo.** Evil Martians: OKLCH «frees designers from the need to manually choose every color». Refactoring UI: «Trust your eyes, not the numbers». Las dos cosas son ciertas en capas distintas: deriva por fórmula y corrige a ojo los extremos y los amarillos, que en OKLCH pierden croma rápido al oscurecerse.
- **APCA frente a WCAG 2.** APCA es más fiel a la percepción, y Radix ya garantiza Lc. Pero no es norma, y WCAG 3 no llegará antes de ~2030 (Roselli). Cumple WCAG 2 y usa APCA para afinar, sobre todo en modo oscuro y en titulares finos.
- **Reglas envejecidas.**
  - El «CSS no puede acceder a P3» de Verou (2020) ya no es cierto.
  - Los artículos que recomiendan LCH (CIELAB) en vez de OKLCH arrastran el problema de los azules que Ottosson corrigió.
  - Stripe (2019) trabajaba en CIELAB por la misma razón histórica.
- **Gris puro o tintado.** Radix dice que el gris puro «will work well with any hue». Los principios de este repo piden neutros tintados. Hay riesgo real con muchos colores semánticos en modo oscuro, así que tiñe menos ahí.
- **Brutalismo estético o funcional.** Deville celebra la rugosidad. Copeland exige convenciones de uso. Una IA tiende a imitar la superficie (fuentes mono, bordes negros) sin ninguna de las dos razones.
- **Dirección de arte o sistema.** Desde 2008 se pide dirección de arte por pieza, y los CMS y sistemas de diseño empujan a la plantilla. Hoy los tokens CSS permiten ambas cosas a bajo coste, así que el sistema ya no es excusa para la uniformidad.
- **Galerías.** Siteinspire filtra por estilo, tipo y tema, y sirve para estudiar. Pero las galerías premian un mismo pulido y generan convergencia: justo lo que Collins y los principios de este repo intentan evitar.

## Fuentes

- [verificada] Yale University Press, *Interaction of Color*: https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/
- [verificada] Interaction of Color (app/edición digital): https://interactionofcolor.com/
- [sin verificar] Albers Foundation, teaching (error 500): https://www.albersfoundation.org/art/josef-albers/teaching
- [verificada] Ottosson, Oklab: https://bottosson.github.io/posts/oklab/
- [verificada] Evil Martians, OKLCH in CSS: https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
- [verificada] Lea Verou, LCH colors in CSS: https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/
- [verificada] Refactoring UI, Building your color palette: https://www.refactoringui.com/previews/building-your-color-palette
- [verificada] Stripe, Designing accessible color systems: https://stripe.com/blog/accessible-color-systems
- [verificada] Radix, Understanding the scale: https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
- [verificada] Radix, Composing a palette: https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
- [verificada] APCA in a Nutshell: https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell
- [verificada] Adrian Roselli, WCAG3 Contrast as of April 2026: https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html
- [verificada] Material Design 2, Dark theme: https://m2.material.io/design/color/dark-theme.html
- [verificada] MDN light-dark(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
- [verificada] MDN Relative colors: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors
- [verificada] MDN color-mix(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
- [verificada] MDN oklch(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
- [verificada] MDN feTurbulence: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence
- [verificada] caniuse, relative colors: https://caniuse.com/css-relative-colors
- [verificada] Jimmy Chion, Grainy Gradients (CSS-Tricks): https://css-tricks.com/grainy-gradients/
- [verificada] Jen Simmons, Real Art Direction on the Web: https://talks.jensimmons.com/qdBZvG
- [verificada] Zeldman, Art direction on the web? (sobre Jason Santa Maria): https://zeldman.com/2008/06/19/art-direction-on-the-web/
- [verificada] Smashing Magazine, 20 Extraordinary Blogs With Unique Post Designs (Walton, Santa Maria): https://www.smashingmagazine.com/2009/11/20-extraordinary-blogs-unique-post-designs
- [sin verificar] Ensayo propio de Trent Walton sobre dirección de arte (no localizado)
- [verificada] Brutalist Websites (Pascal Deville; autoría según fuentes secundarias): https://brutalistwebsites.com/
- [verificada] David Bryant Copeland, Brutalist Web Design: https://brutalist-web.design/
- [verificada] Pentagram, About: https://www.pentagram.com/about
- [verificada] Collins: https://www.wearecollins.com/
- [verificada] Siteinspire: https://www.siteinspire.com/
- [verificada] godly.website → redirige a recent.design (301, 2026-10-26)
- [sin verificar] Awwwards, Locomotive, stylelint-gamut, versiones exactas de `color-gamut` (no abiertos)
