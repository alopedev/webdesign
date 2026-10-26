# Antipatrones («estética IA genérica»)

Cada fila dice qué delata una web hecha por IA y **qué hacer en su lugar**.
Si el plan o la web contiene algo de la columna izquierda **sin una razón ligada al brief**, aplica la derecha.

## Tipografía
| Delata IA | En su lugar |
|---|---|
| Inter, Roboto, Arial, Helvetica o `system-ui` elegidas por inercia | Una display con carácter ligada al tema. Inter vale como texto neutro bajo una display muy expresiva, si se justifica |
| Space Grotesk como «alternativa original» | Elegir desde el brief y comprobar `REGISTRO-DIRECCIONES.md` |
| Una palabra del titular en otro color o en cursiva | El titular entero hace el trabajo, con tamaño y peso |
| Etiqueta en mayúsculas espaciadas (eyebrow) encima de cada sección | Título de sección directo. Texto pequeño en mayúsculas sí vale cuando tiene contenido propio dentro de una composición pensada (p. ej. un póster) |
| Titular gigante sobre cuerpo pequeño, sin tamaños intermedios | Escala completa con ratio fijo; cada paso con un rol |
| Tamaños fluidos solo en `vw` | `clamp()` con extremos en `rem` (el texto debe crecer con el zoom) |
| Monoespaciada como adorno | Monoespaciada para código, o cuando la idea central lo pide (p. ej. estética de ficha técnica) |

## Color
| Delata IA | En su lugar |
|---|---|
| Degradado morado/azul sobre blanco | Color dominante sacado del mundo del cliente |
| Crema o beige + acento óxido/terracota + serif grande en cursiva + subtítulos espaciados. Es el **look propio de Claude**, ya identificado en prensa (The New Yorker, 2026) | Fondo claro tintado con el tono del producto; crema solo si el color protagonista sale del producto, y nunca con los otros tres rasgos juntos |
| Casi negro + verde ácido | Oscuro tintado con un acento propio de la marca |
| Negro y grises puros | Neutros tintados (ver principio 5) |
| Texto gris sobre fondo de color | Un tono más claro u oscuro del propio fondo |
| Paleta tímida con todos los colores al mismo peso | Un dominante + un acento afilado |

## Layout y componentes
| Delata IA | En su lugar |
|---|---|
| Hero con número enorme + etiqueta pequeña + degradado | El objeto o gesto propio del cliente |
| Fila de tarjetas idénticas con icono en cuadrado redondeado encima | Composición distinta por sección; listas, tablas o texto cuando no hace falta tarjeta |
| Tarjetas dentro de tarjetas, todo envuelto en tarjetas | Separar con espacio y saltos de tono |
| Paneles de cristal/desenfoque, navegación flotante en píldora | Superficies sólidas, navegación anclada |
| Aspecto por defecto de shadcn/ui (grises neutros, radio medio, borde fino, sombra suave) | Primitiva sin estilo (Base UI) con los tokens del plan; ver `COMPONENTES.md` |
| Efectos pegados de Aceternity, Magic UI o React Bits (auroras, focos, botones con destello, bento grid) | El mecanismo rehecho con el material del cliente, gastado en el momento audaz |
| Manchas decorativas, emojis, dashboards falsos | Imagen real, gráfico dibujado a partir del tema, o solo tipografía y color |
| Filetes finos y sombras en todo | Bordes y sombras solo donde transmiten estado o jerarquía |
| Secuencia fija hero → 3 features → testimonios → CTA | Orden que sale del contenido real |
| Contenedor centrado de ~1200px con todo apilado en una columna | Rejilla con pistas con nombre, salidas a sangre y reordenación pensada al encoger |
| `loading="lazy"` en la imagen principal | `fetchpriority="high"` en la imagen del hero; lazy solo fuera del primer pantallazo |

## Microdetalles
| Delata IA | En su lugar |
|---|---|
| Metadatos separados por puntos medios ( · ) en cada línea | Metadatos en su propio estilo tipográfico |
| Etiquetas con raya (— Etiqueta) o píldoras | Texto llano |
| Flecha «→» al final de cada enlace | Enlace reconocible por estilo; flecha solo si indica dirección real |
| Numeración 01, 02, 03 en cosas que no son una secuencia | Numerar solo pasos reales |

## Movimiento
| Delata IA | En su lugar |
|---|---|
| Fade-in en cada elemento al hacer scroll | Una entrada orquestada + feedback en las acciones |
| Contenido que parte de `opacity: 0` en el CSS y depende de JS para verse | Contenido visible en el HTML; el script añade la animación |
| Aparecer desde `scale(0)` | Desde `scale(0.95)` con `transform-origin` en el disparador |
| Rebote o easing elástico | `ease-out` firme (principio 7) |
| Scroll suave, parallax y texto que entra por letras en toda la web «porque es tipo Awwwards» | Un momento audaz con GSAP; el resto con movimiento discreto. Lenis solo si el plan lo pide |
| `ease-in` en entradas | `ease-out` |

## Contenido
| Delata IA | En su lugar |
|---|---|
| Lorem ipsum, testimonios o cifras inventadas | Contenido real, o de muestra marcado claramente como tal en el informe |

## Proceso
| Delata IA | En su lugar |
|---|---|
| Pedir «algo bonito» o describir el gusto solo con adjetivos | Brief con referencias concretas (enlaces, capturas) y por qué gustan |
| Copiar prompts de librerías (jiro, getlayers, motionin…) tal cual | Usarlos como punto de partida y adaptarlos al brief |
| Quedarse con la primera opción común que se ocurre | Descartarla y buscar la que solo encaja con este cliente |
| Prohibir sin proponer: vetar una fuente o color sin decir cuál va | Cada «no» con su «sí» elegido desde el brief; si no, el modelo salta al siguiente cliché (Jost, Cormorant Garamond…) |
| Plan que promete cosas que el código no hace («teatro de diseño») | Comprobar cada promesa del plan en el CSS y en las capturas |

---
**Fuentes** (detalle y autores en `compendio/`, sobre todo `06-ia-y-proceso.md`): Anthropic (skill `frontend-design`, cookbook); Impeccable de Paul Bakaus; `taste-skill` de Leonxlnx; Emil Kowalski; Justin Wetch (cada «evitar» con su alternativa). Lecciones de `ENSENANZAS-THREADS.md`.
