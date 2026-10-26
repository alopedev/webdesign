// Diccionario cerrado de muestra: cada traducción está comprobada en Jisho (JMdict)
// el 26/10/2026. Para palabras libres haría falta un servicio de traducción
// y un diccionario con lecturas (ver README del sitio).
export type Palabra = {
  es: string; // como la escribe el visitante
  ja: string; // lo que se traza
  kana: string; // lectura en hiragana
  romaji: string;
  matiz?: string; // cuando la palabra española tiene más de un sentido
  otras?: string[]; // otras formas que llevan aquí
};

export const PALABRAS: Palabra[] = [
  { es: 'agua', ja: '水', kana: 'みず', romaji: 'mizu' },
  { es: 'montaña', ja: '山', kana: 'やま', romaji: 'yama', otras: ['monte'] },
  { es: 'río', ja: '川', kana: 'かわ', romaji: 'kawa' },
  { es: 'árbol', ja: '木', kana: 'き', romaji: 'ki' },
  { es: 'bosque', ja: '森', kana: 'もり', romaji: 'mori' },
  { es: 'fuego', ja: '火', kana: 'ひ', romaji: 'hi' },
  { es: 'luna', ja: '月', kana: 'つき', romaji: 'tsuki' },
  { es: 'lluvia', ja: '雨', kana: 'あめ', romaji: 'ame' },
  { es: 'viento', ja: '風', kana: 'かぜ', romaji: 'kaze' },
  { es: 'flor', ja: '花', kana: 'はな', romaji: 'hana' },
  { es: 'mar', ja: '海', kana: 'うみ', romaji: 'umi' },
  { es: 'luz', ja: '光', kana: 'ひかり', romaji: 'hikari' },
  { es: 'corazón', ja: '心', kana: 'こころ', romaji: 'kokoro', matiz: 'el de «de corazón», no el órgano' },
  { es: 'sueño', ja: '夢', kana: 'ゆめ', romaji: 'yume', matiz: 'lo que se sueña, no las ganas de dormir' },
  { es: 'camino', ja: '道', kana: 'みち', romaji: 'michi' },
  { es: 'tinta', ja: '墨', kana: 'すみ', romaji: 'sumi', matiz: 'la tinta china del pincel' },
  { es: 'papel', ja: '紙', kana: 'かみ', romaji: 'kami' },
  { es: 'pincel', ja: '筆', kana: 'ふで', romaji: 'fude' },
  { es: 'palabra', ja: '言葉', kana: 'ことば', romaji: 'kotoba', otras: ['palabras'] },
  { es: 'escribir', ja: '書く', kana: 'かく', romaji: 'kaku' },
  { es: 'gato', ja: '猫', kana: 'ねこ', romaji: 'neko', otras: ['gata'] },
  { es: 'amigo', ja: '友達', kana: 'ともだち', romaji: 'tomodachi', otras: ['amiga', 'amigos'] },
  { es: 'gracias', ja: 'ありがとう', kana: 'ありがとう', romaji: 'arigatō' },
  { es: 'hola', ja: 'こんにちは', kana: 'こんにちは', romaji: 'konnichiwa', matiz: 'la última は se lee «wa»' },
];

const normaliza = (s: string) =>
  s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/^(el|la|los|las|un|una)\s+/, '');

export function busca(texto: string): Palabra | undefined {
  const t = normaliza(texto);
  if (!t) return undefined;
  return PALABRAS.find(p => normaliza(p.es) === t || p.otras?.some(o => normaliza(o) === t));
}
