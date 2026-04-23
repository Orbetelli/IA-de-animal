# 🐾 BicharIA — Sua IA do mundo animal

Uma inteligência artificial especialista em animais domésticos e selvagens, com interface elegante e respostas geradas pelo modelo **LLaMA 3.3 70B** via Groq API.

🔗 **Acesse:** https://ia-de-animal.vercel.app/

---

## ✨ Funcionalidades

- 🤖 **IA especialista** em raças, comportamento, alimentação, habitat e saúde animal
- 🐕 **Carrossel de cães** com 13 raças — fotos dinâmicas por raça
- 🐇 **Carrossel de coelhos** com 9 raças — fotos dinâmicas por raça
- 🐆 **Seção de lebres** — Lebre Europeia e Lebre Belga
- 🏷️ **Filtros por tema** — Raças, Comportamento, Alimentação, Habitat, Saúde
- 🕐 **Histórico de perguntas** salvo localmente no navegador
- 📋 **Copiar resposta** com um clique
- 🔒 **Backend seguro** — as chaves das APIs nunca ficam expostas no frontend

---

## 🛠️ Tecnologias e integrações

| Tecnologia | Uso |
|---|---|
| HTML + CSS + JS | Frontend puro |
| Groq API — LLaMA 3.3 70B | Motor de IA para respostas |
| Dog CEO API | Fotos dinâmicas de cães por raça |
| Unsplash API | Fotos dinâmicas de coelhos e lebres |
| Vercel Serverless Functions | Backend seguro para as APIs |
| GitHub | Versionamento do código |

---

## 📁 Estrutura do projeto

```
BicharIA/
├── api/
│   ├── chat.js        # Serverless Function — integração com Groq
│   └── photo.js       # Serverless Function — integração com Unsplash
├── index.html         # Interface principal
├── style.css          # Estilos
├── app.js             # Lógica do frontend
├── .env               # Variáveis de ambiente (local, não sobe pro GitHub)
├── .gitignore
└── README.md
```

---

## 🐾 Animais disponíveis

**Cães:** Golden Retriever, Husky Siberiano, Bulldog Francês, Shiba Inu, Border Collie, Dachshund, Poodle, Akita Inu, Lobo Guará, Labrador, Beagle, Rottweiler, Samoyed

**Coelhos:** Holland Lop, Rex, Angorá, Mini Rex, Lionhead, New Zealand, Flemish Giant, Dutch, Californian

**Lebres:** Lebre Europeia, Lebre Belga

---

## 👤 Autor

Feito com 🐾 por **Orbetelli** — com ajuda do Claude AI