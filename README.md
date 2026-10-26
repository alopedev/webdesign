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
| `ENSENANZAS-THREADS.md` | Hueco para las lecciones de tus posts | `docs/` |

## Por qué está organizado así
- **Instrucciones cortas, detalle aparte.** La documentación oficial de Claude Code recomienda CLAUDE.md de menos de 200 líneas, concretos y por secciones; lo largo va en archivos separados. Los `@imports` organizan pero no ahorran contexto, por eso solo se importan los dos documentos que se usan siempre.
- **Plan antes que código.** Es el método de la skill oficial `frontend-design`: plan compacto → revisarlo contra los valores por defecto → construir → autocrítica.
- **Nombrar los clichés funciona.** El cookbook de Anthropic muestra que decir explícitamente qué evitar (Inter, morado sobre blanco…) da diseños más variados.
- **Registro de direcciones.** Cada conversación de Claude está aislada, así que «no repitas» no funciona sin memoria. El registro se la da.

## Riesgos que conviene saber
- La lista de antipatrones envejece: cuando un «antídoto» se pone de moda se convierte en cliché (pasó con Space Grotesk). Revísala cada pocos meses.
- Prohibir demasiado también empuja a la uniformidad. Los antipatrones se permiten si el brief los justifica.
- `CLAUDE.md` tiene comandos de ejemplo: ajústalos cuando exista el repo real.

## Fuentes
- Anthropic, skill `frontend-design`: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Anthropic, cookbook «Prompting for frontend aesthetics» (oct. 2025): https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
- Anthropic, «Improving frontend design through Skills» (nov. 2025): https://claude.com/blog/improving-frontend-design-through-skills
- Claude Code, «How Claude remembers your project»: https://code.claude.com/docs/en/memory
- W3C, WCAG 2.2 SC 1.4.3: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- Google, Web Vitals: https://web.dev/articles/vitals
- Justin Wetch, crítica a la regla «no repetir entre generaciones»: https://www.justinwetch.com/blog/improvingclaudefrontend
