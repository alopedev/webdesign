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
- `docs/ENSENANZAS-THREADS.md` — referencias y lecciones guardadas por Àlex.

## Flujo obligatorio para cada web
1. Leer el brief. Si falta propósito, público o contenido, preguntar antes de diseñar.
2. Leer `REGISTRO-DIRECCIONES.md` y elegir una dirección que NO repita tipografía ni paleta recientes.
3. Escribir el plan de diseño (máx. 20 líneas): dirección con nombre, 4–6 colores hex con rol, tipografías y escala, concepto de layout, el momento audaz.
4. Revisar el plan contra `ANTIPATRONES.md`. Cambiar todo lo que sea un valor por defecto.
5. Construir.
6. Verificar visualmente (captura con Playwright a 375px y 1440px) y pasar `CHECKLIST-CALIDAD.md`.
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

## Errores que ya hemos visto (no repetir)
- No uses Inter/Roboto/Arial por inercia; elige por el brief.
- No uses Space Grotesk «como alternativa original»: también es un valor por defecto.
- No añadas etiquetas en mayúsculas espaciadas encima de cada título.
- No pongas flechas «→» al final de cada enlace.
- No animes todo: una secuencia de entrada bien orquestada vale más que diez microinteracciones.
<!-- Añadir aquí cada corrección que Àlex repita dos veces. -->
