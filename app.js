// ===== MAPA DE ANIMAIS (nome exibido → slug da API de fotos) =====
// Cães: Dog CEO API | Coelhos/Gatos: Unsplash
const BREED_MAP = {
  // Cães
  'golden retriever':   { type: 'dog', slug: 'retriever/golden' },
  'husky siberiano':    { type: 'dog', slug: 'husky' },
  'bulldog francês':    { type: 'dog', slug: 'bulldog/french' },
  'shiba inu':          { type: 'dog', slug: 'shiba' },
  'border collie':      { type: 'dog', slug: 'collie/border' },
  'dachshund':          { type: 'dog', slug: 'dachshund' },
  'poodle':             { type: 'dog', slug: 'poodle' },
  'akita inu':          { type: 'dog', slug: 'akita' },
  'labrador':           { type: 'dog', slug: 'labrador' },
  'beagle':             { type: 'dog', slug: 'beagle' },
  'boxer':              { type: 'dog', slug: 'boxer' },
  'chihuahua':          { type: 'dog', slug: 'chihuahua' },
  'dalmatian':          { type: 'dog', slug: 'dalmatian' },
  'doberman':           { type: 'dog', slug: 'doberman' },
  'rottweiler':         { type: 'dog', slug: 'rottweiler' },
  'maltese':            { type: 'dog', slug: 'maltese' },
  'pug':                { type: 'dog', slug: 'pug' },
  'samoyed':            { type: 'dog', slug: 'samoyed' },
  'lobo guará':         { type: 'dog', slug: null },

  // ===== MAIS CÃES =====
  'pastor alemão':       { type: 'dog', slug: 'germanshepherd' },
  'pastor belga malinois': { type: 'dog', slug: 'malinois' },
  'pitbull':             { type: 'dog', slug: 'pitbull' },
  'american pit bull terrier': { type: 'dog', slug: 'pitbull' },
  'staffordshire bull terrier': { type: 'dog', slug: 'terrier/staffordshire' },
  'buldogue inglês':     { type: 'dog', slug: 'bulldog/english' },
  'yorkshire':           { type: 'dog', slug: 'terrier/yorkshire' },
  'yorkshire terrier':   { type: 'dog', slug: 'terrier/yorkshire' },
  'spitz alemão':        { type: 'dog', slug: 'pomeranian' },
  'pomeranian':          { type: 'dog', slug: 'pomeranian' },
  'chow chow':           { type: 'dog', slug: 'chow' },
  'cocker spaniel':      { type: 'dog', slug: 'spaniel/cocker' },
  'whippet':             { type: 'dog', slug: 'whippet' },
  'greyhound':           { type: 'dog', slug: 'greyhound' },
  'weimaraner':          { type: 'dog', slug: 'weimaraner' },
  'basset hound':        { type: 'dog', slug: 'hound/basset' },
  'shihtzu':             { type: 'dog', slug: 'shihtzu' },
  'shih tzu':            { type: 'dog', slug: 'shihtzu' },
  'pinscher':            { type: 'dog', slug: 'pinscher/miniature' },
  'pinscher miniatura':  { type: 'dog', slug: 'pinscher/miniature' },
  'pequinês':            { type: 'dog', slug: 'pekinese' },
  'pekingese':           { type: 'dog', slug: 'pekinese' },
  'schnauzer':           { type: 'dog', slug: 'schnauzer/miniature' },
  'schnauzer miniatura': { type: 'dog', slug: 'schnauzer/miniature' },
  'schnauzer gigante':   { type: 'dog', slug: 'schnauzer/giant' },
  'poodle toy':          { type: 'dog', slug: 'poodle/toy' },
  'poodle miniatura':    { type: 'dog', slug: 'poodle/miniature' },

  // Coelhos
  'holland lop':    { type: 'rabbit', query: 'holland lop rabbit' },
  'rex':            { type: 'rabbit', query: 'rex rabbit' },
  'angorá':         { type: 'rabbit', query: 'angora rabbit' },
  'angora':         { type: 'rabbit', query: 'angora rabbit' },
  'mini rex':       { type: 'rabbit', query: 'mini rex rabbit' },
  'lionhead':       { type: 'rabbit', query: 'lionhead rabbit' },
  'new zealand':    { type: 'rabbit', query: 'new zealand rabbit' },
  'flemish giant':  { type: 'rabbit', query: 'flemish giant rabbit' },
  'dutch':          { type: 'rabbit', query: 'dutch rabbit' },
  'californian':    { type: 'rabbit', query: 'californian rabbit' }, 
  'satin':          { type: 'rabbit', query: 'satin rabbit' },

  // Lebres
  'lebre europeia': { type: 'rabbit', query: 'european hare' },
  'lebre belga':    { type: 'rabbit', query: 'belgian hare' },
  'pronolagus':     { type: 'rabbit', query: 'pronolagus' },

  // ===== GATOS (via Unsplash backend) =====
  'gato persa':          { type: 'cat', query: 'persian cat' },
  'persa':               { type: 'cat', query: 'persian cat' },
  'maine coon':          { type: 'cat', query: 'maine coon cat' },
  'siamês':              { type: 'cat', query: 'siamese cat' },
  'siames':              { type: 'cat', query: 'siamese cat' },
  'ragdoll':             { type: 'cat', query: 'ragdoll cat' },
  'sphynx':              { type: 'cat', query: 'sphynx cat' },
  'bengal':              { type: 'cat', query: 'bengal cat' },
  'british shorthair':   { type: 'cat', query: 'british shorthair cat' },
  'scottish fold':       { type: 'cat', query: 'scottish fold cat' },
  'angorá turco':        { type: 'cat', query: 'turkish angora cat' },
  'turkish angora':      { type: 'cat', query: 'turkish angora cat' },
  'american shorthair':  { type: 'cat', query: 'american shorthair cat' },
  'exotic shorthair':    { type: 'cat', query: 'exotic shorthair cat' },
  'norwegian forest':    { type: 'cat', query: 'norwegian forest cat' },
  'gato norueguês':      { type: 'cat', query: 'norwegian forest cat' },
  'bombay':              { type: 'cat', query: 'bombay cat' },
  'abissínio':           { type: 'cat', query: 'abyssinian cat' },
  'abyssinian':          { type: 'cat', query: 'abyssinian cat' },
  'burmese':             { type: 'cat', query: 'burmese cat' },
  'birman':              { type: 'cat', query: 'birman cat' },
  'manx':                { type: 'cat', query: 'manx cat' },
  'devon rex':           { type: 'cat', query: 'devon rex cat' },
  'cornish rex':         { type: 'cat', query: 'cornish rex cat' },
};

// ===== MENSAGENS DE LOADING DIVERTIDAS =====
const LOADING_MSGS = [
  'Farejando a resposta...',
  'Consultando o especialista animal...',
  'Latindo para o servidor...',
  'Buscando no arquivo de patinhas...',
  'Perguntando pro bicho mais sábio...',
  'Desenterrando uma curiosidade...',
  'Correndo atrás da informação...',
  'Aguardando o especialista parar de latir...',
  'Checando o manual das espécies...',
  'Farejando pelos e pelagens...',
];

// ===== STATE =====
let tema = '';
let historico = JSON.parse(localStorage.getItem('bicharIA-historico') || '[]');

// ===== FILTRO DE TEMA =====
function setTag(el, t) {
  document.querySelectorAll('.tag').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  tema = t;
}

// ===== ATALHO DE ANIMAL =====
function go(txt) {
  document.getElementById('q').value = txt;
  ask();
}

// ===== MENSAGEM ALEATÓRIA DE LOADING =====
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

  if (historico.length === 0) {
    wrap.style.display = 'none';
    return;
  }

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

// ===== BUSCA FOTO DO ANIMAL =====
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

    if (match.type === 'rabbit') {
      // Busca foto dinâmica via backend (Unsplash API — key segura no servidor)
      const res = await fetch(`/api/photo?query=${encodeURIComponent(match.query)}`);
      const data = await res.json();
      return data.url || null;
    }

    if (match.type === 'cat') {
      // Busca foto dinâmica via backend (Unsplash API — key segura no servidor)
      const res = await fetch(`/api/photo?query=${encodeURIComponent(match.query)}`);
      const data = await res.json();
      return data.url || null;
    }
  } catch { return null; }

  return null;
}

// ===== CHAMADA AO BACKEND (/api/chat) =====
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

  const [photoUrl, backendResponse] = await Promise.allSettled([
    fetchAnimalPhoto(q),
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta: q, tema })
    })
  ]);

  try {
    const data = await backendResponse.value.json();
    if (data.error) throw new Error(data.error);

    const texto = data.texto || 'Não foi possível obter uma resposta.';
    const foto = photoUrl.status === 'fulfilled' ? photoUrl.value : null;

    card.innerHTML = `
      <div class="answer-label">🐾 BicharIA</div>
      ${foto ? `<div class="dog-photo-wrap"><img src="${foto}" alt="Foto do animal" class="dog-photo" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="answer-inner">${texto.replace(/\n/g, '<br>')}</div>
      <div class="answer-actions">
        <button class="action-btn" id="btn-copiar" onclick="copiarResposta()">📋 Copiar</button>
      </div>
    `;
  } catch (err) {
    card.innerHTML = `
      <div style="color:#E8825A; font-size:14px;">
        ⚠️ Erro: ${err.message || 'Não foi possível conectar. Verifique sua chave e conexão.'}
      </div>
    `;
  }

  input.value = '';
}

// ===== SETAS DE NAVEGAÇÃO =====
function scrollBreeds(direction) {
  scrollStrip('breeds-strip', direction);
}

function scrollStrip(id, direction) {
  const strip = document.getElementById(id);
  if (!strip) return;
  strip.scrollBy({ left: direction * (96 + 10) * 3, behavior: 'smooth' });
  setTimeout(() => updateStripArrows(id), 350);
}

function updateStripArrows(id) {
  const strip = document.getElementById(id);
  if (!id === 'breeds-strip') return;
  const btnLeft  = document.getElementById('arrow-left');
  const btnRight = document.getElementById('arrow-right');
  if (!strip || !btnLeft || !btnRight) return;
  btnLeft.disabled  = strip.scrollLeft <= 0;
  btnRight.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
}

function updateArrows() {
  updateStripArrows('breeds-strip');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateArrows();
  document.getElementById('breeds-strip')?.addEventListener('scroll', updateArrows);
  renderHistorico();
});