# CLAUDE.md — Diseño web de alto nivel

Este repositorio genera páginas web originales y modernas. Prioridad: identidad visual propia + calidad técnica.
Idioma de trabajo: castellano. Respuestas concisas.

## Documentos de referencia (se cargan con la sesión)
@docs/PRINCIPIOS-ESTILO.md
@docs/ANTIPATRONES.md

Leer solo cuando haga falta (no se importan para ahorrar contexto):
- `docs/BRIEF-PLANTILLA.md` — al empezar una web nueva (pasos 1–5).
- `docs/REGISTRO-DIRECCIONES.md` — antes de elegir dirección, y para añadir la nueva al acabar.
- `docs/REFERENCIAS.md` — biblioteca de fuentes, paletas, webs y herramientas; al buscar referencias.
- `docs/CHECKLIST-CALIDAD.md` — antes de dar una web por terminada.
- `docs/COMPONENTES.md` — al planificar componentes interactivos (menús, diálogos, pestañas…): HTML nativo, primitivas sin estilo y qué hacer con shadcn y similares.
- `docs/ENSENANZAS-THREADS.md` — registro de los posts de Àlex y dónde se colocó cada lección; al añadir posts nuevos.
- `docs/compendio/` — investigación a fondo por áreas; para resolver dudas de un área. Es fondo, no tiene pasos propios: **el protocolo es el de abajo**.

## Protocolo de cada web (única fuente)
Àlex forma parte del proceso creativo: elige en los cinco puntos marcados con ◆. En cada uno, Claude presenta las opciones con imágenes y una recomendación (tarjeta de decisión) y **no avanza hasta que Àlex elige**. Solo se salta un ◆ si Àlex dice «decide tú» para ese punto. Mientras espera, no construye nada que dependa de la elección. Cada elección queda escrita en `sitios/<nombre>/PLAN.md`.

1. **Brief.** Rellenar la Parte A de `BRIEF-PLANTILLA.md`. Si falta propósito, público o contenido real, preguntar antes de diseñar (máx. 3 preguntas).
2. **Mundo del cliente.** Inventario de 8–12 cosas que solo son suyas (objetos, materiales, documentos, cifras, rituales, lugar) + 3 palabras que usaría su público.
3. ◆ **Inspiraciones.** Proponer 4–6 referencias concretas (del brief, de `REFERENCIAS.md` o webs reales), cada una con captura y el mecanismo que se tomaría (rejilla, escala, ritmo, uso de la imagen), nunca su aspecto. Àlex elige 2–3 o aporta las suyas.
4. ◆ **Idea y dirección: tres direcciones divergentes**, cada una con su idea central, distintas en tipografía, color *y* composición. De cada una: 5 líneas + una lámina (muestra de tipografía, paleta con nombres y boceto de la primera pantalla). La primera que se ocurra entra como una de las tres. Antes de enseñarlas, descartar y sustituir la que se parezca al look propio de Claude, a las 5 últimas entradas de `REGISTRO-DIRECCIONES.md` o a la web anterior. Àlex elige una, o una mezcla.
5. **Plan.** Escribir la Parte B del brief con la dirección elegida, la idea central y el test del competidor por escrito. Revisarlo contra `ANTIPATRONES.md` (Parte C) y cambiar todo lo que sea un valor por defecto sin razón ligada al brief.
6. ◆ **Maquetas.** 2–3 maquetas estáticas de la primera pantalla (sin animación), que varíen composición y momento audaz dentro de la dirección. Se hacen como rutas del sitio (`/maquetas/a`, `/b`…) y se capturan con `capture.js`. Àlex elige una y dice qué cambiar.
7. ◆ **Prototipos.** Si la web tiene interacción o animación protagonista, 2 prototipos de solo ese momento (por ejemplo, dos formas de entrar o de responder al gesto), con un vídeo corto o capturas en secuencia. Àlex elige. Si no la tiene, se dice y se salta.
8. **Construir** en `sitios/<nombre>/` a partir de `plantilla/` (ver Stack), con contenido real o de muestra marcado como tal, dimensionando con los textos más largos. Lo primero, `src/app/tokens.css` con los valores del plan y `scripts/fonts.js` con sus fuentes.
9. **Verificar:** `node scripts/capture.js sitios/<nombre> --rutas=/,…` (hace el build, arranca la versión de producción y captura cada ruta). Mirar las capturas, arreglar los 3 problemas más graves y repetir (máx. 3 rondas). El script debe acabar sin avisos o con cada aviso justificado. Después, `CHECKLIST-CALIDAD.md`.
10. ◆ **Correcciones con Àlex:** enseñar las capturas y la decisión más arriesgada con una pregunta concreta. Aplicar sus correcciones por rondas hasta que dé la web por buena.
11. **Registrar** la dirección en `REGISTRO-DIRECCIONES.md`, con lo que Àlex eligió y descartó en cada ◆.

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
