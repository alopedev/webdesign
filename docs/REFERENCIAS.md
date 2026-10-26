# Biblioteca de referencias

Material concreto para alimentar el brief y el plan de diseño: tipografías, paletas, webs e identidades, y herramientas.
Sale de los posts que Àlex guarda (registro en `ENSENANZAS-THREADS.md`). Las reglas generales que se derivan de aquí ya están en `PRINCIPIOS-ESTILO.md`, `ANTIPATRONES.md` y `CHECKLIST-CALIDAD.md`.

## Cómo usar este archivo
- **Referencias, no plantillas.** Toma el *mecanismo* (por qué funciona) y aplícalo al mundo del cliente. Copiar una paleta o un pairing tal cual a todos los proyectos es otra forma de web genérica.
- **Antes de elegir, mira `REGISTRO-DIRECCIONES.md`.** Si un pairing o paleta de aquí ya se usó hace poco, elige otro.
- **Cada entrada dice qué tomar y su riesgo.** Si el riesgo aplica al brief, descártala.
- Comprobado el 26/10/2026. Precios y licencias cambian: revisa antes de usar en un proyecto real.

---

## 1. Tipografía

### Pairings por contraste extremo
El mecanismo de los cuatro: una **serif o cursiva pequeña y fina** encima de una **sans enorme y pesada**. La jerarquía la hace la diferencia de tamaño, no el color.

| Display (pequeña, arriba) | Texto / titular grande | Carácter | Licencia | Riesgo |
|---|---|---|---|---|
| Playfair Display | DM Sans | Editorial clásico, revista | Ambas en Google Fonts | Playfair está muy vista; úsala solo si la dirección es editorial de verdad |
| Cormorant Garamond | Manrope | Elegante, cultural, calmado | Ambas en Google Fonts | Cormorant es muy fina: no bajar de ~24px |
| The Season | Satoshi | Lujo suave, moda, hospitality | Satoshi: Fontshare. The Season: **no verificada**, suele ser de pago | Comprobar licencia antes de proponerla |
| Cooper Black | Inter | Retro cálido, años 70, cercano | Inter: Google Fonts. Cooper Black: **de pago** según fundición | Inter solo con justificación (ver `ANTIPATRONES.md`) |

### Otras tipografías vistas en los posts
- **Serif de wordmark con remates marcados** (Atla, .raw coffee): da autoridad y calidez a la vez. Funciona como logotipo grande.
- **Cursiva caligráfica gigante cortada por el borde** (Atla, lacre): un solo uso por página, como momento audaz.
- **Grotesca pequeña en mayúsculas con contenido** (manifiesto de Atla): frases cortas repartidas por la composición, no etiquetas.
- **Matriz de puntos en marquesina + monoespaciada de ficha** (.raw coffee): estética técnica/industrial. Solo si la idea central es "producto como objeto catalogado".

### Dónde buscar más
- [uncut.wtf](https://uncut.wtf) — 163 fuentes contemporáneas **gratis para uso comercial** (sans, serif, mono, display). Primera parada para salir de Google Fonts.
- [fontinlogo.com](https://fontinlogo.com) — qué fuente usa cada marca conocida. Útil para entender el tono de un sector, no para copiarlo.

---

## 2. Color

### Escalas de neutros tintados (@uiux.build)
Seis pasos de un solo tono, de oscuro a claro. Sirven como base completa para un tema oscuro o claro; el acento se añade aparte.

| Paleta | P1 | P2 | P3 | P4 | P5 | P6 | Carácter |
|---|---|---|---|---|---|---|---|
| Lila noche | `#17151C` | `#292531` | `#45404F` | `#716879` | `#AAA2B3` | `#E2DDE7` | Nocturno, íntimo, tecnología sobria |
| Café | `#211B1A` | `#382A28` | `#60433D` | `#916B60` | `#C1A094` | `#E8D8CE` | Cálido, artesano, cosmética, gastronomía |
| Azul noche | `#111522` | `#1E263B` | `#303D59` | `#536684` | `#98A9C4` | `#DCE3EF` | Serio, financiero, náutico, institucional |

**Roles comprobados** (contraste WCAG calculado):

| Rol | Tema oscuro | Tema claro |
|---|---|---|
| Fondo | P1 | P6 |
| Superficie | P2 | P5 solo para bloques sin texto encima |
| Texto | P6 (12–14:1 sobre P1) | P1 (12–14:1 sobre P6) |
| Texto secundario | P5 (7–7,6:1 sobre P1; ~6:1 sobre P2) | P3 (6,4–8,4:1 sobre P6) |
| Borde de campo, icono | P4 (3,1–3,6:1: justo) | P4 (3,4–4,5:1) |
| Línea decorativa | P3 (<2:1, solo adorno) | P5 (<2:1, solo adorno) |

P4 **nunca** para texto normal: no llega a 4,5:1 en ninguna de las tres.

```css
/* Ejemplo: Café en tema oscuro */
:root {
  --bg: #211B1A; --surface: #382A28; --line: #60433D;
  --ui: #916B60; --ink-soft: #C1A094; --ink: #E8D8CE;
}
```

### Colores únicos con nombre (@dyslove.design)
| Nombre | Hex | Contexto que le da sentido | Contraste |
|---|---|---|---|
| Redline | `#E61E32` | Carrocería de deportivo | 4,6:1 con negro o blanco; **4,1:1 sobre Royal Black** (solo texto grande) |
| Royal Black | `#121212` | Satén negro | 18,7:1 con blanco |

Mecanismo: el color se presenta con **nombre + foto del material** de donde sale. Hazlo igual en el plan de diseño: cada color con nombre ligado al cliente.

### Paletas de marca vistas
- **Atla:** amarillo cálido + negro, sin más. Lo que la hace funcionar es la disciplina: el mismo par en web, póster, chapas y lacre.
- **Two Coats:** fondo crema + un color por producto (180 pinturas). Al elegir una pintura, la página entera se tiñe de ese color.

### Recursos de color y fondo
- [grainient.supply](https://grainient.supply) — degradados con grano y fondos animados (suscripción).
- [shaders.paper.design](https://shaders.paper.design) — shaders como componentes React o GLSL, sin dependencias. Para fondos con atmósfera sin vídeo pesado.

---

## 3. Webs e identidades de referencia

| Referencia | Qué tomar | Úsala cuando | Riesgo |
|---|---|---|---|
| **Two Coats** (web de pinturas) | Hero = el objeto del oficio (abanico de muestras que se despliega). Al elegir color, la página entera cambia a ese color | El producto tiene variantes visuales (color, material, sabor) | La transición a pantalla completa necesita contraste revisado en cada color |
| **Atla** (identidad de agencia) | Un color + negro aplicado en todo; serif de wordmark enorme; pintura clásica de fondo con texto actual encima (choque de épocas) | Marcas que quieren autoridad con personalidad | Sin contenido real potente, el choque de épocas parece decorado |
| **.raw coffee** (packaging/web) | Producto en grande sobre fondo neutro; ficha técnica (`ITEM:`, `SERIAL CODE:`, `FLAVOR:`) en monoespaciada; marquesina de puntos | Producto físico con datos propios (origen, lote, notas) | Ficha con datos inventados = relleno. Solo con datos reales del cliente |
| **Soft Services** (packaging cosmético) | Troquel desplegado como imagen; texto de ingredientes como textura; manchas de color orgánicas sobre gris cálido | Cosmética, producto con mucha información regulada | Muy denso: necesita mucho aire alrededor |
| **Atticosoap & PJ Ceramiche** (póster de evento) | Objetos recortados sobre blanco + grotesca grande arriba y abajo; datos del evento en bloque compacto | Eventos, estudios, artesanía | El recorte de objetos exige fotos de calidad |
| **Iconos Platen, DayCity, tone, Pool** | Textura material en lo digital: papel y máquina de escribir, semitono, isometría translúcida, agua | Momentos de marca, ilustración, favicons | Textura en textos largos cansa; solo en piezas puntuales |

### Galerías de inspiración (mirar el mecanismo, no copiar)
Para buscar ideas cuando haga falta. Elige la galería según lo que busques, no la de siempre.
Comprobadas el 26/10/2026: abren y tienen contenido publicado en 2026, salvo que la nota diga otra cosa.

**Premios y lo más alto del sector** (para ver el techo; ojo, tienden a premiar el efecto por encima del uso)
| Web | Para qué sirve | Nota |
|---|---|---|
| [awwwards.com](https://www.awwwards.com) | Premios diarios con jurado y puntuación por diseño, usabilidad y creatividad. La referencia del sector | La propuso Àlex. Activa: Site of the Day diario (A24, 26/10/2026). Bloquea curl y navegador headless; Claude la consulta con WebFetch (ver nota abajo) |
| [thefwa.com](https://thefwa.com) | Premios FWA, los más veteranos. Webs experimentales, WebGL, campañas | |
| [cssdesignawards.com](https://cssdesignawards.com) | Premios del día, UI y UX votados por un jurado de +200 diseñadores | |
| [cssnectar.com](https://cssnectar.com) | Galería con premios diarios, muy actualizada | |

> **Cómo consulta Claude las galerías.** Algunas (Awwwards, Typewolf) cortan la conexión a `curl` o al navegador sin interfaz del entorno en la nube. Usar la herramienta **WebFetch**, que entra desde otra red: p. ej. `https://www.awwwards.com/websites/` para los Site of the Day o `https://www.awwwards.com/websites/<categoría>/` para filtrar. Si también falla (pasa con lapa.ninja y maxibestof.one, que dan 403 a todo), pedir a Àlex capturas o enlaces concretos.

**Galerías curadas por estilo**
| Web | Para qué sirve | Nota |
|---|---|---|
| [bestwebsite.gallery](https://bestwebsite.gallery) | Capturas de página completa, muy actualizada. Ver la composición entera de arriba abajo | De David Hellmann |
| [admiretheweb.com](https://admiretheweb.com) | Selección diaria de webs limpias, minimalistas y responsive | |
| [minimal.gallery](https://minimal.gallery) | Webs minimalistas escogidas a mano | Para direcciones sobrias |
| [hoverstat.es](https://www.hoverstat.es) | Diseño web alternativo y experimental | Para salir de lo convencional |
| [curated.design](https://curated.design) | Webs y landings reales, revisadas una a una, con filtro por estilo o sector | |
| [darkmodedesign.com](https://www.darkmodedesign.com) | Solo webs oscuras | Útil con las escalas de neutros tintados (§2) |

**Por tipo de página o pieza**
| Web | Para qué sirve | Nota |
|---|---|---|
| [onepagelove.com](https://onepagelove.com) | Webs de una sola página | Encaja con el stack por defecto (un HTML) |
| [saaslandingpage.com](https://saaslandingpage.com) | Landings de producto digital, por secciones | Para ver estructura; ojo con el cliché SaaS de `ANTIPATRONES.md` |
| [navbar.gallery](https://www.navbar.gallery) | Solo menús de navegación | Hermana: [footer.design](https://www.footer.design) (pies de página) |
| [mobbin.com](https://mobbin.com) | +621.000 capturas buscables de apps y webs reales | Puede pedir cuenta o plan de pago para ver más |

**Tipografía en uso**
| Web | Para qué sirve | Nota |
|---|---|---|
| [fontsinuse.com](https://fontsinuse.com) | Archivo de fuentes usadas en proyectos reales (web, impreso, marca) | Buscar una fuente y ver cómo la usan otros |
| [typewolf.com](https://www.typewolf.com) | Fuentes y pairings vistos en webs reales, con recomendaciones | |

**Más galerías ya vistas en los posts**
| Web | Qué tiene | Nota |
|---|---|---|
| [godly.website](https://godly.website) | Webs premiadas | Ahora redirige a recent.design |
| [siteinspire.com](https://siteinspire.com) | Webs de agencias escogidas a mano | No la pude abrir (anti-bots) |
| [land-book.com](https://land-book.com) | Landings | No la pude abrir (anti-bots) |
| [landdding.com](https://landdding.com) | Webs nuevas votadas por la comunidad | |
| [loadmo.re](https://loadmo.re) | Webs móviles atrevidas | Buena para salir del "móvil = escritorio apilado" |
| [collectui.com](https://collectui.com) | UI por tipo de componente | |
| [logosystem.co](https://logosystem.co) | +1.600 logos y logos animados | |
| [60fps.design](https://60fps.design) | Animaciones e interacciones de apps | Contrastar con el principio 7 |

---

## 4. Herramientas para construir
| Herramienta | Para qué | Nota |
|---|---|---|
| [number-flow.barvian.me](https://number-flow.barvian.me) | Animar números (precios, contadores) | React, sin dependencias, accesible |
| [dialkit.dev](https://dialkit.dev) | Ajustar en vivo timing, layout y color dentro de la interfaz | React, Solid, Svelte, Vue o JS |
| [tweakcn.com](https://tweakcn.com) | Editor de temas para shadcn/ui | Solo si el proyecto usa shadcn + Tailwind v4 |
| [reelfolio.io](https://reelfolio.io) | Vídeos showreel de portfolio | Para presentar el trabajo, no para la web |

## 5. Librerías de prompts para IA
[getlayers.ai](https://getlayers.ai), [jiro.build](https://jiro.build), [motionin.design](https://motionin.design), [prettysites.io](https://prettysites.io).
Cada diseño viene como un prompt listo para pegar. **Úsalas solo para estudiar cómo describen una sección** (estructura, términos de movimiento, capas) y reescribe el prompt con el brief. Copiarlos tal cual está en `ANTIPATRONES.md`. Varias son de pago y las promocionan sus propios creadores.
