# Diseñar con IA sin que parezca IA (y cómo trabajan los mejores)

> Ámbito: críticas documentadas a la «estética IA», el debate previo sobre la homogeneización de la web, el proceso de los estudios que ganan premios y cómo dar contexto a un modelo. No repite la skill `frontend-design`, el cookbook de Anthropic, Impeccable, taste-skill, Emil Kowalski ni Justin Wetch.
> Fecha de consulta de todas las fuentes: 26-10-2026.

## Referentes clave

**1. Huei-Hsin Wang y Megan Brown (Nielsen Norman Group): «Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts» (oct. 2025)** — https://www.nngroup.com/articles/ai-prototyping/
Es un estudio controlado que compara tres niveles de prompt (genérico, detallado y con artefactos adjuntos) en varias herramientas.
- Con un prompt genérico, la herramienta rellena los huecos con suposiciones. Cito: «general prompts leave room for AI tools to make assumptions about the design requirements and fill in the gaps».
- Adjuntar referencias (boceto, mockup, frame de Figma) da los resultados más precisos, y la precisión crece con la fidelidad de la referencia. El matiz importa: quien entrega esa referencia ya ha hecho buena parte del diseño.
- Los fallos típicos son elementos relacionados sin agrupar, lo secundario enfatizado por encima de la tarea principal, márgenes incoherentes y un estilo «intercambiable» sacado de patrones comunes. Recomiendan tratar a la IA «como a un becario».

**2. Huei-Hsin Wang (NN/g): «vague prototyping» (dic. 2025)** — https://www.nngroup.com/articles/vague-prototyping/
- Acuña el «Frankenstein layout»: piezas correctas por separado, pero «randomly pieced together instead of thoughtfully structured».
- Propone nombrar un estilo visual concreto en vez de adjetivos («trendy»), adjuntar moodboards o capturas del sistema de diseño, usar **datos de ejemplo realistas** para que el layout sirva al contenido, y pedir a un chatbot que analice la página de referencia y convierta ese análisis en lenguaje de prompt.

**3. Sam Goree, Bardia Doosti, David Crandall y Norman Su: «Investigating the Homogenization of Web Design: A Mixed-Methods Approach» (CHI 2021)** — https://vision.luddy.iu.edu/projects/society.html
Es la prueba empírica de que «todas las webs se parecen» ya era verdad antes de la IA.
- Desde 2007 los diseños son mucho más parecidos, sobre todo en layout: la distancia media entre sitios bajó más de un 30 %.
- La similitud del código *bajó*, mientras que el uso de librerías compartidas se disparó. Los sitios con Bootstrap, FontAwesome o jQuery UI se parecían mucho más entre sí. Lo que uniformiza son los valores por defecto de las librerías, no la copia (resumen de Goree en TNW: https://thenextweb.com/news/researchers-analyzed-10000-websites-and-yes-they-all-look-the-same).
- El estudio entrevistó a 11 profesionales, que señalaron como causas las librerías, la estandarización del color y el soporte móvil.

**4. Frank Chimero: «The Web's Grain» (2015)** — https://frankchimero.com/blog/2015/the-webs-grain/
Es el contrapeso necesario. Parte de lo que parece monocultura (color plano, apilado vertical, texto como interfaz) es una respuesta razonable al material, que según él es una superficie sin bordes y de proporciones desconocidas. Critica las «bicycle bear websites», que impresionan pero luchan contra el medio. La enseñanza: la identidad no consiste en romper la web, sino en trabajar *con* su grano.

**5. Andy Clarke: *Art Direction for the Web* (Smashing, 2019)** — https://smashingmagazine.com/2019/03/art-direction-release
- La pregunta no es *cómo* usar técnicas de dirección de arte, sino *cuándo* y *por qué*.
- Recurre a directores de arte de impresos (Alexey Brodovitch, Bea Feitler, Neville Brody) para entender cómo pensaban, no para copiar sus resultados.
- El libro tiene tres partes: narrativa, principios (rejillas, tipografía, colocación de imagen) e implementación con Grid y Flexbox.

**6. Style Tiles** — https://styletil.es/ (la autoría de Samantha Warren aparece en las fuentes secundarias, no en la página: [sin verificar])
Un entregable con fuentes, colores y elementos de interfaz, sin layout. Cito: «for when a moodboard is too vague and a comp is too literal». El proceso tiene cuatro pasos: escuchar, agrupar los adjetivos del cliente en temas, traducirlos a un lenguaje visual e iterar con *varias* tiles. Es el antecedente directo de un plan de diseño antes de construir. Las «element collages» de Dan Mall (2012) amplían la idea [sin verificar: no se pudo abrir el original].

**7. Tubik Studio: caso Awwwards Annual 2020** — https://blog.tubikstudio.com/?p=11580
Es un proceso premiado documentado de principio a fin: investigar el archivo de ediciones anteriores, moodboard (fondos oscuros, tipografía rotunda), explorar ilustraciones y **descartarlas** porque «they looked beautiful, but they looked like us». El concepto final convierte el contenido en el diseño: el patrón de fondo se compone con fragmentos de los proyectos nominados, distintos en cada categoría.

**8. Ben Shumaker (Repaint): «A Picture Is Worth a Thousand Tokens» (abr. 2026)** — https://repaint.com/blog/picture-is-worth-a-thousand-tokens
Son experimentos con Claude Code y Lovable.
- Un sistema de diseño arregla el color pero no la composición. Cito: «A design system gives the model a palette; it doesn't teach it how to compose».
- **Prohibir fuentes no funciona**: el modelo salta a otras fuentes trilladas (Jost, Cormorant Garamond) y ya no puede usar Inter cuando sí encaja.
- Las capturas de referencia son lo único que saca layouts fuera de los 2 o 3 habituales. Aun así, al rellenar contenido que no estaba en la referencia, el modelo vuelve a los valores por defecto.
- Iterar solo, sin humano, se estanca a los 20 minutos y no detecta un botón ilegible.

**9. Kyle Chayka (The New Yorker, jun. 2026): «The AI Design Aesthetic That's Taking Over the Internet»** — vía Pixel Envy: https://pxlnv.com/linklog/claude-aesthetic/ (el original no se pudo abrir)
Describe una estética genérica asociada a Claude Design, «as noticeable as text-based A.I. tics»: fondos crema o beige, acento óxido, serifas grandes en cursiva y subtítulos espaciados. Nick Heer, en Pixel Envy, apunta el efecto rebote: hay gente intentando erradicar cualquier «whiff of A.I.». **Para nosotros es una alarma directa: es el look al que Claude tiende por defecto.**

**10. Awwwards: sistema de evaluación** — https://www.awwwards.com/about-evaluation/
Diseño 40 %, usabilidad 30 %, creatividad 20 %, contenido 10 %. Puntúan al menos 18 jurados y se descartan las 3 notas más alejadas de la media. La mención honorífica pide 6,5 o más. **La originalidad pesa solo un 20 %**: sin oficio y sin usabilidad no hay premio.

## Principios

**1. La decisión de diseño va antes del primer prompt.**
**Por qué:** sin una dirección previa, el modelo devuelve la solución más probable. Dr. Web recoge la frase de Markus Seyfferth: «Die Gestaltungsentscheidung gehört deshalb vor den ersten Prompt».
**Cómo aplicarlo:** el plan de diseño (dirección, colores, tipos) debe estar escrito y bocetado *antes* de generar HTML. Al acabar, compáralo con lo construido: si coinciden con lo que habría salido «por defecto», el plan no decidía nada.
**Fuente(s):** Dobler, Dr. Web 2026; NN/g 2025.

**2. Las imágenes guían mejor que los adjetivos.**
**Por qué:** una imagen contiene información de composición que no cabe en palabras; un «moderno y limpio» no la transmite.
**Cómo aplicarlo:** pide a Àlex 2 o 3 capturas o enlaces de referencia. Si no hay, describe una referencia concreta («portada de catálogo suizo de los 60, rejilla de 6 columnas, foto a sangre a la izquierda») en vez de adjetivos.
**Fuente(s):** Repaint 2026; NN/g vague-prototyping; Vercel Academy.

**3. Referencia ≠ plantilla: extrae principios, no píxeles.**
**Por qué:** v0 «is interpreting, not copying». Pero Repaint vio que partir de plantillas de código hace que el fontanero y el abogado acaben con la misma web.
**Cómo aplicarlo:** de cada referencia anota 3 decisiones abstractas (proporción de la rejilla, relación de escala tipográfica, uso del blanco) y descarta el resto. Nunca reutilices tal cual una plantilla de una web anterior del registro.
**Fuente(s):** Vercel Academy; Repaint 2026; Clarke 2019.

**4. Contenido real, o realista, desde el primer boceto.**
**Por qué:** con contenido falso, el layout se diseña para nada. NN/g pide datos de ejemplo realistas, y los jurados castigan el lorem y las imágenes de banco.
**Cómo aplicarlo:** sin textos reales del cliente, no se maqueta. Escribe borradores verosímiles marcados `[BORRADOR]` y dimensiona con los textos más largos.
**Fuente(s):** NN/g vague-prototyping; hontran.dev 2026.

**5. Haz que el contenido sea el motivo visual.**
**Por qué:** Tubik ganó haciendo que el patrón del fondo fueran los propios nominados. El diseño no se puede trasladar a otro cliente, y eso es justo la identidad.
**Cómo aplicarlo:** busca un material del cliente (su producto, su archivo, sus datos, su oficio) que pueda convertirse en textura, rejilla o interacción. Prueba de fuego: si cambias el logo por el de un competidor, ¿la web sigue funcionando? Entonces es genérica.
**Fuente(s):** Tubik; Clarke 2019.

**6. Desconfía de tu propio estilo además del de la IA.**
**Por qué:** Tubik descartó sus ilustraciones porque «looked like us». La firma propia también es un valor por defecto.
**Cómo aplicarlo:** compara el plan con las últimas 5 líneas de `REGISTRO-DIRECCIONES.md`. Si comparte familia tipográfica, temperatura de color *o* tipo de layout con dos o más de ellas, cámbialo.
**Fuente(s):** Tubik; Goree et al. 2021.

**7. Explora en paralelo y elige con criterio.**
**Por qué:** las Style Tiles se presentan en plural porque varias opciones dan información. Pedir varias direcciones amplía la distribución del modelo.
**Cómo aplicarlo:** antes de construir, propone 3 direcciones radicalmente distintas (en tipo, color y composición), cada una en 5 líneas. Elige una y explica por qué descartas las otras.
**Fuente(s):** styletil.es; prg.sh 2025.

**8. Una sola idea, llevada con disciplina, en todo el sitio.**
**Por qué:** los jueces premian lo deliberado («one strong idea»). El efecto añadido para impresionar se lee como «a lack of control».
**Cómo aplicarlo:** escribe el concepto en una frase. Cada sección debe poder justificarse con esa frase; si no puede, sobra o se simplifica.
**Fuente(s):** hontran.dev 2026.

**9. Usabilidad y rendimiento antes que espectáculo.**
**Por qué:** la usabilidad pesa un 30 % y la creatividad un 20 %. Las animaciones que pierden fotogramas cuestan más de lo que aportan.
**Cómo aplicarlo:** pon un presupuesto: LCP < 2,5 s en 4G simulado y la animación de entrada < 1 s. Usa `transform` y `opacity` para animar. Una versión móvil pensada (no apilada sin más) es obligatoria.
**Fuente(s):** Awwwards; hontran.dev 2026.

**10. Rompe convenciones estéticas, no funcionales.**
**Por qué:** la coherencia funcional (que un botón parezca un botón) no obliga a la uniformidad estética. WCAG pide coherencia *dentro* de un sitio, no que todas las marcas se parezcan.
**Cómo aplicarlo:** navegación, enlaces, formularios y foco van con patrones reconocibles. La identidad se pone en tipografía, densidad, color, composición e imagen.
**Fuente(s):** Dobler, Dr. Web 2026; Scacca 2020.

**11. Trabaja a favor del grano del medio.**
**Por qué:** forzar la web a comportarse como papel produce «bicycle bear websites».
**Cómo aplicarlo:** las composiciones editoriales deben ser intrínsecas (`grid` con `minmax`, `clamp()`, `subgrid`) y degradar con elegancia, nunca a base de posiciones absolutas fijas a 1440 px.
**Fuente(s):** Chimero 2015; Clarke 2019.

**12. Verifica lo que dices que has hecho.**
**Por qué:** en el estudio «Design Theater», más del 25 % de las justificaciones de diseño que dan las herramientas generativas no están implementadas, y en los requisitos funcionales llega al 34 %.
**Cómo aplicarlo:** tras construir, contrasta cada línea del plan con el CSS real (¿existe la variable?, ¿se usa la fuente?, ¿funciona `prefers-reduced-motion`?). No afirmes nada que no hayas visto en la captura.
**Fuente(s):** Imteyaz et al., arXiv 2607.22928 (AAAI/AIES).

**13. Sin el ojo humano en el bucle, se estanca.**
**Por qué:** cuando el modelo se corrige a sí mismo, se estanca y no ve fallos evidentes. NN/g: «AI tools are only as good as the data they were trained on».
**Cómo aplicarlo:** después de cada captura, enseña a Àlex la decisión dudosa y hazle una pregunta concreta, no un «¿te gusta?».
**Fuente(s):** Repaint 2026; NN/g 2025.

## Antipatrones

- **El look Claude de 2026:** crema o beige, acento óxido, serif grande en cursiva y subtítulos espaciados. Ahora tiene nombre en la prensa generalista (Chayka, vía Pixel Envy), así que quien lo vea lo leerá como IA. Ya figura en ANTIPATRONES, pero ahora como el sesgo *propio* de Claude, no solo como un cliché.
- **El índigo de Tailwind:** según la explicación más repetida, el `bg-indigo-500` de los ejemplos de Tailwind UI acabó en el corpus de entrenamiento (prg.sh, 2025; disculpa de Adam Wathan en X, ago. 2025 [sin verificar en la fuente primaria]).
- **Prohibir sin proponer:** una lista negra de fuentes solo desplaza el sesgo a la siguiente fuente más probable (Repaint). Cada «no» necesita un «sí» elegido por el brief.
- **El Frankenstein layout:** secciones correctas por separado, sin jerarquía, con elementos repetidos y contenedores enormes para un solo dato (NN/g).
- **Lo secundario por encima de la tarea:** módulos decorativos o «sociales» que empujan hacia abajo el contenido principal (NN/g).
- **Tópicos de premio:** un blob que sigue al cursor, el scroll de Lenis por defecto, un plano WebGL de plantilla (hontran.dev). La «web de premio» también tiene sus clichés.
- **Sistemas de diseño heredados sin revisar:** el modelo los aplica a todo. El caso Make Designs de Figma (jul. 2024) dio salidas casi idénticas a la app del tiempo de Apple; Dylan Field lo atribuyó a los sistemas de diseño subyacentes y a una variabilidad demasiado baja (TechCrunch).
- **Teatro de diseño:** explicar decisiones (accesibilidad, jerarquía) que el código no implementa (arXiv 2607.22928).
- **Moodboard escaso:** Rufus Pollock usó pocas imágenes y sin curar, y sus webs, que funcionan, «still read as AI-average». Una referencia mal elegida no aporta identidad.

## Técnicas modernas

Son las técnicas que permiten una dirección de arte de tipo editorial sin trucos. Soporte consultado el 26-10-2026.

| Técnica | Uso con identidad | Estado |
|---|---|---|
| `subgrid` | Alinear titulares, imágenes y pies de distintas tarjetas o columnas a una rejilla editorial común | Chrome 117+, Safari 16+, Firefox 71+; 94,4 % global (caniuse) |
| `shape-outside` + `float` | Texto que rodea una forma o una imagen recortada (siluetas del producto, letras capitulares) | Baseline, ampliamente disponible desde ene. 2020 (MDN) |
| `initial-letter` | Capitulares reales | Chrome 110+ y Safari 9+ (parcial); **Firefox no**. Usar con `@supports` (caniuse) |
| `text-box: trim-both cap alphabetic` | Alineación óptica exacta de titulares grandes con la rejilla, sin el aire de las métricas | Baseline 2026, recién disponible (MDN): poner un respaldo con `margin` negativo |
| `animation-timeline: scroll()/view()` | Una sola narrativa ligada al scroll, sin JS | Chrome 115+, Safari 26+, Firefox 159+; 87,8 % (caniuse); MDN aún indica disponibilidad limitada. Siempre dentro de `@supports` y con `prefers-reduced-motion` |
| `@view-transition { navigation: auto; }` | Continuidad entre páginas de un sitio multipágina (el «objeto» del cliente viaja de página en página) | Chrome 126+, Safari 18.2+, Firefox 144+ parcial (caniuse); no es Baseline (MDN). Mejora progresiva |

## Tensiones y debates

- **¿Homogeneidad mala o buena?** Goree et al. y Boris Müller («Why do all websites look the same?», Medium, 2018 [sin verificar: el texto original no se pudo abrir]) la ven como una pérdida cultural. Scacca (2020) y el propio estudio de Goree recuerdan que las convenciones mejoran la usabilidad y que las librerías suelen ser más accesibles. Chimero va más lejos: parte de esa uniformidad es simplemente el grano del medio. **Síntesis:** se estandariza la interacción y se personaliza la expresión.
- **¿Proceso o intuición?** Jenny Wen (responsable de diseño de Claude) defiende en Lenny's Podcast (mar. 2026) que el proceso clásico «discovery → mock → iterate» se está quedando obsoleto [solo se pudo verificar el temario del episodio: https://www.lennysnewsletter.com/p/the-design-process-is-dead]. Maureen (The Cursor Magazine) le replica: «There's a difference between starting fast and starting uninformed». Para un modelo, que no tiene intuición propia, el proceso es lo que *sustituye* a esa intuición. Aquí gana la postura de Maureen.
- **¿Las referencias bastan?** Repaint y NN/g dicen que son lo que mejor funciona. Pollock muestra que, sin criterio al elegirlas, no bastan. El cuello de botella es la curaduría, no el prompt.
- **¿Huir de lo que «parece IA»?** Heer ironiza sobre la caza obsesiva de cualquier rastro de IA. Un fondo crema no es pecado si sale del material del cliente (ANTIPATRONES ya lo contempla). El criterio es el *motivo*, no la lista.
- **Lo que ha envejecido:** el consejo «usa los patrones probados para convertir» (Scacca 2020) tenía sentido cuando la diferenciación era cara. Hoy la IA lo abarata todo y la diferenciación es el valor escaso. Además, las técnicas que hace cinco años exigían JS (scroll narrativo, transiciones entre páginas) ahora son CSS.

## Protocolo: 10 pasos para que Claude diseñe con identidad

1. **Extraer el mundo del cliente.** Antes de hablar de estética, lista 5 objetos, materiales o documentos reales del oficio y 3 palabras que usaría su público. Si no los hay, pregunta.
2. **Pedir referencias visuales concretas.** Pide 2 o 3 imágenes o URLs a Àlex. Si no hay, propón referencias nombradas (un movimiento, una publicación, un objeto) y no adjetivos.
3. **Analizar las referencias en abstracto.** De cada una, 3 decisiones transferibles (rejilla, escala, ritmo, uso de la imagen). Nada de copiar píxeles.
4. **Generar 3 direcciones divergentes**, a modo de mini Style Tiles: 5 líneas cada una, distintas en tipo, color *y* composición.
5. **Filtrar las direcciones.** Descarta la que se parezca al look Claude de 2026, a las 5 últimas entradas del registro o a «tu» estilo. Elige y justifica en una frase.
6. **Escribir el concepto en una frase** y buscar cómo el contenido real del cliente se convierte en motivo visual (patrón, rejilla, interacción).
7. **Trabajar con contenido real o realista desde el principio**, dimensionando con los textos más largos.
8. **Construir a favor del grano:** layout intrínseco, convenciones funcionales intactas, una sola idea audaz y técnicas modernas con `@supports`.
9. **Comprobar contra el teatro de diseño:** cada promesa del plan tiene que estar en el código y verse en las capturas de 375 y 1440 px. Haz una prueba de intercambio: con el logo de un competidor, ¿seguiría valiendo la web?
10. **Cerrar con el humano y registrar.** Enseña la decisión más arriesgada con una pregunta concreta, ajusta y anota la dirección en `REGISTRO-DIRECCIONES.md`.

## Fuentes

- [verificada] NN/g, Wang y Brown, «Good from Afar, But Far from Good», 2025: https://www.nngroup.com/articles/ai-prototyping/
- [verificada] NN/g, Wang, vague prototyping, 2025: https://www.nngroup.com/articles/vague-prototyping/
- [verificada] Goree et al., CHI 2021 (ficha): https://vision.luddy.iu.edu/projects/society.html
- [verificada] Goree, TNW, 2020: https://thenextweb.com/news/researchers-analyzed-10000-websites-and-yes-they-all-look-the-same
- [sin verificar] PDF del paper: https://vision.soic.indiana.edu/papers/websimilarity2021chi.pdf (redirige)
- [verificada] Scacca, WebdesignerDepot, 2020: https://www.webdesignerdepot.com/2020/07/why-do-websites-look-the-same-and-should-we-care
- [verificada] Chimero, «The Web's Grain», 2015: https://frankchimero.com/blog/2015/the-webs-grain/
- [verificada] Clarke, *Art Direction for the Web* (Smashing): https://smashingmagazine.com/2019/03/art-direction-release
- [verificada] Style Tiles: https://styletil.es/
- [sin verificar] Dan Mall, element collages: https://danielmall.com/articles/rif-element-collages/ (403)
- [verificada] Tubik, caso Awwwards Annual: https://blog.tubikstudio.com/?p=11580
- [verificada] Awwwards, evaluación: https://www.awwwards.com/about-evaluation/
- [verificada] hontran.dev, criterios Awwwards, 2026: https://www.hontran.dev/blog/awwwards-judging-criteria
- [verificada] Shumaker, Repaint, 2026: https://repaint.com/blog/picture-is-worth-a-thousand-tokens
- [verificada] Pollock, 2026: https://rufuspollock.com/Designing+Beautiful+Websites+with+AI
- [verificada] Heer sobre Chayka, Pixel Envy, 2026: https://pxlnv.com/linklog/claude-aesthetic/
- [sin verificar] Chayka, The New Yorker: https://www.newyorker.com/culture/infinite-scroll/the-ai-design-aesthetic-thats-taking-over-the-internet (bloqueado)
- [sin verificar] Jim Nielsen, «The AI Aesthetic» (2026), citado solo por terceros
- [sin verificar] Boris Müller, Medium, 2018: https://borism.medium.com/on-the-visual-weariness-of-the-web-8af1c0b6a7ff (403)
- [verificada] Dobler, Dr. Web, 2026: https://www.drweb.de/einheitslook-webdesign-voreinstellung-ki/
- [verificada] TechCrunch, Figma Make Designs, 2024: https://techcrunch.com/2024/07/02/figma-disables-its-ai-design-feature-that-appeared-to-be-ripping-off-apples-weather-app
- [verificada] Imteyaz et al., «Design Theater», arXiv 2026: https://arxiv.org/abs/2607.22928
- [verificada] Vercel Academy, v0 y capturas: https://vercel.com/academy/v0-foundations/enhance-design-with-screenshots-and-versions.md
- [verificada] prg.sh, morado en la IA, 2025: https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
- [sin verificar] Disculpa de Adam Wathan en X (ago. 2025), solo por fuentes secundarias
- [verificada, parcial] Lenny's Newsletter, Jenny Wen, 2026: https://www.lennysnewsletter.com/p/the-design-process-is-dead
- [verificada] The Cursor Magazine, réplica, 2026: https://thecursormag.substack.com/p/the-design-process-is-dead-or-is
- [verificada] caniuse subgrid: https://caniuse.com/css-subgrid
- [verificada] caniuse initial-letter: https://caniuse.com/css-initial-letter
- [verificada] caniuse animation-timeline: https://caniuse.com/mdn-css_properties_animation-timeline
- [verificada] caniuse cross-document view transitions: https://caniuse.com/cross-document-view-transitions
- [verificada] MDN text-box-trim: https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim
- [verificada] MDN shape-outside: https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside
- [verificada] MDN animation-timeline: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
- [verificada] MDN @view-transition: https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition
