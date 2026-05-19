// ===== BREED MAP =====
const BREED_MAP = {
  'golden retriever':{'type':'dog','slug':'retriever/golden'},'husky siberiano':{'type':'dog','slug':'husky'},
  'bulldog francês':{'type':'dog','slug':'bulldog/french'},'shiba inu':{'type':'dog','slug':'shiba'},
  'border collie':{'type':'dog','slug':'collie/border'},'dachshund':{'type':'dog','slug':'dachshund'},
  'poodle':{'type':'dog','slug':'poodle'},'akita inu':{'type':'dog','slug':'akita'},
  'labrador':{'type':'dog','slug':'labrador'},'beagle':{'type':'dog','slug':'beagle'},
  'boxer':{'type':'dog','slug':'boxer'},'chihuahua':{'type':'dog','slug':'chihuahua'},
  'dálmata':{'type':'dog','slug':'dalmatian'},'doberman':{'type':'dog','slug':'doberman'},
  'rottweiler':{'type':'dog','slug':'rottweiler'},'maltês':{'type':'dog','slug':'maltese'},
  'pug':{'type':'dog','slug':'pug'},'samoyed':{'type':'dog','slug':'samoyed'},
  'pastor alemão':{'type':'dog','slug':'germanshepherd'},'malinois':{'type':'dog','slug':'malinois'},
  'pitbull':{'type':'dog','slug':'pitbull'},'yorkshire':{'type':'dog','slug':'terrier/yorkshire'},
  'spitz alemão':{'type':'dog','slug':'pomeranian'},'chow chow':{'type':'dog','slug':'chow'},
  'cocker spaniel':{'type':'dog','slug':'spaniel/cocker'},'whippet':{'type':'dog','slug':'whippet'},
  'greyhound':{'type':'dog','slug':'greyhound'},'weimaraner':{'type':'dog','slug':'weimaraner'},
  'basset hound':{'type':'dog','slug':'hound/basset'},'shih tzu':{'type':'dog','slug':'shihtzu'},
  'pinscher':{'type':'dog','slug':'pinscher/miniature'},'pequinês':{'type':'dog','slug':'pekinese'},
  'schnauzer':{'type':'dog','slug':'schnauzer/miniature'},'corgi':{'type':'dog','slug':'corgi/cardigan'},
  'são bernardo':{'type':'dog','slug':'stbernard'},'australian shepherd':{'type':'dog','slug':'australian/shepherd'},
  'bull terrier':{'type':'dog','slug':'bullterrier/english'},'jack russell':{'type':'dog','slug':'terrier/russell'},
  'lhasa apso':{'type':'dog','slug':'lhasa'},'vizsla':{'type':'dog','slug':'vizsla'},
  'scottish terrier':{'type':'dog','slug':'terrier/scottish'},'lobo guará':{'type':'dog','slug':null},
  'persa':{'type':'cat','query':'persian cat'},
  // FIX #4: chave 'maine coon' duplicada removida — mantida apenas uma entrada
  'maine coon':{'type':'cat','query':'maine coon cat'},'siamês':{'type':'cat','query':'siamese cat'},
  'ragdoll':{'type':'cat','query':'ragdoll cat'},'sphynx':{'type':'cat','query':'sphynx cat'},
  'bengal':{'type':'cat','query':'bengal cat'},'british shorthair':{'type':'cat','query':'british shorthair cat'},
  'scottish fold':{'type':'cat','query':'scottish fold cat'},'abissínio':{'type':'cat','query':'abyssinian cat'},
  'devon rex':{'type':'cat','query':'devon rex cat'},'bombay':{'type':'cat','query':'bombay cat'},
  'cavalo árabe':{'type':'other','query':'arabian horse'},'mustang':{'type':'other','query':'mustang wild horse'},
  'frísio':{'type':'other','query':'friesian horse black'},'appaloosa':{'type':'other','query':'appaloosa horse'},
  'lusitano':{'type':'other','query':'lusitano horse'},'clydesdale':{'type':'other','query':'clydesdale horse'},
  'mangalarga marchador':{'type':'other','query':'mangalarga marchador horse'},'campolina':{'type':'other','query':'campolina horse'},
  'cavalo':{'type':'other','query':'beautiful horse nature'},'shetland':{'type':'other','query':'shetland pony'},
  'holland lop':{'type':'rabbit','query':'holland lop rabbit'},'lionhead':{'type':'rabbit','query':'lionhead rabbit'},
  'flemish giant':{'type':'rabbit','query':'flemish giant rabbit'},'mini rex':{'type':'rabbit','query':'mini rex rabbit'},
  'capivara':{'type':'capybara','query':'capybara nature'},'iguana':{'type':'other','query':'green iguana'},
  'calopsita':{'type':'other','query':'cockatiel bird'},'arara azul':{'type':'other','query':'blue macaw bird'},
};

// ===== CALENDÁRIO =====
const CALENDARIO = [
  {mes:1,dia:1,emoji:'🐾',nome:'Ano Novo Animal',desc:'Celebração global com os pets!'},
  {mes:4,dia:4,emoji:'🐱',nome:'Dia Internacional do Gato',desc:'Celebração dos felinos!'},
  {mes:4,dia:22,emoji:'🌿',nome:'Dia da Terra',desc:'Proteção dos habitats naturais.'},
  {mes:6,dia:5,emoji:'🌱',nome:'Dia do Meio Ambiente',desc:'Proteção dos ecossistemas e fauna.'},
  {mes:7,dia:14,emoji:'🐋',nome:'Dia Mundial do Golfinho',desc:'Conscientização sobre mamíferos marinhos.'},
  {mes:8,dia:8,emoji:'🐈',nome:'Dia Internacional do Gato (ONU)',desc:'Dia oficial da ONU para os gatos!'},
  {mes:8,dia:12,emoji:'🐘',nome:'Dia Mundial do Elefante',desc:'Proteção dos elefantes.'},
  {mes:9,dia:28,emoji:'🐕',nome:'Dia Mundial do Cão',desc:'Celebre o melhor amigo do homem!'},
  {mes:10,dia:4,emoji:'🐾',nome:'Dia Mundial dos Animais',desc:'A data mais importante do mundo animal!'},
  {mes:11,dia:6,emoji:'🐎',nome:'Dia do Cavalo',desc:'Homenagem ao nobre equino brasileiro.'},
  {mes:11,dia:15,emoji:'🐆',nome:'Dia da Fauna Brasileira',desc:'Celebração da biodiversidade do Brasil.'},
  {mes:12,dia:25,emoji:'🎁',nome:'Natal dos Pets',desc:'Não esqueça do presente para o bichinho!'},
];

const LOADING_MSGS = [
  'Farejando a resposta...','Consultando o especialista animal...',
  'Latindo para o servidor...','Buscando no arquivo de patinhas...',
  'Perguntando pro bicho mais sábio...','Desenterrando uma curiosidade...',
];

// ===== STATE =====
let tema = '';
let modoVet = false;
// historicoSidebar: strings das perguntas recentes (exibidas no sidebar)
let historicoSidebar = JSON.parse(localStorage.getItem('bicharIA-historico') || '[]');
// historicoConversa: array {role, content} enviado ao backend para contexto conversacional
let historicoConversa = [];
let favoritos = JSON.parse(localStorage.getItem('bicharIA-favoritos') || '[]');

// Cache de respostas indexado por pergunta
const respostasCache = new Map();
// Fila auxiliar de chaves para evitar iterator no Map (PERF #5)
const respostasCacheKeys = [];

// PERF #1: Map pré-construído para lookup O(1) em vez de Object.entries O(n)
const BREED_LOOKUP = new Map(Object.entries(BREED_MAP));

// PERF #2: HTML do calendário cacheado — só gera uma vez
let _calendarioHTML = null;

// ===== ONBOARDING =====
function fecharOnboarding() {
  const el = document.getElementById('onboarding');
  if (el) el.style.display = 'none';
  localStorage.setItem('bicharIA-onboarding', 'true');
  setTimeout(carregarCuriosidade, 600);
}

function verificarOnboarding() {
  const el = document.getElementById('onboarding');
  if (!el) return;
  if (!localStorage.getItem('bicharIA-onboarding')) {
    el.style.display = 'flex';
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.left = '0';
    el.style.right = '0';
    el.style.bottom = '0';
    el.style.background = 'rgba(0,0,0,.88)';
    el.style.zIndex = '9999';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.padding = '20px';
  } else {
    setTimeout(carregarCuriosidade, 800);
  }
}

// ===== CURIOSIDADE DO DIA =====
async function carregarCuriosidade() {
  const hoje = new Date().toDateString();
  const cache = JSON.parse(localStorage.getItem('bicharIA-curiosidade') || '{}');
  if (cache.data === hoje && cache.texto) {
    document.getElementById('curiosidade-texto').textContent = cache.texto;
    document.getElementById('modal-curiosidade').style.display = 'flex';
    return;
  }
  document.getElementById('curiosidade-texto').textContent = '🐾 Carregando...';
  document.getElementById('modal-curiosidade').style.display = 'flex';
  try {
    const res = await fetch('/api/chat', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({pergunta:'Me conta uma curiosidade animal incrível e pouco conhecida. Máximo 3 frases. Comece direto.', tema:'', historico:[]})
    });
    const data = await res.json();
    const texto = data.texto || 'Os polvos têm três corações! 🐙';
    document.getElementById('curiosidade-texto').textContent = texto;
    localStorage.setItem('bicharIA-curiosidade', JSON.stringify({data:hoje, texto}));
  } catch {
    document.getElementById('curiosidade-texto').textContent = 'Os cavalos conseguem dormir em pé! Possuem um mecanismo especial nas pernas que os impede de cair enquanto cochilam. 🐴';
  }
}

// ===== MODO VET =====
function toggleModoVet() {
  modoVet = document.getElementById('toggle-vet').checked;
  document.getElementById('vet-badge').style.display = modoVet ? 'inline-flex' : 'none';
  // UX/UI: borda verde no container quando ativo
  document.querySelector('.vet-toggle').classList.toggle('vet-ativo', modoVet);
}

// ===== FILTROS =====
// PERF #4: referência cacheada das tags para evitar querySelectorAll repetido
let _tagEls = null;
function setTag(el, t) {
  if (!_tagEls) _tagEls = document.querySelectorAll('.tag');
  _tagEls.forEach(x => x.classList.remove('on'));
  el.classList.add('on'); tema = t;
}

function go(txt) {
  document.getElementById('q').value = txt;
  ask();
  window.scrollTo({top:0, behavior:'smooth'});
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

// ===== SEÇÕES INLINE =====
function toggleSection(id) {
  const panel = document.getElementById('panel-' + id);
  const arrow = document.getElementById('arrow-' + id);
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ===== HISTÓRICO =====
function salvarHistorico(pergunta) {
  historicoSidebar = [pergunta, ...historicoSidebar.filter(h => h !== pergunta)].slice(0, 6);
  localStorage.setItem('bicharIA-historico', JSON.stringify(historicoSidebar));
  renderHistorico();
}

function limparHistorico() {
  historicoSidebar = [];
  historicoConversa = [];
  localStorage.removeItem('bicharIA-historico');
  renderHistorico();
}

function renderHistorico() {
  const wrap = document.getElementById('historico-wrap');
  const lista = document.getElementById('historico-lista');
  if (!wrap || !lista) return;
  if (historicoSidebar.length === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';

  lista.innerHTML = historicoSidebar.map(h => {
    const label = h.length > 40 ? h.slice(0, 40) + '…' : h;
    return `<span class="hist-pill" data-pergunta="${h.replace(/"/g,'&quot;')}">🕐 ${label}</span>`;
  }).join('');

  lista.querySelectorAll('.hist-pill').forEach(pill => {
    pill.addEventListener('click', () => go(pill.dataset.pergunta));
  });

  // Botão de limpar — recria sempre para evitar listeners duplicados
  const btnLimpar = document.getElementById('btn-limpar-historico');
  if (btnLimpar) {
    btnLimpar.replaceWith(btnLimpar.cloneNode(true));
    document.getElementById('btn-limpar-historico')
      .addEventListener('click', limparHistorico);
  }
}

// ===== FAVORITOS =====
// FIX #6: recebe texto e foto como parâmetros em vez de depender de globais soltos
function toggleFavorito(pergunta, btn) {
  const cache = respostasCache.get(pergunta) || {};
  const idx = favoritos.findIndex(f => f.pergunta === pergunta);
  if (idx >= 0) {
    favoritos.splice(idx, 1);
    if (btn) btn.textContent = '🤍 Favoritar';
  } else {
    favoritos.unshift({
      pergunta,
      texto: (cache.texto || '').slice(0, 300),
      foto: cache.foto || null,
      data: new Date().toLocaleDateString('pt-BR')
    });
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

  // FIX #3: onclick removido do HTML — usando data-attribute + addEventListener
  lista.innerHTML = favoritos.map((f, i) => `
    <div class="fav-item">
      ${f.foto ? `<img src="${f.foto}" class="fav-foto" onerror="this.style.display='none'">` : ''}
      <div class="fav-content">
        <div class="fav-pergunta">${f.pergunta.length > 60 ? f.pergunta.slice(0, 60) + '…' : f.pergunta}</div>
        <div class="fav-texto">${f.texto.slice(0, 100)}…</div>
        <div class="fav-actions">
          <span class="fav-data">${f.data}</span>
          <button class="action-btn" data-action="ver" data-pergunta="${f.pergunta.replace(/"/g,'&quot;')}">↗ Ver</button>
          <button class="action-btn" data-action="remover" data-index="${i}">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');

  lista.querySelectorAll('[data-action="ver"]').forEach(btn => {
    btn.addEventListener('click', () => {
      go(btn.dataset.pergunta);
      document.getElementById('modal-favoritos').style.display = 'none';
    });
  });
  lista.querySelectorAll('[data-action="remover"]').forEach(btn => {
    btn.addEventListener('click', () => removerFav(Number(btn.dataset.index)));
  });
}

function removerFav(i) {
  favoritos.splice(i, 1);
  localStorage.setItem('bicharIA-favoritos', JSON.stringify(favoritos));
  abrirFavoritos();
}

// ===== COMPARADOR =====
function abrirComparador() {
  compSelecionados = [];
  document.getElementById('modal-comparador').style.display = 'flex';
  renderCompSelecao();
}

let compSelecionados = [];
let _compEmAndamento = false; // FIX: guard contra duplo clique

// Escapa strings para inserção segura em HTML (FIX: XSS no comparador)
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCompSelecao() {
  const animais = ['Golden Retriever','Husky Siberiano','Bulldog Francês','Shiba Inu','Border Collie',
    'Poodle','Labrador','Beagle','Rottweiler','Pastor Alemão','Chihuahua','Pug','Yorkshire',
    'Maine Coon','Persa','Siamês','Ragdoll','British Shorthair','Bengal','Sphynx',
    'Cavalo Árabe','Mustang','Frísio','Appaloosa','Clydesdale',
    'Holland Lop','Lionhead','Flemish Giant','Capivara','Iguana','Calopsita'];
  document.getElementById('comparador-area').innerHTML = `
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">Selecione 2 animais para comparar:</p>
    <div class="comp-grid">
      ${animais.map(a => `<button class="comp-pill" id="cpill-${a.toLowerCase().replace(/ /g,'-')}" data-animal="${a}">${a}</button>`).join('')}
    </div>
    <div id="comp-sel" class="comp-selecionados"></div>
    <button class="tool-submit" id="btn-comparar" style="display:none;margin-top:1rem">⚡ Comparar agora</button>
  `;

  // FIX #3: onclick removido do HTML — eventos via addEventListener
  document.querySelectorAll('.comp-pill').forEach(pill => {
    pill.addEventListener('click', () => selecionarComp(pill.dataset.animal));
  });
  document.getElementById('btn-comparar').addEventListener('click', executarComp);
}

function selecionarComp(nome) {
  const idx = compSelecionados.indexOf(nome);
  const pill = document.getElementById('cpill-' + nome.toLowerCase().replace(/ /g, '-'));
  if (idx >= 0) { compSelecionados.splice(idx, 1); if (pill) pill.classList.remove('on'); }
  else {
    if (compSelecionados.length >= 2) return;
    compSelecionados.push(nome); if (pill) pill.classList.add('on');
  }
  document.getElementById('comp-sel').innerHTML = compSelecionados.map(s => `<span class="tag on">${s}</span>`).join(' <span>vs</span> ');
  document.getElementById('btn-comparar').style.display = compSelecionados.length === 2 ? 'block' : 'none';
}

async function executarComp() {
  if (_compEmAndamento) return; // FIX: guard contra duplo clique
  _compEmAndamento = true;
  const [a, b] = compSelecionados;
  document.getElementById('comparador-area').innerHTML = `<div style="color:var(--muted);font-size:14px;padding:1rem 0">⚡ Comparando ${escapeHtml(a)} vs ${escapeHtml(b)}...</div>`;
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pergunta: `Compare "${a}" e "${b}". Responda APENAS em JSON: {"animal1":"${a}","animal2":"${b}","categorias":[{"nome":"Porte","valor1":"ex","valor2":"ex"},{"nome":"Energia","valor1":"ex","valor2":"ex"},{"nome":"Temperamento","valor1":"ex","valor2":"ex"},{"nome":"Pelo","valor1":"ex","valor2":"ex"},{"nome":"Vida útil","valor1":"ex","valor2":"ex"},{"nome":"Ideal para","valor1":"ex","valor2":"ex"},{"nome":"Origem","valor1":"ex","valor2":"ex"}],"veredito":"frase resumo"}`,
        tema: '',
        historico: []
      })
    });
    const data = await res.json();
    const comp = JSON.parse(data.texto.replace(/```json|```/g, '').trim());
    // FIX: escapa todos os valores do JSON antes de inserir em innerHTML
    document.getElementById('comparador-area').innerHTML = `
      <div class="comp-header"><span class="comp-nome">${escapeHtml(comp.animal1)}</span><span style="color:var(--muted);font-size:12px">VS</span><span class="comp-nome">${escapeHtml(comp.animal2)}</span></div>
      <div class="comp-tabela">${comp.categorias.map(c => `<div class="comp-row"><span class="comp-val">${escapeHtml(c.valor1)}</span><span class="comp-label">${escapeHtml(c.nome)}</span><span class="comp-val">${escapeHtml(c.valor2)}</span></div>`).join('')}</div>
      <div class="comp-veredito">💡 ${escapeHtml(comp.veredito)}</div>
      <button class="simple-btn-outline" id="btn-nova-comp" style="margin-top:.75rem">↩ Nova comparação</button>
    `;
    document.getElementById('btn-nova-comp').addEventListener('click', renderCompSelecao);
  } catch (e) {
    document.getElementById('comparador-area').innerHTML = '<div style="color:var(--accent2);font-size:14px">Erro ao comparar. Tente novamente.</div>';
  } finally {
    _compEmAndamento = false; // FIX: libera guard independente do resultado
  }
}

// ===== CALCULADORA =====
async function calcularRacao() {
  const especie  = document.getElementById('calc-especie').value;
  const raca     = document.getElementById('calc-raca').value.trim();
  const peso     = document.getElementById('calc-peso').value.trim();
  const idade    = document.getElementById('calc-idade').value.trim();
  const castrado = document.getElementById('calc-castrado').value;
  const res_div  = document.getElementById('calc-resultado');
  if (!peso || !idade) { res_div.textContent = 'Preencha peso e idade!'; res_div.classList.add('show'); return; }
  res_div.innerHTML = '🐾 Calculando...'; res_div.classList.add('show');
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pergunta: `Calcule ração diária para: espécie:${especie}, raça:${raca || 'não informada'}, peso:${peso}kg, idade:${idade}, castrado:${castrado}. Responda em português com: quantidade diária em gramas, número de refeições, horários e 1 dica nutricional. Use tópicos com emojis.`,
        tema: 'alimentação',
        historico: []
      })
    });
    const data = await res.json();
    res_div.innerHTML = data.texto.replace(/\n/g, '<br>');
  } catch { res_div.textContent = 'Erro ao calcular. Tente novamente.'; }
}

// ===== VACINAÇÃO =====
async function gerarGuiaVacina() {
  const especie = document.getElementById('vacina-especie').value;
  const local   = document.getElementById('vacina-local').value;
  const idade   = document.getElementById('vacina-idade').value.trim();
  const res_div = document.getElementById('vacina-resultado');
  if (!idade) { res_div.textContent = 'Informe a idade do animal!'; res_div.classList.add('show'); return; }
  res_div.innerHTML = '💉 Gerando guia...'; res_div.classList.add('show');
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pergunta: `Guia de vacinação para: ${especie}, ${idade}, ${local}. Liste vacinas obrigatórias e opcionais, quando tomar, reforços e alertas. Use emojis e formato de calendário. Recomende sempre consultar veterinário.`,
        tema: 'saúde',
        historico: []
      })
    });
    const data = await res.json();
    res_div.innerHTML = data.texto.replace(/\n/g, '<br>');
  } catch { res_div.textContent = 'Erro ao gerar guia. Tente novamente.'; }
}

// ===== EXPECTATIVA DE VIDA =====
async function calcularVida() {
  const especie = document.getElementById('vida-especie').value;
  const raca    = document.getElementById('vida-raca').value.trim();
  const idade   = document.getElementById('vida-idade').value.trim();
  const res_div = document.getElementById('vida-resultado');
  if (!idade) { res_div.textContent = 'Informe a idade atual do animal!'; res_div.classList.add('show'); return; }
  res_div.innerHTML = '🐾 Calculando...'; res_div.classList.add('show');
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pergunta: `Expectativa de vida para: espécie:${especie}, raça:${raca || 'não informada'}, idade atual:${idade}. Responda com: 1) expectativa de vida média da raça/espécie em anos, 2) fase de vida atual (filhote, jovem, adulto, meia-idade, sênior, geriátrico) com faixa etária de cada fase, 3) quanto tempo estimado de vida ainda tem pela frente, 4) cuidados essenciais e mudanças recomendadas para a fase atual. Use emojis e seja caloroso e encorajador.`,
        tema: 'saúde',
        historico: []
      })
    });
    const data = await res.json();
    res_div.innerHTML = data.texto.replace(/\n/g, '<br>');
  } catch { res_div.textContent = 'Erro ao calcular. Tente novamente.'; }
}

// ===== PODE COMER? =====
async function verificarAlimento() {
  const especie  = document.getElementById('comer-especie').value;
  const alimento = document.getElementById('comer-alimento').value.trim();
  const res_div  = document.getElementById('comer-resultado');
  if (!alimento) { res_div.textContent = 'Informe o alimento!'; res_div.classList.add('show'); return; }
  res_div.innerHTML = '🔍 Verificando...'; res_div.classList.add('show');
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pergunta: `${especie} pode comer "${alimento}"? Responda com: 1) veredicto claro iniciando com ✅ SEGURO, ⚠️ COM MODERAÇÃO ou 🚫 TÓXICO/PERIGOSO em negrito, 2) explicação do motivo em 2-3 frases, 3) se tóxico: sintomas de intoxicação e o que fazer em caso de ingestão, 4) se seguro: quantidade recomendada e forma de preparo ideal. Seja direto e prático.`,
        tema: 'alimentação',
        historico: []
      })
    });
    const data = await res.json();
    res_div.innerHTML = data.texto.replace(/\n/g, '<br>');
  } catch { res_div.textContent = 'Erro ao verificar. Tente novamente.'; }
}

// ===== CALENDÁRIO =====
// PERF #2: gera e cacheia o HTML do calendário uma única vez por sessão
function abrirCalendario() {
  const modal = document.getElementById('modal-calendario');
  const lista = document.getElementById('calendario-lista');
  modal.style.display = 'flex';

  if (_calendarioHTML) {
    lista.innerHTML = _calendarioHTML;
    return;
  }

  const hoje = new Date();
  const sorted = [...CALENDARIO].sort((a, b) => {
    const da = new Date(hoje.getFullYear(), a.mes - 1, a.dia);
    const db = new Date(hoje.getFullYear(), b.mes - 1, b.dia);
    if (da < hoje) da.setFullYear(hoje.getFullYear() + 1);
    if (db < hoje) db.setFullYear(hoje.getFullYear() + 1);
    return da - db;
  });
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  _calendarioHTML = sorted.map(e => {
    const d = new Date(hoje.getFullYear(), e.mes - 1, e.dia);
    const isHoje = d.getDate() === hoje.getDate() && d.getMonth() === hoje.getMonth();
    return `<div class="cal-item ${isHoje ? 'cal-item--hoje' : ''}">
      <div class="cal-data"><span class="cal-dia">${String(e.dia).padStart(2, '0')}</span><span class="cal-mes">${meses[e.mes - 1]}</span></div>
      <div class="cal-info"><span class="cal-emoji">${e.emoji}</span>
        <div><div class="cal-nome">${e.nome}${isHoje ? '<span class="cal-hoje-badge">Hoje!</span>' : ''}</div><div class="cal-desc">${e.desc}</div></div>
      </div></div>`;
  }).join('');
  lista.innerHTML = _calendarioHTML;
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

// ===== FOTO =====
// PERF #1: usa BREED_LOOKUP (Map) em vez de Object.entries a cada chamada
async function fetchAnimalPhoto(pergunta) {
  const lower = pergunta.toLowerCase();
  let match = null;
  for (const [nome, info] of BREED_LOOKUP) {
    if (lower.includes(nome)) { match = info; break; }
  }
  if (!match) return null;
  try {
    if (match.type === 'dog' && match.slug) {
      const res = await fetch(`https://dog.ceo/api/breed/${match.slug}/images/random`);
      const data = await res.json();
      return data.status === 'success' ? data.message : null;
    }
    if (['cat', 'rabbit', 'capybara', 'other'].includes(match.type)) {
      const res = await fetch(`/api/photo?query=${encodeURIComponent(match.query)}`);
      const data = await res.json();
      return data.url || null;
    }
  } catch (err) {
    console.warn('[fetchAnimalPhoto] falhou:', err.message);
    return null;
  }
  return null;
}

// ===== COMPARTILHAR =====
function abrirShare(pergunta) {
  const cache = respostasCache.get(pergunta) || {};
  const modal = document.getElementById('modal-share');
  const foto  = document.getElementById('share-foto');
  const texto = document.getElementById('share-texto');
  if (!modal || !cache.texto) return;
  if (cache.foto) { foto.src = cache.foto; foto.style.display = 'block'; }
  else { foto.style.display = 'none'; }
  texto.textContent = cache.texto.slice(0, 280) + (cache.texto.length > 280 ? '...' : '');
  modal.style.display = 'flex';
}

function fecharShare() {
  const modal = document.getElementById('modal-share');
  if (modal) modal.style.display = 'none';
}

async function copiarShareText() {
  const texto = document.getElementById('share-texto').textContent;
  await navigator.clipboard.writeText(texto + '\n\n🐾 bicharIA.vercel.app');
  const btn = document.getElementById('btn-share-copiar');
  if (btn) { btn.textContent = '✅ Copiado!'; setTimeout(() => { btn.textContent = '📋 Copiar texto'; }, 2000); }
}

// ===== CHAMADA PRINCIPAL =====
// PERF #3: flag para evitar requisições duplas por cliques/Enter rápidos
let _askEmAndamento = false;

async function ask() {
  if (_askEmAndamento) return;
  const input = document.getElementById('q');
  const q = input.value.trim();
  if (!q) return;
  _askEmAndamento = true;
  salvarHistorico(q);
  const card = document.getElementById('card');
  card.className = 'answer-card active';
  // UX/UI: skeleton loader em vez de 3 pontos simples
  card.innerHTML = `
    <div class="answer-label"><span class="dot"></span> ${randomLoadingMsg()}</div>
    <div class="skeleton-wrap">
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>`;

  const temaFinal = modoVet
    ? 'Responda como veterinário clínico especialista. Use terminologia técnica e nomenclatura científica quando relevante. Apresente possíveis causas, diagnóstico diferencial e quando o caso é urgência ou emergência. Indique claramente se o sintoma exige atendimento imediato. Seja preciso, objetivo e sempre recomende consulta presencial com médico veterinário.'
    : (tema ? `Foque especialmente em ${tema}.` : '');

  // FIX: historico conversacional real enviado ao backend
  const [photoUrl, backendRes] = await Promise.allSettled([
    fetchAnimalPhoto(q),
    fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ pergunta: q, tema: temaFinal, historico: historicoConversa })
    })
  ]);

  try {
    // FIX #1: verificação explícita de Promise rejeitada antes de acessar .value
    if (backendRes.status === 'rejected') {
      throw new Error('Falha na conexão com o servidor. Tente novamente.');
    }

    const data = await backendRes.value.json();
    if (data.error) throw new Error(data.error);

    const texto = data.texto || 'Não foi possível obter uma resposta.';
    const foto  = photoUrl.status === 'fulfilled' ? photoUrl.value : null;

    // Atualiza histórico conversacional (mantém últimas 10 trocas = 20 mensagens)
    historicoConversa.push({ role: 'user', content: q });
    historicoConversa.push({ role: 'assistant', content: texto });
    if (historicoConversa.length > 20) historicoConversa = historicoConversa.slice(-20);

    // Armazena no cache e mantém fila de chaves para LRU simples (PERF #5)
    respostasCache.set(q, { texto, foto });
    respostasCacheKeys.push(q);
    if (respostasCacheKeys.length > 20) {
      respostasCache.delete(respostasCacheKeys.shift());
    }

    const isFav = favoritos.some(f => f.pergunta === q);

    // FIX #3: onclicks removidos do HTML — botões recebem eventos via addEventListener abaixo
    card.innerHTML = `
      <div class="answer-label">🐾 BicharIA${modoVet ? ' <span style="font-size:10px;background:rgba(63,182,139,.2);color:#3FB68B;padding:2px 8px;border-radius:999px;border:1px solid rgba(63,182,139,.4)">🩺 Vet</span>' : ''}</div>
      ${foto ? `<div class="dog-photo-wrap"><img src="${foto}" alt="Foto" class="dog-photo" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="answer-inner">${texto.replace(/\n/g, '<br>')}</div>
      <div class="answer-actions">
        <button class="action-btn" id="btn-fav">${isFav ? '❤️ Favoritado' : '🤍 Favoritar'}</button>
        <button class="action-btn" id="btn-share">📤 Compartilhar</button>
        <button class="action-btn" id="btn-copiar">📋 Copiar</button>
      </div>`;

    const btnFav = document.getElementById('btn-fav');
    btnFav.addEventListener('click', () => toggleFavorito(q, btnFav));

    document.getElementById('btn-share').addEventListener('click', () => abrirShare(q));
    document.getElementById('btn-copiar').addEventListener('click', copiarResposta);

  } catch (err) {
    card.innerHTML = `<div style="color:#E8825A;font-size:14px">⚠️ Erro: ${err.message}</div>`;
  } finally {
    _askEmAndamento = false; // PERF #3: libera o guard independente do resultado
    input.value = ''; // FIX: limpa o input sempre, independente de erro
  }
}

// ===== RIPPLE NOS TOOL BUTTONS =====
// UX/UI: efeito de onda no clique dos botões da toolbar
function addRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top  = `${e.clientY - rect.top  - radius}px`;
  circle.classList.add('ripple');
  btn.querySelector('.ripple')?.remove();
  btn.appendChild(circle);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Carrega historico do sidebar a partir do localStorage
  historicoSidebar = JSON.parse(localStorage.getItem('bicharIA-historico') || '[]');
  renderHistorico();
  verificarOnboarding();

  // FIX: event listeners dos modais em vez de onclick inline no HTML
  document.getElementById('btn-onboarding-ok')?.addEventListener('click', fecharOnboarding);
  document.getElementById('btn-fechar-curiosidade')?.addEventListener('click', () => {
    document.getElementById('modal-curiosidade').style.display = 'none';
  });
  document.getElementById('btn-fechar-favoritos')?.addEventListener('click', () => {
    document.getElementById('modal-favoritos').style.display = 'none';
  });
  document.getElementById('btn-fechar-comparador')?.addEventListener('click', () => {
    document.getElementById('modal-comparador').style.display = 'none';
  });
  document.getElementById('btn-fechar-calendario')?.addEventListener('click', () => {
    document.getElementById('modal-calendario').style.display = 'none';
  });
  document.getElementById('btn-share-copiar')?.addEventListener('click', copiarShareText);
  document.getElementById('btn-fechar-share')?.addEventListener('click', fecharShare);

  // Aplica ripple em todos os tool-btn
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', addRipple);
  });
});