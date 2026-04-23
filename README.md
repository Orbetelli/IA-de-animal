# 🐾 IA Canina — Do pelo ao instinto

Uma inteligência artificial especialista em cães e canídeos selvagens, com interface elegante e respostas geradas pelo modelo **LLaMA 3.3 70B** via **Groq API**.

![Status](https://img.shields.io/badge/status-online-brightgreen)
![Vercel](https://img.shields.io/badge/deploy-Vercel-black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Funcionalidades

- 🤖 **IA especialista** em raças, comportamento, alimentação, habitat e saúde canina
- 🐕 **Explorador de raças** com atalhos rápidos para 13+ raças
- 📸 **Fotos automáticas** das raças via Dog CEO API
- 🏷️ **Filtros por tema** — Raças, Comportamento, Alimentação, Habitat, Saúde
- 🕐 **Histórico de perguntas** salvo localmente no navegador
- 📋 **Copiar resposta** com um clique
- 🔒 **Backend seguro** — a chave da API nunca fica exposta no frontend

---

## 🚀 Deploy

O projeto está hospedado na **Vercel** com Serverless Functions para proteger as chaves de API.

🔗 **Acesse:** [ia-de-animal.vercel.app](https://ia-de-animal.vercel.app)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML + CSS + JS | Frontend puro |
| [Groq API](https://console.groq.com) | IA (LLaMA 3.3 70B) |
| [Dog CEO API](https://dog.ceo/dog-api/) | Fotos das raças |
| Vercel Serverless Functions | Backend seguro |
| GitHub | Versionamento |

---

## 📁 Estrutura do projeto

```
IA AUAU/
├── api/
│   └── chat.js        # Serverless Function — chama a Groq com segurança
├── index.html         # Interface principal
├── style.css          # Estilos
├── app.js             # Lógica do frontend
├── .env               # Variáveis de ambiente (local, não sobe pro GitHub)
├── .gitignore
└── README.md
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Conta na [Groq](https://console.groq.com) para obter uma API key gratuita

### Passo a passo

**1. Clone o repositório:**
```bash
git clone https://github.com/Orbetelli/IA-de-animal.git
cd IA-de-animal
```

**2. Crie o arquivo `.env` na raiz:**
```
GROQ_API_KEY=sua_chave_aqui
```

**3. Instale a Vercel CLI e rode localmente:**
```bash
npm install -g vercel
vercel dev
```

**4. Acesse no navegador:**
```
http://localhost:3000
```

---

## 🔐 Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `GROQ_API_KEY` | Chave da API Groq — obtenha em [console.groq.com](https://console.groq.com) |

> ⚠️ Nunca commite sua chave no GitHub. O arquivo `.env` já está no `.gitignore`.

---

## 👤 Autor

Feito com 🐾 por **Orbetelli** — com ajuda do Claude AI

---
