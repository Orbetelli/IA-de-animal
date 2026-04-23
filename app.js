// ===== MAPA DE RAÇAS (nome exibido → slug da Dog CEO API) =====
const BREED_MAP = {
  'golden retriever':   'retriever/golden',
  'husky siberiano':    'husky',
  'bulldog francês':    'bulldog/french',
  'shiba inu':          'shiba',
  'border collie':      'collie/border',
  'dachshund':          'dachshund',
  'poodle':             'poodle',
  'akita inu':          'akita',
  'labrador':           'labrador',
  'beagle':             'beagle',
  'boxer':              'boxer',
  'chihuahua':          'chihuahua',
  'dalmatian':          'dalmatian',
  'doberman':           'doberman',
  'rottweiler':         'rottweiler',
  'maltese':            'maltese',
  'pug':                'pug',
  'samoyed':            'samoyed',
  'lobo guará':         null,
};

// ===== MENSAGENS DE LOADING DIVERTIDAS =====
const LOADING_MSGS = [
  'Farejando a resposta...',
  'Consultando o especialista canino...',
  'Latindo para o servidor...',
  'Buscando no arquivo de patinhas...',
  'Perguntando pro cachorro mais sábio...',
  'Desenterrando uma curiosidade...',
  'Correndo atrás da informação...',
  'Aguardando o especialista parar de latir...',
  'Checando o manual de raças...',
];

// ===== STATE =====
let tema = '';
let historico = JSON.parse(localStorage.getItem('ia-canina-historico') || '[]');

// ===== FILTRO DE TEMA =====
function setTag(el, t) {
  document.querySelectorAll('.tag').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  tema = t;
}

// ===== ATALHO DE RAÇA =====
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
  localStorage.setItem('ia-canina-historico', JSON.stringify(historico));
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

// ===== BUSCA FOTO NA DOG CEO API =====
async function fetchDogPhoto(pergunta) {
  const lower = pergunta.toLowerCase();
  let slug = null;
  for (const [nome, breedSlug] of Object.entries(BREED_MAP)) {
    if (lower.includes(nome)) { slug = breedSlug; break; }
  }
  if (!slug) return null;
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${slug}/images/random`);
    const data = await res.json();
    return data.status === 'success' ? data.message : null;
  } catch { return null; }
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
    fetchDogPhoto(q),
    // ✅ Agora chama o backend seguro, sem expor a chave no browser
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
      <div class="answer-label">🐾 IA Canina</div>
      ${foto ? `<div class="dog-photo-wrap"><img src="${foto}" alt="Foto da raça" class="dog-photo" onerror="this.parentElement.style.display='none'"></div>` : ''}
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

// ===== SETAS DE NAVEGAÇÃO DAS RAÇAS =====
function scrollBreeds(direction) {
  const strip = document.getElementById('breeds-strip');
  strip.scrollBy({ left: direction * (96 + 10) * 3, behavior: 'smooth' });
  setTimeout(updateArrows, 350);
}

function updateArrows() {
  const strip = document.getElementById('breeds-strip');
  const btnLeft  = document.getElementById('arrow-left');
  const btnRight = document.getElementById('arrow-right');
  if (!strip || !btnLeft || !btnRight) return;
  btnLeft.disabled  = strip.scrollLeft <= 0;
  btnRight.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateArrows();
  document.getElementById('breeds-strip')?.addEventListener('scroll', updateArrows);
  renderHistorico();
});