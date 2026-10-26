# CLAUDE.md — Diseño web de alto nivel

Este repositorio genera páginas web originales y modernas. Prioridad: identidad visual propia + calidad técnica.
Idioma de trabajo: castellano. Respuestas concisas.

## Documentos de referencia (se cargan con la sesión)
@docs/PRINCIPIOS-ESTILO.md
@docs/ANTIPATRONES.md

Leer solo cuando haga falta (no se importan para ahorrar contexto):
- `docs/BRIEF-PLANTILLA.md` — al empezar una web nueva.
- `docs/CHECKLIST-CALIDAD.md` — antes de dar una web por terminada.
- `docs/REGISTRO-DIRECCIONES.md` — antes de elegir dirección estética, y para añadir la nueva al acabar.
- `docs/REFERENCIAS.md` — biblioteca de fuentes, paletas, webs y herramientas; al escribir el plan de diseño.
- `docs/ENSENANZAS-THREADS.md` — registro de los posts de Àlex y dónde se colocó cada lección; al añadir posts nuevos.
- `docs/compendio/` — investigación a fondo por áreas (tipografía, layout, color, movimiento, UX/accesibilidad, IA y proceso); al empezar una web, el protocolo de `06-ia-y-proceso.md`, y para resolver dudas de un área.

## Flujo obligatorio para cada web
1. Leer el brief. Si falta propósito, público o contenido, preguntar antes de diseñar.
2. Leer `REGISTRO-DIRECCIONES.md` y elegir una dirección que NO repita tipografía ni paleta recientes.
3. Escribir el plan de diseño (máx. 20 líneas): inventario de 8–12 cosas propias del cliente, idea central (y pasa el test del competidor), dirección con nombre, 4–6 colores hex con rol, tipografías y escala, concepto de layout, el momento audaz.
4. Revisar el plan contra `ANTIPATRONES.md`. Cambiar todo lo que sea un valor por defecto.
5. Construir.
6. Verificar visualmente: capturas con Playwright a 390, 768 y 1440px, criticarlas, arreglar los 3 problemas más graves y repetir (máximo 3 rondas). Después, pasar `CHECKLIST-CALIDAD.md`.
7. Añadir una línea al registro.

## Stack por defecto
- Una sola página: HTML + CSS + JS sin dependencias, en un archivo.
- Proyecto mayor: preguntar antes de elegir framework.
- Tokens de diseño como variables CSS en `:root` (color, tipo, espaciado, radios, sombras, duraciones).
- Fuentes: Google Fonts o autoalojadas, con `font-display: swap`. Máximo 2 familias.
- Animación: CSS primero. En React, la librería Motion si ya está instalada.
- Imágenes: dimensiones explícitas (`width`/`height` o `aspect-ratio`), `loading="lazy"` fuera del primer pantallazo.

## Comandos
- Previsualizar: `npx serve .` (o abrir el HTML directamente).
- Captura: script de Playwright en `scripts/capture.js` (crear si no existe).
<!-- Ajustar cuando exista el repo real -->

## Correcciones ya aprendidas
- Tipografía elegida desde el brief y distinta de las del registro (Space Grotesk también cuenta como valor por defecto).
- Títulos de sección directos, sin etiqueta en mayúsculas encima.
- Enlaces reconocibles por su estilo; flecha solo si indica dirección real.
- Una entrada orquestada + feedback en las acciones, en vez de animar cada elemento.
<!-- Añadir aquí cada corrección que Àlex repita dos veces. -->
