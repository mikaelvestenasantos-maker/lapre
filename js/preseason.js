// Pré-temporada / reavaliações: catálogo de testes, cálculos, salvamento e planilha (CSV).
// Tudo fica salvo no próprio aparelho (localStorage). Nada é enviado para a internet.

const CHAVE = 'lapre.avaliacoes';

// Converte texto em número (aceita vírgula ou ponto). Devolve null se vazio/inválido.
const num = v => {
  const n = parseFloat(String(v ?? '').replace(',', '.'));
  return isNaN(n) ? null : n;
};
// Formata número com 1 casa. Vazio se não tiver valor.
const f1 = n => (n === null || n === undefined || !isFinite(n)) ? '' : (Math.round(n * 10) / 10).toString();
// Simetria: menor ÷ maior × 100
const simetria = (a, b) => (a && b) ? Math.min(a, b) / Math.max(a, b) * 100 : null;

// Testes que podem entrar numa avaliação. `derivados` calcula resultados automáticos.
const PRE_TESTES = [
  { id: 'basico', nome: 'Dados básicos', campos: [
      { k: 'idade', l: 'Idade (anos)' }, { k: 'sexo', l: 'Sexo (F/M)', tipo: 'texto' },
      { k: 'altura', l: 'Altura (cm)' }, { k: 'massa', l: 'Massa (kg)' },
      { k: 'posicao', l: 'Posição/função', tipo: 'texto' }, { k: 'dominante', l: 'Membro dominante (D/E)', tipo: 'texto' },
      { k: 'lesao', l: 'Lesão prévia (local/ano)', tipo: 'texto' }],
    derivados: v => [{ l: 'IMC', v: v.altura && v.massa ? v.massa / Math.pow(v.altura / 100, 2) : null }] },
  { id: 'single_hop', nome: 'Single Hop', campos: [
      { k: 'D', l: 'Direito (cm)' }, { k: 'E', l: 'Esquerdo (cm)' }],
    derivados: v => [{ l: 'Simetria (%)', v: simetria(v.D, v.E) }] },
  { id: 'triple_hop', nome: 'Triple Hop', campos: [
      { k: 'D', l: 'Direito (cm)' }, { k: 'E', l: 'Esquerdo (cm)' }],
    derivados: v => [{ l: 'Simetria (%)', v: simetria(v.D, v.E) }] },
  { id: 'ybt', nome: 'Y Balance', campos: [
      { k: 'compD', l: 'Comp. membro D (cm)' }, { k: 'compE', l: 'Comp. membro E (cm)' },
      { k: 'D_ANT', l: 'D anterior' }, { k: 'D_PM', l: 'D póstero-medial' }, { k: 'D_PL', l: 'D póstero-lateral' },
      { k: 'E_ANT', l: 'E anterior' }, { k: 'E_PM', l: 'E póstero-medial' }, { k: 'E_PL', l: 'E póstero-lateral' }],
    derivados: v => [
      { l: 'Composto D (%)', v: v.compD && v.D_ANT && v.D_PM && v.D_PL ? (v.D_ANT + v.D_PM + v.D_PL) / (3 * v.compD) * 100 : null },
      { l: 'Composto E (%)', v: v.compE && v.E_ANT && v.E_PM && v.E_PL ? (v.E_ANT + v.E_PM + v.E_PL) / (3 * v.compE) * 100 : null },
      { l: 'Dif. anterior (cm)', v: v.D_ANT && v.E_ANT ? Math.abs(v.D_ANT - v.E_ANT) : null }] },
  { id: 'dorsi', nome: 'Dorsiflexão (knee-to-wall)', campos: [
      { k: 'D', l: 'Direito (cm)' }, { k: 'E', l: 'Esquerdo (cm)' }],
    derivados: v => [{ l: 'Diferença (cm)', v: v.D !== null && v.E !== null ? Math.abs(v.D - v.E) : null }] }
];

const testePorId = id => PRE_TESTES.find(t => t.id === id);

// Valores numéricos de um atleta para um teste
function valoresDoTeste(atleta, teste) {
  const v = {};
  teste.campos.forEach(c => { v[c.k] = num(atleta.dados[teste.id + '.' + c.k]); });
  return v;
}

// ---------- Salvamento ----------
function carregarAvaliacoes() {
  try { return JSON.parse(localStorage.getItem(CHAVE)) || []; } catch (e) { return []; }
}
function salvarAvaliacoes(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}
const novoId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ---------- Planilha (CSV) ----------
// Separador ";" e vírgula decimal: abre direto no Excel em português.
const cabecalhoCampo = (t, c) => t.nome + ' - ' + c.l;

function gerarCSV(av) {
  const cab = ['Atleta'];
  av.testes.forEach(id => {
    const t = testePorId(id);
    t.campos.forEach(c => cab.push(cabecalhoCampo(t, c)));
    t.derivados({}).forEach(d => cab.push(t.nome + ' - ' + d.l));
  });
  const linhas = [cab];
  av.atletas.forEach(a => {
    const l = [a.nome];
    av.testes.forEach(id => {
      const t = testePorId(id);
      // números saem com vírgula decimal (Excel pt-BR); campos de texto ficam como estão
      t.campos.forEach(c => { const x = a.dados[t.id + '.' + c.k] ?? ''; l.push(c.tipo === 'texto' ? x : String(x).replace('.', ',')); });
      t.derivados(valoresDoTeste(a, t)).forEach(d => l.push(f1(d.v).replace('.', ',')));
    });
    linhas.push(l);
  });
  const aspas = x => { x = String(x); return /[;"\n]/.test(x) ? '"' + x.replace(/"/g, '""') + '"' : x; };
  // Cabeçalho fica como está; nos valores, o ponto decimal vira vírgula (Excel pt-BR)
  // ﻿ = marca para o Excel entender acentos
  return '﻿' + linhas.map(l => l.map(aspas).join(';')).join('\r\n');
}

// Lê CSV simples (com aspas). Detecta separador ; ou ,
function lerCSV(texto) {
  texto = texto.replace(/^﻿/, '');
  const sep = (texto.split('\n')[0].match(/;/g) || []).length ? ';' : ',';
  const linhas = []; let atual = [], campo = '', aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i];
    if (aspas) {
      if (ch === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (ch === '"') aspas = false;
      else campo += ch;
    } else if (ch === '"') aspas = true;
    else if (ch === sep) { atual.push(campo); campo = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && texto[i + 1] === '\n') i++;
      atual.push(campo); campo = '';
      if (atual.some(x => x !== '')) linhas.push(atual);
      atual = [];
    } else campo += ch;
  }
  atual.push(campo);
  if (atual.some(x => x !== '')) linhas.push(atual);
  return linhas;
}

// Junta um CSV (de outro celular) na avaliação. Casa atletas pelo nome.
// Só preenche células que vêm com valor; colunas calculadas são ignoradas.
function importarCSV(av, texto) {
  const linhas = lerCSV(texto);
  if (linhas.length < 2) return { erro: 'Arquivo vazio ou inválido.' };
  const mapa = {};
  PRE_TESTES.forEach(t => t.campos.forEach(c => { mapa[cabecalhoCampo(t, c)] = { t, c }; }));
  const cols = linhas[0].map(h => mapa[h.trim()] || null);
  let novos = 0, celulas = 0;
  linhas.slice(1).forEach(l => {
    const nome = (l[0] || '').trim();
    if (!nome) return;
    let a = av.atletas.find(x => x.nome.toLowerCase() === nome.toLowerCase());
    if (!a) { a = { nome, dados: {} }; av.atletas.push(a); novos++; }
    cols.forEach((m, i) => {
      const val = (l[i] || '').trim();
      if (!m || !val) return;
      a.dados[m.t.id + '.' + m.c.k] = m.c.tipo === 'texto' ? val : val.replace(',', '.');
      if (!av.testes.includes(m.t.id)) av.testes.push(m.t.id);
      celulas++;
    });
  });
  return { novos, celulas };
}
