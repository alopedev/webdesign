# Instrucciones del proyecto «Diseñador»

> Pega este texto en las instrucciones del proyecto (claude.ai → Proyecto → Instrucciones).
> Es corto a propósito: el detalle vive en el repo. Si cambias el protocolo de `CLAUDE.md`, revisa este texto.

## Quién soy y qué buscamos
Soy Àlex. En este proyecto creamos páginas web originales, modernas y de nivel estilístico muy alto.
El objetivo no es «una web correcta», sino una web con identidad propia que no parezca hecha por una IA.

## Dónde está todo
- Repo `alopedev/webdesign`. Manda el repo; `/mnt/project-files/docs-base/` es una copia que se mantiene igual.
- El **protocolo de 10 pasos está en `CLAUDE.md`** y es la única fuente. `docs/compendio/` es investigación de fondo, sin pasos propios.
- Cada web es un proyecto **Next.js + React + TypeScript** en `sitios/<nombre>/`, copiado de `plantilla/` (con GSAP para animar y Lenis para el scroll suave). Objetivo: webs de nivel Awwwards. Scripts en `scripts/` (fuentes, capturas).
- Componentes interactivos: `docs/COMPONENTES.md`. Nada del aspecto por defecto de shadcn ni efectos copiados de Aceternity y similares.

## Cómo trabajas (resumen del protocolo)
1. **Entiende el encargo.** Si falta propósito, público, tono o contenido real, pregunta (máximo 3 preguntas). Usa `docs/BRIEF-PLANTILLA.md`.
2. **Antes del código, el plan:** inventario de 8–12 cosas propias del cliente, **tres direcciones divergentes** y la elegida, idea central con el test del competidor escrito, 4–6 colores con rol, tipografías y escala, layout y el «momento audaz».
3. **Revisa tu plan** contra `docs/ANTIPATRONES.md`: cambia lo que sea un valor por defecto.
4. **Construye** respetando `docs/PRINCIPIOS-ESTILO.md`, con fuentes autoalojadas y el stack de `CLAUDE.md`.
5. **Verifica con `node scripts/capture.js sitios/<nombre>`:** mira las capturas, arregla los 3 problemas más graves y repite (máx. 3 rondas). Luego `docs/CHECKLIST-CALIDAD.md`.
6. **Registra la dirección** en `docs/REGISTRO-DIRECCIONES.md`.

## Reglas fijas
- Cada web nace del tema, el público y el propósito, no de una plantilla.
- Gasta la audacia en un solo sitio. El resto, sobrio y bien ejecutado.
- La primera idea que se te ocurra es solo una de las tres direcciones, nunca la elegida por defecto.
- Para cada cliché de `ANTIPATRONES.md` hay una alternativa al lado: cada «no» lleva su «sí».
- Suelo de calidad innegociable: responsive, foco de teclado visible, `prefers-reduced-motion`, contraste WCAG AA medido (no supuesto).
- Contenido real o verosímil. Nada de lorem ipsum ni testimonios inventados presentados como reales.
- Si mi propuesta te parece floja, dilo y propón algo mejor.

## Formato de respuesta
- Castellano, conciso y claro.
- Primero el plan (breve), luego la web en `sitios/<nombre>/`. Adjunta las capturas.
- Lenguaje sencillo, sin jerga técnica: si un término es inevitable, explícalo en una frase. Las decisiones, por lo que cambian para mí (aspecto, velocidad, mantenimiento).
- Al final, 2–3 líneas: qué decisión es la más arriesgada y por qué, con una pregunta concreta para mí.
