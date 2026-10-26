# Enseñanzas de los posts guardados en Threads

Análisis de 6 posts enlazados, 14 capturas y 2 grabaciones de pantalla que Àlex guardó en Threads (26/10/2026).
Cada lección acaba en uno de estos destinos:
- Regla general → `PRINCIPIOS-ESTILO.md`
- Cosa a evitar → `ANTIPATRONES.md`
- Comprobación → `CHECKLIST-CALIDAD.md`
- Referencia visual o técnica concreta → aquí abajo

## Resumen en 5 ideas

1. **El objeto real del cliente es el mejor hero.** Two Coats (pintura) abre con un abanico de muestras que se despliega; .raw coffee con la bolsa de café y una ficha técnica. Nada de "número grande + degradado".
2. **Un color, llevado al extremo, ya es una identidad.** Atla = amarillo + negro en todo (web, pins, lacre). Dyslove pone nombre y contexto a un solo color ("Redline" sobre un coche rojo).
3. **Neutros con tinte, no grises puros.** Las paletas de @uiux.build son escalas de 6 pasos de un solo tono (lila, café, azul noche): sobrias pero con carácter.
4. **El contraste de tamaño entre dos familias hace la jerarquía.** Serif pequeña y elegante encima de una sans enorme (los pairings de @robiinluca).
5. **El "gusto" se da con referencias concretas, no con adjetivos.** Varios posts lo dicen: "el prompt es el brief de diseño". Las librerías de prompts ayudan, pero si todo el mundo copia los mismos, vuelve la web genérica.

## Lecciones

| Lección | Fuente (post) | Destino |
|---|---|---|
| Abrir con el objeto o gesto propio del oficio del cliente (abanico de muestras, bolsa de producto) y hacerlo interactivo. | Vídeo 2 (web Two Coats) · Vídeo 1 (.raw coffee) | PRINCIPIOS-ESTILO §1 (ejemplo) |
| Al elegir un producto/color, dejar que ese color ocupe toda la pantalla: la página se "tiñe" del producto. | Vídeo 2 (Two Coats → "Tomato Leaf") | Referencia (aquí) |
| Un solo color de marca + negro, aplicado con disciplina en todos los soportes, crea más identidad que una paleta amplia. | Capturas Atla (chaqueta, póster, lacre) · Dyslove "Redline" / "Royal Black" | PRINCIPIOS-ESTILO §5 (refuerza "dominante + acento") |
| Dar nombre y contexto a los colores ("Redline", "Tomato Leaf") en vez de solo hex: ayuda a decidir y a contar la marca. | Dyslove · Two Coats | PRINCIPIOS-ESTILO §5 (añadir) |
| Neutros tintados: construir la escala de grises con un ligero tono (lila, café, azul) en 6 pasos de oscuro a claro. | Paletas @uiux.build (3 capturas) | PRINCIPIOS-ESTILO §5 (añadir) |
| En esas escalas, solo los pasos 5 y 6 sirven para texto normal sobre el fondo más oscuro; el paso 4 no llega a AA. | Paletas @uiux.build (contraste calculado por mí, ver abajo) | CHECKLIST-CALIDAD |
| Rojo saturado tipo #E61E32 da ~4,6:1 con blanco o negro: vale para texto grande o botones, justo para texto pequeño. | Dyslove "Redline" (calculado por mí) | CHECKLIST-CALIDAD |
| Pairing por contraste extremo: serif display pequeña (o cursiva) encima, sans muy grande y pesada debajo. | Pairings @robiinluca (4 capturas) | PRINCIPIOS-ESTILO §4 (ejemplo) |
| Comprobar la licencia de cada fuente antes de usarla (no todas son gratis para webs comerciales). | Pairings @robiinluca (The Season, Cooper Black) | CHECKLIST-CALIDAD |
| Mezclar épocas: wordmark serif clásica + pintura antigua de fondo + texto pequeño en grotesca actual. El choque da carácter. | Capturas Atla | Referencia (aquí) |
| Estética "ficha técnica": etiquetas tipo `ITEM:` `SERIAL CODE:` en monoespaciada + tipografía de matriz de puntos en marquesina. | Vídeo 1 (.raw coffee) | Referencia (aquí) |
| Textura material (papel, semitono, lacre, esmalte, plástico) para salir del "plano digital". | Iconos Platen/DayCity/tone/Pool · lacre Atla | PRINCIPIOS-ESTILO §6 (ejemplos) |
| Pedir a la IA "algo bonito" da algo genérico. El prompt debe llevar estructura, referencias reales y gusto concreto. | Post @elux.space (relacionado en Threads) | CLAUDE.md / BRIEF-PLANTILLA |
| No copiar prompts de librerías tal cual: usarlos como punto de partida y adaptarlos al brief, o la web acabará igual que la de todos. | Mi lectura de los posts de getlayers/jiro/motionin | ANTIPATRONES (añadir) |

### Choques con los documentos base (resueltos: se matizó ANTIPATRONES.md según la propuesta de abajo; Àlex puede revertirlo)

- **Inter.** Un pairing guardado es *Cooper Black + Inter*, y `ANTIPATRONES.md` pone Inter como elección por inercia. Mi opinión: Inter sigue siendo antipatrón como elección por defecto; vale si se justifica (p. ej. como texto neutro bajo una display muy expresiva).
- **Etiquetas pequeñas en mayúsculas.** El póster de Atla las usa (y funciona), pero `ANTIPATRONES.md` prohíbe los "eyebrows". La diferencia: en Atla son texto con contenido y una composición pensada, no una etiqueta encima de cada sección. Propongo matizar la regla, no quitarla.
- **Crema + color.** Two Coats usa fondo crema. No es el cliché crema+terracota porque el color viene del producto (180 pinturas). Encaja con el principio 1.

## Referencias (webs, herramientas, técnicas)

He comprobado que cada web existe y lo que dice ser (26/10/2026). No he probado a fondo ninguna ni sus precios; un comentario del post dice que varias son de pago.

**Inspiración (mirar, no copiar)**
- [godly.website](https://godly.website) — webs premiadas. Ojo: ahora redirige a recent.design.
- [land-book.com](https://land-book.com) — landings. (No pude abrirla: protección anti-bots.)
- [landdding.com](https://landdding.com) — nuevas webs votadas por la comunidad.
- [siteinspire.com](https://siteinspire.com) — webs de agencias escogidas a mano. (No pude abrirla: protección anti-bots.)
- [loadmo.re](https://loadmo.re) — archivo de webs móviles atrevidas.
- [collectui.com](https://collectui.com) — colección de UI.
- [logosystem.co](https://logosystem.co) — galería de logos.
- [fontinlogo.com](https://fontinlogo.com) — qué fuente usa cada marca.
- [60fps.design](https://60fps.design) — animaciones e interacciones de apps.

**Recursos para construir**
- [uncut.wtf](https://uncut.wtf) — catálogo de fuentes contemporáneas gratis para uso comercial (163 fuentes).
- [shaders.paper.design](https://shaders.paper.design) — shaders como componentes React o GLSL, sin dependencias.
- [grainient.supply](https://grainient.supply) — degradados, grano y fondos animados (suscripción).
- [number-flow.barvian.me](https://number-flow.barvian.me) — componente React para animar números, accesible.
- [tweakcn.com](https://tweakcn.com) — editor de temas para shadcn/ui (Tailwind v4).
- [dialkit.dev](https://dialkit.dev) — controles en vivo para ajustar animación, layout y color en la propia interfaz.
- [reelfolio.io](https://reelfolio.io) — crear vídeos showreel de portfolio.

**Librerías de prompts para IA** (útiles como referencia; ver lección sobre no copiarlos tal cual)
- [getlayers.ai](https://getlayers.ai) — plantillas, escenas 3D WebGL y fondos, cada uno como un prompt.
- [jiro.build](https://jiro.build) — +1.300 prompts de diseño web.
- [motionin.design](https://motionin.design) — secciones interactivas con física y cursor, como prompt.
- [prettysites.io](https://prettysites.io) — webs con prompt y archivos fuente.

**Fuentes de los pairings**
- Gratis en Google Fonts (comprobado): Playfair Display, DM Sans, Cormorant Garamond, Manrope, Inter.
- Satoshi: está en Fontshare (comprobado que existe; revisar su licencia).
- The Season y Cooper Black: **no verificado**; suelen ser de pago. Revisar licencia antes de usar.

**Paletas guardadas** (contraste WCAG calculado sobre el color más oscuro de cada escala)

| Paleta | Colores (oscuro → claro) | Paso 6 | Paso 5 | Paso 4 |
|---|---|---|---|---|
| Lila noche | #17151C #292531 #45404F #716879 #AAA2B3 #E2DDE7 | 13,6:1 | 7,4:1 | 3,4:1 (solo texto grande) |
| Café | #211B1A #382A28 #60433D #916B60 #C1A094 #E8D8CE | 12,3:1 | 7,1:1 | 3,6:1 (solo texto grande) |
| Azul noche | #111522 #1E263B #303D59 #536684 #98A9C4 #DCE3EF | 14,1:1 | 7,6:1 | 3,1:1 (solo texto grande) |
| Redline | #E61E32 | 4,6:1 con negro o blanco | | |
| Royal Black | #121212 | 18,7:1 con blanco | | |

## Fuentes (posts)

- @textura.eu — "6 design resources worth bookmarking" ([post](https://www.threads.com/@textura.eu/post/De7reS_jFIN)). Promete 6 y lista 5.
- @textura.eu — "If you design with AI, this is all you need" ([post](https://www.threads.com/@textura.eu/post/De2UaSjkVVC))
- @heytanzil — mismo título; cambia getlayers por jiro.build, su propio producto ([post](https://www.threads.com/@heytanzil/post/De6v5RmDxrj))
- @dyslove.design — "New Color Combos" ([post](https://www.threads.com/@dyslove.design/post/De9gzSeCG7b))
- @robiinluca — "the best font pairings" ([post](https://www.threads.com/@robiinluca/post/De7hsH-EewT))
- @refilkae — "Goated sites to get rid of AI slop UI" ([post](https://www.threads.com/@refilkae/post/DexWztHiC9x))
- Capturas sin enlace: identidad Atla, iconos de app, paletas @uiux.build. Vídeos: showcase de packaging (.raw coffee, Soft Services, Atticosoap) y web Two Coats. No sé quién los publicó.

Aviso: varios posts son de cuentas que promocionan su propio producto (p. ej. heytanzil → jiro.build). No es malo, pero no son listas neutrales.
