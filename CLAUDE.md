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
- `docs/ENSENANZAS-THREADS.md` — registro de los posts de Àlex y dónde se colocó cada lección; al añadir posts nuevos.
- `docs/compendio/` — investigación a fondo por áreas; para resolver dudas de un área. Es fondo, no tiene pasos propios: **el protocolo es el de abajo**.

## Protocolo de cada web (única fuente)
1. **Brief.** Rellenar la Parte A de `BRIEF-PLANTILLA.md`. Si falta propósito, público o contenido real, preguntar antes de diseñar (máx. 3 preguntas).
2. **Mundo del cliente.** Inventario de 8–12 cosas que solo son suyas (objetos, materiales, documentos, cifras, rituales, lugar) + 3 palabras que usaría su público.
3. **Referencias.** 2–3 concretas (del brief o de `REFERENCIAS.md`). De cada una, qué mecanismo se toma (rejilla, escala, ritmo, uso de la imagen), nunca su aspecto.
4. **Tres direcciones divergentes**, 5 líneas cada una, distintas en tipografía, color *y* composición. La primera que se ocurra entra como una de las tres, no como la elegida por defecto.
5. **Elegir.** Descartar la que se parezca al look propio de Claude, a las 5 últimas entradas de `REGISTRO-DIRECCIONES.md` o a la web anterior. Escribir el plan (Parte B del brief) con la idea central y el test del competidor por escrito.
6. **Revisar el plan** contra `ANTIPATRONES.md` (Parte C). Cambiar todo lo que sea un valor por defecto sin razón ligada al brief.
7. **Construir** en `sitios/<nombre>/index.html`, con contenido real o de muestra marcado como tal, dimensionando con los textos más largos.
8. **Verificar:** `node scripts/capture.js sitios/<nombre>/index.html`. Mirar las capturas, arreglar los 3 problemas más graves y repetir (máx. 3 rondas). El script debe acabar sin avisos o con cada aviso justificado. Después, `CHECKLIST-CALIDAD.md`.
9. **Cerrar con Àlex:** enseñar las capturas y la decisión más arriesgada con una pregunta concreta.
10. **Registrar** la dirección en `REGISTRO-DIRECCIONES.md`.

## Stack por defecto
- Una sola página: HTML + CSS + JS sin dependencias, en un archivo, dentro de `sitios/<nombre>/`.
- Proyecto mayor: preguntar antes de elegir framework.
- Tokens de diseño como variables CSS en `:root` (color, tipo, espaciado, radios, sombras, duraciones).
- Fuentes: **autoalojadas** en WOFF2 dentro de `sitios/<nombre>/fonts/`, con `font-display: swap`. Máximo 2 familias. Se descargan de Google Fonts (ver `scripts/README.md`), no se enlazan a su servidor.
- Animación: CSS primero. En React, la librería Motion si ya está instalada.
- Imágenes: dimensiones explícitas (`width`/`height` o `aspect-ratio`), `loading="lazy"` fuera del primer pantallazo.

## Comandos
- Previsualizar: `node scripts/serve.js sitios/<nombre>` y abrir la URL que imprime. **No abrir el HTML con `file://`:** el navegador bloquea las fuentes autoalojadas.
- Verificar: `node scripts/capture.js sitios/<nombre>/index.html` → capturas a 390, 768 y 1440px en `sitios/<nombre>/capturas/` + informe (scroll horizontal, líneas del h1, contraste de texto, errores de consola).

## Correcciones ya aprendidas
- Tipografía elegida desde el brief y distinta de las del registro (Space Grotesk también cuenta como valor por defecto).
- Títulos de sección directos, sin etiqueta en mayúsculas encima.
- Enlaces reconocibles por su estilo; flecha solo si indica dirección real.
- Una entrada orquestada + feedback en las acciones, en vez de animar cada elemento.
- Medir el contraste, no suponerlo: texto claro sobre un rojo saturado dio 4,47:1 (no cumple) aunque a ojo pasaba.
- Serifas de alto contraste (Bodoni, Didot) en grande sobre fondo oscuro: bajar el eje `opsz` o los trazos finos desaparecen.
