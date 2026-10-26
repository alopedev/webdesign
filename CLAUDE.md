# CLAUDE.md — Diseño web de alto nivel

Este repositorio genera páginas web originales y modernas. Prioridad: identidad visual propia + calidad técnica.
Idioma de trabajo: castellano. Respuestas concisas.

## Documentos de referencia (se cargan con la sesión)
@docs/PRINCIPIOS-ESTILO.md
@docs/ANTIPATRONES.md

Leer solo cuando haga falta (no se importan para ahorrar contexto):
- `docs/BRIEF-PLANTILLA.md` — al empezar una web nueva (pasos 1–8).
- `docs/REGISTRO-DIRECCIONES.md` — antes de preparar opciones, y para añadir la nueva al acabar.
- `docs/REFERENCIAS.md` — biblioteca de fuentes, paletas, webs y herramientas; al buscar referencias.
- `docs/CHECKLIST-CALIDAD.md` — antes de dar una web por terminada.
- `docs/COMPONENTES.md` — al planificar componentes interactivos (menús, diálogos, pestañas…): HTML nativo, primitivas sin estilo y qué hacer con shadcn y similares.
- `docs/ENSENANZAS-THREADS.md` — registro de los posts de Àlex y dónde se colocó cada lección; al añadir posts nuevos.
- `docs/compendio/` — investigación a fondo por áreas; para resolver dudas de un área. Es fondo, no tiene pasos propios: **el protocolo es el de abajo**.

## Protocolo de cada web (única fuente)
Àlex diseña junto a Claude: **cada pieza se elige entre opciones visuales antes de construir nada**. En cada punto ◆, Claude presenta 2–4 opciones con imágenes (láminas, esquemas, maquetas, capturas o vídeo) y una recomendación con su motivo (tarjeta de decisión), y **no avanza hasta que Àlex elige**. Solo se salta un ◆ si Àlex dice «decide tú» para ese punto. Mientras espera, no prepara nada que dependa de la elección. Cada elección (y lo descartado) queda escrita en `sitios/<nombre>/PLAN.md`.

**Cómo se presentan las opciones: en Design.** Las opciones y maquetas se enseñan en un Artifact del tipo **Design** de claude.ai (lienzo con mesas de trabajo): una mesa por opción, con su nombre y una línea de por qué. Se crea con la herramienta Artifact (`action: "quickstart"`, `intent: "design"`) y se usa uno por web, con un apartado por cada ◆. Sin sistema de diseño: cada web tiene identidad propia, salvo que el cliente traiga el suyo. Si se ha de enseñar una web real, va una captura dentro de la mesa. Las opciones de cada ◆ se aplican sobre lo ya elegido (la tipografía se enseña sobre la estructura elegida; la paleta, sobre estructura y tipografía), para que Àlex vea cómo queda junto y no piezas sueltas. Las opciones de un mismo ◆ son de verdad distintas: la primera que se ocurra entra como una más, nunca como la recomendada por defecto, y ninguna se parece al look propio de Claude ni a las 5 últimas entradas de `REGISTRO-DIRECCIONES.md`.

### Fase 1 — Entender (Claude)
1. **Brief.** Rellenar la Parte A de `BRIEF-PLANTILLA.md`. Si falta propósito, público o contenido real, preguntar antes de diseñar (máx. 3 preguntas).
2. **Mundo del cliente.** Inventario de 8–12 cosas que solo son suyas (objetos, materiales, documentos, cifras, rituales, lugar) + 3 palabras que usaría su público.

### Fase 2 — Elegir juntos (sin construir la web)
3. ◆ **Idea.** 3 ideas centrales: qué experiencia vive el visitante y qué la hace única. Cada una con su frase («En esta página, *[algo del cliente]* se convierte en *[recurso]*»), el test del competidor escrito y un boceto o secuencia de 3–4 viñetas.
4. ◆ **Inspiración.** Buscar de verdad, con capturas, en varias fuentes de `REFERENCIAS.md`: al menos una galería de premios (Awwwards, FWA, CSS Design Awards…), una curada por estilo (bestwebsite.gallery, hoverstat.es, curated.design…) y el mundo real del tema (obras, objetos, impresos del oficio). Nunca de memoria ni inventadas. 4–6 referencias, cada una con el mecanismo que se tomaría (rejilla, escala, ritmo, uso de la imagen, interacción). Àlex elige 2–3 o aporta las suyas.
5. ◆ **Estructura.** 2–3 esquemas en gris de la página completa: orden de secciones, rejilla, qué ocupa la primera pantalla, y cómo se reordena a 390px. Sin color ni tipografía final.
6. ◆ **Tipografía.** 3 opciones (máx. 2 familias cada una, buscadas en Fonts In Use y `REFERENCIAS.md`), con muestra de la escala y aplicadas a la primera pantalla de la estructura elegida, con textos reales.
7. ◆ **Paleta.** 3 paletas de 4–6 colores con nombre y rol, aplicadas sobre estructura y tipografía elegidas, con el contraste medido.

### Fase 3 — Dar forma
8. **Plan.** Escribir la Parte B del brief con todo lo elegido. Revisarlo contra `ANTIPATRONES.md` (Parte C) y señalar a Àlex cualquier choque (por ejemplo, una paleta y una tipografía que juntas recuerdan a un cliché) antes de seguir.
9. ◆ **Maquetas.** 2–3 maquetas de la primera pantalla en Design, que combinan lo elegido y varían el momento audaz, a 1440 y 390px. Àlex elige una y dice qué cambiar.
10. ◆ **Prototipos.** Si la web tiene interacción o animación protagonista (lo normal en una web de nivel premio), 2 prototipos de solo ese momento (en Design si basta; si necesita código, en `sitios/<nombre>/` con capturas en secuencia o un vídeo corto), antes de construir el resto. Àlex elige. Si no la tiene, se dice y se salta.

### Fase 4 — Construir y corregir
11. ◆ **Construir.** Antes de empezar, Àlex decide cómo: sección por sección (enseñando cada una antes de pasar a la siguiente) o por partes más grandes que Claude lleva de principio a fin. Se construye en `sitios/<nombre>/` a partir de `plantilla/` (ver Stack), con contenido real o de muestra marcado como tal, dimensionando con los textos más largos. Lo primero, `src/app/tokens.css` con los valores elegidos y `scripts/fonts.js` con sus fuentes.
12. **Verificar:** `node scripts/capture.js sitios/<nombre> --rutas=/,…` (hace el build, arranca la versión de producción y captura cada ruta). Mirar las capturas, arreglar los 3 problemas más graves y repetir (máx. 3 rondas). El script debe acabar sin avisos o con cada aviso justificado. Después, `CHECKLIST-CALIDAD.md`. Pasar las comprobaciones es el suelo, no la meta.
   **Juicio estético antes de enseñar nada:** poner las capturas al lado de las inspiraciones elegidas y de la maqueta aprobada y puntuar del 1 al 10, con sinceridad, diseño, creatividad, facilidad de uso y contenido (los criterios de los premios). Si diseño o creatividad no llegan a 8, no se enseña: se dice qué falla y se rehace.
13. ◆ **Correcciones con Àlex:** enseñar las capturas y la decisión más arriesgada con una pregunta concreta. Aplicar sus correcciones por rondas hasta que dé la web por buena.
14. **Registrar** en `REGISTRO-DIRECCIONES.md` lo elegido y lo descartado en cada ◆.

## Stack por defecto
- **Next.js (App Router) + React + TypeScript estricto.** Cada web es un proyecto en `sitios/<nombre>/`, copiado de `plantilla/`. Objetivo: webs de nivel Awwwards (una experiencia continua: animación ligada al scroll, transiciones, WebGL si hace falta).
- Componentes de servidor por defecto; `'use client'` solo en lo interactivo o animado. Las páginas se generan en el build (estáticas), así que el contenido está en el HTML y se ve sin JS.
- Si un encargo es solo de contenido (blog, documentación) o una app con login y datos, preguntar antes: puede encajar mejor otro enfoque.
- Estilos: CSS propio (`src/app/globals.css` + CSS Modules por componente). Sin Tailwind por defecto: su escala de grises, radios y sombras es la base del aspecto genérico; si se usa, su tema se sustituye entero por los tokens. Sin kits de componentes con tema: el aspecto sale del plan. Ver `docs/COMPONENTES.md`.
- Tokens de diseño como variables CSS en `src/app/tokens.css` (color, tipo, espaciado, radios, sombras, duraciones). La plantilla los trae en gris a propósito: ninguno debe quedar así.
- Fuentes: **autoalojadas** con `next/font/local` (`src/app/fuentes.ts`), que precarga y ajusta la fuente de respaldo. Máximo 2 familias. Se descargan de Google Fonts con `scripts/fonts.js`, que genera `fuentes.ts`; nunca `next/font/google` ni enlaces a su servidor.
- Animación, por capas: microinteracciones (hover, foco, pulsar) en CSS; entrada orquestada, scroll y líneas de tiempo con **GSAP** + `useGSAP` (`@gsap/react`), siempre dentro de `gsap.matchMedia()` con una rama para `prefers-reduced-motion`; scroll suave con **Lenis** (`src/components/ScrollSuave.tsx`) solo si el plan lo pide; 3D con **React Three Fiber** (`@react-three/fiber`, `@react-three/drei`) solo si el momento audaz es 3D. Un solo motor de animación: no mezclar GSAP con Motion. Nivel Awwwards no es animarlo todo: el principio 3 (audacia en un solo sitio) sigue mandando.
- GSAP es gratis, también para uso comercial, pero con licencia propia de Webflow (no MIT).
- Dependencias: cada una con motivo en el plan. Antes de añadirla, comprobar en npm que está mantenida y su licencia.

## Comandos
- Nueva web: `cp -r plantilla sitios/<nombre> && cd sitios/<nombre> && npm install`.
- Previsualizar: `npm run dev` dentro del sitio (http://localhost:3000). Build: `npm run build` (falla con errores de tipos).
- Verificar: `node scripts/capture.js sitios/<nombre> --rutas=/,/contacto` → build + capturas a 390, 768 y 1440px de cada ruta en `sitios/<nombre>/capturas/` + informe (build, respuesta de cada ruta, scroll horizontal, líneas del h1, contraste de texto, errores de consola). Con un servidor en marcha: `node scripts/capture.js http://localhost:3000`.

## Correcciones ya aprendidas
- Tipografía elegida desde el brief y distinta de las del registro (Space Grotesk también cuenta como valor por defecto).
- Títulos de sección directos, sin etiqueta en mayúsculas encima.
- Enlaces reconocibles por su estilo; flecha solo si indica dirección real.
- Una entrada orquestada + feedback en las acciones, en vez de animar cada elemento.
- Medir el contraste, no suponerlo: texto claro sobre un rojo saturado dio 4,47:1 (no cumple) aunque a ojo pasaba.
- Serifas de alto contraste (Bodoni, Didot) en grande sobre fondo oscuro: bajar el eje `opsz` o los trazos finos desaparecen.
- Animaciones con GSAP `from()`: el contenido existe en el HTML y GSAP lo oculta solo al arrancar, nunca un `opacity: 0` en el CSS.
