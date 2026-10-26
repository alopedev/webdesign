'use client';
// El hero: el visitante escribe una palabra, la palabra se deshace como tinta
// aguada y el pincel la traza en japonés en el orden real (KanjiVG), con los
// números en bermellón del maestro. El servidor ya entrega la hoja con la palabra
// inicial trazada; GSAP solo la oculta al arrancar para dibujarla.
import { useMemo, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { PALABRAS, busca, type Palabra } from '@/datos/palabras';
import trazosJson from '@/datos/trazos.json';
import { grosorPara, pincelada } from '@/lib/pincel';
import s from './Pincel.module.css';

gsap.registerPlugin(useGSAP);

type Datos = Record<string, { trazos: { tipo: string; d: string }[]; numeros: [number, number][] }>;
const TRAZOS = trazosJson as unknown as Datos;
const INICIAL = PALABRAS[0];
const EJEMPLOS = ['luna', 'gato', 'gracias', 'camino'];
const POR_COLUMNA = 3;

export default function Pincel({ children }: { children: ReactNode }) {
  const [palabra, setPalabra] = useState<Palabra>(INICIAL);
  const [texto, setTexto] = useState('');
  const [aviso, setAviso] = useState('');
  const [escrita, setEscrita] = useState<string | null>(null); // la palabra que se deshace
  const [vez, setVez] = useState(0); // cada envío o repetición vuelve a trazar
  const hoja = useRef<HTMLDivElement>(null);

  const chars = [...palabra.ja];
  const filas = Math.min(chars.length, POR_COLUMNA);
  const cols = Math.ceil(chars.length / POR_COLUMNA);
  const total = chars.reduce((n, c) => n + TRAZOS[c].trazos.length, 0);

  // Contornos de pincel de cada carácter (iguales en servidor y navegador)
  const dibujo = useMemo(
    () =>
      chars.map(c => {
        const { trazos, numeros } = TRAZOS[c];
        const g = grosorPara(trazos.length);
        return { c, g, numeros, trazos: trazos.map((t, i) => pincelada(t.d, t.tipo, g, i + c.charCodeAt(0))) };
      }),
    [palabra.ja], // eslint-disable-line react-hooks/exhaustive-deps
  );

  function trazar(entrada: string) {
    const encontrada = busca(entrada);
    if (!encontrada) {
      setAviso(
        entrada.trim()
          ? `Aún no sé trazar «${entrada.trim()}». Es un diccionario de muestra de ${PALABRAS.length} palabras: prueba con una de la lista.`
          : 'Escribe una palabra en español, por ejemplo «luna».',
      );
      return;
    }
    setAviso('');
    setEscrita(entrada.trim());
    setPalabra(encontrada);
    setVez(v => v + 1);
  }

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trazar(texto);
  };

  const elegir = (es: string, subir: boolean) => {
    setTexto(es);
    trazar(es);
    if (subir) hoja.current?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  useGSAP(
    () => {
      const q = gsap.utils.selector(hoja);
      const mascaras = q('[data-mascara]');
      const tintas = q('[data-trazo]');
      const nijimi = q('[data-nijimi]');
      const numeros = q('[data-numero]');
      const despues = q('[data-despues]');
      const nitida = q('[data-aguada="nitida"]');
      const difusa = q('[data-aguada="difusa"]');
      const inicio = vez === 0 ? 0.5 : escrita ? 0.75 : 0.1;
      const ritmo = Math.min(1, 8 / total); // las palabras largas se trazan más deprisa
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Oculta también la máscara: con extremo redondo, un trazo de longitud 0 deja un punto
        gsap.set(mascaras, { attr: { 'stroke-dashoffset': 1 }, opacity: 0 });
        gsap.set([...nijimi, ...numeros, ...despues], { opacity: 0 });
        const tl = gsap.timeline({ delay: inicio > 0.5 ? 0 : 0.1 });
        if (escrita && vez > 0) {
          tl.fromTo(nitida, { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.04, duration: 0.9, ease: 'power2.out' }, 0);
          tl.fromTo(difusa, { opacity: 0, scale: 1 }, { opacity: 0.55, scale: 1.08, duration: 0.45, ease: 'power1.out' }, 0.1);
          tl.to(difusa, { opacity: 0, duration: 0.9, ease: 'power1.in' }, 0.55);
        }
        let t = inicio;
        mascaras.forEach((m, i) => {
          const largo = Number(m.getAttribute('data-largo'));
          const dur = (0.18 + (largo / 109) * 0.55) * ritmo;
          tl.set(m, { opacity: 1 }, t);
          tl.to(m, { attr: { 'stroke-dashoffset': 0 }, duration: dur, ease: 'power1.inOut' }, t);
          tl.to(numeros[i], { opacity: 1, duration: 0.15, ease: 'power1.out' }, t);
          tl.to(nijimi[i], { opacity: 1, duration: 0.9, ease: 'power1.out' }, t + dur * 0.6);
          t += dur + 0.12 * ritmo; // el pincel se levanta entre trazo y trazo
        });
        tl.to(despues, { opacity: 1, duration: 0.4, ease: 'power1.out', stagger: 0.06 }, t);
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        // Sin desplazamientos: cada trazo aparece con un fundido, en orden
        gsap.set([...tintas, ...nijimi, ...numeros, ...despues], { opacity: 0 });
        const tl = gsap.timeline();
        if (escrita && vez > 0) tl.fromTo(nitida, { opacity: 1 }, { opacity: 0, duration: 0.5, ease: 'none' }, 0);
        tintas.forEach((p, i) => {
          const t = 0.3 + i * 0.25 * Math.min(1, 8 / total);
          tl.to([p, nijimi[i], numeros[i]], { opacity: 1, duration: 0.2, ease: 'none' }, t);
        });
        tl.to(despues, { opacity: 1, duration: 0.3, ease: 'none' });
      });
    },
    { scope: hoja, dependencies: [vez], revertOnUpdate: true },
  );

  return (
    <>
      <div className={s.mesa}>
        {children}
        <form className={s.formulario} onSubmit={enviar} noValidate>
          <label htmlFor="palabra" className={s.etiqueta}>
            Tu palabra en español
          </label>
          <div className={s.linea}>
            <input
              id="palabra"
              name="palabra"
              className={s.campo}
              value={texto}
              onChange={e => setTexto(e.target.value)}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="go"
              maxLength={24}
              placeholder="agua"
              aria-describedby="aviso"
            />
            <button type="submit" className={s.trazar}>
              Trazar
            </button>
          </div>
          <p id="aviso" className={s.aviso} role="status">
            {aviso}
          </p>
        </form>
        <p className={s.ejemplos}>
          Prueba con{' '}
          {EJEMPLOS.map((e, i) => (
            <span key={e}>
              <button type="button" className={s.enlace} onClick={() => elegir(e, false)}>
                {e}
              </button>
              {i < EJEMPLOS.length - 2 ? ', ' : i === EJEMPLOS.length - 2 ? ' o ' : '.'}
            </span>
          ))}
        </p>
      </div>

      <div className={s.fieltro} ref={hoja}>
        <figure className={s.hoja} style={{ '--cols': cols, '--filas': filas } as CSSProperties}>
          <div className={s.pliegues} aria-hidden="true" />
          <div className={s.casillas} role="img" aria-label={`${palabra.ja}, «${palabra.es}» en japonés, trazado en ${total} trazos`}>
            {dibujo.map(({ c, g, trazos, numeros }, k) => (
              <svg
                key={c + k}
                viewBox="0 0 109 109"
                className={s.caracter}
                style={{ gridColumn: cols - Math.floor(k / POR_COLUMNA), gridRow: (k % POR_COLUMNA) + 1 }}
                aria-hidden="true"
              >
                <defs>
                  {trazos.map((t, i) => (
                    <mask key={i} id={`m${vez}-${k}-${i}`} maskUnits="userSpaceOnUse" x="-5" y="-5" width="119" height="119">
                      <path
                        data-mascara
                        data-largo={t.largo}
                        d={t.centro}
                        pathLength={1}
                        strokeDasharray="1 1"
                        strokeDashoffset={0}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={g * 2.4 + 4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                  ))}
                </defs>
                {trazos.map((t, i) => (
                  <g key={i} mask={`url(#m${vez}-${k}-${i})`}>
                    <path data-nijimi className={s.nijimi} d={t.contorno} />
                    <path data-trazo className={s.tinta} d={t.contorno} />
                  </g>
                ))}
                <g className={s.numeros}>
                  {numeros.map(([x, y], i) => (
                    <text data-numero key={i} x={x} y={y}>
                      {i + 1}
                    </text>
                  ))}
                </g>
              </svg>
            ))}
          </div>
          {escrita && (
            <div className={s.aguada} aria-hidden="true" key={vez}>
              <span data-aguada="difusa" className={s.difusa}>
                {escrita}
              </span>
              <span data-aguada="nitida">{escrita}</span>
            </div>
          )}
          <figcaption className={s.lectura} lang="ja" data-despues>
            {palabra.kana !== palabra.ja ? palabra.kana : ''}
          </figcaption>
        </figure>

        <div className={s.pie}>
          <p aria-live="polite" data-despues>
            <span lang="ja" className={s.ja}>
              {palabra.ja}
            </span>{' '}
            <span lang="ja-Latn" className={s.romaji}>
              {palabra.romaji}
            </span>{' '}
            significa «{palabra.es}»{palabra.matiz ? `, ${palabra.matiz}` : ''}.
          </p>
          <button type="button" className={s.repetir} onClick={() => { setEscrita(null); setVez(v => v + 1); }}>
            Repetir los trazos
          </button>
        </div>
      </div>

      <section className={s.diccionario} aria-labelledby="diccionario">
        <h2 id="diccionario">Las {PALABRAS.length} palabras que sabe trazar</h2>
        <p className={s.nota}>
          Es un diccionario de muestra: cada traducción está comprobada a mano en JMdict, el diccionario abierto que usa Jisho. Toca una
          para verla trazada.
        </p>
        <ul className={s.lista}>
          {PALABRAS.map(p => (
            <li key={p.es}>
              <button type="button" className={s.entrada} onClick={() => elegir(p.es, true)} aria-pressed={p.es === palabra.es}>
                <span className={s.es}>{p.es}</span>
                <span lang="ja" className={s.jaLista}>
                  {p.ja}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
