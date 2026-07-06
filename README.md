# S.A. Final — Refatoração + React Router + Testes (RTL)

Repositório da S.A. Final da UC Teste de Sistemas (curso DESI, SENAI). Reúne **7 versões temáticas** da mesma atividade — mesma arquitetura e mesmo desafio, muda só o tema. Cada grupo (de **3 pessoas**) pega **uma versão** e trabalha nela.

## A atividade (igual em todas as versões)

Um app React com **30 peças** (**25 componentes** + **5 páginas**) que funciona por dentro, mas chegou bagunçado, sem rotas montadas e sem nenhum teste. São quatro etapas:

1. **Rodar e diagnosticar** — instalar, tentar rodar e entender os problemas.
2. **Fazer a loja montar** — completar os imports do `App.jsx` (React Router + páginas + layout).
3. **Organizar as pastas** — 25 componentes em `src/components/` e 5 páginas em `src/pages/`.
4. **Proteger com testes** — um `.test.jsx` co-localizado para cada um dos 25 componentes, cobrindo os 3 tipos: só aparece · reage ao usuário · avisa o pai.

As etapas 1 a 3 o grupo faz junto; a etapa 4 é dividida entre as 3 pessoas (9, 8 e 8 componentes). O detalhe de cada versão está no `ENUNCIADO.html` dela.

## Baixar e rodar

```bash
# baixa o repositório
git clone https://github.com/jhonatanwll/sa-final-teste-sistemas.git
cd sa-final-teste-sistemas/versoes/01-loja-virtual   # ou a versão do seu grupo

npm install                  # instala tudo
npm run api                  # opcional: sobe o json-server (http://localhost:3001)
npm run dev                  # sobe a aplicação
npm test                     # roda os testes
```

Requer **Node 20+**. O `ENUNCIADO.html` de cada versão traz o passo a passo completo.

## As 7 versões

| Pasta | Tema | Nome fictício da loja |
|---|---|---|
| [`versoes/01-loja-virtual`](versoes/01-loja-virtual) | Loja virtual (variedades) | "Loja Virtual" |
| [`versoes/02-livraria`](versoes/02-livraria) | Livraria / sebo | "Página Viva" |
| [`versoes/03-games`](versoes/03-games) | Loja de games | "PixelPlay" |
| [`versoes/04-delivery`](versoes/04-delivery) | Delivery de comida | "Sabor Express" |
| [`versoes/05-plantas`](versoes/05-plantas) | Loja de plantas | "Raiz & Folha" |
| [`versoes/06-vinis`](versoes/06-vinis) | Loja de discos de vinil | "Giradiscos" |
| [`versoes/07-petshop`](versoes/07-petshop) | Pet shop | "Patas & Cia" |

Todas têm os mesmos nomes de arquivo, componentes e tipos de teste — muda só o tema (nome da loja, banner e produtos).

## Estrutura

```
SA-final/
├─ README.md            (este arquivo)
└─ versoes/
   ├─ 01-loja-virtual/  (projeto completo + ENUNCIADO.html)
   ├─ 02-livraria/
   ├─ 03-games/
   ├─ 04-delivery/
   ├─ 05-plantas/
   ├─ 06-vinis/
   └─ 07-petshop/
```
