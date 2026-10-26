# Documentos base — proyecto «Diseñador»

## Qué hay y dónde va
| Archivo | Para qué | Dónde ponerlo |
|---|---|---|
| `PROJECT.md` | Instrucciones cortas del proyecto | Pegar en las instrucciones del proyecto de claude.ai |
| `CLAUDE.md` | Reglas para Claude Code en un repo | Raíz del repo |
| `PRINCIPIOS-ESTILO.md` | 10 principios de estilo | `docs/` del repo + archivo del proyecto |
| `ANTIPATRONES.md` | Lista de «estética IA» a evitar | `docs/` + archivo del proyecto |
| `BRIEF-PLANTILLA.md` | Brief + plan de diseño previo al código | `docs/` |
| `CHECKLIST-CALIDAD.md` | Accesibilidad, rendimiento, código | `docs/` |
| `REGISTRO-DIRECCIONES.md` | Memoria de estilos ya usados, para no repetir | `docs/` |
| `REFERENCIAS.md` | Biblioteca: pairings, paletas con contraste, webs de referencia, herramientas | `docs/` |
| `ENSENANZAS-THREADS.md` | Registro de tus posts: qué aportó cada uno y dónde se colocó | `docs/` |
| `compendio/` | Investigación de fondo por áreas (sin pasos propios: el protocolo está en `CLAUDE.md`) | `docs/compendio/` |
| `COMPONENTES.md` | HTML nativo, primitivas sin estilo, shadcn y bibliotecas de efectos: cuándo usar cada una y cómo evitar su aspecto por defecto | `docs/` |
| `plantilla/` | Proyecto Next.js + TypeScript + GSAP + Lenis vacío, del que se copia cada web | `plantilla/` |
| `scripts/` | Descarga de fuentes y capturas con comprobaciones (hace el build y lo arranca) | `scripts/` (ver su README) |
| `sitios/` | Una carpeta por web (un proyecto Next.js cada una) | `sitios/<nombre>/` |

## Por qué está organizado así
- **Instrucciones cortas, detalle aparte.** La documentación oficial de Claude Code recomienda CLAUDE.md de menos de 200 líneas, concretos y por secciones; lo largo va en archivos separados. Los `@imports` organizan pero no ahorran contexto, por eso solo se importan los dos documentos que se usan siempre.
- **Un solo protocolo.** Está en `CLAUDE.md`. Sale del método de la skill oficial `frontend-design`, de `taste-skill` y del compendio: inventario del cliente → Àlex elige entre opciones visuales la idea, la inspiración, la estructura, la tipografía, la paleta, la maqueta y el prototipo → plan revisado contra los valores por defecto → construir → capturas con `scripts/capture.js`, nota estética y correcciones con Àlex.
- **Verificar con herramientas, no a ojo.** En la primera prueba, el script de capturas encontró un botón con contraste 4,47:1 que a ojo parecía correcto.
- **Nombrar los clichés funciona.** El cookbook de Anthropic muestra que decir explícitamente qué evitar (Inter, morado sobre blanco…) da diseños más variados.
- **Registro de direcciones.** Cada conversación de Claude está aislada, así que «no repitas» no funciona sin memoria. El registro se la da.

## Riesgos que conviene saber
- La lista de antipatrones envejece: cuando un «antídoto» se pone de moda se convierte en cliché (pasó con Space Grotesk). Revísala cada pocos meses.
- Prohibir demasiado también empuja a la uniformidad. Por eso cada antipatrón lleva su alternativa al lado, y se permite si el brief lo justifica.
- Las skills de la comunidad no siempre coinciden. Por ejemplo, `taste-skill` prohíbe la monoespaciada fuera del código, y uno de tus posts (.raw coffee) la usa con acierto. Aquí ganan el brief y la idea central.

## Alternativa a valorar
Impeccable, `taste-skill` y las skills de Emil Kowalski se pueden instalar directamente en Claude Code. Traen scripts que comprueban la web automáticamente (detectores de clichés, capturas a varios anchos). Estos documentos recogen sus reglas; `scripts/` cubre lo básico de sus comprobaciones (capturas, contraste), no sus detectores de clichés. Si se instalan junto a estos documentos, hay que vigilar que no se contradigan.

## Fuentes (todas abiertas y leídas el 26/10/2026)
**Anthropic (oficial)**
- Skill `frontend-design`: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Cookbook «Prompting for frontend aesthetics» (oct. 2025): https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
- «Improving frontend design through Skills» (nov. 2025): https://claude.com/blog/improving-frontend-design-through-skills (solo leí un resumen parcial)
- Claude Code, «How Claude remembers your project»: https://code.claude.com/docs/en/memory

**Autores especializados y skills populares de la comunidad**
- Paul Bakaus, **Impeccable**: https://github.com/pbakaus/impeccable. Neutros tintados, nada de texto gris sobre color, tarjetas anidadas ni easing elástico. Solo leí la portada del repo: no encontré el archivo de la skill.
- Leonxlnx, **taste-skill**: https://github.com/Leonxlnx/taste-skill. Inventario del cliente, idea central, test del competidor, cifras tipográficas, verificación con capturas en rondas.
- Emil Kowalski (ex-Vercel y Linear, autor de Sonner), **skills de animación**: https://github.com/emilkowalski/skills. Frecuencia, curvas, duraciones y reduced-motion.
- Justin Wetch, «Improving Claude's frontend design skill»: https://www.justinwetch.com/blog/improvingclaudefrontend. Instrucciones posibles en una sola respuesta y cada «evitar» con su alternativa. Lo midió con 30 comparaciones a ciegas, juzgadas por Claude: la versión revisada ganó 21 de 28.
- Matt Pocock, skill `writing-for-agents`: describe cómo escribir CLAUDE.md. Prohibir algo sin dar la alternativa refuerza lo prohibido.

**Normas técnicas**
- W3C, WCAG 2.2 SC 1.4.3: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- Google, Web Vitals: https://web.dev/articles/vitals

**Descartadas:** guías de agencias y blogs de 2026 sobre «Claude Code para diseñadores». Las revisé por encima y eran genéricas, promocionales o sin autor identificable.
