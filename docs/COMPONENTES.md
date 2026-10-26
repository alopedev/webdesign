# Componentes: HTML nativo y bibliotecas

Qué usar cuando una web necesita componentes interactivos (menú, diálogo, pestañas, acordeón, combobox…).
Leer al planificar una web con interacción. Stack: Next.js + React + TypeScript (ver `CLAUDE.md`). Comprobado el 26/10/2026 (versiones y fechas del registro de npm; licencias en el repo o la web de cada una).

## La idea en una frase
Una biblioteca de componentes aporta **comportamiento** (teclado, foco, ARIA, casos raros). El **aspecto** sale del brief, como la tipografía y el color. Tomar el aspecto por defecto de una biblioteca es otra plantilla.

## Orden de preferencia
1. **HTML nativo**, escrito en el JSX de un componente de servidor. Accesible de serie, funciona sin JS y no añade código al navegador. Cubre diálogos, menús, acordeones y paneles.
2. **Primitivas sin estilo (headless) de React**, en un componente `'use client'`, solo para componentes con comportamiento difícil (combobox, selector de fechas, menú con submenús, pestañas con teclado).
3. **Bibliotecas de copiar y pegar** (shadcn/ui): como punto de partida de código, reescribiendo todo su estilo.
4. **Bibliotecas de efectos animados** (Aceternity, Magic UI, React Bits): solo para estudiar un mecanismo. No se pegan tal cual.

## 1. HTML nativo (primera opción)
| Necesidad | Elemento | Soporte (Baseline, web-features 3.44) |
|---|---|---|
| Modal, cajón lateral | `<dialog>` + `showModal()` | Amplio desde 2022 |
| Menú desplegable, tooltip con clic, panel flotante | atributo `popover` | Baseline desde ene. 2025 |
| Abrir/cerrar sin JS | `commandfor` + `command` en el botón | Baseline desde dic. 2025 (Chrome 135, Firefox 144, Safari 26.2). Añadir 3 líneas de JS de respaldo si el público usa navegadores viejos |
| Acordeón, FAQ | `<details>`/`<summary>`; con `name` compartido se abre solo uno | Amplio; `name` Baseline desde 2024 |
| Animar la aparición | `@starting-style` + `transition` | Baseline desde 2024 |
| Bloquear el fondo | `inert` | Amplio desde 2023 |

**Todavía no Baseline** (usar solo como mejora progresiva, con algo que funcione sin ellos): posicionamiento con anclas (`anchor-name`), `<select>` personalizable (`appearance: base-select`), `closedby` en `<dialog>`, `interestfor`, animaciones ligadas al scroll.

Pestañas y carrusel no tienen elemento nativo: o se escriben con el patrón de la [APG del W3C](https://www.w3.org/WAI/ARIA/apg/patterns/), o se cambian por algo nativo (secciones con ancla, `<details>`, scroll con `scroll-snap`).

## 2. Primitivas sin estilo (React)
Todas activas y con licencia permisiva. Dan el comportamiento accesible; el CSS lo pones tú con los tokens del proyecto (CSS Modules o el `[data-*]` de estado que exponen).

| Biblioteca | Para qué stack | Licencia | Última versión | Cuándo |
|---|---|---|---|---|
| [Base UI](https://base-ui.com) (equipo de MUI, Radix y Floating UI) | React | MIT | 1.9.0, 9/10/2026 | **Primera opción.** Es la base por defecto de shadcn desde julio de 2026 |
| [React Aria](https://react-spectrum.adobe.com/react-aria/) (Adobe) | React | Apache-2.0 | `react-aria-components` 1.22.1, 9/10/2026 | La más completa en accesibilidad e idiomas (fechas, números, RTL). Más verbosa |
| [Radix Primitives](https://www.radix-ui.com/primitives) | React | MIT | `radix-ui` 1.8.1, 12/10/2026 | Muy extendida; mucha documentación y ejemplos |
| [Ark UI](https://ark-ui.com) (sobre Zag.js) | React, Vue, Solid, Svelte | MIT | 5.39.3, 5/10/2026 | Si algún día un proyecto no es React (Vue, Svelte, Solid) |
| [Bits UI](https://bits-ui.com) | Svelte | MIT | 2.20.2, 23/10/2026 | Proyecto en Svelte |
| [Headless UI](https://headlessui.com) (Tailwind Labs) | React, Vue | MIT | 2.2.10, 7/4/2026 | Pocos componentes y ritmo lento; las anteriores cubren más |

Fuera de React: [Web Awesome](https://webawesome.com) (antes Shoelace) son web components que funcionan en HTML plano. Núcleo MIT y gratis, con versión Pro de pago y tema propio que habría que reescribir. Con nuestro stack no hace falta. Shoelace ya no saca versiones (última, 2.20.1, marzo de 2025).

## 3. shadcn/ui
- **Qué es:** no es una dependencia; copia el código de cada componente a tu proyecto («This is not a component library. It is how you build your component library»). MIT. Solo React, con Tailwind. Puede usar Base UI, Radix o React Aria por debajo.
- **El problema:** su aspecto por defecto (gris neutro, radios medianos, bordes finos, sombra suave, Inter o Geist) es el uniforme de los SaaS y de las webs generadas con IA. Reconocerlo es inmediato.
- **Por defecto no lo usamos:** trae Tailwind y su tema, y nuestras webs no son paneles de producto. Usar directamente la primitiva (Base UI) da lo mismo sin el aspecto.
- **Si se usa** (p. ej. una web con mucho formulario): quedarse con la estructura y el comportamiento. Sustituir todos los tokens (`--background`, `--primary`, `--radius`, fuentes…) por los del plan antes de construir, y revisar cada componente contra `ANTIPATRONES.md` (tarjetas, filetes, píldoras).
- **Test rápido:** si una captura de la web podría ser la demo de shadcn, no está terminada.

## 4. Efectos animados y motores de animación
| Biblioteca | Stack | Licencia | Ojo |
|---|---|---|---|
| [Aceternity UI](https://ui.aceternity.com) | React + Tailwind + Motion | Componentes gratis; Pro con licencia propia de pago | Muchos de sus efectos (focos, auroras, rejillas con brillo, tarjetas 3D) ya son seña de «landing hecha con IA» |
| [Magic UI](https://magicui.design) | React (sigue el modelo de shadcn) | MIT; Pro de pago (199 $) | Igual: marquesinas, botones con destello, bento grids |
| [React Bits](https://reactbits.dev) | React, con CSS o Tailwind | MIT + **Commons Clause**: no se pueden vender los componentes como tales | Fondos y textos animados muy reconocibles |
| [Motion](https://motion.dev) | React, y también JS sin framework | MIT, 14.6.0, 22/10/2026 | No es una biblioteca de componentes: es el motor de animación. Alternativa a GSAP; no se usan los dos en la misma web |
| [Lenis](https://lenis.darkroom.engineering) | Cualquiera | MIT, 1.3.27, 15/10/2026 | Scroll suave sincronizado con GSAP. Respeta `prefers-reduced-motion` por defecto. Solo si el plan lo pide |
| [React Three Fiber](https://r3f.docs.pmnd.rs) + drei | React | MIT, 9.8.2, 14/10/2026 | Three.js (WebGL) escrito como componentes de React. Solo si el momento audaz es 3D |
| [GSAP](https://gsap.com) + `@gsap/react` | Cualquiera; en React con el hook `useGSAP` | Gratis, con licencia propia «Standard no-charge», no MIT. 3.15.0, 13/4/2026 | Lo usan 10 de las 14 últimas Site of the Day de Awwwards (muestra del 13 al 26/10/2026). **Motor de animación del stack** (ver `CLAUDE.md`) |

**Regla:** de estas bibliotecas se toma el *mecanismo* (cómo se escalona, qué curva usa, qué propiedad anima) y se rehace con el material del cliente, igual que con las referencias de `REFERENCIAS.md`. Un efecto copiado tal cual cuenta como plantilla y gasta el «momento audaz» en algo que no es del cliente.

## Descartadas o no recomendadas
- **daisyUI** (MIT, activo) y **Pico CSS** (MIT, sin versiones desde marzo de 2025): son temas completos de clases. Su gracia es justo el aspecto por defecto, que es lo que no queremos.
- **Tailwind Plus Elements**: licencia propia de pago, no comprobada a fondo.

---
**Fuentes:** registro de npm (versiones y fechas, 26/10/2026); webs oficiales de cada biblioteca; changelog de shadcn/ui («Base UI as the Default», julio 2026); páginas de Awwwards de cada Site of the Day (sección «Technologies & Tools»); archivos LICENSE de shadcn/ui, Magic UI y React Bits; página de licencia de Aceternity UI Pro; `web-features` 3.44.0 para Baseline.
