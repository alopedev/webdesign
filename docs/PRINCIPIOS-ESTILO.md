# Principios de estilo

Diez principios para webs con identidad propia. Cada uno dice **qué hacer** y **por qué**.

## 1. El tema manda, no la plantilla
Cada decisión (color, letra, layout) sale del mundo del cliente: su oficio, su público, su tono.
Abre la página con el elemento más característico de ese mundo, no con el patrón «número grande + etiqueta + degradado».
Mejor aún si es el objeto real del oficio y se puede tocar: un abanico de muestras que se despliega en una web de pintura, la bolsa de producto con su ficha técnica en una de café.
*Por qué:* sin contexto, un modelo converge hacia la media de lo que ha visto. El contexto es lo que lo saca de ahí.

## 2. Una dirección estética con nombre
Antes de diseñar, nombra la dirección y llévala al extremo: editorial, brutalista, lujo sobrio, retro-futurista, orgánico, art déco, industrial, juguetón…
Una dirección tibia produce una web tibia.

## 3. Gasta la audacia en un solo sitio
Elige un «momento audaz» (un titular enorme, una paleta inesperada, un layout roto, una animación de entrada) y deja el resto sobrio.
Si todo grita, nada destaca.

## 4. Tipografía con criterio
- Una familia, o dos claramente distintas (p. ej. display expresiva + texto neutra).
- Escala tipográfica definida (ratio fijo, p. ej. 1,25 o 1,333) como variables CSS.
- Líneas de texto de ≤ ~70–80 caracteres. Más interlineado en serifas de texto.
- Contraste fuerte de tamaño y peso entre niveles. La jerarquía se ve sin leer.
- Un pairing que funciona: serif display pequeña (o cursiva) encima de una sans muy grande y pesada.

## 5. Color: dominante + acento
- 4–6 colores con rol fijo (fondo, superficie, texto, texto suave, acento, apoyo), en variables CSS.
- Un color dominante y un acento afilado rinden más que una paleta repartida a partes iguales. Llevado al extremo, un solo color + negro aplicado con disciplina ya es una identidad.
- Pon nombre a los colores («Redline», «Tomato Leaf»), no solo hex: ayuda a decidir y a contar la marca.
- Neutros tintados, no grises puros: escala de 6 pasos de un mismo tono (lila, café, azul noche).
- Inspiración válida: temas de editores de código, movimientos artísticos, el material real del cliente (madera, papel, acero, tinta…).

## 6. Fondos con atmósfera
Evita el fondo plano por defecto: degradados en capas, texturas sutiles, grano, patrones geométricos, luz.
Las texturas materiales (papel, semitono, lacre, esmalte, plástico) sacan la web del «plano digital».
Siempre al servicio del contraste del texto.

## 7. Movimiento con intención
- Una secuencia de carga bien orquestada (entradas escalonadas con `animation-delay`) en vez de efectos sueltos.
- El movimiento que responde a una acción y muestra qué ha cambiado es bienvenido; el decorativo, con moderación.
- Siempre respetar `prefers-reduced-motion`.

## 8. Estructura que significa algo
Bordes, separadores, numeraciones y rejillas deben transmitir información.
Numera solo lo que es una secuencia real.

## 9. Texto útil
Frases cortas, voz activa, desde el punto de vista del usuario, en minúscula inicial (sentence case).
Cada texto hace un solo trabajo. Los errores dicen qué pasó y cómo arreglarlo.

## 10. Calidad invisible
Responsive real, foco de teclado visible, contraste AA, carga rápida. Es el suelo, no un extra.
Ver `CHECKLIST-CALIDAD.md`.

---
**Fuentes:** skill oficial `frontend-design` de Anthropic ([github.com/anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design)); cookbook «Prompting for frontend aesthetics» ([platform.claude.com](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics)); artículo «Improving frontend design through Skills» ([claude.com](https://claude.com/blog/improving-frontend-design-through-skills)). Ejemplos de §1, §4, §5 y §6: posts guardados en Threads (ver `ENSENANZAS-THREADS.md`).
