// Telas do app. Navegação por "#/rota" (sem recarregar a página).

const app = document.getElementById('app');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lista = (arr, tag = 'ul') => `<${tag}>${arr.map(x => `<li>${esc(x)}</li>`).join('')}</${tag}>`;
const tags = arr => arr.map(t => `<span class="tag">${esc(t)}</span>`).join('');
const voltar = (href, txt = 'Voltar') => `<a class="voltar" href="${href}">← ${txt}</a>`;

// ---------- Telas simples (conteúdo) ----------
function telaInicio() {
  const cards = [
    ['#/testes', 'Testes de avaliação', 'Como aplicar e interpretar'],
    ['#/exercicios', 'Exercícios', 'Progressões e regressões'],
    ['#/prevencao', 'Prevenção', 'FIFA 11+ e outros'],
    ['#/protocolos', 'Protocolos', 'Reabilitação por fases'],
    ['#/anatomia', 'Anatomia', 'Quadril, joelho, tornozelo e pé'],
    ['#/calculadoras', 'Calculadoras', 'LSI, Y Balance'],
    ['#/casos', 'Casos clínicos', 'Treine o raciocínio'],
    ['#/questionarios', 'Questionários', 'Escalas e envio por WhatsApp'],
    ['#/pre', 'Pré-temporada', 'Registro de testes e planilha'],
    ['#/referencias', 'Referências', 'Artigos e fontes']
  ];
  return `<section class="hero">
      <div class="hero-texto"><span class="selo">UFSM</span><h1>Avaliar, prevenir e reabilitar.</h1>
        <p>Liga de Avaliação, Prevenção e Reabilitação Esportiva. Funciona sem internet depois de aberto uma vez.</p></div>
      <div class="hero-logo"><img src="imagens/logo-marca.svg" alt="Logo da LAPRE"><b>LAPRE</b></div>
    </section>
    <div class="grade">${cards.map((c, i) => `<a class="card link" href="${c[0]}"><span class="num">${String(i + 1).padStart(2, '0')}</span><strong>${c[1]}</strong><span>${c[2]}</span></a>`).join('')}</div>
    <p class="aviso">Conteúdo educacional em construção. Não substitui o julgamento clínico.</p>`;
}

function telaTestes() {
  const regioes = ['Membro inferior', 'Membro superior', 'Coluna', 'Geral'];
  return `<h1>Testes de avaliação</h1>
    <input class="busca" id="busca" placeholder="Buscar teste, região ou tag...">
    <div id="itens">${regioes.map(r => {
      const lista = TESTES.filter(t => t.regiao === r);
      return `<section class="grupo"><h2>${esc(r)} <small>(${lista.length})</small></h2>
        ${lista.map(t => `<a class="card link" href="#/testes/${t.id}" data-busca="${esc((t.nome + t.regiao + t.tags.join(' ')).toLowerCase())}">
          <strong>${esc(t.nome)}</strong><div>${tags(t.tags)}</div></a>`).join('')}</section>`;
    }).join('')}</div>`;
}

function telaTeste(id) {
  const t = TESTES.find(x => x.id === id);
  if (!t) return naoEncontrado();
  const fonte = t.fonte === 'liga' ? 'Fonte: documento da liga (revisar com o orientador)' : 'Fonte: literatura (conferir as referências)';
  return `${voltar('#/testes', 'Testes')}<h1>${esc(t.nome)}</h1><div><span class="tag fonte">${esc(t.regiao)}</span>${tags(t.tags)}</div><p class="muted">${fonte}</p>
    <h2>Objetivo</h2><p>${esc(t.objetivo)}</p>
    <h2>Como aplicar</h2>${lista(t.como, 'ol')}
    <h2>O que observar</h2>${lista(t.observar)}
    <h2>Interpretação</h2>${lista(t.interpretacao)}
    <h2>Erros comuns</h2>${lista(t.erros)}
    <h2>Referências</h2>${lista(t.refs)}
    <p class="aviso">Confirme valores de corte com o orientador antes de usar clinicamente.</p>`;
}

function telaExercicios() {
  return `<h1>Exercícios</h1>
    <input class="busca" id="busca" placeholder="Buscar exercício ou tag...">
    <div id="itens">${EXERCICIOS.map(e => `<div class="card" data-busca="${esc((e.nome + e.tags.join(' ')).toLowerCase())}">
      <strong>${esc(e.nome)}</strong><div>${tags(e.tags)}</div><p>${esc(e.objetivo)}</p>
      <details><summary>Como fazer</summary>${lista(e.como, 'ol')}
        <p><b>Progressão:</b> ${esc(e.progressao)}</p><p><b>Regressão:</b> ${esc(e.regressao)}</p>${e.nota ? `<p><b>Evidência:</b> ${esc(e.nota)}</p>` : ''}${e.refs && e.refs.length ? `<details><summary>Referências (${e.refs.length})</summary>${listaRefs(e.refs)}</details>` : ''}</details></div>`).join('')}</div>`;
}

function telaPrevencao() {
  const exercicio = it => typeof it === 'string' ? `<li>${esc(it)}</li>` : `<details class="exerc"><summary>${esc(it.nome)}${it.dose ? ` <span class="muted">(${esc(it.dose)})</span>` : ''}</summary>
      ${it.oque ? `<p><b>Para que serve:</b> ${esc(it.oque)}</p>` : ''}
      ${it.como ? `<h4>Como fazer</h4>${lista(it.como, 'ol')}` : ''}
      ${it.niveis ? `<h4>Níveis</h4>${lista(it.niveis)}` : ''}</details>`;
  return `<h1>Prevenção</h1><p class="muted">Abra cada exercício para ver o que ele treina, como fazer e os níveis.</p>
    ${PREVENCAO.map(p => `<div class="card"><strong>${esc(p.nome)}</strong><p>${esc(p.resumo)}</p>
      ${p.quando ? `<p><b>Quando fazer:</b> ${esc(p.quando)}</p>` : ''}${p.material ? `<p><b>Material:</b> ${esc(p.material)}</p>` : ''}
      ${p.partes.map((pt, i) => `<h3>${esc(pt.nome)}</h3><div class="exercs">${pt.itens.map(exercicio).join('')}</div>`).join('')}
      ${p.cuidados ? `<details><summary>Cuidados</summary>${lista(p.cuidados)}</details>` : ''}
      <details><summary>O que a literatura mostra</summary>${Array.isArray(p.evidencia) ? lista(p.evidencia) : `<p>${esc(p.evidencia)}</p>`}</details>
      <details><summary>Referências (${p.refs.length})</summary>${listaRefs(p.refs)}</details></div>`).join('')}`;
}

// Transforma "doi:10.xxxx" no fim da referência em link clicável
const refComLink = r => {
  const m = r.match(/^(.*?)\s*doi:(10\.\S+)$/);
  return m ? `${esc(m[1])} <a href="https://doi.org/${esc(m[2])}" target="_blank" rel="noopener">doi:${esc(m[2])}</a>` : esc(r);
};
const listaRefs = arr => `<ul class="refs">${arr.map(r => `<li>${refComLink(r)}</li>`).join('')}</ul>`;

function telaProtocolos() {
  return `<h1>Protocolos</h1>${PROTOCOLOS.map(p => `<div class="card"><strong>${esc(p.nome)}</strong>
    <div><span class="tag fonte">${p.fonte === 'liga' ? 'Protocolo da liga' : p.fonte === 'literatura' ? 'Guideline e literatura' : 'Exemplo'}</span></div>
    <p class="aviso">${esc(p.aviso)}</p>
    ${p.resumo ? `<p>${esc(p.resumo)}</p>` : ''}
    ${p.avaliacao ? `<details><summary>Avaliação inicial</summary>${lista(p.avaliacao)}</details>` : ''}
    ${p.fases.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.nome)}</summary>
      ${f.objetivos ? `<h3>Objetivos</h3>${lista(f.objetivos)}` : ''}${f.conteudo ? `<h3>Conduta</h3>${lista(f.conteudo)}` : ''}${f.criterios ? `<h3>${esc(f.rotuloCriterios || 'Critérios para progredir')}</h3>${lista(f.criterios)}` : ''}</details>`).join('')}
    ${p.evidencia ? `<details><summary>O que a literatura mostra</summary>${lista(p.evidencia)}</details>` : ''}
    ${p.refs ? `<details><summary>Referências (${p.refs.length})</summary>${listaRefs(p.refs)}</details>` : ''}</div>`).join('')}`;
}

function telaAnatomia() {
  return `<h1>Anatomia e biomecânica</h1><p class="muted">Resumos de aula da liga, com os pontos a confirmar marcados.</p>
    ${ANATOMIA.map(a => `<div class="card"><strong>${esc(a.nome)}</strong>
      <div><span class="tag fonte">${a.fonte === 'liga' ? 'Resumo da liga' : 'Literatura (sem resumo da liga)'}</span></div>
      <p class="aviso">${esc(a.aviso)}</p><p>${esc(a.resumo)}</p>
      ${a.secoes.map((s, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(s.titulo)}</summary>${lista(s.itens)}</details>`).join('')}
      ${a.clinica ? `<details><summary>Na prática clínica</summary>${lista(a.clinica)}</details>` : ''}
      ${a.confirmar ? `<details><summary>Confirmar antes de usar</summary>${lista(a.confirmar)}</details>` : ''}
      ${a.refs ? `<details><summary>Referências (${a.refs.length})</summary>${listaRefs(a.refs)}</details>` : ''}</div>`).join('')}`;
}

function telaCasos() {
  return `<h1>Casos clínicos</h1><p class="muted">Pense na resposta antes de abrir.</p>
    ${CASOS.map(c => `<div class="card"><strong>${esc(c.nome)}</strong><p>${esc(c.historia)}</p>
      ${c.perguntas.map(p => `<details><summary>${esc(p.q)}</summary><p>${esc(p.r)}</p></details>`).join('')}
      ${c.refs ? `<details><summary>Referências (${c.refs.length})</summary>${listaRefs(c.refs)}</details>` : ''}</div>`).join('')}`;
}

function telaReferencias() {
  const todas = [...TESTES.flatMap(t => t.refs), ...PREVENCAO.flatMap(p => p.refs), ...PROTOCOLOS.flatMap(p => p.refs || []), ...ANATOMIA.flatMap(a => a.refs || []), ...CASOS.flatMap(c => c.refs || []), ...EXERCICIOS.flatMap(e => e.refs || [])];
  const doiDe = r => (r.match(/10\.\d{4,}\/\S+/) || [''])[0].toLowerCase().replace(/[.,;]+$/, '');
  const vistas = new Set();
  const unicas = todas.filter(r => { const k = doiDe(r) || r; if (vistas.has(k)) return false; vistas.add(k); return true; });
  return `<h1>Referências</h1>${listaRefs(unicas)}<p class="aviso">Confira cada referência antes de citar em trabalhos.</p>`;
}

// ---------- Calculadoras ----------
function telaCalculadoras() {
  return `<h1>Calculadoras</h1>
    <div class="card"><strong>Simetria dos membros (LSI)</strong>
      <p class="muted">Membro envolvido ÷ não envolvido × 100</p>
      <label>Membro envolvido<input type="text" inputmode="decimal" id="lsi-a"></label>
      <label>Membro não envolvido<input type="text" inputmode="decimal" id="lsi-b"></label>
      <div class="resultado" id="lsi-r">—</div></div>
    <div class="card"><strong>Y Balance: escore composto</strong>
      <p class="muted">(ANT + PM + PL) ÷ (3 × comprimento do membro) × 100</p>
      <label>Comprimento do membro (cm)<input type="text" inputmode="decimal" id="y-c"></label>
      <label>Anterior (cm)<input type="text" inputmode="decimal" id="y-a"></label>
      <label>Póstero-medial (cm)<input type="text" inputmode="decimal" id="y-m"></label>
      <label>Póstero-lateral (cm)<input type="text" inputmode="decimal" id="y-l"></label>
      <div class="resultado" id="y-r">—</div></div>`;
}

function ligarCalculadoras() {
  const $ = id => document.getElementById(id);
  const lsi = () => {
    const a = num($('lsi-a').value), b = num($('lsi-b').value);
    if (!a || !b) { $('lsi-r').textContent = '—'; return; }
    const v = a / b * 100;
    $('lsi-r').innerHTML = `LSI: <b>${f1(v)}%</b> ${v >= 90 ? '<span class="ok">≥ 90%</span>' : '<span class="alerta">abaixo de 90%</span>'}`;
  };
  const y = () => {
    const c = num($('y-c').value), a = num($('y-a').value), m = num($('y-m').value), l = num($('y-l').value);
    if (!c || !a || !m || !l) { $('y-r').textContent = '—'; return; }
    $('y-r').innerHTML = `Composto: <b>${f1((a + m + l) / (3 * c) * 100)}%</b>`;
  };
  ['lsi-a', 'lsi-b'].forEach(i => $(i).addEventListener('input', lsi));
  ['y-c', 'y-a', 'y-m', 'y-l'].forEach(i => $(i).addEventListener('input', y));
}

// ---------- Pré-temporada ----------
function telaPre() {
  const avs = carregarAvaliacoes();
  return `<h1>Pré-temporada e reavaliações</h1>
    <p class="muted">Os dados ficam só neste aparelho. Exporte para planilha ao terminar.</p>
    <div class="card"><strong>Nova avaliação</strong>
      <label>Nome (ex.: Futsal Feminino, pré 2026)<input id="av-nome"></label>
      <button id="av-criar">Criar</button></div>
    ${avs.map(a => `<a class="card link" href="#/pre/${a.id}"><strong>${esc(a.nome)}</strong>
      <span>${a.atletas.length} atleta(s) · ${a.testes.length} teste(s)</span></a>`).join('') || '<p class="muted">Nenhuma avaliação ainda.</p>'}`;
}

function ligarPre() {
  document.getElementById('av-criar').onclick = () => {
    const nome = document.getElementById('av-nome').value.trim();
    if (!nome) return alert('Dê um nome para a avaliação.');
    const avs = carregarAvaliacoes();
    const av = { id: novoId(), nome, testes: ['single_hop', 'ybt'], atletas: [] };
    avs.push(av); salvarAvaliacoes(avs);
    location.hash = '#/pre/' + av.id;
  };
}

function acharAv(id) {
  const avs = carregarAvaliacoes();
  return { avs, av: avs.find(a => a.id === id) };
}

function telaAvaliacao(id) {
  const { av } = acharAv(id);
  if (!av) return naoEncontrado();
  return `${voltar('#/pre', 'Avaliações')}<h1>${esc(av.nome)}</h1>
    <div class="card"><strong>Testes desta avaliação</strong>
      <p class="muted">Marque o que vocês vão aplicar neste time.</p>
      ${PRE_TESTES.map(t => `<label class="check"><input type="checkbox" data-teste="${t.id}" ${av.testes.includes(t.id) ? 'checked' : ''}> ${esc(t.nome)}</label>`).join('')}</div>
    <div class="card"><strong>Atletas (${av.atletas.length})</strong>
      <div class="linha"><input id="at-nome" placeholder="Nome do atleta"><button id="at-add">Adicionar</button></div>
      ${av.atletas.map((a, i) => `<div class="linha item"><span>${esc(a.nome)}</span><button class="peq sec" data-rem="${i}">remover</button></div>`).join('')}</div>
    <h2>Lançar dados</h2>
    <div class="grade">${av.testes.map(tid => `<a class="card link" href="#/pre/${av.id}/${tid}"><strong>${esc(testePorId(tid).nome)}</strong></a>`).join('')}</div>
    <h2>Planilha</h2>
    <div class="card">
      <button id="exp">Exportar para planilha (CSV)</button>
      <label class="arquivo">Juntar planilha de outro celular<input type="file" id="imp" accept=".csv,text/csv"></label>
      <p class="muted" id="msg"></p></div>
    <button class="perigo" id="apagar">Apagar esta avaliação</button>`;
}

function ligarAvaliacao(id) {
  const rerender = () => { render(); };
  const salvar = fn => { const { avs, av } = acharAv(id); fn(av); salvarAvaliacoes(avs); };
  document.querySelectorAll('[data-teste]').forEach(cb => cb.onchange = () => {
    salvar(av => { av.testes = PRE_TESTES.map(t => t.id).filter(t => t === cb.dataset.teste ? cb.checked : av.testes.includes(t)); });
    rerender();
  });
  const add = () => {
    const nome = document.getElementById('at-nome').value.trim();
    if (!nome) return;
    salvar(av => { if (!av.atletas.some(a => a.nome.toLowerCase() === nome.toLowerCase())) av.atletas.push({ nome, dados: {} }); });
    rerender();
  };
  document.getElementById('at-add').onclick = add;
  document.getElementById('at-nome').onkeydown = e => { if (e.key === 'Enter') add(); };
  document.querySelectorAll('[data-rem]').forEach(b => b.onclick = () => {
    const { av } = acharAv(id);
    if (!confirm(`Remover ${av.atletas[b.dataset.rem].nome} e os dados dele(a)?`)) return;
    salvar(av => av.atletas.splice(b.dataset.rem, 1));
    rerender();
  });
  document.getElementById('exp').onclick = () => {
    const { av } = acharAv(id);
    const blob = new Blob([gerarCSV(av)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = av.nome.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '_') + '.csv';
    a.click();
  };
  document.getElementById('imp').onchange = async e => {
    const arq = e.target.files[0]; if (!arq) return;
    const texto = await arq.text();
    let r;
    salvar(av => { r = importarCSV(av, texto); });
    if (r.erro) document.getElementById('msg').textContent = r.erro;
    else { render(); document.getElementById('msg').textContent = `Importado: ${r.celulas} valores, ${r.novos} atleta(s) novo(s).`; }
  };
  document.getElementById('apagar').onclick = () => {
    const { av } = acharAv(id);
    if (!confirm(`Apagar "${av.nome}" e todos os dados? Isso não pode ser desfeito.`)) return;
    salvarAvaliacoes(carregarAvaliacoes().filter(a => a.id !== id));
    location.hash = '#/pre';
  };
}

// Tela de lançamento: uma tabela atletas x campos para UM teste (cada pessoa fica no seu teste)
function telaLancamento(id, tid) {
  const { av } = acharAv(id); const t = testePorId(tid);
  if (!av || !t) return naoEncontrado();
  if (!av.atletas.length) return `${voltar('#/pre/' + id)}<h1>${esc(t.nome)}</h1><p class="muted">Adicione atletas primeiro.</p>`;
  const rotulosDer = t.derivados({}).map(d => d.l);
  return `${voltar('#/pre/' + id, av.nome)}<h1>${esc(t.nome)}</h1>
    <p class="muted">Salva automaticamente. Aceita vírgula ou ponto.</p>
    <div class="tabela-rolagem"><table class="lanc"><thead><tr><th>Atleta</th>${t.campos.map(c => `<th>${esc(c.l)}</th>`).join('')}${rotulosDer.map(l => `<th class="der">${esc(l)}</th>`).join('')}</tr></thead>
    <tbody>${av.atletas.map((a, i) => `<tr data-i="${i}"><td class="nome">${esc(a.nome)}</td>
      ${t.campos.map(c => c.tipo === 'texto'
        ? `<td><input type="text" class="txt" data-k="${c.k}" data-t="texto" value="${esc(a.dados[tid + '.' + c.k] ?? '')}"></td>`
        : `<td><input type="text" inputmode="decimal" data-k="${c.k}" value="${esc(a.dados[tid + '.' + c.k] ?? '')}"></td>`).join('')}
      ${t.derivados(valoresDoTeste(a, t)).map((d, j) => `<td class="der" data-d="${j}">${f1(d.v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function ligarLancamento(id, tid) {
  const t = testePorId(tid);
  document.querySelectorAll('.lanc input').forEach(inp => inp.addEventListener('input', () => {
    const tr = inp.closest('tr'); const { avs, av } = acharAv(id);
    const a = av.atletas[tr.dataset.i];
    // números aceitam vírgula; campos de texto ficam como foram digitados
    a.dados[tid + '.' + inp.dataset.k] = inp.dataset.t === 'texto' ? inp.value.trim() : inp.value.trim().replace(',', '.');
    salvarAvaliacoes(avs);
    // Atualiza só as colunas calculadas desta linha (não perde o foco do teclado)
    t.derivados(valoresDoTeste(a, t)).forEach((d, j) => { tr.querySelector(`[data-d="${j}"]`).textContent = f1(d.v); });
  }));
}

// ---------- Roteador ----------
function naoEncontrado() { return `<h1>Não encontrado</h1><a href="#/">Voltar ao início</a>`; }

function render() {
  const [r, a, b, c] = location.hash.replace(/^#\//, '').split('/');
  let html, depois = () => {};
  switch (r || '') {
    case '': html = telaInicio(); break;
    case 'testes': html = a ? telaTeste(a) : telaTestes(); if (!a) depois = ligarBusca; break;
    case 'exercicios': html = telaExercicios(); depois = ligarBusca; break;
    case 'prevencao': html = telaPrevencao(); break;
    case 'protocolos': html = telaProtocolos(); break;
    case 'anatomia': html = telaAnatomia(); break;
    case 'casos': html = telaCasos(); break;
    case 'referencias': html = telaReferencias(); break;
    case 'calculadoras': html = telaCalculadoras(); depois = ligarCalculadoras; break;
    case 'questionarios':
      if (!a) { html = telaQuestionarios(); depois = ligarQuestionarios; }
      else if (!b) { html = telaQuestionario(a); depois = () => ligarQuestionario(a); }
      else if (b === 'preencher') { html = telaPreencher(a); depois = () => ligarPreencher(a); }
      else { html = telaResultado(a, c); depois = () => ligarResultado(a, c); }
      break;
    case 'pre':
      if (!a) { html = telaPre(); depois = ligarPre; }
      else if (!b) { html = telaAvaliacao(a); depois = () => ligarAvaliacao(a); }
      else { html = telaLancamento(a, b); depois = () => ligarLancamento(a, b); }
      break;
    default: html = naoEncontrado();
  }
  app.innerHTML = html;
  depois();
  document.querySelectorAll('.menu a').forEach(l => l.classList.toggle('ativo', l.dataset.r === (r || '')));
  window.scrollTo(0, 0);
}

function ligarBusca() {
  const campo = document.getElementById('busca');
  campo.addEventListener('input', () => {
    const q = campo.value.toLowerCase().trim();
    document.querySelectorAll('#itens [data-busca]').forEach(el => { el.hidden = q && !el.dataset.busca.includes(q); });
    // esconde o título de um grupo quando nenhum item dele aparece
    document.querySelectorAll('#itens .grupo').forEach(g => { g.hidden = ![...g.querySelectorAll('[data-busca]')].some(el => !el.hidden); });
  });
}

window.addEventListener('hashchange', render);
render();

// Registra o service worker (offline). Só funciona via http(s) ou localhost.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
