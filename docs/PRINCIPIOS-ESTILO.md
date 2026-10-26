# Principios de estilo

Diez principios para webs con identidad propia. Cada uno dice **qué hacer** y **por qué**.

## 1. El tema manda, no la plantilla
Cada decisión (color, letra, layout) sale del mundo del cliente: su oficio, su público, su tono.
- **Inventario:** antes de diseñar, apunta 8–12 cosas que solo pertenecen a este cliente: nombre, lugar, materiales, cifras, rituales, objetos impresos.
- **Idea central:** completa la frase «En esta página, *[algo propio del cliente]* se convierte en *[el recurso de la dirección elegida]*».
- **Test del competidor:** si cambias el cliente por su competidor más cercano y la frase sigue funcionando, la idea es genérica. Rehazla.
- Abre la página con ese elemento, mejor si es el objeto real del oficio y se puede tocar: un abanico de muestras que se despliega en una web de pintura, la bolsa de producto con su ficha técnica en una de café.

*Por qué:* sin contexto, un modelo converge hacia la media de lo que ha visto. El contexto es lo que lo saca de ahí.

## 2. Una dirección estética con nombre
Comprométete con una dirección clara y nómbrala: editorial, brutalista, lujo sobrio, retro-futurista, orgánico, art déco, industrial, artesanal, oscuro y denso, fanzine lo-fi, juguetón…
Ante cada decisión, descarta la primera opción común que te venga a la cabeza y busca la que solo encaja con este cliente.

## 3. Gasta la audacia en un solo sitio
Elige un «momento audaz» (un titular enorme, una paleta inesperada, un layout roto, una animación de entrada) y deja el resto sobrio.
Si todo grita, nada destaca.

## 4. Tipografía con criterio
- Una familia, o dos claramente distintas (p. ej. display expresiva + texto neutra). Máximo dos.
- Pocos tamaños visibles (2–3) y uno muy grande. Escala con ratio fijo en variables CSS.
- Titulares en 2 líneas como máximo a cualquier ancho; display con tracking negativo (−0,02 a −0,05em).
- Texto de 16–20px y 45–75 caracteres por línea. Más interlineado en serifas de texto.
- Alineación a la izquierda por defecto; como mucho un momento centrado.
- Un pairing que funciona: serif display pequeña (o cursiva) encima de una sans muy grande y pesada.

## 5. Color: fondo, tinta y acento
- Base mínima: un fondo, una tinta y un acento. El acento va en la acción principal y quizá en un elemento más. Amplía hasta 4–6 colores con rol fijo, en variables CSS.
- Un color dominante y un acento afilado rinden más que una paleta repartida a partes iguales. Llevado al extremo, un solo color + negro aplicado con disciplina ya es una identidad.
- Neutros tintados: el negro y los grises llevan un ligero tono (lila, café, azul noche) en una escala de 6 pasos. Separa superficies con pequeños saltos de tono.
- Sobre fondos de color, el texto secundario es un tono del propio fondo, no gris.
- Pon nombre a los colores («Redline», «Tomato Leaf»), no solo hex: ayuda a decidir y a contar la marca.
- Inspiración válida: temas de editores de código, movimientos artísticos, el material real del cliente (madera, papel, acero, tinta…).

## 6. Fondos con atmósfera
Da profundidad al fondo: degradados en capas, texturas sutiles, grano, patrones geométricos, luz.
Las texturas materiales (papel, semitono, lacre, esmalte, plástico) sacan la web del «plano digital».
Úsalas en los momentos de marca y mantenlas lejos de los textos largos.

## 7. Movimiento con intención
- **Para qué:** cada animación explica, da feedback o mantiene la orientación espacial. Si solo «queda bonita» y se ve a menudo, no se anima.
- **Frecuencia:** lo que se usa cientos de veces (atajos de teclado) no se anima; lo ocasional (modales, menús), sí; lo raro (primera visita), puede sorprender.
- **Una entrada orquestada:** secuencia de carga con entradas escalonadas (30–80ms entre elementos) en vez de efectos sueltos.
- **Curvas:** `ease-out` para entrar y salir, `ease-in-out` para moverse en pantalla, `linear` para movimiento constante. Salir más rápido que entrar.
- **Duración:** interfaz por debajo de 300ms (botón 100–160ms, desplegable 150–250ms, modal 200–500ms). Las piezas de marketing pueden durar más.
- **Técnica:** anima solo `transform` y `opacity`. Entradas desde `scale(0.95)` + `opacity: 0`.
- **Accesibilidad:** con `prefers-reduced-motion`, quita el desplazamiento y conserva los fundidos de opacidad y color. Efectos hover solo en `@media (hover: hover) and (pointer: fine)`.

## 8. Estructura que significa algo
Una sola rejilla con márgenes exteriores iguales a cualquier ancho; la asimetría ocurre dentro de la rejilla.
Bordes, separadores, numeraciones y rejillas transmiten información. Numera solo lo que es una secuencia real.
Cada sección tiene su propia composición. El espacio que deja un adorno quitado se queda como espacio.

## 9. Texto útil
Frases cortas, voz activa, desde el punto de vista del usuario, en minúscula inicial (sentence case).
Cada texto hace un solo trabajo. Los errores dicen qué pasó y cómo arreglarlo.

## 10. Calidad invisible
Responsive real, foco de teclado visible, contraste AA, carga rápida. Es el suelo, no un extra.
Ver `CHECKLIST-CALIDAD.md`.

---
**Fuentes** (detalle en `README.md`): Anthropic (skill `frontend-design`, cookbook de estética); §1, §4, §8: skill `taste-skill` de Leonxlnx; §2: Justin Wetch; §5: skill Impeccable de Paul Bakaus; §7: skills de Emil Kowalski. Ejemplos de §1, §4, §5 y §6: posts guardados en Threads (`ENSENANZAS-THREADS.md`).
