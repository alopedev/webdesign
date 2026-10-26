import Entrada from '@/components/Entrada';
import Pincel from '@/components/Pincel';
import s from './page.module.css';

export default function Inicio() {
  return (
    <>
      {/* Filtros de tinta: borde áspero y tinta desigual (sumi) y la mancha que se extiende en el papel (nijimi) */}
      <svg className={s.filtros} aria-hidden="true" focusable="false">
        <filter id="sumi" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="3" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="1.1" xChannelSelector="R" yChannelSelector="G" result="borde" />
          <feTurbulence type="fractalNoise" baseFrequency="0.18" numOctaves="3" seed="11" result="vetas" />
          <feColorMatrix in="vetas" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.7 1.3" result="alfa" />
          <feComposite in="borde" in2="alfa" operator="in" />
        </filter>
        <filter id="nijimi" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="5" result="ruido" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="borroso" />
          <feDisplacementMap in="borroso" in2="ruido" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <main className={`rejilla ${s.pagina}`}>
        <Pincel>
          <Entrada className={s.cabeza}>
            <p className={s.marca} data-entra>
              Kakijun <span lang="ja">書き順</span>
            </p>
            <h1 data-entra>Escribe en español, traza en japonés</h1>
            <p className={s.intro} data-entra>
              Escribe una palabra y el pincel la traza en japonés, trazo a trazo, en el orden de un calígrafo. Los números
              en bermellón son los del maestro que corrige.
            </p>
          </Entrada>
        </Pincel>

        <section className={s.como} aria-labelledby="como">
          <h2 id="como">Cómo funciona</h2>
          <ol className={s.pasos}>
            <li>
              <strong>Escribes la palabra en español.</strong> Da igual con o sin tilde: «corazon» también vale.
            </li>
            <li>
              <strong>Se busca en el diccionario de muestra.</strong> Hoy son {24} palabras comprobadas. Para traducir cualquier palabra
              haría falta conectar un servicio de traducción y un diccionario con lecturas.
            </li>
            <li>
              <strong>El pincel la traza en orden.</strong> Cada trazo sigue el orden y la forma de KanjiVG y acaba como lo haría un
              calígrafo: parando, con gancho o barriendo.
            </li>
          </ol>
        </section>

        <footer className={s.pie}>
          <p>
            Web de prueba: Kakijun es un proyecto ficticio. Orden de trazos de{' '}
            <a href="https://kanjivg.tagaini.net/">KanjiVG</a>, de Ulrich Apel (licencia CC BY-SA 3.0). Traducciones comprobadas en{' '}
            <a href="https://jisho.org/">Jisho</a>, que usa JMdict.
          </p>
        </footer>
      </main>
    </>
  );
}
