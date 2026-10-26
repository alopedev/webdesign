# Movimiento, animación e interacción

> Fuentes consultadas el 2026-10-26. Soporte de navegadores sacado de MDN browser-compat-data (repositorio `mdn/browser-compat-data`, rama `main`) en esa fecha.

## Referentes clave

**Val Head**: diseñadora especializada en animación de UX (Adobe). Obra: *Designing Interface Animation* (Rosenfeld Media, 2016). La página del libro devuelve 403, pero el libro aparece en [valhead.com](https://valhead.com/). Es la referencia de cómo y cuándo animar, y de cómo hacerlo con accesibilidad.
- En modo de movimiento reducido, sustituye la traslación por opacidad y conserva la duración y el easing ([Smashing, 2020](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)).
- Lo que más afecta a las personas sensibles al movimiento: desplazamientos grandes, zoom y escalados grandes, giros, movimiento en varias direcciones a la vez y scroll suave exagerado. Del parallax dice que es «universally triggering».
- En webs narrativas con mucha animación, pon un interruptor de movimiento visible. Por defecto debe respetar la preferencia del sistema y guardar la elección del usuario.

**Rachel Nabors**: trabajó en las APIs de animación web con Mozilla, el W3C y Microsoft, y llevó el motion a los sistemas de diseño de Booking y Salesforce. Obra: *Animation at Work* ([A Book Apart, 2017](https://abookapart.com/products/animation-at-work)). Su idea central es que la animación es una herramienta para reducir la carga cognitiva y que se basa en la percepción humana, no en la decoración. El libro trata la anatomía de una animación web, cómo comunicarla al equipo y cómo darle prioridad dentro de un sistema de diseño.

**Sarah Drasner**: autora de *SVG Animations* (O'Reilly). Obra clave para este compendio: «[Animation in Design Systems](https://24ways.org/2016/animation-in-design-systems/)» (24ways, 2016).
- Trata el movimiento como la tipografía: unos pocos easings propios de la marca (de entrada, de salida y de énfasis) y unidades de tiempo t1…t5, con ~0,25 s por defecto.
- Si copias el lenguaje de movimiento de Material, tu web se parecerá a la de Google.
- «You don't need every kind of animation, just like you don't need every kind of font.»

**Frank Thomas y Ollie Johnston**: *The Illusion of Life* (1981), el origen de los [12 principios de Disney](https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation). En UI se aplican sobre todo *slow in/slow out* (easing), *anticipation*, *follow through* (rebote u overshoot), *staging* (dirigir la atención) y *timing*. *Squash and stretch* y *exaggeration* rara vez caben en una interfaz.

**Issara Willenskomer**: «[UX in Motion Manifesto](https://uxmag.com/articles/creating-usability-with-motion-the-ux-in-motion-manifesto)». Sostiene que los principios de Disney buscan atractivo y que la UI necesita usabilidad.
- Propone 12 principios de UI: easing, offset & delay, parenting, transformation, value change, masking, overlay, cloning, obscuration, parallax, dimensionality y dolly & zoom.
- Según él, el movimiento sirve a cuatro cosas: expectativa, continuidad, narrativa y relación.

**Emil Kowalski**: ingeniero de diseño (Linear, antes Vercel) y autor de Sonner y Vaul. Curso: [animations.dev](https://animations.dev/). Artículos: «[You don't need animations](https://emilkowal.ski/ui/you-dont-need-animations)», «[Great animations](https://emilkowal.ski/ui/great-animations)» y «[7 practical animation tips](https://emilkowal.ski/ui/7-practical-animation-tips)».
- Cuanto más a menudo se ve una animación, menos animación debe llevar. Las acciones de teclado no se animan nunca («You should never animate them.»).
- Menos de 300 ms. Un select de 180 ms se nota más rápido que uno de 400 ms.
- Nada aparece desde `scale(0)`: empieza en 0,93–0,95. Los popovers escalan desde su disparador (`transform-origin`).

**Rauno Freiberg**: ingeniero de diseño en Vercel y autor de cmdk. Obras: «[Invisible Details of Interaction Design](https://rauno.me/craft/interaction-design)» y [Devouring Details](https://devouringdetails.com/), un manual interactivo de 23 capítulos.
- Una animación se tiene que poder interrumpir en cualquier momento.
- El movimiento indica de dónde viene algo y adónde pertenece (coherencia espacial).
- Las acciones ligeras pueden dispararse durante el gesto. Las destructivas esperan a que el gesto termine.
- Quitar la animación de menús que se usan cientos de veces hizo que la interfaz se sintiera más rápida.

**Josh W. Comeau**: artículos «[An Interactive Guide to CSS Transitions](https://www.joshwcomeau.com/animation/css-transitions/)» y «[A Friendly Introduction to Spring Physics](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/)».
- Duraciones asimétricas: un hover entra en 125 ms y sale en 450 ms; un desplegable aparece en 100 ms y se oculta en 400 ms.
- *Doom flicker*: el hover se pone en un contenedor padre y la animación en un hijo.
- Usa springs para el movimiento, no para el color ni la opacidad. «Animation is like salt: too much of it spoils the dish.»

**Paul Lewis**: «[FLIP your animations](https://aerotwist.com/blog/flip-your-animations/)». Hay una ventana de ~100 ms tras la interacción en la que puedes medir sin que se note. Con eso, cualquier cambio de layout se anima solo con `transform`.

**Apple HIG, Motion** ([JSON oficial](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/motion.json)): «Don't add motion for the sake of adding motion.» No hagas esperar a nadie a que acabe una animación. Evita el movimiento en las interacciones frecuentes. El movimiento no debe ser la única vía para comunicar algo.

**Material Design 3, motion**: es el único sistema que publica tokens numéricos completos, tanto de curvas como de springs ([documentación de Motion en material-components-android](https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md)).

## Principios

1. **Primero decide si animar.**
   - **Por qué:** una animación que se repite cientos de veces al día se convierte en lastre. El movimiento añadido «porque sí» resta (Apple).
   - **Cómo aplicarlo:** por cada animación, pregúntate qué explica y cuántas veces al día la verá el usuario. Si no explica nada y se ve a menudo, quítala. Los atajos de teclado y la paleta de comandos no se animan.
   - **Fuente(s):** Kowalski («You don't need animations»), Rauno, Apple HIG.

2. **Corto: 100–300 ms para la UI y 400 ms como máximo.**
   - **Por qué:** a partir de 500 ms se siente lento (NN/g). Una respuesta inmediata transmite rapidez.
   - **Cómo aplicarlo:** feedback de control (toggle, check) ~100 ms; menú o popover 150–200 ms; modal o panel 200–300 ms; recorridos largos en pantallas grandes hasta 400 ms. Una web de marketing o narrativa puede alargarse en la secuencia de entrada, nunca en la navegación.
   - **Fuente(s):** [NN/g](https://www.nngroup.com/articles/animation-duration/), Kowalski, tokens de Material (50–1000 ms).

3. **Las duraciones dependen de la distancia y van en tokens.**
   - **Por qué:** recorrer más distancia justifica más tiempo, y una escala fija evita valores mágicos.
   - **Cómo aplicarlo:** `--dur-1: 100ms; --dur-2: 160ms; --dur-3: 240ms; --dur-4: 360ms;` y, además, `--ease-out`, `--ease-in-out` y `--ease-emph`. Con 3–4 duraciones y 2–3 curvas basta.
   - **Fuente(s):** Drasner (t1–t5), NN/g.

4. **Entrar despacio y salir rápido.**
   - **Por qué:** lo que llega necesita leerse. Lo que se va solo estorba.
   - **Cómo aplicarlo:** el popup entra en ~250 ms y sale en ~150–200 ms. En el hover es al revés (Comeau): la reacción entra al instante (125 ms) y se apaga suave (450 ms), para que pasar el ratón por encima no dé tirones.
   - **Fuente(s):** NN/g, Comeau.

5. **El easing comunica física. `linear` solo para progreso, rotación continua y scroll-driven.**
   - **Por qué:** el movimiento lineal se ve mecánico. La desaceleración imita lo que esperamos de un objeto real (*slow in/slow out*).
   - **Cómo aplicarlo:** entradas con `ease-out` o una curva propia. Material da curvas listas:
     - emphasized decelerate `cubic-bezier(0.05,0.7,0.1,1)`
     - emphasized accelerate `cubic-bezier(0.3,0,0.8,0.15)`
     - standard `cubic-bezier(0.2,0,0,1)`

     Personalízalas para la marca en vez de copiarlas tal cual (Drasner).
   - **Fuente(s):** Willenskomer, Material, Kowalski.

6. **Interrumpible siempre.**
   - **Por qué:** si el usuario cambia de idea a mitad de camino y la interfaz le obliga a esperar, parece rota.
   - **Cómo aplicarlo:** para los estados que se activan y desactivan (abrir/cerrar, hover), usa `transition`, no `@keyframes`. Una transición se redirige desde el valor actual; un keyframe vuelve a empezar. En JS, usa springs (Motion) o WAAPI con `animation.reverse()`. No bloquees clics durante una animación.
   - **Fuente(s):** Kowalski («Great animations»), Rauno, Apple HIG.

7. **Coherencia espacial: el origen importa.**
   - **Por qué:** el movimiento enseña de dónde viene un elemento y adónde vuelve. Así se construye un mapa mental.
   - **Cómo aplicarlo:**
     - En popovers y menús, pon `transform-origin` en el lado del disparador.
     - Un panel que entra por la derecha sale por la derecha.
     - Usa View Transitions con `view-transition-name` para que la miniatura «se convierta» en el detalle (*transformation* o *cloning* de Willenskomer).
     - No escales desde 0: empieza en `scale(.95)` combinado con `opacity:0`.
   - **Fuente(s):** Rauno, Kowalski (tips 2 y 5), Willenskomer.

8. **Feedback inmediato a la acción.**
   - **Por qué:** el usuario necesita saber que su acción se ha registrado antes de ver el resultado.
   - **Cómo aplicarlo:**
     - Pulsar: `:active { transform: scale(.97) }`.
     - En un gesto, el feedback arranca ya. Una acción destructiva no se ejecuta hasta soltar.
     - Un tooltip tarda en aparecer la primera vez. Los siguientes aparecen al instante (`transition-duration:0` cuando ya hay uno abierto).
   - **Fuente(s):** Kowalski (tips 1 y 3), Rauno.

9. **Coreografía: escalonar con sentido y una sola secuencia.**
   - **Por qué:** el *offset & delay* indica qué elementos van juntos y cuáles son independientes. Si todo entra a la vez, se pierde la jerarquía.
   - **Cómo aplicarlo:** escalona 40–80 ms por elemento, con un total de menos de ~600–800 ms. Hazlo solo en la carga inicial o al revelar un grupo. No lo repitas en cada sección al hacer scroll. Conecta con «gasta la audacia en un solo sitio».
   - **Fuente(s):** Willenskomer (*offset & delay*), Rauno (*motion choreography*). El rango de ms es una regla práctica propia y no está verificado en ninguna fuente.

10. **Rendimiento: anima solo `transform` y `opacity`.**
    - **Por qué:** son las propiedades baratas, que no recalculan layout ni repintan.
    - **Cómo aplicarlo:**
      - Para los cambios de layout, usa FLIP o View Transitions.
      - Usa `will-change` solo como último recurso ante un problema medido: ponlo justo antes del cambio y quítalo después, nunca en `*`. MDN dice: «as a last resort to try to deal with existing performance problems».
      - Comprueba con Paint Flashing y el panel Performance de DevTools.
    - **Fuente(s):** [web.dev](https://web.dev/articles/animations-guide), [MDN will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change), Comeau, Lewis.

11. **Movimiento reducido no significa quitar todo el movimiento.**
    - **Por qué:** la preferencia se llama *reduced*, no *no-motion* (Bailey). Las transiciones de opacidad y color no provocan trastornos vestibulares. Lo que hace daño es el desplazamiento grande, el zoom, el giro y el parallax.
    - **Cómo aplicarlo:** dentro de `@media (prefers-reduced-motion: reduce)`:
      - Cambia `translate` y `scale` por un fundido que dure lo mismo.
      - Quita el parallax y el scroll suave (`scroll-behavior:auto`).
      - Pausa los bucles.

      Si una animación explica algo, ralentízala o pon un botón para reproducirla.
    - **Fuente(s):** [Val Head](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/), [Eric Bailey](https://css-tricks.com/revisiting-prefers-reduced-motion/), [WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).

12. **Nada esencial puede depender de una animación.**
    - **Por qué:** quien tiene la animación desactivada, usa un navegador sin soporte o lo ve en una captura (Playwright) debe recibir el mismo contenido.
    - **Cómo aplicarlo:**
      - El estado final de cada animación tiene que ser el estado por defecto del CSS.
      - Usa `animation-fill-mode: both` solo para el estado inicial.
      - Prueba la web con las animaciones desactivadas.
      - Apple añade que el movimiento no sea el único canal de información.
    - **Fuente(s):** Tatiana Mac («Animations should be an enhancement, not critical to a user's understanding»), Apple HIG.

13. **Springs para lo que se mueve, curvas para lo que cambia.**
    - **Por qué:** un spring conserva la velocidad cuando lo interrumpes y resulta más creíble.
    - **Cómo aplicarlo:**
      - Para color y opacidad, usa `cubic-bezier`.
      - Para la posición, especialmente con gestos, usa un spring. En JS: Motion. En CSS: `linear()` generado con la herramienta de Jake Archibald y Adam Argyle.
      - Referencia de Material: spring espacial por defecto con damping 0,9 y stiffness 700; rápido 0,9 y 1400; lento 0,9 y 300. Para efectos (sin rebote), damping 1.
    - **Fuente(s):** Comeau, Material (Android Motion.md), [Chrome: linear()](https://developer.chrome.com/docs/css-ui/css-linear-easing-function).

14. **El movimiento es parte de la identidad.**
    - **Por qué:** un sitio con curvas genéricas se mueve como todos.
    - **Cómo aplicarlo:** en el plan de diseño, añade una línea de «carácter del movimiento» que salga del mundo del cliente. Por ejemplo, «pesado y amortiguado» para una carpintería o «seco y mecánico» para una imprenta. Elige 1 curva firma y descarta tipos de movimiento: «aquí nada gira».
    - **Fuente(s):** Drasner.

## Antipatrones

- **Fade-up en cada bloque al hacer scroll.** Ya está en ANTIPATRONES. Además, el contenido queda invisible si el JS falla o en las capturas, y obliga a esperar. Las fuentes son Apple («don't make people wait») y Kowalski.
- **Animar acciones de teclado, paletas de comandos o menús de uso frecuente.** Kowalski y Rauno.
- **Aparecer desde `scale(0)` o con `transform-origin: center` en popovers anclados.** Kowalski.
- **Duraciones de 500 ms o más en la UI, o la misma duración para todo.** NN/g.
- **Usar `@keyframes` para estados reversibles**, como abrir y cerrar un menú: no se puede interrumpir con suavidad. Kowalski.
- **`transition: all`**: anima sin querer propiedades de layout y color. Lista solo las propiedades que quieres animar. Es una inferencia propia a partir de web.dev.
- **Animar `height`, `top`, `left`, `width` o `box-shadow` en bucles o en scroll.** web.dev.
- **`will-change` repartido de forma preventiva por toda la hoja de estilos.** MDN.
- **`prefers-reduced-motion` resuelto con un `* { animation: none !important }` sin pensar.** Rompe los eventos `animationend` y pierde el feedback útil. Si hay que hacer un reset global, mejor duraciones de `0.001ms` y `animation-iteration-count: 1`, sabiendo que también es imperfecto. Bailey.
- **Parallax, scroll-jacking o scroll suave exagerado como «momento audaz» sin alternativa reducida.** Val Head.
- **Copiar las curvas de Material o los springs de librerías sin adaptarlos.** La web acaba moviéndose «como Google». Drasner.
- **Microinteracciones decorativas por todas partes**, como iconos que botan o cursores personalizados con estela, en vez de feedback con función. Apple, Kowalski.
- **Hover que mueve el elemento fuera del cursor** (*doom flicker*). Comeau.

## Técnicas modernas

Soporte según MDN BCD, consultado el 2026-10-26.

| Técnica | Para qué | Soporte |
|---|---|---|
| `@starting-style` + `transition-behavior: allow-discrete` (transicionar `display` y `overlay`) | Animar la entrada desde `display:none` o al insertar en el DOM. Animar la salida de `popover` y `<dialog>` sin JS. El bloque `@starting-style` va **después** de la regla del estado abierto. | Chrome/Edge 117, Firefox 129, Safari 17.5. Baseline desde agosto de 2024. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) |
| `interpolate-size: allow-keywords` / `calc-size()` | Animar a `height:auto` (acordeones, `<details>`) | Chrome/Edge 129. **Firefox y Safari: no.** Solo como mejora progresiva: sin soporte, el cambio salta de golpe. [Chrome](https://developer.chrome.com/blog/new-in-chrome-129#interpolate-size) |
| `document.startViewTransition()` (misma página) | Morph entre estados, transiciones de lista y filtro | Chrome/Edge 111, Safari 18, Firefox 144 |
| `@view-transition { navigation: auto; }` (entre documentos) | Transiciones entre páginas de una web multipágina estática, sin SPA | Chrome/Edge 126, Safari 18.2, **Firefox: no**. Solo entre páginas del mismo origen. Chrome la omite si la navegación tarda más de 4 s. Hay tipos con `:active-view-transition-type()`. [Chrome](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document) |
| `animation-timeline: scroll()` / `view()` + `animation-range` | Barras de progreso y revelados ligados al scroll, fuera del hilo principal | Chrome/Edge 115, Safari 26, Firefox 159 (BCD; MDN lo marcaba aún como «Limited availability»). Envuélvelo en `@supports (animation-timeline: view())`. Declara `animation-timeline` **después** del shorthand `animation`, que la reinicia. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline), [Chrome](https://developer.chrome.com/blog/scroll-animation-performance-case-study) |
| `linear()` | Springs y rebotes en CSS puro | Chrome 113, Firefox 112, Safari 17.2 |

Patrón base recomendado (síntesis propia de las fuentes anteriores):

```css
:root{
  --dur-1:100ms; --dur-2:160ms; --dur-3:240ms; --dur-4:360ms;
  --ease-out:cubic-bezier(.2,0,0,1);          /* Material standard: punto de partida, no destino */
  --ease-enter:cubic-bezier(.05,.7,.1,1);     /* emphasized decelerate */
  --ease-exit:cubic-bezier(.3,0,.8,.15);      /* emphasized accelerate */
}
.menu{ opacity:0; transform:scale(.95); transform-origin:var(--origin, top left);
  transition:opacity var(--dur-2) var(--ease-exit), transform var(--dur-2) var(--ease-exit),
             display var(--dur-2) allow-discrete, overlay var(--dur-2) allow-discrete; }
.menu:popover-open{ opacity:1; transform:none;
  transition-duration:var(--dur-3); transition-timing-function:var(--ease-enter); }
@starting-style{ .menu:popover-open{ opacity:0; transform:scale(.95); } }
@media (prefers-reduced-motion: reduce){
  .menu, .menu:popover-open{ transform:none; }   /* se queda el fundido */
  html{ scroll-behavior:auto; }
}
```

## Tensiones y debates

- **¿Salir con `ease-in` o con `ease-out`?** Comeau recomienda `ease-in` para lo que abandona el viewport. Material tiene una curva de salida acelerada. Kowalski usa `ease-out` también para salir, porque arranca rápido y se siente más responsivo. Conclusión práctica: `ease-in` solo si el elemento sale de la pantalla. En desvanecimientos en el sitio, salida corta con `ease-out`.
- **¿Duraciones o springs?** Material, Apple y Comeau van hacia los springs, que se pueden interrumpir y conservan la velocidad. Los springs necesitan JS y pueden dar tirones si el hilo principal está ocupado (Comeau y Kowalski). `linear()` es un término medio, pero no conserva la velocidad al interrumpirse.
- **¿Disney sí o no?** Willenskomer rechaza que los 12 principios de Disney rijan la UI, porque buscan atractivo y no usabilidad. Aun así, el easing y el escalonado salen de ellos. Úsalos como vocabulario, no como checklist.
- **¿Desactivar el movimiento por defecto o reducirlo cuando el usuario lo pide?** Tatiana Mac propone «no-motion-first»: el movimiento va solo dentro de `@media (prefers-reduced-motion: no-preference)`, porque mucha gente no conoce el ajuste del sistema. Bailey y Head prefieren reducir antes que eliminar, y Head propone además un interruptor visible. Para esta casa: secuencias y momentos audaces en `no-preference`, y el feedback de estado (opacidad, color) siempre.
- **Regla envejecida: «`will-change: transform` o `translateZ(0)` para acelerar por GPU».** Hoy MDN y web.dev lo consideran un último recurso.
- **Regla envejecida: «para animar a `height:auto` hay que usar `max-height` o JS».** `interpolate-size` lo resuelve, pero solo en Chromium. Mientras tanto, usa `grid-template-rows: 0fr → 1fr` (técnica conocida, no verificada en este informe) o acepta que el cambio sea instantáneo.
- **Kowalski frente al marketing.** Su regla de menos de 300 ms es para herramientas de uso frecuente. Él mismo exceptúa las webs de marketing. En una landing que se ve una vez, la entrada puede durar más, pero la navegación y el feedback no.
- **WCAG 2.3.3 es nivel AAA, no AA.** Que no sea obligatorio no es excusa: la propia norma explica el daño vestibular.

## Fuentes

- Emil Kowalski, «You don't need animations»: https://emilkowal.ski/ui/you-dont-need-animations [verificada]
- Emil Kowalski, «Great animations»: https://emilkowal.ski/ui/great-animations [verificada]
- Emil Kowalski, «7 practical animation tips»: https://emilkowal.ski/ui/7-practical-animation-tips [verificada]
- animations.dev (curso de Kowalski): https://animations.dev/ [verificada]
- Rauno Freiberg, «Invisible Details of Interaction Design»: https://rauno.me/craft/interaction-design [verificada]
- Devouring Details: https://devouringdetails.com/ [verificada]
- Josh W. Comeau, «An Interactive Guide to CSS Transitions»: https://www.joshwcomeau.com/animation/css-transitions/ [verificada]
- Josh W. Comeau, «A Friendly Introduction to Spring Physics»: https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/ [verificada]
- NN/g, «Executing UX Animations: Duration and Motion Characteristics»: https://www.nngroup.com/articles/animation-duration/ [verificada]
- Apple HIG, Motion (JSON): https://developer.apple.com/tutorials/data/design/human-interface-guidelines/motion.json [verificada]
- Material Components Android, Motion.md (tokens de M3): https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md [verificada]
- m3.material.io, tokens de easing y duración: https://m3.material.io/styles/motion/easing-and-duration/tokens-specs [sin verificar: la página se carga con JS y no devolvió contenido]
- Val Head, «Designing With Reduced Motion For Motion Sensitivities»: https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/ [verificada]
- Val Head, web personal: https://valhead.com/ [verificada]
- *Designing Interface Animation* (Rosenfeld Media): https://www.rosenfeldmedia.com/books/designing-interface-animation/ [sin verificar: 403; existencia confirmada en valhead.com]
- Rachel Nabors, *Animation at Work*: https://abookapart.com/products/animation-at-work [verificada]
- Sarah Drasner, «Animation in Design Systems»: https://24ways.org/2016/animation-in-design-systems/ [verificada]
- Issara Willenskomer, «UX in Motion Manifesto»: https://uxmag.com/articles/creating-usability-with-motion-the-ux-in-motion-manifesto [verificada]
- Doce principios de Disney: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation [verificada; fuente secundaria]
- Paul Lewis, «FLIP your animations»: https://aerotwist.com/blog/flip-your-animations/ [verificada]
- Tatiana Mac, «No-motion-first»: https://www.tatianamac.com/posts/prefers-reduced-motion [verificada]
- Eric Bailey, «Revisiting prefers-reduced-motion»: https://css-tricks.com/revisiting-prefers-reduced-motion/ [verificada]
- W3C, Understanding SC 2.3.3: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html [verificada]
- web.dev, «How to create high-performance CSS animations»: https://web.dev/articles/animations-guide [verificada]
- MDN, will-change: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change [verificada]
- MDN, @starting-style: https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style [verificada]
- MDN, animation-timeline: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline [verificada]
- MDN BCD (animation-timeline, interpolate-size, @view-transition, @starting-style, Document.startViewTransition): https://github.com/mdn/browser-compat-data [verificada]
- Chrome, cross-document view transitions: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document [verificada]
- Chrome, interpolate-size (New in Chrome 129): https://developer.chrome.com/blog/new-in-chrome-129 [verificada]
- Chrome, caso de rendimiento de scroll-driven animations: https://developer.chrome.com/blog/scroll-animation-performance-case-study [verificada]
- Chrome (Bramus), función de easing linear(): https://developer.chrome.com/docs/css-ui/css-linear-easing-function [verificada]
