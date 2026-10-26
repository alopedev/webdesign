# Principios de diseño, UX, accesibilidad y rendimiento (el oficio invisible)

> Fuentes consultadas el 26-10-2026. Enfoque: landing pages y webs de marca en HTML/CSS/JS.
> Este documento complementa `PRINCIPIOS-ESTILO.md` §10 («Calidad invisible»): aquí está el *cómo* y el *cuánto*.

## Referentes clave

**Dieter Rams: diez principios del buen diseño** ([Vitsœ](https://www.vitsoe.com/us/about/good-design)). Diseñador industrial de Braun. Sus diez principios son el lenguaje común del diseño «honesto».
- El n.º 6, *honesto*: el diseño no hace que un producto parezca «more innovative, powerful or valuable than it really is». En una landing, eso prohíbe cifras infladas, logos de clientes falsos y gráficos decorativos que imitan datos.
- El n.º 10, «Less, but better»: concentrarse en lo esencial. No significa minimalismo blanco. Significa que cada elemento tenga un trabajo.

**Don Norman: *The Design of Everyday Things*, edición revisada de 2013** ([jnd.org](https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/), Basic Books). Fijó el vocabulario de *affordances*, *signifiers*, *mappings*, *feedback*, modelos conceptuales y restricciones. La edición de 2013 añade los *signifiers*.
- En la web no hay affordances físicas. Todo depende de los *signifiers*: un enlace tiene que parecer un enlace y un botón, un botón. Un texto subrayado que no enlaza, o un botón con aspecto de etiqueta, rompe esa señal.
- *Feedback*: cada acción (enviar, copiar, desplegar) debe producir una respuesta visible e inmediata.

**Steve Krug: *Don't Make Me Think, Revisited* (3.ª ed., New Riders, 2014)** ([sensible.com](https://sensible.com/dont-make-me-think/); [muestra oficial en PDF](https://ptgmedia.pearsoncmg.com/images/9780321965516/samplepages/0321965515.pdf)). Los títulos de capítulo resumen el método: «Scanning, satisficing, and muddling through», «Designing for scanning, not reading» y «Omit needless words».
- Segunda ley de Krug (leída en la muestra): «It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice.» Esto desmonta la «regla de los 3 clics».
- La gente escanea y no lee. Por eso los titulares y las etiquetas de los botones tienen que funcionar solos, sin el párrafo que los acompaña.

**Jakob Nielsen / NN/g: 10 heurísticas (1994, revisadas en 2024)** ([nngroup.com](https://www.nngroup.com/articles/ten-usability-heuristics/)). Es la lista de revisión más usada en UX.
- La n.º 8, *Aesthetic and Minimalist Design*: «Interfaces should not contain information that is irrelevant or rarely needed.»
- La n.º 1 (visibilidad del estado del sistema) y la n.º 9 (ayudar a reconocer y resolver errores) son las que más se olvidan en los formularios de las landings.

**Jon Yablonski: *Laws of UX*** ([lawsofux.com](https://lawsofux.com/)). Reúne 30 leyes de psicología aplicada a interfaces. Las útiles para landings son Jakob, Fitts, Hick, Von Restorff, Peak-End, Doherty (≈400 ms) y Aesthetic-Usability.
- La propia web advierte contra el mal uso de Miller: «Don't use the "magical number seven" to justify unnecessary design limitations» ([Miller's Law](https://lawsofux.com/millers-law/)).

**Heydon Pickering: *Inclusive Components*** ([inclusive-components.design](https://inclusive-components.design/)). Se presenta como un blog que intenta ser una librería de patrones. Recorre 11 componentes (tarjetas, toggles, pestañas, tooltips/toggletips, menús, sliders, notificaciones…) y pone la accesibilidad en el centro de cada uno.
- Tarjeta clicable sin envolverla en `<a>`: el enlace va en el titular y su `::after` se estira con `position:absolute; inset:0` sobre una tarjeta con `position:relative`. El «leer más» visible es un `<span aria-hidden>` conectado por `aria-describedby` ([Cards](https://inclusive-components.design/cards/)).

**Sara Soueidan: indicadores de foco** ([artículo, 2021, actualizado 2023](https://www.sarasoueidan.com/blog/focus-indicators/)).
- Usa `outline` (no `box-shadow` ni `border`) como indicador principal. El outline no ocupa espacio en el layout y sobrevive al modo de colores forzados de Windows.
- Indicador de dos colores que funciona sobre cualquier fondo: `outline: 3px solid #000; box-shadow: 0 0 0 6px #fff;`.

**Adrian Roselli: accesibilidad práctica y escéptica** ([adrianroselli.com](https://adrianroselli.com/)).
- «Uncanny a11y»: exceso de ARIA, `tabindex` y `aria-label` que vuelve una interfaz confusa aunque el código sea válido. El remedio es menos código y probar con usuarios reales ([2019, act. 2025](https://adrianroselli.com/2019/02/uncanny-a11y.html)).
- No deshabilites el botón de enviar: «The place where buttons should *not* be disabled is within the context of submitting a form» ([2024, act. 2026](https://adrianroselli.com/2024/02/dont-disable-form-controls.html)).

**Jeremy Keith: *Resilient Web Design*** ([resilientwebdesign.com, cap. 5](https://resilientwebdesign.com/chapter5/)). Mejora progresiva en capas: HTML para todo el mundo, CSS como mejora y JS solo tras detectar que el navegador lo soporta.
- Cita del capítulo: «The trick is identifying what is considered core functionality and what is considered an enhancement.»

**W3C: WCAG 2.2** ([Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)). Es el suelo legal y técnico. Las cifras exactas están en los principios de más abajo.

**Google / web.dev: Core Web Vitals** ([web.dev/vitals](https://web.dev/articles/vitals)). Tres métricas medidas en el percentil 75 de las visitas reales, por separado en móvil y escritorio.

**Vercel: *Web Interface Guidelines*** ([vercel.com/design/guidelines](https://vercel.com/design/guidelines)). Es la lista más concreta y moderna de detalles de interfaz: foco, objetivos táctiles, movimiento, tipografía, formularios y copy. Está escrita para producto, así que hay que adaptar algunas reglas, por ejemplo el uso de Title Case.

## Principios

**1. Cada elemento interactivo tiene un foco visible y bien diseñado; no te conformes con el del navegador.**
**Por qué:** 2.4.7 *Focus Visible* es nivel AA. Un indicador propio tiene que alcanzar 3:1 frente a los colores de alrededor (1.4.11). El criterio 2.4.13 (AAA) pide un área equivalente a un perímetro de 2 px y un contraste de 3:1 entre el estado con foco y el estado sin foco.
**Cómo aplicarlo:** `:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }`. Sobre fondos mixtos, usa el indicador de dos colores de Soueidan. Nunca escribas `outline: none` sin poner un sustituto. Diseña el foco como parte de la identidad: es otro estado más, como el hover.
**Fuente(s):** [2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [2.4.13](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html), [Soueidan](https://www.sarasoueidan.com/blog/focus-indicators/).

**2. Una cabecera fija nunca tapa el elemento que tiene el foco.**
**Por qué:** 2.4.11 *Focus Not Obscured (Minimum)* es AA y es nuevo en WCAG 2.2. El elemento con foco no puede quedar oculto del todo por contenido del autor.
**Cómo aplicarlo:** `html { scroll-padding-top: calc(var(--header-h) + 1rem); }`. Esta es la técnica suficiente C43. Haz la prueba recorriendo toda la página con Tab y con la cabecera visible.
**Fuente(s):** [2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

**3. Los objetivos interactivos miden como mínimo 24×24 px, y 44 px en móvil.**
**Por qué:** 2.5.8 (AA) pide 24×24 CSS px, salvo excepciones de espaciado, enlaces en línea dentro del texto, etc. Vercel sube a 44 px en móvil. Según la ley de Fitts, un objetivo más grande y más cercano es más rápido de pulsar.
**Cómo aplicarlo:** usa `min-block-size: 44px` y padding en los botones y en los enlaces de navegación. Para iconos pequeños, agranda el área con un pseudo-elemento (`::before { content:""; position:absolute; inset:-10px }`). Pon `touch-action: manipulation` en los controles.
**Fuente(s):** [2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [Vercel](https://vercel.com/design/guidelines), [Fitts](https://lawsofux.com/).

**4. El contraste del texto se mide y nunca se redondea.**
**Por qué:** 1.4.3 pide 4.5:1 para texto normal y 3:1 para texto grande (≥ 24 px, o ≥ 18,5 px en negrita). El valor calculado no se redondea: 4.499:1 no cumple. Los logotipos están exentos; el texto decorativo «de marca» que hayas elegido tú no lo está.
**Cómo aplicarlo:** comprueba cada par de tokens (`--text` sobre `--bg` y sobre `--surface`, `--text-soft`, el acento sobre el fondo) antes de construir. El «texto suave» de las paletas tintadas suele quedarse en 3,8–4,2:1: oscurécelo.
**Fuente(s):** [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**5. El LCP de la página llega en 2,5 s o menos: trata la imagen o el titular del hero como un recurso crítico.**
**Por qué:** LCP es bueno hasta 2,5 s y malo por encima de 4 s. Cuenta como candidato un `<img>`, el póster de un vídeo, un `background-image` con `url()` o un bloque de texto. Cargar en diferido la imagen del LCP siempre lo empeora.
**Cómo aplicarlo:** pon `<img fetchpriority="high">` en la imagen del hero, y en ninguna otra o como mucho en una más. Nunca le pongas `loading="lazy"`. Si el fondo viene de CSS, añade `<link rel="preload" as="image" fetchpriority="high">`. El resto de imágenes, con `loading="lazy"`.
**Fuente(s):** [LCP](https://web.dev/articles/lcp), [Optimize LCP](https://web.dev/articles/optimize-lcp).

**6. La página no se mueve mientras carga: CLS ≤ 0,1.**
**Por qué:** CLS es bueno hasta 0,1 y malo por encima de 0,25. Las causas típicas son medios sin dimensiones, fuentes que cambian de tamaño al cargar y contenido que se inserta arriba.
**Cómo aplicarlo:** pon `width`/`height` o `aspect-ratio` en todas las imágenes y vídeos. Crea una fuente de reserva ajustada a la web font con `@font-face { src: local("Arial"); size-adjust; ascent-override; descent-override; }` (los valores salen de herramientas como Fontaine). Anima solo `transform` y `opacity`.
**Fuente(s):** [CLS](https://web.dev/articles/cls), [Chrome: font fallbacks](https://developer.chrome.com/blog/font-fallbacks).

**7. Cada interacción responde en 200 ms o menos (INP).**
**Por qué:** INP sustituye a FID. Es bueno hasta 200 ms y malo por encima de 500 ms. El umbral de Doherty (~400 ms) explica por qué la sensación de fluidez se rompe antes de que el usuario sepa decir por qué.
**Cómo aplicarlo:** cero librerías para efectos que CSS ya resuelve. Nada de manejadores pesados en `scroll`. Si una acción tarda, muestra un estado de carga, pero solo a partir de unos 150–300 ms y mantenlo visible al menos 300–500 ms para que no parpadee (Vercel).
**Fuente(s):** [INP](https://web.dev/articles/inp), [Doherty](https://lawsofux.com/), [Vercel](https://vercel.com/design/guidelines).

**8. Primero el contenido en HTML; el efecto, encima.**
**Por qué:** mejora progresiva (Keith). Si el JS falla, o el visitante llega desde un lector de RSS o desde una vista previa, la landing tiene que seguir diciendo qué es y cómo contactar.
**Cómo aplicarlo:** el titular, el texto y el CTA van en el HTML inicial. Las animaciones de entrada parten del estado final visible y la clase que las activa se añade con JS (`.js .reveal{...}`). Comprueba la página con JS desactivado.
**Fuente(s):** [Resilient Web Design, cap. 5](https://resilientwebdesign.com/chapter5/).

**9. El movimiento se puede reducir, y lo que se mueve solo se puede parar.**
**Por qué:** 2.2.2 (nivel A) exige que cualquier contenido que se mueva solo durante más de 5 s, junto a otro contenido, se pueda pausar, detener u ocultar. 2.3.3 (AAA) pide poder desactivar la animación que provocan las interacciones.
**Cómo aplicarlo:** `@media (prefers-reduced-motion: reduce)` debe sustituir el movimiento por un fundido o por nada; no basta con acelerarlo. Un marquee o un vídeo en bucle necesitan un botón de pausa visible. Usa `<video autoplay muted loop playsinline>` en lugar de GIF.
**Fuente(s):** [2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [Vercel](https://vercel.com/design/guidelines).

**10. Diseña para quien escanea: cada titular y cada botón se entienden sin el párrafo.**
**Por qué:** Krug: la gente escanea, se conforma con la primera opción razonable (*satisficing*) y sigue adelante como puede (*muddling through*). Su segunda ley dice que lo que cansa son las decisiones dudosas, no el número de clics.
**Cómo aplicarlo:** el CTA dice lo que pasa al pulsarlo («Reserva una visita», no «Empezar»). Un solo CTA principal por pantalla (Hick). Haz la prueba de leer solo los `<h2>` y los botones: tienen que contar la historia completa.
**Fuente(s):** [Krug, muestra oficial](https://ptgmedia.pearsoncmg.com/images/9780321965516/samplepages/0321965515.pdf), [Laws of UX](https://lawsofux.com/).

**11. Respeta las convenciones en la interacción y rompe las reglas en la forma.**
**Por qué:** la ley de Jakob dice que el usuario espera que tu web funcione como las demás que ya usa. Norman lo explica con los *signifiers*: sin señales claras, la gente no sabe dónde actuar.
**Cómo aplicarlo:** el logo lleva a la página de inicio, la navegación está arriba o se abre con un botón con nombre accesible («Menú»), los enlaces del texto van subrayados y los botones parecen pulsables. El momento audaz del plan va en la composición, la tipografía o el color, nunca en esconder la navegación ni en un cursor que sustituye al nativo.
**Fuente(s):** [Laws of UX](https://lawsofux.com/), [Norman](https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/).

**12. Los formularios nunca bloquean, explican.**
**Por qué:** Roselli: un botón deshabilitado no explica qué falta y además queda exento del requisito de contraste. NN/g: el error va junto al campo, en lenguaje claro, sin culpar al usuario y conservando lo que ya escribió.
**Cómo aplicarlo:** pon `<label>` visible en cada campo (no uses el placeholder como etiqueta), con `autocomplete`, `type` e `inputmode` correctos y `font-size ≥ 16px` en móvil, para que iOS no haga zoom. El botón de enviar sigue activo: al pulsarlo se valida y el foco pasa al primer error. Deshabilítalo solo mientras se envía y muestra un spinner. No bloquees pegar texto.
**Fuente(s):** [Roselli](https://adrianroselli.com/2024/02/dont-disable-form-controls.html), [NN/g errores](https://www.nngroup.com/articles/error-message-guidelines/), [Vercel](https://vercel.com/design/guidelines).

**13. Antes de añadir ARIA, usa el HTML nativo.**
**Por qué:** el «uncanny a11y» de Roselli: el exceso de ARIA válido empeora la experiencia y los validadores automáticos no lo detectan.
**Cómo aplicarlo:** usa `<button>` y no `<div onclick>`, `<details>/<summary>` para los acordeones y `<a>` para navegar. Añade `aria-label` solo en botones que únicamente tienen icono. Un enlace de salto («Saltar al contenido») y una jerarquía de encabezados sin huecos.
**Fuente(s):** [Roselli](https://adrianroselli.com/2019/02/uncanny-a11y.html), [Pickering](https://inclusive-components.design/cards/), [Vercel](https://vercel.com/design/guidelines).

**14. La microtipografía también es parte del oficio.**
**Por qué:** son señales de cuidado que una IA suele omitir (Vercel).
**Cómo aplicarlo:** comillas tipográficas « » o “ ” y el carácter «…» en vez de tres puntos. Espacio de no separación entre cifra y unidad (`10&nbsp;kg`). `font-variant-numeric: tabular-nums` en precios y tablas. `text-wrap: balance` en los titulares y `pretty` en los párrafos. El radio de un elemento hijo nunca es mayor que el del padre.
**Fuente(s):** [Vercel](https://vercel.com/design/guidelines), [MDN text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap).

**15. No prometas más de lo que hay (Rams n.º 6) y termina bien (Peak-End).**
**Por qué:** la gente recuerda el momento más intenso y el final de una experiencia. Una landing honesta, que termina con un cierre claro (contacto, dirección, horario reales), deja mejor recuerdo que una que acaba en un pie de página lleno de enlaces.
**Cómo aplicarlo:** el pie de página es una escena diseñada, no un sitio donde se acumulan enlaces. Sin cifras ni testimonios inventados.
**Fuente(s):** [Vitsœ](https://www.vitsoe.com/us/about/good-design), [Peak-End](https://lawsofux.com/).

## Antipatrones

- **`outline: none` sin sustituto**, o un foco que solo cambia el color del texto y no llega a 3:1 ([Soueidan](https://www.sarasoueidan.com/blog/focus-indicators/)).
- **Cabecera fija que tapa el foco** al navegar con Tab ([2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)).
- **`loading="lazy"` en la imagen del hero**, o `fetchpriority="high"` repartido por toda la página ([web.dev](https://web.dev/articles/optimize-lcp)).
- **Animaciones de entrada que parten de `opacity:0` en el CSS inicial**: si el JS falla o tarda, el contenido no se ve y el LCP se retrasa ([Keith](https://resilientwebdesign.com/chapter5/)). Error típico de IA.
- **`transition: all`** y animaciones de `width`, `top` o `height` ([Vercel](https://vercel.com/design/guidelines)).
- **`prefers-reduced-motion` que solo acorta la duración a 0,01 ms** pero deja saltos bruscos de posición. Lo correcto es sustituir el movimiento, no eliminarlo sin más ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- **Botón de enviar deshabilitado hasta que el formulario sea válido** ([Roselli](https://adrianroselli.com/2024/02/dont-disable-form-controls.html)).
- **Placeholder como única etiqueta** y mensajes de error del tipo «Campo inválido» ([NN/g](https://www.nngroup.com/articles/error-message-guidelines/)).
- **Tarjeta entera envuelta en `<a>`**: el lector de pantalla anuncia todo el contenido como nombre del enlace ([Pickering](https://inclusive-components.design/cards/)).
- **CTAs genéricos** («Saber más», «Empezar», «Continuar»), que no superan la prueba de leer solo los botones ([Krug](https://ptgmedia.pearsoncmg.com/images/9780321965516/samplepages/0321965515.pdf), [Vercel](https://vercel.com/design/guidelines)).
- **Cursor personalizado que sustituye al nativo**, navegación escondida «por estética» o scroll secuestrado: rompen la ley de Jakob. [Interpretación propia a partir de Laws of UX]
- **Texto «suave» de marca por debajo de 4.5:1** «porque queda elegante» ([1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
- **Usar «7±2» para justificar recortes arbitrarios** en el menú ([Laws of UX](https://lawsofux.com/millers-law/)).

## Técnicas modernas

Estado de soporte consultado el 26-10-2026.

| Técnica | Uso | Soporte |
|---|---|---|
| `:focus-visible` | foco solo cuando hace falta (teclado) | Baseline, ampliamente disponible desde 03-2022 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)) |
| `@media (prefers-reduced-motion)` | variante sin movimiento | Baseline, ampliamente disponible desde 01-2020 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)) |
| `text-wrap: balance / pretty` | titulares sin viudas y párrafos más limpios | `text-wrap` es Baseline, ampliamente disponible desde 03-2024; `balance` solo actúa en ≤ 6 líneas (Chromium) o ≤ 10 (Firefox). No he verificado el soporte de `pretty` por separado: úsalo como mejora progresiva ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)) |
| `fetchpriority="high"` | priorizar la carga del LCP | Baseline 2024, nuevo desde 10-2024 ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority)) |
| `size-adjust`, `ascent-override`… en `@font-face` | fuente de reserva con las mismas métricas, para un CLS ≈ 0 | documentado por Chrome (2023) ([Chrome](https://developer.chrome.com/blog/font-fallbacks)). [Soporte Baseline sin verificar] |
| `scroll-padding-top` | 2.4.11 con cabecera fija | técnica W3C C43 ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)) |
| View Transitions, misma página (`document.startViewTransition`) | transiciones de estado | Chrome 111+, Safari 18+, Firefox 144+, ~93 % global ([caniuse](https://caniuse.com/view-transitions)) |
| View Transitions entre páginas (`@view-transition { navigation: auto }`) | transiciones entre las páginas de una web multipágina | Chrome 126+, Safari 18.2+, Firefox 144+ parcial, ~89 % ([caniuse](https://caniuse.com/cross-document-view-transitions)). Úsalo como mejora progresiva |
| Animaciones ligadas al scroll (`animation-timeline: scroll()/view()`) | animación ligada al scroll sin JS, lo que ayuda a INP | Chrome 115+, Safari 26+, Firefox 159+, ~88 % ([caniuse](https://caniuse.com/mdn-css_properties_animation-timeline_scroll)). Envuélvelo en `@supports` y en `prefers-reduced-motion: no-preference` |

Patrón de base para cualquier web:
```css
:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
html { scroll-padding-top: calc(var(--header-h) + 1rem); }
h1, h2, h3 { text-wrap: balance; }
p { text-wrap: pretty; max-inline-size: 68ch; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 1ms; animation-iteration-count: 1; transition-duration: 1ms; scroll-behavior: auto; }
}
```
(El bloque de reducción de movimiento es una red de seguridad. Las animaciones principales deben tener su propia variante con fundido.)

## Tensiones y debates

- **Estética frente a usabilidad.** El efecto estético-usabilidad dice que una interfaz atractiva parece más fácil de usar. NN/g advierte de que ese mismo efecto **oculta problemas en los tests**: el usuario elogia los colores mientras falla la tarea. Solo perdona fallos menores ([NN/g, 2024](https://www.nngroup.com/articles/aesthetic-usability-effect/)). Para nosotros, la ambición visual no compensa un CTA confuso, y en las pruebas hay que fijarse en lo que el usuario hace, no en lo que dice.
- **Convención (Jakob, Krug) frente a identidad propia (nuestros principios de estilo).** Se resuelve por capas: la interacción es convencional y la forma es original. El riesgo real aparece cuando el «layout roto» rompe el orden de lectura del DOM o la navegación.
- **Contraste: WCAG 2 frente a APCA.** APCA representa mejor cómo percibimos el contraste, sobre todo en modo oscuro y en texto fino, pero se retiró del borrador de WCAG 3 en julio de 2023. En el borrador de abril de 2026, el algoritmo de WCAG 3 sigue «yet to be determined», con una previsión de alrededor de 2030. Roselli recomienda cumplir WCAG 2 y, si además usas APCA, documentarlo ([Roselli, 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)). Para nosotros: cumplir 4.5:1 es obligatorio, y APCA solo sirve para afinar por encima de eso.
- **Reglas que han envejecido:** la «regla de los 3 clics» (la desmonta la segunda ley de Krug); usar «7±2» como límite de diseño (la desaconseja Laws of UX); FID, sustituido por INP; el «foco solo en `:focus`», sustituido por `:focus-visible`; los GIF animados, sustituidos por `<video muted loop playsinline>`.
- **¿Deshabilitar o no los botones?** Roselli acepta deshabilitar fuera de los formularios. Vercel aprueba deshabilitar el botón **durante** el envío. Las dos posturas son compatibles: nunca antes del envío, sí durante.
- **¿44 px o 24 px?** WCAG AA pide 24 px; Vercel, 44 px en móvil. El 24 es el mínimo legal y el 44 es lo que recomienda la práctica en pantallas táctiles.
- **Vercel y las mayúsculas:** recomienda Title Case en los títulos de producto, pero sentence case en marketing. En castellano y en este repositorio se usa siempre minúscula inicial (PRINCIPIOS-ESTILO §9).
- **Rams, «as little design as possible»:** a menudo se confunde con un minimalismo genérico, que hoy es un antipatrón de IA. Léelo como «cada elemento tiene un trabajo», no como «quita la personalidad».

## Fuentes

- Vitsœ, «Dieter Rams: ten principles for good design»: https://www.vitsoe.com/us/about/good-design [verificada]
- Don Norman, *The Design of Everyday Things* (2013): https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/ [verificada]
- Steve Krug, *Don't Make Me Think, Revisited*: https://sensible.com/dont-make-me-think/ [verificada]; muestra oficial de Pearson: https://ptgmedia.pearsoncmg.com/images/9780321965516/samplepages/0321965515.pdf [verificada]
- NN/g, 10 Usability Heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/ [verificada]
- NN/g, Aesthetic-Usability Effect: https://www.nngroup.com/articles/aesthetic-usability-effect/ [verificada]
- NN/g, Error-Message Guidelines: https://www.nngroup.com/articles/error-message-guidelines/ [verificada]
- Jon Yablonski, Laws of UX: https://lawsofux.com/ [verificada]; Miller's Law: https://lawsofux.com/millers-law/ [verificada]
- Heydon Pickering, Inclusive Components: https://inclusive-components.design/ [verificada]; Cards: https://inclusive-components.design/cards/ [verificada]
- Sara Soueidan, focus indicators: https://www.sarasoueidan.com/blog/focus-indicators/ [verificada]
- Adrian Roselli, Uncanny A11y: https://adrianroselli.com/2019/02/uncanny-a11y.html [verificada]
- Adrian Roselli, Don't Disable Form Controls: https://adrianroselli.com/2024/02/dont-disable-form-controls.html [verificada]
- Adrian Roselli, WCAG3 Contrast as of April 2026: https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html [verificada]
- Jeremy Keith, Resilient Web Design, cap. 5: https://resilientwebdesign.com/chapter5/ [verificada]
- W3C, Understanding 1.4.3: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html [verificada]
- W3C, Understanding 2.4.7: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html [verificada]
- W3C, Understanding 2.4.11: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html [verificada]
- W3C, Understanding 2.4.13: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html [verificada]
- W3C, Understanding 2.5.8: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html [verificada]
- W3C, Understanding 2.2.2: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html [verificada]
- W3C, Understanding 2.3.3: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html [verificada]
- web.dev, Web Vitals: https://web.dev/articles/vitals [verificada]
- web.dev, LCP: https://web.dev/articles/lcp [verificada]; Optimize LCP: https://web.dev/articles/optimize-lcp [verificada]
- web.dev, INP: https://web.dev/articles/inp [verificada]
- web.dev, CLS: https://web.dev/articles/cls [verificada]
- Chrome for Developers, Font fallbacks: https://developer.chrome.com/blog/font-fallbacks [verificada]
- Vercel, Web Interface Guidelines: https://vercel.com/design/guidelines [verificada]
- MDN, text-wrap: https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap [verificada]
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion [verificada]
- MDN, :focus-visible: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible [verificada]
- MDN, fetchpriority: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority [verificada]
- caniuse, View Transitions: https://caniuse.com/view-transitions [verificada]; cross-document: https://caniuse.com/cross-document-view-transitions [verificada]; scroll-driven: https://caniuse.com/mdn-css_properties_animation-timeline_scroll [verificada]
- MDN, View Transition API: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API [verificada; la tabla de compatibilidad no cargó, así que el soporte se tomó de caniuse]
