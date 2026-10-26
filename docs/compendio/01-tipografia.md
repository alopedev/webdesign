# Tipografía web

> Consultado el 26-10-2026. Las cifras de soporte de navegadores corresponden a esa fecha.

## Referentes clave

**Robert Bringhurst**: *The Elements of Typographic Style* (Hartley & Marks; 1.ª ed. 1992, última versión 4.0 de 2012). Se suele llamar a la obra simplemente «Bringhurst». Zapf la llamó «the Typographers' Bible» ([Wikipedia](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style)). Es la referencia de la que parten casi todos los demás autores.
- La medida ideal está en torno a 66 caracteres por línea. El rango aceptable es de 45 a 75, o de 40 a 50 por columna cuando hay varias ([adaptación web de Rutter, §2.1.2](https://webtypography.net/2.1.2)).
- La escala modular como «a prearranged set of harmonious proportions» viene de él, según la cita de Tim Brown ([ALA](https://alistapart.com/article/more-meaningful-typography/)).

**Matthew Butterick**: *Butterick's Practical Typography* ([practicaltypography.com](https://practicaltypography.com/)). Es un libro web gratuito escrito por un diseñador tipográfico que además es abogado. Importa porque da reglas numéricas y opiniones directas.
- Lo que él llama tipografía en diez minutos: cuerpo de texto de 15 a 25 px en web, interlineado del 120 al 145 % y líneas de 45 a 90 caracteres ([fuente](https://practicaltypography.com/typography-in-ten-minutes.html)).
- Las reglas no cambian con el tamaño de pantalla. Lo más difícil del responsive es mantener la medida ([fuente](https://practicaltypography.com/responsive-web-design.html)).
- Critica la web plantillizada: «We swapped ugly for boring». Pide tomar ideas de libros, carteles y arte, no de las tendencias web ([fuente](https://practicaltypography.com/websites.html)).

**Oliver Reichenstein / iA**: el artículo [«The Web Is All About Typography, Period»](https://ia.net/topics/the-web-is-all-about-typography-period) (19-10-2006). Su tesis es que «95% of the information on the web is written language», así que diseñar para la web es sobre todo diseñar texto: el texto se trata como interfaz.

**Tim Brown**: *Flexible Typesetting* (A Book Apart, 2018, [página del libro](https://abookapart.com/products/flexible-typesetting)) y [modularscale.com](https://www.modularscale.com/), creado con Scott Kellum. Fue jefe de tipografía en Adobe.
- La idea central del libro: «We no longer decide; we suggest». El tipógrafo web no fija un resultado, prepara el texto para que se adapte.
- La escala modular parte del tamaño del cuerpo de texto. Puede tener dos «hebras», es decir, un segundo número importante como el tamaño del titular. Y no es un dogma: «Modular scales are tools—not dogma» ([ALA, 2011](https://alistapart.com/article/more-meaningful-typography/)).

**Jason Santa Maria**: *On Web Typography* (A Book Apart, 2014, con prólogo de Lupton; [página del libro](https://abookapart.com/products/on-web-typography)). Trata cómo evaluar tipos, combinarlos y montar sistemas tipográficos.
- Distingue entre legibilidad (que el texto se pueda descifrar) y lectura agradable (que el lector quiera seguir leyendo). Cita a Licko: «Readers read best what they read most». Las mayúsculas sostenidas cuestan más de leer ([«How We Read», ALA 2014](https://alistapart.com/article/how-we-read/)).

**Richard Rutter**: *Web Typography* (Ampersand Type, 2017, [book.webtypography.net](https://book.webtypography.net/)) y [webtypography.net](https://webtypography.net/), que adapta Bringhurst a CSS. Organizó las conferencias Ampersand y es cofundador de Fontdeck.
- Sostiene que «We are all typographers»: quien escribe CSS ya está haciendo tipografía.
- Recomienda fijar la medida en em para que se mantenga al cambiar el tamaño de letra ([§2.1.2](https://webtypography.net/2.1.2)).

**James Gilyead y Trys Mudford (Clearleft)**: [Utopia](https://utopia.fyi/), que propone escalas fluidas ([artículo, 2020](https://utopia.fyi/blog/designing-with-fluid-type-scales/)). El método es definir una escala para pantalla pequeña (por ejemplo, ratio 1,2 a 320 px) y otra para pantalla grande (1,333 a 1500 px), y dejar que el navegador interpole entre las dos. Así se eliminan los breakpoints tipográficos.

**Ellen Lupton**: *Thinking with Type* (3.ª ed. revisada, Princeton Architectural Press, 2024) [sin verificar en fuente primaria: datos de catálogo obtenidos por búsqueda; la web del libro devolvió 503]. Es el manual de referencia en la enseñanza de la tipografía y se organiza en letra, texto y retícula.

**Stephen Coles / Fonts In Use**: [fontsinuse.com](https://fontsinuse.com/about) es un archivo público de tipografía en uso real, indexado por tipo de letra, formato, sector y época. Es la mejor herramienta para elegir pares de fuentes a partir de casos reales y no de listas de «top 10 pairings».

## Principios

**1. Diseña primero el cuerpo de texto y deriva todo lo demás de él.**
**Por qué:** el cuerpo de texto ocupa la mayor parte de la página, y la escala modular necesita un origen.
**Cómo aplicarlo:** fija `--step-0` (el cuerpo) antes de pensar en titulares y genera los demás tamaños con el ratio. Prueba el cuerpo con un párrafo real de unas 150 palabras antes de pasar al hero.
**Fuente(s):** [Butterick](https://practicaltypography.com/typography-in-ten-minutes.html), [Brown](https://alistapart.com/article/more-meaningful-typography/).

**2. El cuerpo de texto en web va de 16 a 22 px como mínimo práctico, no 14 px.**
**Por qué:** Butterick da un rango de 15 a 25 px y critica los «tiny point sizes for body text» heredados de la web antigua.
**Cómo aplicarlo:** `--step-0: clamp(1rem, 0.95rem + 0.25vw, 1.25rem)`. Declara siempre en `rem` para respetar el tamaño que haya configurado el usuario.
**Fuente(s):** [Butterick 10 min](https://practicaltypography.com/typography-in-ten-minutes.html), [Butterick websites](https://practicaltypography.com/websites.html).

**3. La medida va de 45 a 75 caracteres, con el óptimo hacia 66.**
**Por qué:** con líneas largas el ojo se pierde al volver al inicio de la siguiente. Bringhurst da 45 a 75 y Butterick lo amplía a 45 a 90.
**Cómo aplicarlo:** `p, li { max-inline-size: 65ch; }` o en em (`34em`), como prefiere Rutter. Pruébalo con el «test del alfabeto»: deben caber de 2 a 3 alfabetos en minúscula por línea. Revisa la medida tanto a 375 px como a 1440 px.
**Fuente(s):** [Rutter/Bringhurst](https://webtypography.net/2.1.2), [Butterick](https://practicaltypography.com/line-length.html).

**4. El interlineado va del 120 al 145 %, sin unidades, y se reduce en los titulares.**
**Por qué:** un `line-height` sin unidad se hereda bien. Los titulares grandes necesitan menos aire relativo.
**Cómo aplicarlo:** `body { line-height: 1.45 }`, `h1 { line-height: 1.05 }`. Las serifas de texto toleran más interlineado.
**Fuente(s):** [Butterick](https://practicaltypography.com/typography-in-ten-minutes.html).

**5. Usa una escala con ratio fijo y sal de ella cuando el diseño lo pida, dejándolo documentado.**
**Por qué:** la escala da coherencia, pero tratarla como dogma da rigidez.
**Cómo aplicarlo:** usa ratios de [modularscale.com](https://www.modularscale.com/) (de 1,067 a 4). Si un valor sale de sumar o restar pasos de la escala, déjalo en un comentario CSS, como `/* step-3 + step-0 */`, como recomienda Brown.
**Fuente(s):** [Brown](https://alistapart.com/article/more-meaningful-typography/).

**6. El ratio de la escala también debe ser fluido: más contraste en escritorio que en móvil.**
**Por qué:** un ratio de 1,333 en móvil hace que los h1 desborden, y uno de 1,2 en escritorio deja una jerarquía plana.
**Cómo aplicarlo:** usa el [calculador de Utopia](https://utopia.fyi/type/calculator/) con, por ejemplo, 320 → 1440 px y ratio 1,2 → 1,333. Copia las variables `--step--1 … --step-5` en `:root` y asigna cada paso a un rol concreto (h2 = `--step-3`).
**Fuente(s):** [Utopia](https://utopia.fyi/blog/designing-with-fluid-type-scales/).

**7. Combina siempre `vw` con `rem` y prueba con un zoom del 200 %.**
**Por qué:** un tamaño solo en `vw`, o limitado con `clamp()` en px, puede impedir que el texto escale al 200 %, lo que incumple WCAG 1.4.4 (Roselli, citado por Bece).
**Cómo aplicarlo:** `clamp(2rem, 4vw + 1rem, 3rem)`. Que el máximo no sea más de unas 2,5 veces el mínimo. Usa tipografía fluida sobre todo en titulares; en el cuerpo, el rango debe ser corto. Probarlo con Ctrl/Cmd + hasta el 200 % forma parte de la verificación.
**Fuente(s):** [Smashing, Bece 2022](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/).

**8. Combina dos familias como máximo, con contraste claro de rol, o una superfamilia.**
**Por qué:** un par funciona por contraste (cada fuente tiene un papel distinto) y por algún rasgo compartido (proporciones, época o estructura). Las superfamilias, como IBM Plex en versiones sans, serif y mono, ya vienen resueltas.
**Cómo aplicarlo:** antes de combinar, busca la display elegida en [Fonts In Use](https://fontsinuse.com/) y mira con qué la combinan los diseñadores en trabajos reales. No combines dos sans geométricas parecidas.
**Fuente(s):** [Google Fonts Knowledge, pairing](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces) (solo vi el resumen de la página), [Santa Maria](https://abookapart.com/products/on-web-typography), [Butterick free fonts](https://practicaltypography.com/free-fonts.html).

**9. Elige la fuente por calidad y por cómo encaja con el brief, no por si es gratis o popular.**
**Por qué:** Butterick dice que «most free fonts are garbage». Arial está en su lista F, y añade que «you cannot create good typography with Arial». Las fuentes de sistema están sobreusadas y no distinguen a nadie.
**Cómo aplicarlo:** entre las gratuitas de calidad que él mismo recomienda están Source Serif, IBM Plex, Charter y Cooper Hewitt. Como alternativas a Helvetica propone Neue Haas Grotesk, Atlas y Concourse, que son de pago. Antes de decidir, pon la fuente en un texto real del cliente, no en un specimen.
**Fuente(s):** [free fonts](https://practicaltypography.com/free-fonts.html), [system fonts](https://practicaltypography.com/system-fonts.html), [Helvetica alternatives](https://practicaltypography.com/helvetica-and-arial-alternatives.html).

**10. Las fuentes van autoalojadas, en WOFF2, con subconjunto de caracteres y `font-display` elegido según el rol.**
**Por qué:** es más rápido y tiene implicaciones legales. En la UE, el LG München (20-01-2022, 3 O 17493/20) condenó a pagar 100 € por cargar Google Fonts desde los servidores de Google sin consentimiento, porque transmitía la IP del visitante ([IHK](https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176)). Es una sentencia de primera instancia, pero motivó una ola de reclamaciones.
**Cómo aplicarlo:** usa solo WOFF2 con `unicode-range`. Haz `preload` solo de la fuente crítica (una). Usa `font-display: swap` en la display de marca y `optional` en el cuerpo si se prioriza la estabilidad. Comprueba que la licencia permita el autoalojamiento.
**Fuente(s):** [web.dev, Hempenius y Pollard](https://web.dev/articles/font-best-practices).

**11. Ajusta las métricas de la fuente de respaldo para que el cambio de fuente no mueva la página.**
**Por qué:** el salto de `swap` provoca CLS. `size-adjust` y `font-size-adjust` igualan la altura x del respaldo con la de la fuente web.
**Cómo aplicarlo:** declara un `@font-face { font-family: "Display-fallback"; src: local("Georgia"); size-adjust: 94%; }` y ponlo en la pila justo detrás de la fuente web. O usa `font-size-adjust: from-font`. Ojo: si usas `size-adjust`, `font-size-adjust` deja de tener efecto.
**Fuente(s):** [MDN size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust), [MDN font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust).

**12. En las fuentes variables, usa las propiedades de alto nivel, no `font-variation-settings`.**
**Por qué:** la W3C quiere que `font-variation-settings` se use solo para ejes sin propiedad propia. Además, cada declaración sobrescribe la lista entera.
**Cómo aplicarlo:** usa `font-weight: 650; font-stretch: 85%;`. Declara los rangos en `@font-face` (`font-weight: 100 900`). Para los ejes personalizados (`GRAD`, en mayúsculas), usa variables CSS. Aprovecha pesos intermedios, como 450 en el cuerpo y 820 en la display, para conseguir una jerarquía fina sin cargar más archivos.
**Fuente(s):** [MDN Variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

**13. Las cifras deben ser las adecuadas al contexto.**
**Por qué:** en tablas y precios hacen falta cifras tabulares para que las columnas se alineen. En la prosa, las cifras elzevirianas se integran mejor con las minúsculas.
**Cómo aplicarlo:** usa `table, .precio { font-variant-numeric: tabular-nums lining-nums; }` y `.prosa { font-variant-numeric: oldstyle-nums; }`. Solo funciona si la fuente incluye esas variantes OpenType: compruébalo.
**Fuente(s):** [MDN font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric).

**14. Ritmo vertical: derívalo del interlineado base, pero sin obsesionarte con la retícula de línea base.**
**Por qué:** Rutter propone que los márgenes sean múltiplos de la línea base (los márgenes de párrafo de 1em que trae el navegador rompen el ritmo). Con escalas fluidas, una retícula exacta es inviable.
**Cómo aplicarlo:** `p + p { margin-block-start: 1lh }` y espaciados de sección en múltiplos de `1rlh`. La unidad `lh` funciona en Chrome 109+, Firefox 120+ y Safari 16.4+ (95 % de cobertura global según caniuse).
**Fuente(s):** [Rutter §2.2.2](https://webtypography.net/2.2.2), [caniuse lh](https://caniuse.com/mdn-css_types_length_lh).

## Antipatrones

- **Cuerpo pequeño y titular gigante sin escala intermedia.** Butterick lo identifica como herencia de la web antigua: «tiny point sizes for body text», «huge point sizes for headings» ([fuente](https://practicaltypography.com/websites.html)). Una IA tiende a hacer un h1 de 96 px sobre un cuerpo de 15 px y no definir los pasos 2 a 4.
- **Párrafos a todo el ancho del contenedor** en escritorio, con más de 120 caracteres por línea. Butterick dice que es el fallo más común del responsive ([fuente](https://practicaltypography.com/line-length.html)).
- **Titulares fluidos solo en `vw`.** Rompen el zoom (WCAG 1.4.4) ([Bece](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)).
- **Texto largo en mayúsculas sostenidas** como recurso de «diseño». Se lee peor ([Santa Maria](https://alistapart.com/article/how-we-read/)).
- **Arial, o una fuente de sistema, por defecto.** Butterick: «the sans serif of last resort» ([fuente](https://practicaltypography.com/system-fonts.html)).
- **Cargar 6 pesos estáticos** cuando un archivo variable resuelve lo mismo. Hacer `preload` de todas las fuentes, lo que roba ancho de banda ([web.dev](https://web.dev/articles/font-best-practices)).
- **Usar fuentes de iconos.** Hay que sustituirlas por SVG ([web.dev](https://web.dev/articles/font-best-practices)).
- **`text-wrap: balance` aplicado con `*`.** Malgasta cálculo y no sirve para textos largos ([Chrome](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance)).
- **Elegir el par de fuentes en una lista de «best pairings».** Es la versión tipográfica de la media estadística. Mejor buscar casos reales en Fonts In Use.
- **Plantilla en vez de identidad.** Butterick: Bootstrap y similares han hecho las webs uniformes ([fuente](https://practicaltypography.com/websites.html)).
- **Cargar Google Fonts desde su CDN en webs europeas sin consentimiento.** Hay riesgo legal (ver principio 10).

## Técnicas modernas

| Técnica | Uso | Soporte (26-10-2026) |
|---|---|---|
| `text-wrap: balance` | Titulares, citas y pies de foto. Afecta a 6 líneas como máximo en Chromium y 10 en Firefox. Combínalo con `max-inline-size`. | Baseline amplio desde marzo de 2024 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)) |
| `text-wrap: pretty` | Párrafos, para evitar que la última línea quede con una sola palabra. Su algoritmo es más lento, así que úsalo solo en prosa. | Chrome 117+ y Safari 26+. **Firefox no** (87,6 % global) ([caniuse](https://caniuse.com/mdn-css_properties_text-wrap_pretty)). Es mejora progresiva. |
| `font-optical-sizing: auto` | En fuentes con eje `opsz`, adapta el diseño de la letra al tamaño: más contraste en display y trazos más robustos en texto pequeño. Viene activado por defecto; no lo desactives sin motivo. Elegir fuentes con `opsz` (Fraunces, Literata, Newsreader…) aprovecha esto gratis. | Baseline desde marzo de 2020 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing)) |
| `clamp()` + escalas Utopia | Escala fluida sin breakpoints. | Generador en [utopia.fyi](https://utopia.fyi/type/calculator/) |
| `size-adjust` en `@font-face` | Iguala las métricas de la fuente de respaldo para reducir el CLS. | Baseline desde septiembre de 2023 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust)) |
| `font-size-adjust` | Normaliza la altura x (o la altura de mayúsculas) entre fuentes. Útil en textos mixtos y fuentes de respaldo. | Baseline 2024, nuevo desde julio de 2024 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust)) |
| `text-box: trim-both cap alphabetic` | Recorta el espacio vacío que la fuente añade encima y debajo del texto. Consigue un alineado óptico real en botones, titulares junto a imágenes y retículas. | Baseline 2026, nuevo desde agosto de 2026 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim)). Usar con `@supports`. |
| `hyphens: auto` | Necesario en texto justificado o columnas estrechas. Exige `lang="es"` en el HTML, sin él no hace nada. | Baseline desde septiembre de 2023 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)) |
| `font-variant-numeric` | Cifras tabulares, elzevirianas, fracciones y cero barrado. | Baseline desde enero de 2020 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric)) |
| Unidades `lh` / `rlh` / `cap` | Espaciado ligado al interlineado. Permiten alinear iconos a la altura de las mayúsculas (`height: 1cap`). | `lh`: 95 % global ([caniuse](https://caniuse.com/mdn-css_types_length_lh)) |

**Bloque base recomendado:**
```css
html { -webkit-text-size-adjust: 100%; }
body { font-size: var(--step-0); line-height: 1.45; font-variant-numeric: oldstyle-nums proportional-nums; }
h1, h2, h3 { text-wrap: balance; line-height: 1.1; }
p, li { max-inline-size: 66ch; text-wrap: pretty; hyphens: auto; }
table { font-variant-numeric: tabular-nums lining-nums; }
```

**Fundiciones alternativas a Google Fonts:**
- **Fontshare** (Indian Type Foundry, desde 2021): sus fuentes son «100% free for personal and commercial use», pero se rigen por la EULA de ITF, no son de código abierto ([ITF](https://www.indiantypefoundry.com/news/introducing-fontshare)). Las condiciones de autoalojamiento solo las encontré en resúmenes de terceros que se contradicen, así que hay que leer la licencia de cada fuente [sin verificar].
- **Velvetyne** (colectivo francés, fuentes libres desde 2011): según su FAQ, se pueden usar, modificar y redistribuir con fines comerciales, y piden que se acredite a quien diseñó la fuente y a la fundición. Solo pude ver el FAQ en el extracto del buscador, porque la web mostraba una página de huelga [verificada parcialmente].
- **Fuentes libres de calidad que cita Butterick**: Source Serif, IBM Plex, Charter y Cooper Hewitt ([fuente](https://practicaltypography.com/free-fonts.html)).
- Para un proyecto con presupuesto, Butterick defiende comprar una fuente profesional como «the fastest, easiest and most obvious upgrade» ([fuente](https://practicaltypography.com/font-recommendations.html)).

## Tensiones y debates

1. **`ch` contra em contra `vw` para la medida.** Butterick desaconseja `ch` porque mide el ancho del «0», que no es buen indicador de caracteres por línea, y propone escalar con `vw` ([fuente](https://practicaltypography.com/responsive-web-design.html)). Rutter prefiere em ([fuente](https://webtypography.net/2.1.2)). La práctica actual usa `ch` por comodidad. **Decisión:** `max-inline-size` en `ch` o em y comprobación visual. En fuentes anchas, 60ch puede equivaler a 75 caracteres reales.
2. **Escalar el cuerpo con `vw` (Butterick) contra la accesibilidad (Roselli/Bece).** El cuerpo escalado solo con `vw` puede romper el zoom. **Decisión:** el cuerpo casi fijo, en `rem` con un rango mínimo, y la parte fluida para los titulares.
3. **Medida: 45–75 (Bringhurst) contra 45–90 (Butterick).** Se ponen de acuerdo en el mínimo, no en el máximo. En pantalla, con interlineado generoso, se toleran líneas algo más largas.
4. **Escala modular: armonía matemática o herramienta.** El propio Brown la relativiza («tools—not dogma»), y Utopia la vuelve fluida, con lo que deja de ser una sola escala. La justificación renacentista de la proporción áurea pesa poco en una pantalla.
5. **Ritmo vertical estricto.** El enfoque de Rutter, con márgenes múltiplos exactos del interlineado, viene de la imprenta y se pensó con tamaños fijos. Con `clamp()` en los titulares, el múltiplo exacto se pierde. `text-box-trim` y `lh` acercan la idea, pero la retícula de línea base perfecta ha envejecido como norma.
6. **«Web design is 95% typography» (2006).** Sigue siendo cierto para webs de contenido, pero se escribió antes del responsive, el vídeo y la web como aplicación. Úsalo como prioridad, no como porcentaje.
7. **Fuentes gratuitas.** Butterick, que diseña y vende fuentes (lo admite él mismo), es duro con lo gratuito. Pero recomienda varias libres, y Fontshare y Velvetyne demuestran que «gratis» y «calidad» no se excluyen. El problema real es elegir por inercia.
8. **Legibilidad: ¿leemos por la forma de la palabra?** Santa Maria divulga la idea de las formas y de la mitad superior de las letras. Kevin Larson (Microsoft) le replica en los comentarios del mismo artículo que la unidad principal de lectura es la letra ([ALA](https://alistapart.com/article/how-we-read/)). No conviene basar decisiones en el argumento de la «forma de palabra».

## Fuentes

- Butterick, *Typography in ten minutes*: https://practicaltypography.com/typography-in-ten-minutes.html [verificada]
- Butterick, *Line length*: https://practicaltypography.com/line-length.html [verificada]
- Butterick, *Responsive web design*: https://practicaltypography.com/responsive-web-design.html [verificada]
- Butterick, *Websites*: https://practicaltypography.com/websites.html [verificada]
- Butterick, *Free fonts*: https://practicaltypography.com/free-fonts.html [verificada]
- Butterick, *System fonts*: https://practicaltypography.com/system-fonts.html [verificada]
- Butterick, *Font recommendations*: https://practicaltypography.com/font-recommendations.html [verificada]
- Butterick, *Helvetica & Arial alternatives*: https://practicaltypography.com/helvetica-and-arial-alternatives.html [verificada]
- iA, *The Web Is All About Typography, Period* (2006): https://ia.net/topics/the-web-is-all-about-typography-period [verificada]
- Tim Brown, *More Meaningful Typography*, ALA 2011: https://alistapart.com/article/more-meaningful-typography/ [verificada]
- Tim Brown, *Flexible Typesetting*: https://abookapart.com/products/flexible-typesetting [verificada]
- Modular Scale: https://www.modularscale.com/ [verificada]
- Jason Santa Maria, *On Web Typography*: https://abookapart.com/products/on-web-typography [verificada]
- Jason Santa Maria, *How We Read*, ALA 2014: https://alistapart.com/article/how-we-read/ [verificada]
- Rutter, adaptación web de Bringhurst §2.1.2: https://webtypography.net/2.1.2 [verificada]
- Rutter, §2.2.2 ritmo vertical: https://webtypography.net/2.2.2 [verificada]
- Rutter, *Web Typography* (libro): https://book.webtypography.net/ [verificada]
- Bringhurst, *The Elements of Typographic Style* (Wikipedia): https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style [verificada, fuente secundaria]
- Lupton, *Thinking with Type* 3.ª ed. (catálogo): https://thinkingwithtype.com/ [sin verificar, 503]
- Utopia, *Designing with fluid type scales*: https://utopia.fyi/blog/designing-with-fluid-type-scales/ [verificada]
- Utopia, calculador: https://utopia.fyi/type/calculator/ [verificada]
- Bece, *Modern Fluid Typography Using CSS Clamp*, Smashing 2022: https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/ [verificada]
- web.dev, *Best practices for fonts*: https://web.dev/articles/font-best-practices [verificada]
- MDN text-wrap: https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap [verificada]
- Chrome, *text-wrap: pretty*: https://developer.chrome.com/blog/css-text-wrap-pretty [verificada]
- Chrome, *text-wrap: balance*: https://developer.chrome.com/docs/css-ui/css-text-wrap-balance [verificada]
- caniuse text-wrap: pretty: https://caniuse.com/mdn-css_properties_text-wrap_pretty [verificada]
- caniuse lh: https://caniuse.com/mdn-css_types_length_lh [verificada]
- MDN font-optical-sizing: https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing [verificada]
- MDN Variable fonts guide: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide [verificada]
- MDN size-adjust: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust [verificada]
- MDN font-size-adjust: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust [verificada]
- MDN text-box-trim: https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim [verificada]
- MDN hyphens: https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens [verificada]
- MDN font-variant-numeric: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric [verificada]
- MDN length (lh, rlh, cap): https://developer.mozilla.org/en-US/docs/Web/CSS/length [verificada]
- Google Fonts Knowledge, *Pairing typefaces*: https://fonts.google.com/knowledge/choosing_type/pairing_typefaces [verificada parcialmente: solo el resumen]
- Fonts In Use, *About*: https://fontsinuse.com/about [verificada]
- ITF, *Introducing Fontshare*: https://www.indiantypefoundry.com/news/introducing-fontshare [verificada]
- Velvetyne FAQ: https://velvetyne.fr/about/faq/ [sin verificar directamente: la web mostraba una página de huelga; datos del extracto del buscador]
- IHK, sentencia LG München 3 O 17493/20: https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176 [verificada]
