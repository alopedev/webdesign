# Plantilla de sitio

Proyecto Next.js + React + TypeScript vacío. No se edita aquí: se copia.

```sh
cp -r plantilla sitios/<nombre>
cd sitios/<nombre> && npm install
node ../../scripts/fonts.js . "Familia:wght@400;700"   # fuentes del plan
npm run dev                                            # http://localhost:3000
```

| Archivo | Qué es |
|---|---|
| `src/app/tokens.css` | Tokens del plan. Vienen en gris a propósito: hay que sustituirlos todos |
| `src/app/fuentes.ts` | Lo genera `scripts/fonts.js` (next/font/local) |
| `src/app/globals.css` | Base: reset, foco visible, rejilla con pistas con nombre |
| `src/app/layout.tsx`, `page.tsx` | Estructura y página de inicio (componentes de servidor) |
| `src/components/Entrada.tsx` | Ejemplo de entrada orquestada con GSAP y rama para `prefers-reduced-motion` |
| `src/components/ScrollSuave.tsx` | Lenis + GSAP ScrollTrigger. Desactivado: se activa en `layout.tsx` solo si el plan lo pide |

Para 3D: `npm install three @react-three/fiber @react-three/drei` y cargar la escena con `next/dynamic` (`ssr: false`) solo en la página que la use.
