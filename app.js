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
  'galgo espanhol':        { type: 'dog', slug: 'greyhound' },
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
  'cane corso':            { type: 'dog', slug: null },
  'dogo argentino':        { type: 'dog', slug: null },
  'fila brasileiro':       { type: 'dog', slug: null },
  'jack russell':          { type: 'dog', slug: 'terrier/russell' },
  'lhasa apso':            { type: 'dog', slug: 'lhasa' },
  'mastiff inglês':        { type: 'dog', slug: 'mastiff/english' },
  'shar pei':              { type: 'dog', slug: 'chow' },
  'scottish terrier':      { type: 'dog', slug: 'terrier/scottish' },
  'vizsla':                { type: 'dog', slug: 'vizsla' },
  'xoloitzcuintle':        { type: 'dog', slug: null },
  // GATOS
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
  // CAVALOS
  'cavalo árabe':          { type: 'other', query: 'arabian horse' },
  'árabe':                 { type: 'other', query: 'arabian horse' },
  'quarto de milha':       { type: 'other', query: 'quarter horse' },
  'puro sangue inglês':    { type: 'other', query: 'thoroughbred horse' },
  'frísio':                { type: 'other', query: 'friesian horse black' },
  'appaloosa':             { type: 'other', query: 'appaloosa horse spotted' },
  'paint horse':           { type: 'other', query: 'paint horse colorful' },
  'mustang':               { type: 'other', query: 'mustang wild horse' },
  'andaluz':               { type: 'other', query: 'andalusian horse' },
  'mangalarga marchador':  { type: 'other', query: 'mangalarga marchador horse' },
  'campolina':             { type: 'other', query: 'campolina horse brazil' },
  'lusitano':              { type: 'other', query: 'lusitano horse portugal' },
  'clydesdale':            { type: 'other', query: 'clydesdale horse large' },
  'shire':                 { type: 'other', query: 'shire horse draft' },
  'shetland':              { type: 'other', query: 'shetland pony' },
  'cavalo':                { type: 'other', query: 'beautiful horse nature' },
  // COELHOS
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
  'polish':        { type: 'rabbit', query: 'polish rabbit' },
  'lebre europeia': { type: 'rabbit', query: 'european hare' },
  'lebre belga':    { type: 'rabbit', query: 'belgian hare' },
  'pronolagus':     { type: 'rabbit', query: 'pronolagus hare' },
  // CAPIVARAS
  'capivara':           { type: 'capybara', query: 'capybara nature' },
  'capivara selvagem':  { type: 'capybara', query: 'capybara wild nature' },
  'capivara doméstica': { type: 'capybara', query: 'capybara pet' },
  // OUTROS
  'hamster sírio':      { type: 'other', query: 'syrian hamster' },
  'iguana':             { type: 'other', query: 'green iguana' },
  'gecko leopardo':     { type: 'other', query: 'leopard gecko' },
  'dragão barbudo':     { type: 'other', query: 'bearded dragon' },
  'calopsita':          { type: 'other', query: 'cockatiel bird' },
  'periquito':          { type: 'other', query: 'budgerigar parakeet' },
  'arara azul':         { type: 'other', query: 'blue macaw bird' },
  'arara':              { type: 'other', query: 'macaw bird' },
};

// ===== LOADING MSGS =====
const LOADING_MSGS = [
  'Farejando a resposta...',
  'Consultando o especialista animal...',
  'Latindo para o servidor...',
  'Buscando no arquivo de patinhas...',
  'Perguntando pro bicho mais sábio...',
  'Desenterrando uma curiosidade...',
  'Correndo atrás da informação...',
  'Checando o manual das espécies...',
];

// ===== STATE =====
let tema = '';
let modoChat = false;
let chatMessages = []; // histórico do modo chat
let historico = JSON.parse(localStorage.getItem('bicharIA-historico') || '[]');
let ultimaFoto = null;
let ultimoTexto = null;

// ===== FILTRO DE TEMA =====
function setTag(el, t) {
  document.querySelectorAll('.tag').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  tema = t;
}

// ===== MODO CHAT =====
function toggleModoChat() {
  modoChat = document.getElementById('toggle-chat').checked;
  const chatHistory = document.getElementById('chat-history');
  if (!modoChat) {
    chatMessages = [];
    chatHistory.style.display = 'none';
    chatHistory.innerHTML = '';
  } else {
    chatHistory.style.display = 'block';
  }
}

function adicionarMensagemChat(role, texto) {
  const chatHistory = document.getElementById('chat-history');
  const div = document.createElement('div');
  div.className = `chat-msg chat-msg--${role}`;
  div.innerHTML = `
    <span class="chat-bubble">${texto.replace(/\n/g, '<br>')}</span>
  `;
  chatHistory.appendChild(div);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ===== ATALHO DE ANIMAL — agora abre ficha técnica =====
function abrirAnimal(pergunta, nomeBreed) {
  document.getElementById('q').value = pergunta;
  ask(nomeBreed);
}

function go(txt) {
  document.getElementById('q').value = txt;
  ask();
}

function randomLoadingMsg() {
  return LOADING_MSGS[Math.floor(Math.random() * LOADING_MSGS.length)];
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

// ===== COPIAR RESPOSTA =====
function copiarResposta() {
  const inner = document.querySelector('.answer-inner');
  if (!inner) return;
  navigator.clipboard.writeText(inner.innerText).then(() => {
    const btn = document.getElementById('btn-copiar');
    if (!btn) return;
    btn.textContent = '✅ Copiado!';
    setTimeout(() => { btn.textContent = '📋 Copiar'; }, 2000);
  });
}

// ===== GALERIA DE FOTOS =====
async function fetchGaleria(match) {
  if (!match) return [];
  try {
    if (match.type === 'dog' && match.slug) {
      const res = await fetch(`https://dog.ceo/api/breed/${match.slug}/images/random/3`);
      const data = await res.json();
      return data.status === 'success' ? data.message : [];
    }
    if (['cat','rabbit','capybara','other'].includes(match.type)) {
      // busca 3 fotos da Unsplash via backend
      const results = await Promise.allSettled([
        fetch(`/api/photo?query=${encodeURIComponent(match.query)}`).then(r=>r.json()),
        fetch(`/api/photo?query=${encodeURIComponent(match.query)}&page=2`).then(r=>r.json()),
        fetch(`/api/photo?query=${encodeURIComponent(match.query)}&page=3`).then(r=>r.json()),
      ]);
      return results
        .filter(r => r.status === 'fulfilled' && r.value.url)
        .map(r => r.value.url);
    }
  } catch { return []; }
  return [];
}

function renderGaleria(fotos) {
  if (!fotos || fotos.length === 0) return '';
  if (fotos.length === 1) {
    return `<div class="dog-photo-wrap"><img src="${fotos[0]}" alt="Foto" class="dog-photo" onerror="this.parentElement.style.display='none'"></div>`;
  }
  return `
    <div class="galeria">
      ${fotos.map((f, i) => `
        <div class="galeria-item ${i === 0 ? 'galeria-item--main' : ''}">
          <img src="${f}" alt="Foto ${i+1}" class="galeria-img" onerror="this.parentElement.style.display='none'">
        </div>
      `).join('')}
    </div>
  `;
}

// ===== BUSCA FOTO SIMPLES =====
async function fetchAnimalPhoto(match) {
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

function getBreedMatch(texto) {
  const lower = texto.toLowerCase();
  for (const [nome, info] of Object.entries(BREED_MAP)) {
    if (lower.includes(nome)) return { nome, info };
  }
  return null;
}

// ===== FICHA TÉCNICA =====
async function abrirFicha(nomeAnimal) {
  const modal = document.getElementById('modal-ficha');
  const content = document.getElementById('ficha-content');
  modal.style.display = 'flex';
  content.innerHTML = '<div style="color:var(--muted);font-size:14px">🐾 Gerando ficha técnica...</div>';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: `Gere uma ficha técnica completa sobre "${nomeAnimal}" em formato JSON com os seguintes campos exatos (responda APENAS o JSON, sem texto antes ou depois):
{
  "nome": "nome oficial",
  "origem": "país/região",
  "porte": "Pequeno/Médio/Grande/Gigante",
  "peso": "ex: 5-10 kg",
  "altura": "ex: 30-40 cm",
  "expectativa_vida": "ex: 10-15 anos",
  "temperamento": ["adjetivo1", "adjetivo2", "adjetivo3"],
  "energia": 4,
  "sociabilidade": 5,
  "inteligencia": 3,
  "cuidado_pelo": 2,
  "curiosidade": "uma curiosidade incrível sobre a raça em 1 frase"
}
Os campos energia, sociabilidade, inteligencia e cuidado_pelo devem ser números de 1 a 5.`,
        tema: ''
      })
    });
    const data = await res.json();
    const raw = data.texto || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const ficha = JSON.parse(clean);

    const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

    content.innerHTML = `
      <h3 class="ficha-nome">${ficha.nome}</h3>
      <div class="ficha-grid">
        <div class="ficha-item"><span class="ficha-label">🌍 Origem</span><span>${ficha.origem}</span></div>
        <div class="ficha-item"><span class="ficha-label">📏 Porte</span><span>${ficha.porte}</span></div>
        <div class="ficha-item"><span class="ficha-label">⚖️ Peso</span><span>${ficha.peso}</span></div>
        <div class="ficha-item"><span class="ficha-label">📐 Altura</span><span>${ficha.altura}</span></div>
        <div class="ficha-item"><span class="ficha-label">🎂 Vida</span><span>${ficha.expectativa_vida}</span></div>
        <div class="ficha-item"><span class="ficha-label">💬 Temperamento</span><span>${ficha.temperamento.join(', ')}</span></div>
      </div>
      <div class="ficha-stats">
        <div class="ficha-stat-row"><span>⚡ Energia</span><span class="ficha-stars">${stars(ficha.energia)}</span></div>
        <div class="ficha-stat-row"><span>🤝 Sociabilidade</span><span class="ficha-stars">${stars(ficha.sociabilidade)}</span></div>
        <div class="ficha-stat-row"><span>🧠 Inteligência</span><span class="ficha-stars">${stars(ficha.inteligencia)}</span></div>
        <div class="ficha-stat-row"><span>✂️ Cuidado com pelo</span><span class="ficha-stars">${stars(ficha.cuidado_pelo)}</span></div>
      </div>
      <div class="ficha-curiosidade">💡 ${ficha.curiosidade}</div>
    `;
  } catch(e) {
    content.innerHTML = '<div style="color:var(--accent2);font-size:14px">Não foi possível gerar a ficha técnica.</div>';
  }
}

function fecharFicha() {
  document.getElementById('modal-ficha').style.display = 'none';
}

// ===== COMPARTILHAR CARD =====
function abrirShare() {
  if (!ultimoTexto) return;
  const modal = document.getElementById('modal-share');
  const foto = document.getElementById('share-foto');
  const texto = document.getElementById('share-texto');

  if (ultimaFoto) {
    foto.src = ultimaFoto;
    foto.style.display = 'block';
  } else {
    foto.style.display = 'none';
  }
  texto.textContent = ultimoTexto.slice(0, 280) + (ultimoTexto.length > 280 ? '...' : '');
  modal.style.display = 'flex';
}

function fecharShare() {
  document.getElementById('modal-share').style.display = 'none';
}

function copiarShareText() {
  const texto = document.getElementById('share-texto').textContent;
  navigator.clipboard.writeText(texto + '\n\n🐾 bicharIA.vercel.app').then(() => {
    const btn = event.target;
    btn.textContent = '✅ Copiado!';
    setTimeout(() => { btn.textContent = '📋 Copiar texto'; }, 2000);
  });
}

// ===== CURIOSIDADE DO DIA =====
async function carregarCuriosidade() {
  const hoje = new Date().toDateString();
  const cache = JSON.parse(localStorage.getItem('bicharIA-curiosidade') || '{}');
  if (cache.data === hoje && cache.texto) {
    document.getElementById('modal-texto').textContent = cache.texto;
    document.getElementById('modal-curiosidade').style.display = 'flex';
    return;
  }
  document.getElementById('modal-texto').textContent = '🐾 Carregando curiosidade...';
  document.getElementById('modal-curiosidade').style.display = 'flex';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: 'Me conta uma curiosidade animal incrível, surpreendente e pouco conhecida. Pode ser sobre qualquer animal. Seja curto: máximo 3 frases. Comece diretamente com a curiosidade, sem introdução.',
        tema: ''
      })
    });
    const data = await res.json();
    const texto = data.texto || 'Não foi possível carregar a curiosidade hoje.';
    document.getElementById('modal-texto').textContent = texto;
    localStorage.setItem('bicharIA-curiosidade', JSON.stringify({ data: hoje, texto }));
  } catch {
    document.getElementById('modal-texto').textContent = 'Sabia que os cavalos conseguem dormir em pé? Eles possuem um mecanismo especial nas pernas que os impede de cair enquanto cochilam! 🐴';
  }
}

function fecharCuriosidade() {
  document.getElementById('modal-curiosidade').style.display = 'none';
}

// ===== CHAMADA PRINCIPAL =====
async function ask(nomeBreed = null) {
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

  if (modoChat) adicionarMensagemChat('user', q);

  const extra = tema ? `Foque especialmente em ${tema}.` : '';

  // Descobre match de raça
  const breedMatch = nomeBreed
    ? BREED_MAP[nomeBreed.toLowerCase()] || null
    : (getBreedMatch(q)?.info || null);

  // Dispara galeria + IA ao mesmo tempo
  const [fotos, backendResponse] = await Promise.allSettled([
    fetchGaleria(breedMatch),
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: q,
        tema: extra,
        historico: modoChat ? chatMessages : []
      })
    })
  ]);

  try {
    const data = await backendResponse.value.json();
    if (data.error) throw new Error(data.error);

    const texto = data.texto || 'Não foi possível obter uma resposta.';
    const galeriaFotos = fotos.status === 'fulfilled' ? (fotos.value || []) : [];

    ultimoTexto = texto;
    ultimaFoto = galeriaFotos[0] || null;

    if (modoChat) {
      chatMessages.push({ role: 'user', content: q });
      chatMessages.push({ role: 'assistant', content: texto });
      if (chatMessages.length > 20) chatMessages = chatMessages.slice(-20);
      adicionarMensagemChat('assistant', texto);
    }

    const galeriaHtml = renderGaleria(galeriaFotos);
    const fichaBtn = nomeBreed
      ? `<button class="action-btn" onclick="abrirFicha('${nomeBreed}')">📋 Ficha Técnica</button>`
      : '';

    card.innerHTML = `
      <div class="answer-label">🐾 BicharIA</div>
      ${galeriaHtml}
      <div class="answer-inner">${texto.replace(/\n/g, '<br>')}</div>
      <div class="answer-actions">
        ${fichaBtn}
        <button class="action-btn" onclick="abrirShare()">📤 Compartilhar</button>
        <button class="action-btn" id="btn-copiar" onclick="copiarResposta()">📋 Copiar</button>
      </div>
    `;
  } catch (err) {
    card.innerHTML = `<div style="color:#E8825A;font-size:14px">⚠️ Erro: ${err.message}</div>`;
  }

  input.value = '';
}

// ===== ACORDEÃO =====
function toggleAccordion(id) {
  const panel = document.getElementById('panel-' + id);
  const arrow = document.getElementById('arrow-' + id);
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHistorico();
  // Mostra curiosidade do dia com delay de 1s
  setTimeout(carregarCuriosidade, 1000);
});