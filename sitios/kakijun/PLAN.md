# Kakijun (書き順) — plan de diseño

Web de prueba (cliente ficticio). Contenido de muestra: diccionario cerrado de 24 palabras.

## Parte A — Brief
| Campo | Respuesta |
|---|---|
| Qué es | «Kakijun»: escribes una palabra en español y un pincel la traza en japonés |
| Para quién | Curiosos del japonés y de la caligrafía, sin conocimientos previos |
| Objetivo | Que el visitante escriba una palabra y vea cómo se traza, en el orden real |
| Tono | Pausado, preciso, artesano |
| Referencias | Ver abajo |
| Lo que NO quiere | Clichés japoneses (sol rojo, cerezos, ola de Hokusai, «zen» genérico), look de IA |
| Contenido real | Traducciones comprobadas en Jisho (JMdict); trazos de KanjiVG (CC BY-SA 3.0) |
| Restricciones | Centrado en el hero. Teclado, táctil y `prefers-reduced-motion` |

## Parte B — Plan
**Inventario (8–12 cosas del mundo del cliente):** 墨 barra de tinta (sumi) y 硯 piedra para molerla · 青墨 tinta azulada (seiboku) · 淡墨 tinta aguada (tanboku) · 半紙 hoja de práctica (hanshi, 24×33 cm) doblada para marcar casillas · 下敷き fieltro azul marino bajo la hoja (shitajiki) · 文鎮 pisapapeles · 書き順 orden de trazos fijo · 止め・はね・払い finales de trazo (parar, gancho, barrido) · 滲み la tinta que se extiende en el papel (nijimi) · 朱墨 tinta bermellón con la que el maestro corrige · ふりがな lectura junto al carácter · el nombre del alumno en la columna izquierda.
Palabras del público: «trazo», «orden», «cómo se escribe».

**Referencias (mecanismo, no aspecto):**
1. Hoja de práctica corregida de un aula de caligrafía japonesa: tinta negra del alumno + números y marcas en bermellón del maestro → dos tintas con dos roles.
2. Diagramas de orden de trazos de los diccionarios (KanjiVG, Jisho): el número junto al inicio de cada trazo → la numeración es una secuencia real.
3. Escritura vertical (tategaki): columnas de arriba abajo y de derecha a izquierda → la rejilla de la hoja sale de cómo se escribe, no del lienzo.

**Tres direcciones:**
1. *Hoja corregida* — Shippori Mincho + BIZ UDPGothic · papel frío, tinta azulada, bermellón solo en las correcciones · hoja de práctica sobre fieltro a sangre, carácter enorme en columna vertical. (La primera que salió.)
2. *Gunjō (aguada mineral)* — serif ancha latina + grotesca · azul azurita de los pigmentos minerales japoneses en una aguada a sangre, blanco de concha · carácter centrado sobre la mancha de color.
3. *Piedra de tinta* — grotesca condensada enorme · piedra de pizarra verdinegra con brillo mojado · tira horizontal tipo rollo (emakimono) que se desenrolla con el scroll.

**Elegida: 1, Hoja corregida.** Es la única en la que lo que se ve (dos tintas: alumno y maestro) y lo que se hace (seguir el orden de trazos) son lo mismo. La 2 es bonita pero el color no explica nada de la interacción. La 3 invierte el oficio: sobre la piedra no se escribe, se muele la tinta. Para no quedarme con la primera por inercia, tomo de la 2 la aguada: la palabra en español se deshace como tinta aguada antes de trazarse.

**Idea central:** «En esta página, *la hoja de práctica corregida en bermellón por el maestro* se convierte en *el traductor*: tu palabra en tinta aguada, el pincel la reescribe en japonés y el bermellón numera cada trazo.»

**Test del competidor:** Competidor: un traductor genérico o una app de idiomas tipo Duolingo. Con él, la frase deja de funcionar porque ninguno enseña a *trazar*: dan el resultado tipografiado, sin orden de trazos, sin finales de trazo ni corrección del maestro.

**Paleta** (OKLCH en `tokens.css`):
| Nombre | Hex | Rol |
|---|---|---|
| Gasenshi | `#e9f0f1` | Fondo de la página (papel frío, no crema) |
| Hanshi | `#f8fbfb` | La hoja de práctica |
| Seiboku | `#151b24` | Tinta: texto, trazos, botón principal |
| Tanboku | `#515962` | Texto secundario (6,2:1) y aguada |
| Shuboku | `#d73817` | Acento: números de trazo y foco (4,5:1 sobre la hoja) |
| Shitajiki | `#182135` | Fieltro bajo la hoja |

**Tipografía:** Shippori Mincho 500/700 (display y kana; una mincho japonesa, no una «letra con pinta japonesa») + BIZ UDPGothic 400/700 (texto e interfaz; tipografía de diseño universal de Morisawa). Ratio 1,333 (cuarta).

**Layout (1440):**
```
| Kakijun 書き順                 |▓▓▓▓▓▓ fieltro a sangre ▓▓▓▓▓▓|
|                                |▓  ┌──── hoja ────┐          ▓|
| Escribe en español,            |▓  │      ①      │ み        ▓|
| traza en japonés               |▓  │   ② 水 ③   │ ず        ▓|
| texto                          |▓  │      ④      │           ▓|
| [ tu palabra ______ ] [Trazar] |▓  └──────────────┘          ▓|
| prueba con: agua luna gracias  |▓  mizu, «agua»   Repetir    ▓|
```
A 390: titular, campo y botón; la hoja debajo, a sangre.

**Momento audaz:** el carácter trazado con pincel en tamaño enorme, en su orden real, con finales de trazo distintos (parar, gancho, barrido) y los números en bermellón. Todo lo demás, sobrio.

**Movimiento:** al enviar, la palabra española se deshace como aguada (fundido + escala leve), y el pincel dibuja cada trazo (máscara a lo largo de la línea central, GSAP). Al cargar, el mismo dibujo con el carácter de muestra. Con movimiento reducido: cada trazo aparece con un fundido, en orden. Sin Lenis: una sola pantalla.

**Riesgo:** el visitante escribe con el teclado, no a mano alzada. Reconocer letras dibujadas a mano exige un modelo de reconocimiento de escritura; se deja como siguiente paso.

## Parte C — Revisión
- [x] Antipatrones: sin crema, sin cursiva, sin etiquetas en mayúsculas; mincho japonesa en vez de fuente «estilo japonés»; numeración solo en el orden de trazos (secuencia real) y en «Cómo funciona» (pasos reales).
- [x] Registro: no repite Bodoni Moda / Atkinson ni la laca negra con rojo.
- [x] Es la primera idea: justificado arriba y mezclada con la aguada de la 2.
- [x] Sin sol rojo, cerezos, olas ni «zen»: el bermellón es el del maestro, en números pequeños, nunca en un círculo.
- [x] Se reconoce sin logo: hoja de práctica + fieltro + correcciones en bermellón.
