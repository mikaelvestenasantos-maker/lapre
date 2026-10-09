// Questionários: (A) preencher no app com pontuação automática e (B) enviar o link do formulário por WhatsApp.
// Os dados ficam só no aparelho (localStorage). Use sempre um CÓDIGO ou iniciais, nunca o nome completo.

const CHAVE_Q = 'lapre.questionarios';
const qPorId = id => QUESTIONARIOS.find(q => q.id === id);
const carregarQ = () => { try { return JSON.parse(localStorage.getItem(CHAVE_Q)) || []; } catch (e) { return []; } };
const salvarQ = l => localStorage.setItem(CHAVE_Q, JSON.stringify(l));

// ---------- Pontuação ----------
const valQ = (r, k) => (r[k] === undefined || r[k] === null || r[k] === '') ? null : Number(r[k]);
const somaK = (r, ks) => ks.reduce((s, k) => s + (valQ(r, k) ?? 0), 0);
const respondidos = (r, ks) => ks.filter(k => valQ(r, k) !== null).length;
const seq = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => 'q' + (a + i));
// KOOS/FAOS: 100 - média × 25. Aceita até 2 itens em branco por domínio.
const subescore = (r, ks) => { const v = ks.map(k => valQ(r, k)).filter(x => x !== null); return (ks.length - v.length > 2 || !v.length) ? null : 100 - (v.reduce((a, b) => a + b, 0) / v.length) * 25; };
// DASH/QuickDASH: [(soma das respostas ÷ itens respondidos) - 1] × 25. As opções valem 1 a 5.
const dashPont = (r, ks, minimo) => { const v = ks.map(k => valQ(r, k)).filter(x => x !== null).map(x => x + 1); return v.length >= minimo ? (v.reduce((a, b) => a + b, 0) / v.length - 1) * 25 : null; };
// Pontos de uma opção quando o questionário define "pts" (senão vale o índice).
const ptsDe = (id, k, r) => { const c = qPorId(id).campos.find(x => x.k === k); const v = valQ(r, k); return v === null ? null : (c.pts ? c.pts[v] : v); };
// Escalas de soma só mostram o total quando todos os itens foram respondidos (total parcial enganaria).
const completo = (r, ks) => respondidos(r, ks) === ks.length;
const fmt = v => typeof v === 'number' ? String(Math.round(v * 100) / 100) : (v == null || v === '' ? '—' : v);

// Cada função recebe as respostas e devolve { res: [{l, v}], falta, nota }.
// As chaves "qN" seguem a ordem das perguntas no formulário original do Google.
const CALC_Q = {
  fiqr(r) {
    // FIQR (Bennett et al., 2009): função (9 itens) ÷ 3 + impacto global (2 itens) + sintomas (10 itens) ÷ 2. Total de 0 a 100.
    const kf = seq(0, 8), ki = ['q10', 'q11'], ks = seq(13, 22), todos = [...kf, ...ki, ...ks], ok = completo(r, todos);
    const f = somaK(r, kf) / 3, i = somaK(r, ki), s = somaK(r, ks) / 2;
    return { res: [{ l: 'Função (0 a 30)', v: completo(r, kf) ? f : null }, { l: 'Impacto global (0 a 20)', v: completo(r, ki) ? i : null }, { l: 'Sintomas (0 a 50)', v: completo(r, ks) ? s : null }, { l: 'Total (0 a 100)', v: ok ? f + i + s : null }],
      falta: todos.length - respondidos(r, todos), nota: 'Quanto MAIOR, PIOR o impacto da fibromialgia. Todos os 21 itens são necessários para o total.' };
  },
  hsq() {
    return { res: [], nota: 'Triagem de enxaqueca e cefaleia tensional. O algoritmo de classificação está no artigo da versão brasileira (Lopes et al., 2022) e ainda não foi implementado: as respostas ficam registradas na planilha.' };
  },
  fsq(r) {
    // WPI = número de regiões dolorosas (0 a 19). SSS = fadiga + sono + cognição (0 a 9) + sintomas somáticos (0 a 3).
    const wpi = ['q1', 'q2', 'q3', 'q4', 'q5'].reduce((s, k) => s + (Array.isArray(r[k]) ? r[k].length : 0), 0);
    const somat = Object.values(r.q10 || {}).filter(v => Number(v) === 0).length;
    const sss = somaK(r, ['q7', 'q8', 'q9']) + somat;
    const tresMeses = r.q11 !== undefined && Number(r.q11) === 0;
    const ok = tresMeses && ((wpi >= 7 && sss >= 5) || (wpi >= 3 && wpi <= 6 && sss >= 9));
    return { res: [{ l: 'WPI (0 a 19)', v: wpi }, { l: 'SSS (0 a 12)', v: sss }, { l: 'Escala FS = WPI + SSS (0 a 31)', v: wpi + sss }, { l: 'Critérios de fibromialgia', v: ok ? 'Atendidos' : 'Não atendidos' }],
      falta: 3 - respondidos(r, ['q7', 'q8', 'q9']), nota: 'Critérios (Wolfe et al., 2011): (WPI ≥ 7 e SSS ≥ 5) ou (WPI de 3 a 6 e SSS ≥ 9), com sintomas por pelo menos 3 meses. Na escala FS, o corte de 13 ou mais separou melhor os grupos (sensibilidade 96,6% e especificidade 91,8%). Os critérios não servem para autodiagnóstico.' };
  },
  pdq(r) {
    const ks = seq(22, 36), t = somaK(r, ks), ok = completo(r, ks);
    return { res: [{ l: 'Total (0 a 150)', v: ok ? t : null }, { l: 'Percentual (%)', v: ok ? t / 150 * 100 : null }], falta: 15 - respondidos(r, ks),
      nota: 'Quanto MAIOR, MAIOR a incapacidade (Anagnostis et al., 2004). Todos os 15 itens são necessários.' };
  },
  psfs(r) {
    const ks = seq(12, 16), n = respondidos(r, ks);
    return { res: [{ l: 'Média das atividades', v: n ? somaK(r, ks) / n : null }], falta: 0, nota: 'Média das atividades preenchidas. Quanto maior, melhor a função.' };
  },
  ndi(r) {
    const ks = seq(3, 12), a = respondidos(r, ks), s = somaK(r, ks);
    const faixa = s <= 4 ? 'Sem incapacidade' : s <= 14 ? 'Incapacidade leve' : s <= 24 ? 'Incapacidade moderada' : s <= 34 ? 'Incapacidade grave' : 'Incapacidade completa';
    return { res: [{ l: 'Pontos (0 a 50)', v: s }, { l: 'Percentual (%)', v: a ? s / (5 * a) * 100 : null }, { l: 'Classificação', v: faixa }], falta: 10 - a };
  },
  ndi5(r) {
    // NDI-5 (Walton et al., 2013): 5 itens de 0 a 5; o item de DIRIGIR é reescalonado (0-1-2-3-3-4). Total de 0 a 24.
    const ks = seq(3, 7), motorista = [0, 1, 2, 3, 3, 4];
    const v = ks.map(k => { const x = valQ(r, k); return x === null ? null : (k === 'q6' ? motorista[x] : x); });
    const ok = v.every(x => x !== null), t = v.reduce((a, b) => a + (b ?? 0), 0);
    return { res: [{ l: 'Pontos (0 a 24)', v: ok ? t : null }, { l: 'Percentual do máximo (%)', v: ok ? t / 24 * 100 : null }], falta: v.filter(x => x === null).length,
      nota: 'Regra original do NDI-5 (o item "dirigir" vale no máximo 4 pontos, por isso o total vai até 24). Um estudo brasileiro cita total de 0 a 25 sem esse reescalonamento. Todos os 5 itens são necessários.' };
  },
  rmdq(r) {
    const n = Array.isArray(r.q3) ? r.q3.length : 0;
    return { res: [{ l: 'Pontos (0 a 24)', v: n }], falta: 0, nota: 'Cada frase marcada vale 1 ponto. Quanto maior, maior a incapacidade.' };
  },
  srs22(r) {
    // Ficha oficial SRS-22r: Função 5,9,12,15,18; Dor 1,2,8,11,17; Autoimagem 4,6,10,14,19; Saúde mental 3,7,13,16,20; Satisfação 21,22.
    // Itens de 1 a 5 (5 = melhor). Q5, Q7, Q8, Q15 e Q20 têm a primeira opção como a pior; nos demais a primeira é a melhor.
    // Domínio só é calculado com pelo menos 3 itens respondidos. Média = soma ÷ itens respondidos.
    const cresc = [5, 7, 8, 15, 20];
    const pt = n => { const v = valQ(r, 'q' + (n + 2)); return v === null ? null : (cresc.includes(n) ? v + 1 : 5 - v); };
    const media = (ns, minimo) => { const v = ns.map(pt).filter(x => x !== null); return v.length >= minimo ? v.reduce((a, b) => a + b, 0) / v.length : null; };
    const dom = [['Função', [5, 9, 12, 15, 18]], ['Dor', [1, 2, 8, 11, 17]], ['Autoimagem', [4, 6, 10, 14, 19]], ['Saúde mental', [3, 7, 13, 16, 20]], ['Satisfação', [21, 22]]];
    const sub = [...dom[0][1], ...dom[1][1], ...dom[2][1], ...dom[3][1]], tudo = [...sub, 21, 22];
    return { res: [...dom.map(([l, ns]) => ({ l: l + ' (1 a 5)', v: media(ns, ns.length === 2 ? 1 : 3) })), { l: 'Subtotal sem satisfação (1 a 5)', v: media(sub, 1) }, { l: 'Total dos 22 itens (1 a 5)', v: media(tudo, 1) }],
      falta: 22 - respondidos(r, seq(3, 24)), nota: '5 = melhor, 1 = pior. Domínios conforme a ficha oficial da SRS (Asher et al., 2003).' };
  },
  // ---- Joelho, quadril, tornozelo e pé ----
  koos(r) {
    // KOOS: cada domínio = 100 - (média dos itens × 100 / 4). 100 = sem problemas. Aceita até 2 itens em branco por domínio (Roos e Lohmander, 2003).
    const d = [['Sintomas', ['q9', 'q10', 'q11', 'q12', 'q13', 'q16', 'q17']], ['Dor', seq(19, 27)], ['Atividades diárias', seq(29, 45)], ['Esporte e lazer', ['q47', 'q47b', 'q48', 'q49', 'q50']], ['Qualidade de vida', seq(52, 55)]];
    return { res: d.map(([l, ks]) => ({ l: l + ' (0 a 100)', v: subescore(r, ks) })), falta: d.reduce((s, [, ks]) => s + ks.length - respondidos(r, ks), 0),
      nota: '100 = sem problemas (Roos e Lohmander, 2003). O item SP2 (Correr), que faltava no formulário da liga, foi restaurado, e o item S5 duplicado foi ignorado. O texto de pontuação do formulário (100 × escore ÷ máximo) usa regra invertida: aqui vale a regra oficial do KOOS.' };
  },
  faos(r) {
    // FAOS: mesma regra do KOOS (Roos et al., 2001).
    const d = [['Dor', ['q1', 'q3', 'q4', 'q4b', ...seq(5, 9)]], ['Sintomas', seq(11, 17)], ['Atividades diárias', seq(19, 35)], ['Esporte e recreação', seq(37, 41)], ['Qualidade de vida', seq(43, 46)]];
    return { res: d.map(([l, ks]) => ({ l: l + ' (0 a 100)', v: subescore(r, ks) })), falta: d.reduce((s, [, ks]) => s + ks.length - respondidos(r, ks), 0),
      nota: '100 = sem problemas (Roos et al., 2001). O item "Forçando o pé completamente para baixo" foi acrescentado para completar os 9 itens de dor do FAOS original (o formulário da liga tinha 8): conferir a redação com a versão brasileira oficial.' };
  },
  womac(r) {
    const dor = seq(22, 26), rig = ['q28', 'q29'], fun = seq(31, 47), todos = [...dor, ...rig, ...fun], ok = completo(r, todos), t = somaK(r, todos);
    return { res: [{ l: 'Dor (0 a 20)', v: completo(r, dor) ? somaK(r, dor) : null }, { l: 'Rigidez (0 a 8)', v: completo(r, rig) ? somaK(r, rig) : null }, { l: 'Função (0 a 68)', v: completo(r, fun) ? somaK(r, fun) : null }, { l: 'Total (0 a 96)', v: ok ? t : null }, { l: 'Total normalizado (%)', v: ok ? t / 96 * 100 : null }],
      falta: todos.length - respondidos(r, todos), nota: 'No WOMAC, quanto MAIOR a pontuação, PIOR o quadro. Todos os 24 itens são necessários.' };
  },
  womacsf(r) {
    const dor = seq(22, 26), fun = seq(28, 34), todos = [...dor, ...fun], ok = completo(r, todos), t = somaK(r, todos);
    return { res: [{ l: 'Dor (0 a 20)', v: completo(r, dor) ? somaK(r, dor) : null }, { l: 'Função (0 a 28)', v: completo(r, fun) ? somaK(r, fun) : null }, { l: 'Total (0 a 48)', v: ok ? t : null }, { l: 'Total normalizado (%)', v: ok ? t / 48 * 100 : null }],
      falta: todos.length - respondidos(r, todos), nota: 'Quanto MAIOR, PIOR o quadro. Função reduzida de 7 itens (Whitehouse et al., 2003). Todos os 12 itens são necessários.' };
  },
  lefs(r) {
    const ks = ['q4r0', 'q4r1', 'q4r2', 'q4r3', ...seq(6, 21)], t = somaK(r, ks), ok = completo(r, ks);
    return { res: [{ l: 'Total (0 a 80)', v: ok ? t : null }, { l: 'Percentual (%)', v: ok ? t / 80 * 100 : null }], falta: ks.length - respondidos(r, ks),
      nota: 'Quanto MAIOR, MELHOR a função. Mudanças de cerca de 9 pontos são consideradas clinicamente importantes (Binkley et al., 1999). Todos os 20 itens são necessários.' };
  },
  faam(r) {
    // Opções: índice 0 a 4 valem 4 a 0 pontos; índice 5 = N/A (fica de fora).
    const pts = ks => ks.map(k => valQ(r, k)).filter(v => v !== null && v <= 4).map(v => 4 - v);
    const pct = ks => { const p = pts(ks); return p.length ? p.reduce((a, b) => a + b, 0) / (4 * p.length) * 100 : null; };
    const adl = seq(0, 20), esp = seq(23, 30);
    return { res: [{ l: 'AVD (%)', v: pct(adl) }, { l: 'Esporte (%)', v: pct(esp) }], falta: 0,
      nota: 'Percentual da pontuação máxima, sem contar itens "N/A". Quanto MAIOR, MELHOR a função.' };
  },
  // ---- Joelho e quadril (formulários da liga já fechados) ----
  akps(r) {
    // AKPS (Kujala): soma dos pontos de cada opção, 0 a 100. 100 = sem sintomas (Kujala et al., 1993).
    const pt = k => ptsDe('akps', k, r), v = seq(1, 13).map(pt).filter(x => x !== null);
    return { res: [{ l: 'Total (0 a 100)', v: v.length === 13 ? v.reduce((a, b) => a + b, 0) : null }], falta: 13 - v.length,
      nota: 'Quanto MAIOR, MELHOR a função do joelho (100 = sem sintomas). Os pontos do formulário da liga foram corrigidos para a tabela original do AKPS.' };
  },
  visap(r) {
    // VISA-P: itens 1 a 6 (0 a 10) + item 7 + UMA das questões 8A, 8B ou 8C. Total 0 a 100.
    const n = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'], p8 = ['v8a', 'v8b', 'v8c'].map(k => ptsDe('visap', k, r)).filter(x => x !== null);
    const ok = respondidos(r, n) === 6 && valQ(r, 'v7') !== null && p8.length === 1;
    return { res: [{ l: 'Total (0 a 100)', v: ok ? somaK(r, n) + ptsDe('visap', 'v7', r) + p8[0] : null }],
      falta: (6 - respondidos(r, n)) + (valQ(r, 'v7') === null ? 1 : 0) + (p8.length === 1 ? 0 : 1),
      nota: p8.length > 1 ? 'Responda somente UMA das questões 8A, 8B ou 8C. Quanto MAIOR, MELHOR (100 = sem sintomas).' : 'Quanto MAIOR, MELHOR (100 = sem sintomas). Responda somente uma das questões 8A, 8B ou 8C (Visentini et al., 1998).' };
  },
  hoos(r) {
    // HOOS: cada domínio = 100 - (média × 25), 100 = sem problemas (Nilsdotter et al., 2003). Aceita até 2 itens em branco por domínio.
    const d = [['Sintomas', ['s1', 's2', 's3', 's4', 's5']], ['Dor', ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10']],
      ['Atividades diárias', Array.from({ length: 17 }, (_, i) => 'a' + (i + 1))], ['Esporte e lazer', ['sp1', 'sp2', 'sp3', 'sp4']], ['Qualidade de vida', ['q1', 'q2', 'q3', 'q4']]];
    return { res: d.map(([l, ks]) => ({ l: l + ' (0 a 100)', v: subescore(r, ks) })), falta: d.reduce((s, [, ks]) => s + ks.length - respondidos(r, ks), 0),
      nota: '100 = sem problemas. O texto de pontuação do formulário da liga usa a regra invertida e separa Rigidez de Sintomas. Aqui vale a regra oficial do HOOS (5 domínios).' };
  },
  // ---- Ombro, braço, punho e mão ----
  dash(r) {
    // DASH: [(soma das respostas ÷ nº de itens respondidos) - 1] × 25. Exige pelo menos 27 dos 30 itens (Hudak et al., 1996).
    const base = [...seq(2, 22), 'q23', 'q24', ...seq(26, 30), 'q31', 'q32'];
    const modScore = ks => { const n = respondidos(r, ks); return n === 4 ? ((ks.reduce((s, k) => s + valQ(r, k) + 1, 0) / 4) - 1) * 25 : null; };
    return { res: [{ l: 'DASH (0 a 100)', v: dashPont(r, base, 27) }, { l: 'Módulo esporte/música (0 a 100)', v: modScore(seq(35, 38)) }, { l: 'Módulo trabalho (0 a 100)', v: modScore(seq(41, 44)) }],
      falta: base.length - respondidos(r, base), nota: '0 = sem incapacidade; 100 = incapacidade máxima. Os módulos são opcionais e precisam dos 4 itens respondidos.' };
  },
  quickdash(r) {
    const ks = [...seq(2, 9), 'q11', 'q12', 'q13'];
    return { res: [{ l: 'QuickDASH (0 a 100)', v: dashPont(r, ks, 10) }], falta: ks.length - respondidos(r, ks),
      nota: '0 = sem incapacidade; 100 = incapacidade máxima. Exige pelo menos 10 dos 11 itens (Beaton et al., 2005).' };
  },
  spadi(r) {
    // SPADI: dor (5 itens) e incapacidade (8 itens), cada item de 0 a 10. Cada subescala vira % (se faltar item, divide pelo máximo possível das respondidas).
    // Total = média das duas subescalas (forma original). Algumas fontes usam (soma ÷ 130) × 100: a diferença é pequena.
    const dor = ['q13', ...seq(15, 18)], inc = seq(4, 11);
    const pc = ks => { const n = respondidos(r, ks); return n >= Math.ceil(ks.length / 2) ? somaK(r, ks) / (10 * n) * 100 : null; };
    const pd = pc(dor), pi = pc(inc);
    return { res: [{ l: 'Dor (%)', v: pd }, { l: 'Incapacidade (%)', v: pi }, { l: 'Total (%)', v: pd !== null && pi !== null ? (pd + pi) / 2 : null }],
      falta: 13 - respondidos(r, [...dor, ...inc]), nota: '0 = sem dor e sem incapacidade; 100 = pior (Roach et al., 1991). Com itens em branco, calcula-se pelo máximo possível dos itens respondidos (pelo menos metade de cada subescala).' };
  },
  prwe(r) {
    // PRWE: dor (5 itens) + função (10 itens ÷ 2) = 0 a 100. Maior = pior.
    const dor = seq(4, 8), fun = [...seq(10, 15), ...seq(17, 20)];
    const ok = respondidos(r, dor) === 5 && respondidos(r, fun) === 10;
    return { res: [{ l: 'Dor (0 a 50)', v: somaK(r, dor) }, { l: 'Função (0 a 50)', v: somaK(r, fun) / 2 }, { l: 'Total (0 a 100)', v: ok ? somaK(r, dor) + somaK(r, fun) / 2 : null }],
      falta: 15 - respondidos(r, [...dor, ...fun]), nota: 'Quanto MAIOR, PIOR (MacDermid et al., 1998).' };
  },
  oss(r) {
    // Oxford Shoulder Score (pontuação atual): cada item vale 4 (melhor) a 0 (pior). Total 0 a 48, maior = melhor.
    const ks = seq(3, 14), v = ks.map(k => valQ(r, k)).filter(x => x !== null).map(x => 4 - x);
    return { res: [{ l: 'Total (0 a 48)', v: v.length === 12 ? v.reduce((a, b) => a + b, 0) : null }], falta: 12 - v.length,
      nota: 'Quanto MAIOR, MELHOR a função. Todos os 12 itens precisam estar respondidos (Dawson et al., 1996).' };
  },
  boston(r) {
    // Boston CTS: média dos itens (1 = melhor, 5 = pior), separando sintomas (11 itens) e função (8 itens).
    const media = ks => { const v = ks.map(k => valQ(r, k)).filter(x => x !== null).map(x => x + 1); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
    const sss = seq(2, 12), fss = seq(14, 21);
    return { res: [{ l: 'Gravidade dos sintomas (1 a 5)', v: media(sss) }, { l: 'Estado funcional (1 a 5)', v: media(fss) }], falta: 19 - respondidos(r, [...sss, ...fss]),
      nota: '1 = melhor, 5 = pior (Levine et al., 1993; versão brasileira: Campos et al., 2003).' };
  },
  cochin(r) {
    const ks = [...seq(3, 10), 'q12', 'q13', 'q15', 'q16', 'q18', 'q19', ...seq(21, 24)];
    return { res: [{ l: 'Total (0 a 90)', v: completo(r, ks) ? somaK(r, ks) : null }], falta: ks.length - respondidos(r, ks), nota: 'Quanto MAIOR, PIOR a função da mão (Duruöz et al., 1996). Todos os 18 itens são necessários.' };
  },
  // Questionários só para registrar as respostas (a pontuação ainda não foi implementada)
  ikdc() { return { res: [], nota: 'Pontuação automática ainda não implementada. As respostas ficam registradas na planilha.' }; },
  ihot33() { return { res: [], nota: 'Pontuação automática ainda não implementada. As respostas ficam registradas na planilha.' }; },
  idfai() { return { res: [], nota: 'Pontuação automática ainda não implementada. Na literatura, o escore de 10,3 ou mais identificou instabilidade funcional de tornozelo (Simon et al., 2012). As respostas ficam registradas na planilha.' }; },
  visaa() { return { res: [], nota: 'Pontuação automática ainda não implementada. As respostas ficam registradas na planilha.' }; },
  odi(r) {
    const ks = seq(3, 12), a = respondidos(r, ks), s = somaK(r, ks), p = a ? s / (5 * a) * 100 : null;
    const faixa = p === null ? '' : p <= 20 ? 'Incapacidade mínima' : p <= 40 ? 'Incapacidade moderada' : p <= 60 ? 'Incapacidade grave' : p <= 80 ? 'Incapacidade muito grave (aleijado)' : 'Acamado ou exagero dos sintomas';
    return { res: [{ l: 'Pontos (0 a 50)', v: s }, { l: 'Percentual (%)', v: p }, { l: 'Classificação', v: faixa }], falta: 10 - a };
  }
};
const calcular = (q, r) => (CALC_Q[q.id] || (() => ({ res: [] })))(r);
const resumoTexto = res => res.map(x => `${x.l}: ${fmt(x.v)}`).join('; ');

// ---------- Planilha (CSV) ----------
function csvLinha(arr) {
  return arr.map(x => {
    let s = typeof x === 'number' ? String(Math.round(x * 100) / 100).replace('.', ',') : String(x ?? '');
    return /[;"\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }).join(';');
}
function baixarCSV(nome, linhas) {
  const blob = new Blob(['﻿' + linhas.map(csvLinha).join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = nome; a.click();
}
const respostaTexto = (c, v) => {
  if (v === undefined || v === null || v === '') return '';
  if (c.tipo === 'escolha') return c.o[v] ?? '';
  if (c.tipo === 'multi') return (v || []).map(i => c.o[i]).join(' | ');
  if (c.tipo === 'grade') return Object.keys(v).map(i => `${c.linhas[i]}: ${c.o[v[i]]}`).join(' | ');
  return v;
};
const dataBR = iso => { const d = new Date(iso); return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); };

function exportarQuestionario(q) {
  const itens = q.campos.filter(c => c.tipo !== 'cab');
  const rotulos = (CALC_Q[q.id]({}).res || []).map(x => x.l);
  const cab = ['Data', 'Código', 'Idade', 'Sexo', ...rotulos, ...itens.map((c, i) => `${i + 1}. ${c.t.slice(0, 70)}`)];
  const linhas = [cab, ...carregarQ().filter(x => x.q === q.id).map(x => [dataBR(x.data), x.codigo, x.idade, x.sexo,
    ...rotulos.map(l => (x.res.find(y => y.l === l) || {}).v ?? ''), ...itens.map(c => respostaTexto(c, x.r[c.k]))])];
  baixarCSV(`Questionario_${q.sigla.replace(/[^\w]+/g, '_')}.csv`, linhas);
}
function exportarResumoGeral() {
  const linhas = [['Data', 'Código', 'Idade', 'Sexo', 'Questionário', 'Resultado'],
    ...carregarQ().map(x => [dataBR(x.data), x.codigo, x.idade, x.sexo, (qPorId(x.q) || {}).sigla || x.q, resumoTexto(x.res)])];
  baixarCSV('Questionarios_resumo.csv', linhas);
}

// ---------- WhatsApp ----------
function abrirWhatsApp(texto, telefone) {
  let d = String(telefone || '').replace(/\D/g, '');
  if (d && (d.length === 10 || d.length === 11)) d = '55' + d; // DDD + número: acrescenta o Brasil
  window.open(`https://wa.me/${d}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
}

// ---------- Telas ----------
function telaQuestionarios() {
  // Temas na ordem em que aparecem na tela. Temas novos entram no fim.
  const ORDEM = ['Dor crônica', 'Funcional (geral)', 'Membro inferior (geral)', 'Joelho', 'Quadril', 'Tornozelo e pé', 'Ombro e membro superior', 'Punho e mão', 'Coluna cervical', 'Coluna lombar', 'Coluna (escoliose)', 'Cabeça e pescoço'];
  const grupos = {};
  QUESTIONARIOS.forEach(q => (grupos[q.area] = grupos[q.area] || []).push(q));
  const areas = Object.keys(grupos).sort((x, y) => (ORDEM.indexOf(x) + 1 || 99) - (ORDEM.indexOf(y) + 1 || 99));
  const total = carregarQ().length;
  return `<h1>Questionários</h1>
    <p class="muted">Preencha no app, com pontuação automática, ou envie o link do formulário pelo WhatsApp.</p>
    ${areas.map(a => `<h2>${esc(a)}</h2>${grupos[a].map(q => `<a class="card link" href="#/questionarios/${q.id}"><strong>${esc(q.sigla)}</strong><span>${esc(q.nome)}</span></a>`).join('')}`).join('')}
    <h2>Planilha</h2><div class="card"><p class="muted">${total} preenchimento(s) salvo(s) neste aparelho.</p>
      <button id="exp-geral" ${total ? '' : 'disabled'}>Exportar resumo de todos (CSV)</button></div>`;
}
function ligarQuestionarios() {
  document.getElementById('exp-geral').onclick = exportarResumoGeral;
}

function telaQuestionario(id) {
  const q = qPorId(id); if (!q) return naoEncontrado();
  const salvos = carregarQ().filter(x => x.q === id).reverse();
  const n = q.campos.filter(c => c.tipo !== 'cab').length;
  return `${voltar('#/questionarios', 'Questionários')}<h1>${esc(q.sigla)}</h1><p>${esc(q.nome)}</p>
    <p class="meta"><span class="tag">${esc(q.area)}</span><span class="tag">${n} perguntas</span><span class="tag">cerca de ${Math.max(1, Math.round(n * 0.25))} min</span></p>
    ${q.intro ? `<p class="muted">${esc(q.intro)}</p>` : ''}
    ${q.licenca ? `<p class="aviso"><b>Licença:</b> ${esc(q.licenca)}</p>` : ''}
    <div class="card"><strong>Preencher aqui no app</strong>
      <p class="muted">Funciona sem internet e calcula a pontuação.</p>
      <a class="botao" href="#/questionarios/${q.id}/preencher">Começar</a></div>
    ${q.url ? `<div class="card"><strong>Enviar o formulário pelo WhatsApp</strong>
      <p class="muted">O paciente responde no formulário do Google (precisa de internet). O número não é salvo no app.</p>
      <label>WhatsApp do paciente (opcional, com DDD)<input id="zap-num" type="text" inputmode="tel" placeholder="(55) 99999-9999"></label>
      <button id="zap">Enviar pelo WhatsApp</button><button class="sec" id="copiar">Copiar link</button>
      <p class="muted" id="zap-msg"></p></div>` : `<div class="card"><strong>Formulário do Google fechado</strong><p class="muted">Este questionário só pode ser preenchido aqui no app.</p></div>`}
    ${q.ref ? `<h3>Referências</h3>${listaRefs([].concat(q.ref))}` : '<p class="muted">Referência original: a confirmar.</p>'}
    <h2>Preenchimentos salvos (${salvos.length})</h2>
    ${salvos.map(x => `<div class="card"><div class="linha item"><span><b>${esc(x.codigo)}</b> · ${dataBR(x.data)}</span>
      <span><a class="peq-link" href="#/questionarios/${q.id}/resultado/${x.id}">ver</a> <button class="peq sec" data-del="${x.id}">apagar</button></span></div>
      <p class="muted">${esc(resumoTexto(x.res))}</p></div>`).join('') || '<p class="muted">Nada salvo ainda.</p>'}
    ${salvos.length ? '<button id="exp-q">Exportar este questionário (CSV)</button>' : ''}`;
}
function ligarQuestionario(id) {
  const q = qPorId(id); if (!q) return;
  if (q.url) {
    const msg = `Olá! Segue o questionário ${q.nome} (${q.sigla}) da LAPRE. Por favor, responda pelo link: ${q.url}`;
    document.getElementById('zap').onclick = () => abrirWhatsApp(msg, document.getElementById('zap-num').value);
    document.getElementById('copiar').onclick = async () => {
      try { await navigator.clipboard.writeText(q.url); document.getElementById('zap-msg').textContent = 'Link copiado.'; }
      catch (e) { prompt('Copie o link:', q.url); }
    };
  }
  document.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    if (!confirm('Apagar este preenchimento? Isso não pode ser desfeito.')) return;
    salvarQ(carregarQ().filter(x => x.id !== b.dataset.del)); render();
  });
  const e = document.getElementById('exp-q'); if (e) e.onclick = () => exportarQuestionario(q);
}

// ---------- Preenchimento ----------
// Perguntas "obrigatórias" para o progresso: escala, escolha e grade. Múltipla escolha, texto e campos marcados com opc: true são opcionais.
const obrigatoria = c => ['escala', 'escolha', 'grade'].includes(c.tipo) && !c.opc;
const respondida = (c, v) => c.tipo === 'grade' ? (v && Object.keys(v).length === c.linhas.length) : (v !== undefined && v !== null && v !== '');

function campoHTML(c) {
  const k = c.k;
  if (c.tipo === 'cab') return `<div class="cab">${c.t ? `<h3>${esc(c.t)}</h3>` : ''}${c.d ? `<p class="muted">${esc(c.d)}</p>` : ''}</div>`;
  let corpo = '';
  if (c.tipo === 'escala') {
    const vs = Array.from({ length: c.max - c.min + 1 }, (_, i) => c.min + i);
    corpo = `<div class="escala">${vs.map(v => `<label class="pill"><input type="radio" name="${k}" value="${v}"><span>${v}</span></label>`).join('')}</div>
      ${c.lab && c.lab.length ? `<div class="labs"><span>${esc(c.lab[0])}</span><span>${esc(c.lab[1] || '')}</span></div>` : ''}`;
  } else if (c.tipo === 'escolha') {
    corpo = c.o.map((o, i) => `<label class="opcao"><input type="radio" name="${k}" value="${i}"> <span>${esc(o)}</span></label>`).join('');
  } else if (c.tipo === 'multi') {
    corpo = `<p class="muted peq-txt">Pode marcar mais de uma.</p>` + c.o.map((o, i) => `<label class="opcao"><input type="checkbox" name="${k}" value="${i}"> <span>${esc(o)}</span></label>`).join('');
  } else if (c.tipo === 'grade') {
    corpo = c.linhas.map((l, r) => `<div class="grade-linha"><span>${esc(l)}</span>${c.o.map((o, i) => `<label class="opcao"><input type="radio" name="${k}_${r}" value="${i}"> ${esc(o)}</label>`).join('')}</div>`).join('');
  } else {
    corpo = `<input type="text" name="${k}">`;
  }
  return `<div class="pergunta" id="p-${k}" data-k="${k}"><p><b>${esc(c.t)}</b></p>${corpo}</div>`;
}

function telaPreencher(id) {
  const q = qPorId(id); if (!q) return naoEncontrado();
  const total = q.campos.filter(obrigatoria).length;
  return `${voltar('#/questionarios/' + id, q.sigla)}<h1>${esc(q.sigla)}</h1><p class="muted">${esc(q.nome)}</p>
    ${total ? `<div class="progresso" id="progresso"><div class="trilho"><i id="prog-barra"></i></div><span id="prog-txt">0 de ${total} respondidas</span></div>` : ''}
    ${q.intro ? `<div class="card"><strong>Instruções</strong><p>${esc(q.intro)}</p></div>` : ''}
    <div class="card"><strong>Identificação</strong>
      <p class="aviso">Use um código ou as iniciais do paciente. Não digite o nome completo.</p>
      <label>Código do paciente<input type="text" id="q-codigo"></label>
      <div class="linha"><label style="flex:1">Idade<input type="text" inputmode="numeric" id="q-idade"></label>
      <label style="flex:1">Sexo<select id="q-sexo"><option value="">—</option><option>F</option><option>M</option></select></label></div></div>
    <form id="q-form">${q.campos.map(campoHTML).join('')}</form>
    <button id="q-salvar">Calcular e salvar</button><button class="sec" id="q-limpar">Limpar tudo</button>
    <p class="muted" id="q-rasc"></p>`;
}

function coletar(q, form) {
  const r = {};
  q.campos.forEach(c => {
    if (c.tipo === 'cab') return;
    const k = c.k;
    if (c.tipo === 'escala' || c.tipo === 'escolha') {
      const m = form.querySelector(`[name="${k}"]:checked`); if (m) r[k] = Number(m.value);
    } else if (c.tipo === 'multi') {
      const m = [...form.querySelectorAll(`[name="${k}"]:checked`)].map(x => Number(x.value));
      if (m.length) r[k] = m;
    } else if (c.tipo === 'grade') {
      const g = {};
      c.linhas.forEach((_, i) => { const m = form.querySelector(`[name="${k}_${i}"]:checked`); if (m) g[i] = Number(m.value); });
      if (Object.keys(g).length) r[k] = g;
    } else {
      const v = form.querySelector(`[name="${k}"]`).value.trim(); if (v) r[k] = v;
    }
  });
  return r;
}

// Devolve as respostas para a tela (usado para restaurar o rascunho)
function aplicar(q, form, r) {
  q.campos.forEach(c => {
    const v = r[c.k]; if (c.tipo === 'cab' || v === undefined) return;
    if (c.tipo === 'escala' || c.tipo === 'escolha') { const e = form.querySelector(`[name="${c.k}"][value="${v}"]`); if (e) e.checked = true; }
    else if (c.tipo === 'multi') v.forEach(i => { const e = form.querySelector(`[name="${c.k}"][value="${i}"]`); if (e) e.checked = true; });
    else if (c.tipo === 'grade') Object.keys(v).forEach(i => { const e = form.querySelector(`[name="${c.k}_${i}"][value="${v[i]}"]`); if (e) e.checked = true; });
    else form.querySelector(`[name="${c.k}"]`).value = v;
  });
}

function ligarPreencher(id) {
  if (!qPorId(id)) return;
  const q = qPorId(id), form = document.getElementById('q-form'), chaveRasc = 'lapre.rascunho.' + id;
  const obrig = q.campos.filter(obrigatoria);
  const atualizar = () => {
    const r = coletar(q, form), feitas = obrig.filter(c => respondida(c, r[c.k])).length;
    const b = document.getElementById('prog-barra');
    if (b) { b.style.width = (obrig.length ? feitas / obrig.length * 100 : 0) + '%'; document.getElementById('prog-txt').textContent = `${feitas} de ${obrig.length} respondidas`; }
    form.querySelectorAll('.pergunta.faltando').forEach(p => { if (respondida(q.campos.find(c => c.k === p.dataset.k), r[p.dataset.k])) p.classList.remove('faltando'); });
  };
  const guardar = () => {
    try {
      localStorage.setItem(chaveRasc, JSON.stringify({ codigo: document.getElementById('q-codigo').value, idade: document.getElementById('q-idade').value, sexo: document.getElementById('q-sexo').value, r: coletar(q, form) }));
      document.getElementById('q-rasc').textContent = 'Rascunho salvo automaticamente neste aparelho.';
    } catch (e) { /* sem espaço ou bloqueado: segue sem rascunho */ }
  };
  // restaura rascunho, se houver
  try {
    const rasc = JSON.parse(localStorage.getItem(chaveRasc) || 'null');
    if (rasc) { document.getElementById('q-codigo').value = rasc.codigo || ''; document.getElementById('q-idade').value = rasc.idade || ''; document.getElementById('q-sexo').value = rasc.sexo || ''; aplicar(q, form, rasc.r || {}); document.getElementById('q-rasc').textContent = 'Rascunho anterior restaurado.'; }
  } catch (e) { /* ignora rascunho inválido */ }
  atualizar();
  ['q-form', 'q-codigo', 'q-idade', 'q-sexo'].forEach(i => ['input', 'change'].forEach(ev => document.getElementById(i).addEventListener(ev, () => { atualizar(); guardar(); })));

  document.getElementById('q-limpar').onclick = () => {
    if (!confirm('Limpar todas as respostas desta tela?')) return;
    localStorage.removeItem(chaveRasc); render();
  };
  document.getElementById('q-salvar').onclick = () => {
    const codigo = document.getElementById('q-codigo').value.trim();
    if (!codigo) { document.getElementById('q-codigo').focus(); return alert('Informe o código do paciente.'); }
    const r = coletar(q, form);
    const faltam = obrig.filter(c => !respondida(c, r[c.k]));
    faltam.forEach(c => document.getElementById('p-' + c.k).classList.add('faltando'));
    const calc = calcular(q, r);
    if (faltam.length) {
      document.getElementById('p-' + faltam[0].k).scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (!confirm(`Há ${faltam.length} pergunta(s) sem resposta (marcadas em vermelho). A pontuação pode ficar parcial ou em branco. Salvar mesmo assim?`)) return;
    }
    const reg = { id: novoId(), q: id, data: new Date().toISOString(), codigo, idade: document.getElementById('q-idade').value.trim(),
      sexo: document.getElementById('q-sexo').value, r, res: calc.res, falta: calc.falta || 0 };
    const lista = carregarQ(); lista.push(reg); salvarQ(lista);
    localStorage.removeItem(chaveRasc);
    location.hash = `#/questionarios/${id}/resultado/${reg.id}`;
  };
}

// ---------- Resultado ----------
// Extrai o intervalo do rótulo, por exemplo "Total (0 a 100)" ou "Percentual (%)", para desenhar a barra
function intervalo(rotulo) {
  const m = rotulo.match(/\((-?\d+(?:[.,]\d+)?)\s*a\s*(-?\d+(?:[.,]\d+)?)\)/);
  if (m) return [parseFloat(m[1].replace(',', '.')), parseFloat(m[2].replace(',', '.'))];
  return rotulo.includes('(%)') ? [0, 100] : null;
}
function linhaResultado(x) {
  const iv = intervalo(x.l), num = typeof x.v === 'number';
  const pct = iv && num ? Math.max(0, Math.min(100, (x.v - iv[0]) / (iv[1] - iv[0]) * 100)) : null;
  return `<div class="res-linha"><div class="linha item"><span>${esc(x.l)}</span><b>${esc(fmt(x.v))}</b></div>${pct !== null ? `<div class="barra"><i style="width:${pct}%"></i></div>` : ''}</div>`;
}

function telaResultado(id, regId) {
  const q = qPorId(id); const reg = carregarQ().find(x => x.id === regId);
  if (!q || !reg) return naoEncontrado();
  const nota = (CALC_Q[q.id](reg.r) || {}).nota;
  const itens = q.campos.filter(c => c.tipo !== 'cab');
  return `${voltar('#/questionarios/' + id, q.sigla)}<h1>Resultado: ${esc(q.sigla)}</h1>
    <p class="muted">Paciente ${esc(reg.codigo)}${reg.idade ? ' · ' + esc(reg.idade) + ' anos' : ''}${reg.sexo ? ' · ' + esc(reg.sexo) : ''} · ${dataBR(reg.data)}</p>
    <div class="card">${reg.res.length ? reg.res.map(linhaResultado).join('') : '<p>Sem pontuação para este questionário.</p>'}
      ${nota ? `<p class="muted">${esc(nota)}</p>` : ''}
      ${reg.falta ? `<p class="aviso">${reg.falta} item(ns) sem resposta: pontuação parcial ou em branco.</p>` : ''}</div>
    <details class="card"><summary>Ver as respostas dadas</summary>${itens.map((c, i) => `<p class="resp"><span class="muted">${esc(c.t)}</span><br><b>${esc(String(respostaTexto(c, reg.r[c.k]) || '—'))}</b></p>`).join('')}</details>
    <button id="zap-res">Enviar resultado pelo WhatsApp</button>
    <a class="botao sec" href="#/questionarios/${id}/preencher">Novo preenchimento</a>
    <button class="sec" id="exp-res">Exportar CSV deste questionário</button>`;
}
function ligarResultado(id, regId) {
  const q = qPorId(id); const reg = carregarQ().find(x => x.id === regId);
  if (!q || !reg) return;
  document.getElementById('zap-res').onclick = () => abrirWhatsApp(`Resultado ${q.sigla} (paciente ${reg.codigo}) - ${resumoTexto(reg.res) || 'sem pontuação'}`, '');
  document.getElementById('exp-res').onclick = () => exportarQuestionario(q);
}
