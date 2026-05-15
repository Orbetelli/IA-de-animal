// ===== MAPA DE ANIMAIS =====
const BREED_MAP = {
  'golden retriever':      { type: 'dog', slug: 'retriever/golden' },
  'husky siberiano':       { type: 'dog', slug: 'husky' },
  'bulldog francês':       { type: 'dog', slug: 'bulldog/french' },
  'shiba inu':             { type: 'dog', slug: 'shiba' },
  'border collie':         { type: 'dog', slug: 'collie/border' },
  'dachshund':             { type: 'dog', slug: 'dachshund' },
  'poodle':                { type: 'dog', slug: 'poodle' },
  'akita inu':             { type: 'dog', slug: 'akita' },
  'labrador':              { type: 'dog', slug: 'labrador' },
  'beagle':                { type: 'dog', slug: 'beagle' },
  'boxer':                 { type: 'dog', slug: 'boxer' },
  'chihuahua':             { type: 'dog', slug: 'chihuahua' },
  'dalmatian':             { type: 'dog', slug: 'dalmatian' },
  'dálmata':               { type: 'dog', slug: 'dalmatian' },
  'doberman':              { type: 'dog', slug: 'doberman' },
  'rottweiler':            { type: 'dog', slug: 'rottweiler' },
  'maltese':               { type: 'dog', slug: 'maltese' },
  'maltês':                { type: 'dog', slug: 'maltese' },
  'pug':                   { type: 'dog', slug: 'pug' },
  'samoyed':               { type: 'dog', slug: 'samoyed' },
  'lobo guará':            { type: 'dog', slug: null },
  'pastor alemão':         { type: 'dog', slug: 'germanshepherd' },
  'malinois':              { type: 'dog', slug: 'malinois' },
  'pastor belga malinois': { type: 'dog', slug: 'malinois' },
  'pitbull':               { type: 'dog', slug: 'pitbull' },
  'buldogue inglês':       { type: 'dog', slug: 'bulldog/english' },
  'yorkshire':             { type: 'dog', slug: 'terrier/yorkshire' },
  'yorkshire terrier':     { type: 'dog', slug: 'terrier/yorkshire' },
  'spitz alemão':          { type: 'dog', slug: 'pomeranian' },
  'pomeranian':            { type: 'dog', slug: 'pomeranian' },
  'chow chow':             { type: 'dog', slug: 'chow' },
  'cocker spaniel':        { type: 'dog', slug: 'spaniel/cocker' },
  'whippet':               { type: 'dog', slug: 'whippet' },
  'greyhound':             { type: 'dog', slug: 'greyhound' },
  'weimaraner':            { type: 'dog', slug: 'weimaraner' },
  'basset hound':          { type: 'dog', slug: 'hound/basset' },
  'shih tzu':              { type: 'dog', slug: 'shihtzu' },
  'pinscher':              { type: 'dog', slug: 'pinscher/miniature' },
  'pequinês':              { type: 'dog', slug: 'pekinese' },
  'schnauzer':             { type: 'dog', slug: 'schnauzer/miniature' },
  'corgi':                 { type: 'dog', slug: 'corgi/cardigan' },
  'são bernardo':          { type: 'dog', slug: 'stbernard' },
  'australian shepherd':   { type: 'dog', slug: 'australian/shepherd' },
  'bull terrier':          { type: 'dog', slug: 'bullterrier/english' },
  'jack russell':          { type: 'dog', slug: 'terrier/russell' },
  'lhasa apso':            { type: 'dog', slug: 'lhasa' },
  'vizsla':                { type: 'dog', slug: 'vizsla' },
  'scottish terrier':      { type: 'dog', slug: 'terrier/scottish' },
  'galgo espanhol':        { type: 'dog', slug: 'greyhound' },
  'persa':               { type: 'cat', query: 'persian cat' },
  'maine coon':          { type: 'cat', query: 'maine coon cat' },
  'siamês':              { type: 'cat', query: 'siamese cat' },
  'ragdoll':             { type: 'cat', query: 'ragdoll cat' },
  'sphynx':              { type: 'cat', query: 'sphynx cat' },
  'bengal':              { type: 'cat', query: 'bengal cat' },
  'british shorthair':   { type: 'cat', query: 'british shorthair cat' },
  'scottish fold':       { type: 'cat', query: 'scottish fold cat' },
  'angorá turco':        { type: 'cat', query: 'turkish angora cat' },
  'norwegian forest':    { type: 'cat', query: 'norwegian forest cat' },
  'abissínio':           { type: 'cat', query: 'abyssinian cat' },
  'devon rex':           { type: 'cat', query: 'devon rex cat' },
  'cornish rex':         { type: 'cat', query: 'cornish rex cat' },
  'bombay':              { type: 'cat', query: 'bombay cat' },
  'birman':              { type: 'cat', query: 'birman cat' },
  'exotic shorthair':    { type: 'cat', query: 'exotic shorthair cat' },
  'american shorthair':  { type: 'cat', query: 'american shorthair cat' },
  'burmese':             { type: 'cat', query: 'burmese cat' },
  'manx':                { type: 'cat', query: 'manx cat' },
  'ocicat':              { type: 'cat', query: 'ocicat cat' },
  'cavalo árabe':        { type: 'other', query: 'arabian horse' },
  'quarto de milha':     { type: 'other', query: 'quarter horse' },
  'frísio':              { type: 'other', query: 'friesian horse black' },
  'appaloosa':           { type: 'other', query: 'appaloosa horse spotted' },
  'paint horse':         { type: 'other', query: 'paint horse colorful' },
  'mustang':             { type: 'other', query: 'mustang wild horse' },
  'andaluz':             { type: 'other', query: 'andalusian horse' },
  'mangalarga marchador':{ type: 'other', query: 'mangalarga marchador horse' },
  'campolina':           { type: 'other', query: 'campolina horse' },
  'lusitano':            { type: 'other', query: 'lusitano horse' },
  'clydesdale':          { type: 'other', query: 'clydesdale horse' },
  'shire':               { type: 'other', query: 'shire horse' },
  'shetland':            { type: 'other', query: 'shetland pony' },
  'cavalo':              { type: 'other', query: 'beautiful horse nature' },
  'puro sangue inglês':  { type: 'other', query: 'thoroughbred horse' },
  'holland lop':   { type: 'rabbit', query: 'holland lop rabbit' },
  'rex':           { type: 'rabbit', query: 'rex rabbit' },
  'angorá':        { type: 'rabbit', query: 'angora rabbit' },
  'mini rex':      { type: 'rabbit', query: 'mini rex rabbit' },
  'lionhead':      { type: 'rabbit', query: 'lionhead rabbit' },
  'new zealand':   { type: 'rabbit', query: 'new zealand rabbit' },
  'flemish giant': { type: 'rabbit', query: 'flemish giant rabbit' },
  'dutch':         { type: 'rabbit', query: 'dutch rabbit' },
  'californian':   { type: 'rabbit', query: 'californian rabbit' },
  'mini lop':      { type: 'rabbit', query: 'mini lop rabbit' },
  'fuzzy lop':     { type: 'rabbit', query: 'fuzzy lop rabbit' },
  'harlequin':     { type: 'rabbit', query: 'harlequin rabbit' },
  'lebre europeia':{ type: 'rabbit', query: 'european hare' },
  'lebre belga':   { type: 'rabbit', query: 'belgian hare' },
  'capivara':           { type: 'capybara', query: 'capybara nature' },
  'capivara selvagem':  { type: 'capybara', query: 'capybara wild nature' },
  'capivara doméstica': { type: 'capybara', query: 'capybara pet' },
  'iguana':          { type: 'other', query: 'green iguana' },
  'gecko leopardo':  { type: 'other', query: 'leopard gecko' },
  'dragão barbudo':  { type: 'other', query: 'bearded dragon' },
  'calopsita':       { type: 'other', query: 'cockatiel bird' },
  'periquito':       { type: 'other', query: 'budgerigar parakeet' },
  'arara azul':      { type: 'other', query: 'blue macaw bird' },
  'arara':           { type: 'other', query: 'macaw bird' },
};

// ===== CALENDÁRIO ANIMAL =====
const CALENDARIO = [
  { mes: 1,  dia: 1,  emoji: '🐾', nome: 'Ano Novo Animal', desc: 'Celebração global com os pets!' },
  { mes: 2,  dia: 14, emoji: '🐶', nome: 'Dia do Amor pelos Animais', desc: 'Demonstre carinho ao seu pet no Dia dos Namorados!' },
  { mes: 3,  dia: 3,  emoji: '🌍', nome: 'Dia Mundial da Vida Selvagem', desc: 'Conscientização sobre fauna silvestre.' },
  { mes: 3,  dia: 20, emoji: '🦁', nome: 'Dia Mundial da Felicidade Animal', desc: 'Promover o bem-estar de todos os animais.' },
  { mes: 4,  dia: 4,  emoji: '🐱', nome: 'Dia Internacional do Gato', desc: 'Celebração dos felinos ao redor do mundo!' },
  { mes: 4,  dia: 22, emoji: '🌿', nome: 'Dia da Terra', desc: 'Proteção dos habitats naturais dos animais.' },
  { mes: 5,  dia: 18, emoji: '🐻', nome: 'Dia Internacional dos Museus Naturais', desc: 'Valorize a história natural e os animais.' },
  { mes: 6,  dia: 5,  emoji: '🌱', nome: 'Dia do Meio Ambiente', desc: 'Proteção dos ecossistemas e da fauna.' },
  { mes: 7,  dia: 14, emoji: '🐋', nome: 'Dia Mundial do Golfinho', desc: 'Conscientização sobre mamíferos marinhos.' },
  { mes: 8,  dia: 8,  emoji: '🐈', nome: 'Dia Internacional do Gato', desc: 'Dia oficial da ONU para celebrar os gatos!' },
  { mes: 8,  dia: 12, emoji: '🐘', nome: 'Dia Mundial do Elefante', desc: 'Proteção e conscientização sobre elefantes.' },
  { mes: 9,  dia: 4,  emoji: '🦅', nome: 'Dia Mundial dos Abutres', desc: 'Valorização das aves de rapina.' },
  { mes: 9,  dia: 28, emoji: '🐕', nome: 'Dia Mundial do Cão', desc: 'Celebre o melhor amigo do homem!' },
  { mes: 10, dia: 1,  emoji: '🌿', nome: 'Dia do Vegetarianismo', desc: 'Reflexão sobre dieta e bem-estar animal.' },
  { mes: 10, dia: 4,  emoji: '🐾', nome: 'Dia Mundial dos Animais', desc: 'A data mais importante do mundo animal!' },
  { mes: 10, dia: 16, emoji: '🐝', nome: 'Dia Mundial da Alimentação', desc: 'A importância das abelhas na cadeia alimentar.' },
  { mes: 11, dia: 6,  emoji: '🐎', nome: 'Dia do Cavalo', desc: 'Homenagem ao nobre equino brasileiro.' },
  { mes: 11, dia: 15, emoji: '🐆', nome: 'Dia da Fauna Brasileira', desc: 'Celebração da rica biodiversidade do Brasil.' },
  { mes: 12, dia: 25, emoji: '🎁', nome: 'Natal dos Pets', desc: 'Não esqueça do presente para o seu bichinho!' },
];

const LOADING_MSGS = [
  'Farejando a resposta...', 'Consultando o especialista animal...',
  'Latindo para o servidor...', 'Buscando no arquivo de patinhas...',
  'Perguntando pro bicho mais sábio...', 'Desenterrando uma curiosidade...',
  'Correndo atrás da informação...', 'Checando o manual das espécies...',
];

// ===== STATE =====
let tema = '';
let modoVet = false;
let historico = JSON.parse(localStorage.getItem('bicharIA-historico') || '[]');
let favoritos = JSON.parse(localStorage.getItem('bicharIA-favoritos') || '[]');
let ultimoTexto = null;
let ultimaFoto = null;
let comparadorSelecionados = [];

// ===== ONBOARDING =====
function verificarOnboarding() {
  const visto = localStorage.getItem('bicharIA-onboarding');
  if (!visto) {
    document.getElementById('onboarding').style.display = 'flex';
  }
}

function fecharOnboarding() {
  document.getElementById('onboarding').style.display = 'none';
  localStorage.setItem('bicharIA-onboarding', 'true');
  setTimeout(carregarCuriosidade, 500);
}

// ===== CURIOSIDADE DO DIA =====
async function carregarCuriosidade() {
  const hoje = new Date().toDateString();
  const cache = JSON.parse(localStorage.getItem('bicharIA-curiosidade') || '{}');
  if (cache.data === hoje && cache.texto) {
    document.getElementById('modal-curiosidade-texto').textContent = cache.texto;
    document.getElementById('modal-curiosidade').style.display = 'flex';
    return;
  }
  document.getElementById('modal-curiosidade-texto').textContent = '🐾 Carregando...';
  document.getElementById('modal-curiosidade').style.display = 'flex';
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta: 'Me conta uma curiosidade animal incrível e pouco conhecida. Máximo 3 frases. Comece direto na curiosidade.', tema: '' })
    });
    const data = await res.json();
    const texto = data.texto || 'Os polvos têm três corações!';
    document.getElementById('modal-curiosidade-texto').textContent = texto;
    localStorage.setItem('bicharIA-curiosidade', JSON.stringify({ data: hoje, texto }));
  } catch {
    document.getElementById('modal-curiosidade-texto').textContent = 'Os cavalos conseguem dormir em pé! Possuem um mecanismo especial nas pernas que os impede de cair enquanto cochilam. 🐴';
  }
}

function fecharCuriosidade() {
  document.getElementById('modal-curiosidade').style.display = 'none';
}

// ===== MODO VETERINÁRIO =====
function toggleModoVet() {
  modoVet = document.getElementById('toggle-vet').checked;
  const badge = document.getElementById('vet-badge');
  badge.style.display = modoVet ? 'inline-flex' : 'none';
}

// ===== FILTRO DE TEMA =====
function setTag(el, t) {
  document.querySelectorAll('.tag').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  tema = t;
}

// ===== NAVEGAÇÃO =====
function go(txt) {
  document.getElementById('q').value = txt;
  ask();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function randomLoadingMsg() {
  return LOADING_MSGS[Math.floor(Math.random() * LOADING_MSGS.length)];
}

// ===== ACORDEÃO =====
function toggleAccordion(id) {
  const panel = document.getElementById('panel-' + id);
  const arrow = document.getElementById('arrow-' + id);
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ===== HISTÓRICO =====
function salvarHistorico(pergunta) {
  historico = [pergunta, ...historico.filter(h => h !== pergunta)].slice(0, 6);
  localStorage.setItem('bicharIA-historico', JSON.stringify(historico));
  renderHistorico();
}

function renderHistorico() {
  const wrap = document.getElementById('historico-wrap');
  const lista = document.getElementById('historico-lista');
  if (!wrap || !lista) return;
  if (historico.length === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  lista.innerHTML = historico.map(h => `
    <span class="hist-pill" onclick="go('${h.replace(/'/g, "\\'")}')">
      🕐 ${h.length > 40 ? h.slice(0, 40) + '…' : h}
    </span>
  `).join('');
}

// ===== FAVORITOS =====
function toggleFavorito(pergunta, texto, foto) {
  const btn = document.getElementById('btn-fav');
  const idx = favoritos.findIndex(f => f.pergunta === pergunta);
  if (idx >= 0) {
    favoritos.splice(idx, 1);
    if (btn) btn.textContent = '🤍 Favoritar';
  } else {
    favoritos.unshift({ pergunta, texto: texto.slice(0, 300), foto, data: new Date().toLocaleDateString('pt-BR') });
    favoritos = favoritos.slice(0, 20);
    if (btn) btn.textContent = '❤️ Favoritado!';
  }
  localStorage.setItem('bicharIA-favoritos', JSON.stringify(favoritos));
}

function abrirFavoritos() {
  const modal = document.getElementById('modal-favoritos');
  const lista = document.getElementById('favoritos-lista');
  modal.style.display = 'flex';
  if (favoritos.length === 0) {
    lista.innerHTML = '<div style="color:var(--muted);font-size:14px;text-align:center;padding:2rem 0">Nenhum favorito ainda.<br>Clique em 🤍 Favoritar após uma resposta!</div>';
    return;
  }
  lista.innerHTML = favoritos.map((f, i) => `
    <div class="fav-item">
      ${f.foto ? `<img src="${f.foto}" class="fav-foto" onerror="this.style.display='none'">` : ''}
      <div class="fav-content">
        <div class="fav-pergunta">${f.pergunta.length > 60 ? f.pergunta.slice(0,60)+'…' : f.pergunta}</div>
        <div class="fav-texto">${f.texto.slice(0,120)}…</div>
        <div class="fav-actions">
          <span class="fav-data">${f.data}</span>
          <button class="action-btn" onclick="go('${f.pergunta.replace(/'/g,"\\'")}'); fecharFavoritos()">↗ Ver</button>
          <button class="action-btn" onclick="removerFavorito(${i})">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
}

function removerFavorito(i) {
  favoritos.splice(i, 1);
  localStorage.setItem('bicharIA-favoritos', JSON.stringify(favoritos));
  abrirFavoritos();
}

function fecharFavoritos() {
  document.getElementById('modal-favoritos').style.display = 'none';
}

// ===== COMPARADOR =====
function abrirComparador() {
  comparadorSelecionados = [];
  document.getElementById('modal-comparador').style.display = 'flex';
  renderComparadorSelecao();
}

function fecharComparador() {
  document.getElementById('modal-comparador').style.display = 'none';
}

function renderComparadorSelecao() {
  const area = document.getElementById('comparador-selecao');
  const animais = [
    'Golden Retriever','Husky Siberiano','Bulldog Francês','Shiba Inu','Border Collie',
    'Poodle','Labrador','Beagle','Rottweiler','Pastor Alemão','Chihuahua','Pug',
    'Maine Coon','Persa','Siamês','Ragdoll','British Shorthair','Bengal',
    'Cavalo Árabe','Mustang','Quarto de Milha','Frísio',
    'Holland Lop','Lionhead','Flemish Giant',
    'Capivara','Iguana','Calopsita','Periquito'
  ];
  area.innerHTML = `
    <p style="font-size:13px;color:var(--muted);margin-bottom:12px">Selecione 2 animais para comparar:</p>
    <div class="comparador-grid">
      ${animais.map(a => `
        <button class="comparador-pill" id="cpill-${a.toLowerCase().replace(/ /g,'-')}" onclick="selecionarComparador('${a}')">
          ${a}
        </button>
      `).join('')}
    </div>
    <div id="comparador-selecionados" class="comparador-selecionados"></div>
    <button class="modal-close" id="btn-comparar" onclick="executarComparacao()" style="margin-top:1rem;display:none">
      ⚡ Comparar agora
    </button>
  `;
}

function selecionarComparador(nome) {
  const idx = comparadorSelecionados.indexOf(nome);
  const pill = document.getElementById('cpill-' + nome.toLowerCase().replace(/ /g, '-'));
  if (idx >= 0) {
    comparadorSelecionados.splice(idx, 1);
    if (pill) pill.classList.remove('on');
  } else {
    if (comparadorSelecionados.length >= 2) return;
    comparadorSelecionados.push(nome);
    if (pill) pill.classList.add('on');
  }
  const sel = document.getElementById('comparador-selecionados');
  sel.innerHTML = comparadorSelecionados.map(s => `<span class="tag on">${s}</span>`).join(' vs ');
  document.getElementById('btn-comparar').style.display = comparadorSelecionados.length === 2 ? 'block' : 'none';
}

async function executarComparacao() {
  const [a, b] = comparadorSelecionados;
  const area = document.getElementById('comparador-selecao');
  area.innerHTML = `<div style="color:var(--muted);font-size:14px;padding:1rem 0">⚡ Comparando ${a} vs ${b}...</div>`;
  document.getElementById('btn-comparar').style.display = 'none';
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: `Compare "${a}" e "${b}" de forma detalhada. Responda APENAS em JSON com este formato exato:
{
  "animal1": "${a}",
  "animal2": "${b}",
  "categorias": [
    { "nome": "Porte", "valor1": "ex: Grande", "valor2": "ex: Médio" },
    { "nome": "Energia", "valor1": "Alta", "valor2": "Baixa" },
    { "nome": "Temperamento", "valor1": "adjetivo", "valor2": "adjetivo" },
    { "nome": "Pelo", "valor1": "curto/longo", "valor2": "curto/longo" },
    { "nome": "Vida útil", "valor1": "ex: 10-12 anos", "valor2": "ex: 12-15 anos" },
    { "nome": "Ideal para", "valor1": "ex: Famílias", "valor2": "ex: Apartamento" },
    { "nome": "Origem", "valor1": "país", "valor2": "país" }
  ],
  "veredito": "Uma frase dizendo qual é mais indicado para quê."
}`,
        tema: ''
      })
    });
    const data = await res.json();
    const raw = data.texto.replace(/```json|```/g, '').trim();
    const comp = JSON.parse(raw);
    area.innerHTML = `
      <div class="comp-header">
        <span class="comp-nome">${comp.animal1}</span>
        <span style="color:var(--muted);font-size:12px">VS</span>
        <span class="comp-nome">${comp.animal2}</span>
      </div>
      <div class="comp-tabela">
        ${comp.categorias.map(c => `
          <div class="comp-row">
            <span class="comp-val">${c.valor1}</span>
            <span class="comp-label">${c.nome}</span>
            <span class="comp-val">${c.valor2}</span>
          </div>
        `).join('')}
      </div>
      <div class="ficha-curiosidade" style="margin-top:1rem">💡 ${comp.veredito}</div>
      <button class="action-btn" onclick="renderComparadorSelecao()" style="margin-top:.75rem;width:100%;text-align:center">↩ Nova comparação</button>
    `;
    document.getElementById('btn-comparar').style.display = 'none';
  } catch(e) {
    area.innerHTML = `<div style="color:var(--accent2);font-size:14px">Erro ao comparar. Tente novamente.</div>`;
  }
}

// ===== CALCULADORA DE RAÇÃO =====
function abrirCalculadora() {
  document.getElementById('modal-calculadora').style.display = 'flex';
  document.getElementById('calc-resultado').innerHTML = '';
}

function fecharCalculadora() {
  document.getElementById('modal-calculadora').style.display = 'none';
}

async function calcularRacao() {
  const especie = document.getElementById('calc-especie').value;
  const raca    = document.getElementById('calc-raca').value.trim();
  const peso    = document.getElementById('calc-peso').value.trim();
  const idade   = document.getElementById('calc-idade').value.trim();
  const castrado = document.getElementById('calc-castrado').value;

  if (!peso || !idade) {
    document.getElementById('calc-resultado').innerHTML = '<div style="color:var(--accent2);font-size:13px">Preencha pelo menos o peso e a idade!</div>';
    return;
  }

  document.getElementById('calc-resultado').innerHTML = '<div style="color:var(--muted);font-size:13px">🐾 Calculando...</div>';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: `Calcule a quantidade de ração diária para: espécie: ${especie}, raça: ${raca || 'não informada'}, peso: ${peso}kg, idade: ${idade}, castrado/a: ${castrado}. Responda em português, de forma clara e prática. Inclua: quantidade diária em gramas, quantas refeições por dia, horários recomendados e uma dica nutricional. Seja direto e use tópicos com emojis.`,
        tema: 'alimentação'
      })
    });
    const data = await res.json();
    document.getElementById('calc-resultado').innerHTML = `
      <div class="calc-result-box">
        ${data.texto.replace(/\n/g, '<br>')}
      </div>
    `;
  } catch(e) {
    document.getElementById('calc-resultado').innerHTML = '<div style="color:var(--accent2);font-size:13px">Erro ao calcular. Tente novamente.</div>';
  }
}

// ===== GUIA DE VACINAÇÃO =====
function abrirVacinacao() {
  document.getElementById('modal-vacina').style.display = 'flex';
  document.getElementById('vacina-resultado').innerHTML = '';
}

function fecharVacinacao() {
  document.getElementById('modal-vacina').style.display = 'none';
}

async function gerarGuiaVacina() {
  const especie = document.getElementById('vacina-especie').value;
  const idade   = document.getElementById('vacina-idade').value.trim();
  const local   = document.getElementById('vacina-local').value;

  if (!idade) {
    document.getElementById('vacina-resultado').innerHTML = '<div style="color:var(--accent2);font-size:13px">Informe a idade do animal!</div>';
    return;
  }

  document.getElementById('vacina-resultado').innerHTML = '<div style="color:var(--muted);font-size:13px">💉 Gerando guia...</div>';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: `Gere um guia de vacinação completo para: espécie: ${especie}, idade: ${idade}, local: ${local}. Liste as vacinas obrigatórias e opcionais, quando tomar, frequência de reforço e alertas importantes. Use formato de calendário com emojis. Lembre de recomendar sempre consultar um veterinário.`,
        tema: 'saúde'
      })
    });
    const data = await res.json();
    document.getElementById('vacina-resultado').innerHTML = `
      <div class="calc-result-box">${data.texto.replace(/\n/g, '<br>')}</div>
    `;
  } catch(e) {
    document.getElementById('vacina-resultado').innerHTML = '<div style="color:var(--accent2);font-size:13px">Erro ao gerar guia. Tente novamente.</div>';
  }
}

// ===== CALENDÁRIO ANIMAL =====
function abrirCalendario() {
  const modal = document.getElementById('modal-calendario');
  const lista = document.getElementById('calendario-lista');
  modal.style.display = 'flex';
  const hoje = new Date();
  const sorted = [...CALENDARIO].sort((a, b) => {
    const da = new Date(hoje.getFullYear(), a.mes - 1, a.dia);
    const db = new Date(hoje.getFullYear(), b.mes - 1, b.dia);
    if (da < hoje) da.setFullYear(hoje.getFullYear() + 1);
    if (db < hoje) db.setFullYear(hoje.getFullYear() + 1);
    return da - db;
  });
  lista.innerHTML = sorted.map(e => {
    const d = new Date(hoje.getFullYear(), e.mes - 1, e.dia);
    const isHoje = d.getDate() === hoje.getDate() && d.getMonth() === hoje.getMonth();
    const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    return `
      <div class="cal-item ${isHoje ? 'cal-item--hoje' : ''}">
        <div class="cal-data">
          <span class="cal-dia">${String(e.dia).padStart(2,'0')}</span>
          <span class="cal-mes">${meses[e.mes-1]}</span>
        </div>
        <div class="cal-info">
          <span class="cal-emoji">${e.emoji}</span>
          <div>
            <div class="cal-nome">${e.nome} ${isHoje ? '<span class="cal-hoje-badge">Hoje!</span>' : ''}</div>
            <div class="cal-desc">${e.desc}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function fecharCalendario() {
  document.getElementById('modal-calendario').style.display = 'none';
}

// ===== FOTO DO ANIMAL =====
async function fetchAnimalPhoto(pergunta) {
  const lower = pergunta.toLowerCase();
  let match = null;
  for (const [nome, info] of Object.entries(BREED_MAP)) {
    if (lower.includes(nome)) { match = info; break; }
  }
  if (!match) return null;
  try {
    if (match.type === 'dog' && match.slug) {
      const res = await fetch(`https://dog.ceo/api/breed/${match.slug}/images/random`);
      const data = await res.json();
      return data.status === 'success' ? data.message : null;
    }
    if (['cat','rabbit','capybara','other'].includes(match.type)) {
      const res = await fetch(`/api/photo?query=${encodeURIComponent(match.query)}`);
      const data = await res.json();
      return data.url || null;
    }
  } catch { return null; }
  return null;
}

// ===== COPIAR =====
function copiarResposta() {
  const inner = document.querySelector('.answer-inner');
  if (!inner) return;
  navigator.clipboard.writeText(inner.innerText).then(() => {
    const btn = document.getElementById('btn-copiar');
    if (btn) { btn.textContent = '✅ Copiado!'; setTimeout(() => { btn.textContent = '📋 Copiar'; }, 2000); }
  });
}

// ===== CHAMADA PRINCIPAL =====
async function ask() {
  const input = document.getElementById('q');
  const q = input.value.trim();
  if (!q) return;

  salvarHistorico(q);

  const card = document.getElementById('card');
  card.className = 'answer-card active';
  card.innerHTML = `
    <div class="answer-label"><span class="dot"></span> ${randomLoadingMsg()}</div>
    <div class="loading-dots"><span>●</span> <span>●</span> <span>●</span></div>
  `;

  const temaFinal = modoVet
    ? 'Responda como veterinário especialista. Seja técnico, preciso e sempre recomende consulta presencial para diagnósticos.'
    : (tema ? `Foque especialmente em ${tema}.` : '');

  const [photoUrl, backendResponse] = await Promise.allSettled([
    fetchAnimalPhoto(q),
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta: q, tema: temaFinal })
    })
  ]);

  try {
    const data = await backendResponse.value.json();
    if (data.error) throw new Error(data.error);

    const texto = data.texto || 'Não foi possível obter uma resposta.';
    const foto = photoUrl.status === 'fulfilled' ? photoUrl.value : null;

    ultimoTexto = texto;
    ultimaFoto = foto;

    const isFav = favoritos.some(f => f.pergunta === q);

    card.innerHTML = `
      <div class="answer-label">
        🐾 BicharIA ${modoVet ? '<span class="vet-resp-badge">🩺 Modo Vet</span>' : ''}
      </div>
      ${foto ? `<div class="dog-photo-wrap"><img src="${foto}" alt="Foto" class="dog-photo" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="answer-inner">${texto.replace(/\n/g, '<br>')}</div>
      <div class="answer-actions">
        <button class="action-btn" id="btn-fav" onclick="toggleFavorito('${q.replace(/'/g,"\\'")}', ultimoTexto, ultimaFoto)">
          ${isFav ? '❤️ Favoritado' : '🤍 Favoritar'}
        </button>
        <button class="action-btn" id="btn-copiar" onclick="copiarResposta()">📋 Copiar</button>
      </div>
    `;
  } catch (err) {
    card.innerHTML = `<div style="color:#E8825A;font-size:14px">⚠️ Erro: ${err.message}</div>`;
  }

  input.value = '';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHistorico();
  verificarOnboarding();
});