# Vocal Salvos por Cristo

Material de apoio para publicação no LinkedIn e apresentação técnica do projeto.

---

## 1. Texto Pronto Para o Post no LinkedIn

Transformei a rotina interna do Vocal Salvos por Cristo em uma plataforma web completa, pensada para funcionar bem no celular e organizada para o uso real do ministério.

O projeto foi construído com React, TypeScript, Vite, Firebase e Vercel, com foco em autenticação, gestão de perfis, contato interno, mural de publicações, agenda, biblioteca musical por voz, envio de arquivos, controle de acesso por cargo e experiência de uso clara para membros e liderança.

Entre os pontos que mais gostei de desenvolver estão:

- autenticação com e-mail/senha e Google
- recuperação de senha com e-mail customizado
- perfis de membros com diretório interno separado
- biblioteca musical com áudios por naipe, letra e partitura
- regras de segurança no Firestore e no Storage
- uploads preparados para cenários reais de celular, arquivos locais e provedores como Google Drive
- gestão de cargos e permissões com validação também no backend
- interface mobile-first com navegação interna, telas dedicadas e feedback por toast

Mais do que publicar telas bonitas, a ideia foi estruturar um sistema com regra de negócio, segurança, organização de dados, fluxo de mídia e deploy pronto para produção.

Foi um projeto com bastante cuidado em arquitetura, experiência do usuário e consistência entre front-end, Firebase e rotas serverless.

Tecnologias e temas que fazem parte desse trabalho:

React, TypeScript, Vite, Firebase Authentication, Cloud Firestore, Realtime Database, Cloud Storage, Security Rules, Vercel, Serverless Functions, Google OAuth, Google Drive Picker, PDF Proxy, RBAC, UX mobile-first e organização de código em serviços e páginas.

#React #TypeScript #Vite #Firebase #Firestore #CloudStorage #Vercel #Serverless #Frontend #WebDevelopment #MobileFirst #UXDesign #GoogleOAuth #SecurityRules #FullStackJavaScript

---

## 2. Palavras-Chave Para o Post

- React
- TypeScript
- Vite
- Firebase Authentication
- Cloud Firestore
- Realtime Database
- Firebase Storage
- Security Rules
- Vercel
- Serverless Functions
- Google Login
- Google Drive Picker
- PDF Proxy
- RBAC
- Mobile-first UI
- React Hooks
- Type-safe Frontend
- Gestão de membros
- Biblioteca musical
- Upload resiliente

---

## 3. Como Estruturar Melhor a Publicação no LinkedIn

### O que costuma funcionar melhor

1. As 3 primeiras linhas precisam prender a atenção antes do botão “ver mais”.
2. Parágrafos curtos funcionam melhor do que blocos longos de texto.
3. Um post técnico performa melhor quando mistura contexto, problema, solução e resultado.
4. Hashtags ajudam, mas é melhor usar poucas e boas do que muitas genéricas.
5. Imagens do projeto, telas e fluxos aumentam bastante a retenção.
6. Quando possível, vale mostrar não só a interface, mas também arquitetura, regras, organização de código e decisões técnicas.

### Estrutura recomendada

1. Comece com o problema ou com a transformação do projeto.
2. Explique em poucas linhas o que foi construído.
3. Liste os principais módulos ou desafios resolvidos.
4. Cite a stack de forma natural.
5. Feche com uma leitura de engenharia: arquitetura, segurança, UX, deploy, integração, regras.
6. Termine com hashtags técnicas e de contexto.

### Sugestão de anexos para o post

1. Tela de login.
2. Tela principal do app.
3. Biblioteca musical.
4. Tela de membros.
5. Tela dedicada de edição do membro.
6. Um recorte de regras ou arquitetura.

---

## 4. Resumo Executivo do Projeto

O Vocal Salvos por Cristo foi desenvolvido como uma aplicação web interna para organização do ministério. A proposta foi sair de um uso disperso de mensagens, arquivos e anotações e centralizar isso em um sistema único, com autenticação, perfis, agenda, publicações e biblioteca musical.

O projeto não foi tratado apenas como uma landing page ou um painel visual. Ele foi construído como uma aplicação operacional, com regras de acesso, persistência, proteção de dados, fluxo de mídia, envio de arquivos, documentos e controle hierárquico entre membros e liderança.

---

## 5. Stack Técnica

### Front-end

- React 19
- TypeScript 5
- Vite 6
- React DOM
- React Hooks
- React Hot Toast
- React Easy Crop
- React PDF
- React Icons

### Back-end e serviços

- Firebase Authentication
- Cloud Firestore
- Realtime Database
- Cloud Storage for Firebase
- Firebase Admin SDK
- Nodemailer
- Vercel Serverless Functions

### Infra e qualidade

- Vercel
- ESLint
- TypeScript strict mode
- Security Rules para Firestore
- Security Rules para Storage

---

## 6. Números Reais da Base

### Volume da implementação

- 36 arquivos de código e regras
- 14.712 linhas somadas entre `.ts`, `.tsx`, `.js`, `.css` e `.rules`

### Composição principal

| Tipo | Arquivos | Linhas |
| --- | ---: | ---: |
| `.tsx` | 16 | 6.997 |
| `.ts` | 10 | 1.834 |
| `.js` | 6 | 895 |
| `.css` | 1 | 4.198 |
| `.rules` | 3 | 788 |

### Arquivos com maior concentração de lógica

| Arquivo | Linhas | Papel |
| --- | ---: | --- |
| `src/styles/index.css` | 4.198 | linguagem visual completa da aplicação |
| `src/pages/HomePage.tsx` | 4.028 | hub principal da experiência interna |
| `src/pages/index.tsx` | 890 | autenticação, fluxo de páginas e entrada do app |
| `src/config/firestore.rules` | 625 | modelo de segurança e validação do Firestore |
| `src/pages/RegisterPage.tsx` | 589 | fluxo de cadastro em etapas |
| `src/services/memberProfiles.ts` | 430 | perfis, diretório e sincronização |
| `api/members/manage.js` | 427 | gestão segura de membros no backend |
| `src/services/storageMedia.ts` | 423 | upload, retry, fallback e resiliência |

Esses números ajudam a mostrar que o projeto tem uma camada real de produto, regra e infraestrutura, não apenas interface.

---

## 7. Arquitetura Geral

### Organização principal

- `src/pages`: páginas e fluxos centrais da aplicação.
- `src/components`: componentes reutilizáveis e especializados.
- `src/services`: acesso a Firestore, Storage, Google Drive e regras operacionais.
- `src/config`: configuração do Firebase e arquivos de regras.
- `api`: rotas serverless da Vercel para operações sensíveis.
- `server`: utilitários compartilhados pelo dev server e pela produção.
- `src/styles/index.css`: folha principal de estilo da aplicação.

### Arquitetura funcional

1. O usuário autentica com Firebase Authentication.
2. O perfil completo vive em `members` no Firestore.
3. Um diretório enxuto é mantido em `memberDirectory` para consulta interna.
4. Agenda, mural e biblioteca musical usam coleções próprias.
5. Uploads vão para o Cloud Storage com regras de mídia e tamanho.
6. Operações mais sensíveis usam rotas serverless com Firebase Admin.
7. O deploy final roda na Vercel com fallback SPA e integração com helpers do Firebase Auth.

---

## 8. Passo a Passo de Construção do Projeto

### 8.1 Base da aplicação

O projeto foi estruturado com React + Vite para entregar uma base leve, rápida no desenvolvimento e simples no build. O TypeScript ficou em modo `strict`, o que ajuda bastante na consistência entre telas, serviços e payloads.

Além disso, a configuração do Vite foi estendida com um plugin próprio para disponibilizar o proxy de PDF também no ambiente local de desenvolvimento, sem depender só do ambiente serverless de produção.

### 8.2 Fluxo de autenticação

O fluxo de autenticação foi centralizado em `src/pages/index.tsx`.

Esse arquivo faz o papel de orquestrador da entrada do app:

- login com e-mail e senha
- login com Google
- cadastro em etapas
- finalização de perfil após autenticação
- recuperação de senha
- entrada administrativa
- logout

O projeto usa `browserLocalPersistence`, então a sessão do usuário é mantida no navegador. A autenticação com Google também passou por cuidado específico para produção e mobile, evitando dependência frágil de redirect em domínios que não são nativos do Firebase Hosting.

### 8.3 Cadastro e perfil do membro

O cadastro não foi tratado como um simples formulário de login. O perfil do membro tem estrutura própria, com campos como:

- nome
- telefone
- CEP
- bairro
- cidade
- rua
- número
- estado civil
- gênero
- timbre
- disponibilidade
- avatar
- nível de conta
- papel de liderança
- permissões

Esse perfil é salvo na coleção `members` e depois refletido no `memberDirectory`, que existe para atender o uso do contato interno sem expor informações sensíveis demais.

### 8.4 Contato interno e diretório

O diretório foi desenhado como uma projeção enxuta do perfil principal. Em vez de expor tudo o que está em `members`, a coleção `memberDirectory` concentra apenas dados úteis para operação e contato:

- nome
- telefone
- telefone normalizado
- avatar
- timbre
- papel de liderança
- nível da conta
- disponibilidade

Isso melhora privacidade, organização de leitura e desempenho no consumo da lista interna.

### 8.5 Home, posts e agenda

O serviço `src/services/homeContent.ts` cuida do mural interno e da agenda. A aplicação separa esses dois universos em coleções próprias:

- `homePosts`
- `agendaEvents`

Cada uma delas possui create, list, update e delete conforme o caso, além de comentários. No mural, também existe fluxo de curtidas com `arrayUnion` e `arrayRemove`, o que simplifica a operação e mantém a lógica próxima ao modelo do Firestore.

### 8.6 Biblioteca musical

Essa é uma das partes mais específicas e mais valiosas do domínio do projeto.

A biblioteca musical foi modelada para suportar:

- título da música
- artista
- tom
- categoria
- observações
- link de referência opcional
- faixas por voz
- letra
- partitura

Os naipes suportados hoje são:

- Geral
- Soprano
- Mezzo-soprano
- Contralto
- Tenor
- Barítono
- Baixo

O ponto importante aqui é que a leitura das faixas muda conforme o timbre do membro. Perfis administrativos e alguns papéis de liderança podem ver todas as faixas; membros comuns enxergam apenas o que faz sentido para o próprio naipe e a faixa geral.

### 8.7 Upload de arquivos e mídia

O projeto tem uma camada própria para uploads em `src/services/storageMedia.ts`.

Essa camada não ficou limitada ao upload padrão do SDK. Ela foi ajustada para lidar com casos reais de uso em celular, principalmente:

- arquivos vindos do app Arquivos
- arquivos vindos do Google Drive
- diferenças de MIME em Android e iPhone
- uploads de áudio maiores
- falhas de conexão ou reset de stream

Os principais cuidados implementados foram:

- inferência de `contentType` por extensão quando o navegador não informa o MIME corretamente
- fallback entre `uploadBytesResumable` e `uploadBytes`
- retries curtos por tentativa
- timeout dinâmico baseado no tamanho do arquivo
- cancelamento do upload resumable quando excede o tempo esperado
- pré-materialização do arquivo em mobile para áudio e PDF, evitando travar o envio bruto de arquivos vindos de provedores do sistema

Esse ponto foi essencial para reduzir o cenário de arquivos que ficavam presos em “Salvando...”.

### 8.8 Google Drive Picker

Além do seletor nativo do aparelho, o projeto também integrou Google Drive Picker real. Isso exigiu:

- carregamento do script da API do Google
- carregamento do script GIS
- obtenção de token OAuth com escopo readonly do Drive
- montagem do picker com filtros por tipo de arquivo
- suporte a documentos e áudios

Na prática, isso permitiu trabalhar com arquivos do ecossistema Google sem depender apenas do upload local.

### 8.9 PDF proxy e visualização interna

Para visualizar letras e partituras PDF dentro do próprio sistema, foi criado um proxy controlado por allowlist em `server/pdfProxy.js` e exposto por `api/pdf-proxy.js`.

Esse proxy faz alguns papéis importantes:

- aceita apenas origens permitidas do Firebase Storage
- bloqueia URLs inválidas ou não seguras
- valida o `content-type`
- suporta `Range` para leitura parcial
- responde com cache e cabeçalhos corretos para renderização inline

Isso ajudou a manter a experiência de leitura dentro do app sem abrir fluxos inseguros ou quebrar por CORS em todo cenário.

### 8.10 Gestão hierárquica de membros

Um dos módulos mais críticos do projeto é a gestão de membros pelo backend em `api/members/manage.js`.

O objetivo aqui foi não confiar apenas no front-end para operações como:

- inspecionar outro membro
- editar perfil
- alterar cargo
- desativar conta
- apagar conta

O backend lê o perfil do usuário autenticado, resolve o papel de gestão e aplica uma hierarquia real. Hoje a lógica está assim:

- admin gerencia qualquer cargo
- developer gerencia todos, exceto admin
- maestro gerencia todos, exceto admin e developer
- secretário e vice-secretário gerenciam `member`, `secretary` e `vice-secretary`
- ninguém gerencia a própria conta por esse fluxo

Essa decisão reforça segurança de negócio e evita brechas por manipulação direta de interface.

### 8.11 Recuperação de senha customizada

O projeto tem uma rota serverless dedicada em `api/auth/password-reset.js`.

Essa rota faz:

- validação de e-mail
- verificação do usuário no Firebase Auth via Admin SDK
- geração do password reset link
- fallback entre URL customizada e URL padrão do Firebase
- envio por SMTP com HTML próprio
- logo incorporada no e-mail por CID

Esse ponto eleva bastante a percepção de produto, porque deixa o fluxo de redefinição de senha mais alinhado com a identidade do projeto.

---

## 9. Modelo de Dados

### Coleções principais no Firestore

#### `members`

Coleção principal do perfil completo do usuário.

#### `memberDirectory`

Coleção enxuta para o diretório interno.

#### `agendaEvents`

Compromissos do ministério, com comentários e controle por liderança.

#### `homePosts`

Publicações internas, com comentários, curtidas e mídia.

#### `songLibrary`

Catálogo musical com metadados, arquivos por voz e anexos.

### Realtime Database

Existe infraestrutura preparada para presença online/offline em `presence/{uid}`. A função está pronta em `memberProfiles.ts`, embora a aplicação principal hoje concentre a experiência nas coleções do Firestore.

---

## 10. Como As Regras Foram Programadas

### Firestore Rules

As regras do Firestore não foram limitadas a “logado pode / não pode”. Elas validam estrutura, domínio e integridade do documento.

Entre os pontos programados:

- funções utilitárias como `signedIn`, `isOwner`, `currentMember`, `isAdmin`, `isSecretary`
- checagem de permissões por lista de privilégios no próprio perfil do membro
- validação rigorosa de chaves obrigatórias e chaves permitidas
- validação de tipo e tamanho de cada campo
- bloqueio de alteração indevida de privilégios por parte do próprio usuário
- separação entre o que o dono do perfil pode alterar e o que só a administração pode alterar
- comentários em agenda e posts com preservação dos campos principais do documento

Na prática, isso cria uma camada de defesa forte contra escrita inconsistente, escalonamento de privilégio e estrutura inválida.

### Storage Rules

As regras do Storage foram programadas por tipo de mídia, por papel do usuário e por tamanho de arquivo.

Alguns pontos importantes:

- avatar: apenas o próprio usuário pode criar, atualizar e apagar; somente imagens; limite de 5 MB
- posts: imagens e vídeos com limites separados; leitura interna autenticada
- músicas por voz: apenas áudio; limite de 80 MB; leitura baseada em cargo ou naipe
- letra e partitura: apenas PDF ou imagem; limite de 25 MB

Além disso, a função `voiceFolderMatchesMember` conecta o timbre cadastrado do membro com a faixa musical que ele pode consumir. Essa é uma regra muito alinhada ao domínio do projeto, porque o dado musical deixa de ser apenas arquivo e passa a obedecer regra de negócio.

---

## 11. Controle de Acesso e Permissões

O projeto mistura dois níveis de controle:

1. nível estrutural por `accountLevel`
2. nível funcional por `leadershipRole` e lista de `permissions`

### Níveis principais

- `member`
- `direction`
- `administration`

### Papéis de liderança e administração

- Desenvolvedor
- Maestro
- Secretário
- Vice-Secretário

### Permissões gerais

- adicionar músicas
- adicionar avisos
- adicionar datas de ensaio
- adicionar documentos e partituras
- cadastrar membros
- postar avisos
- alterar dados
- mexer na agenda
- comentar

### Permissões de membro comum

- ver músicas
- receber avisos, ensaios e documentos
- notificar atraso ou imprevisto
- solicitar alteração de dado
- comentar em agenda e avisos

Essa separação dá flexibilidade para o sistema crescer sem depender só de um único booleano de “é admin ou não”.

---

## 12. Front-End, TSX, Componentização e React

### Organização React

O projeto usa React moderno com hooks e separação por páginas, componentes e serviços.

Alguns pontos de arquitetura de front-end:

- `useDeferredValue` para suavizar buscas internas
- `startTransition` no fluxo de troca de páginas em autenticação
- componentes especializados como `AvatarEditorModal`, `SongAudioPlayer` e `SongDocumentViewer`
- páginas dedicadas para login, cadastro, recuperação, painel home, painel admin e telas internas

### Papel dos arquivos principais

- `src/pages/index.tsx`: entrada funcional da aplicação, autenticação e roteamento de fluxo interno
- `src/pages/HomePage.tsx`: experiência principal do sistema autenticado
- `src/pages/RegisterPage.tsx`: cadastro por etapas
- `src/services/memberProfiles.ts`: núcleo de perfis e diretório
- `src/services/homeContent.ts`: mural e agenda
- `src/services/songLibrary.ts`: biblioteca musical
- `src/services/storageMedia.ts`: upload resiliente e tipagem dos arquivos

### Observação honesta de arquitetura

`HomePage.tsx` concentra boa parte da experiência do produto em um único hub de interface. Isso acelerou bastante a iteração do projeto e ajudou a manter coerência de navegação, mas também deixa claro um próximo passo natural de engenharia: continuar quebrando partes do fluxo em hooks e módulos menores conforme a aplicação crescer.

---

## 13. Linguagem Visual e Estilo

O projeto foi desenhado com uma camada visual bem própria, e não com aparência genérica de dashboard pronto.

### Pilares visuais

- paleta dourado, coral, vermelho e branco
- identidade voltada ao ministério, sem perder legibilidade
- shell com cara de app mobile
- navegação inferior fixa
- telas internas em formato de fluxo dedicado
- cards, hero sections, chips, listas e overlays organizados para uso real no celular

### Estrutura do CSS

A maior parte da identidade visual está em `src/styles/index.css`, com:

- variáveis de cor
- shell principal do app
- layout das áreas de home, agenda, músicas, perfil e membros
- estilos de modal, navegação, cards e telas internas
- ajustes responsivos e de safe area

Embora o projeto já tenha Tailwind configurado na stack, o resultado visual final está predominantemente construído com CSS manual e classes próprias, o que mostra decisão de design mais autoral e controle fino de interface.

---

## 14. Deploy e Operação

### Vercel

O deploy foi preparado com `vercel.json`, incluindo:

- framework Vite
- build command
- output em `dist`
- rewrite para rotas `/api/*`
- rewrite do helper `/__/auth/*` para o domínio oficial do Firebase
- fallback SPA para deep links

### Firebase em produção

O projeto roda com:

- Firebase Auth
- Firestore
- Storage
- Realtime Database
- Admin SDK nas rotas serverless

Também houve um cuidado importante com produção no Vercel:

- manutenção do `authDomain` oficial do Firebase
- suporte consistente aos helpers do Firebase Auth
- arquivo `__/firebase/init.json` servido no deploy

---

## 15. Refinamentos Recentes Que Valem Destaque

### Editor de membro em tela própria

O fluxo de edição do membro foi ajustado para não depender de rolagem dentro do contato interno. Agora o botão abre uma tela dedicada de edição e o salvamento foi unificado em um único botão principal.

### Toasters no fluxo do sistema

Foi adicionada uma camada de feedback com toast para:

- login
- logout
- cadastro
- recuperação de senha
- salvamento de perfil
- publicações
- comentários
- agenda
- biblioteca musical
- gestão de membros

### Upload mais resiliente no mobile

O pipeline de upload foi reforçado para cenários de celular, iPhone, Samsung e arquivos vindos de provedores como Google Drive e app Arquivos, reduzindo o risco de travamento em “Salvando...”.

---

## 16. O Que Este Projeto Demonstra Tecnicamente

Este projeto mostra domínio em várias camadas ao mesmo tempo:

- construção de interface com React e TSX
- organização de lógica em serviços e páginas
- modelagem de dados para Firestore
- segurança com Firestore Rules e Storage Rules
- autenticação com múltiplos fluxos
- integração com Google OAuth e Google Drive Picker
- backend serverless com Firebase Admin
- tratamento de mídia, preview e upload em cenários reais
- UX mobile-first com navegação e telas internas consistentes
- deploy e operação em produção com Vercel

Ou seja: não é só um projeto visualmente interessante. É um sistema com domínio real de front-end, back-end leve, segurança, fluxo de arquivos, regra de negócio e arquitetura orientada a uso prático.

---

## 17. Próximos Passos Técnicos Naturais

Se o projeto continuar evoluindo, os próximos passos mais naturais seriam:

1. modularizar ainda mais o `HomePage.tsx`
2. adicionar testes automatizados para regras críticas e serviços
3. criar indicadores administrativos e relatórios internos
4. expandir a presença online/offline para recursos visíveis na interface
5. evoluir a camada de observabilidade para uploads e rotas serverless

---

## 18. Fechamento

Se a ideia for publicar esse projeto no LinkedIn com autoridade técnica, o melhor caminho é mostrar que ele foi pensado como produto real:

- com experiência para o usuário
- com estrutura de dados consistente
- com regras de segurança
- com tratamento real de arquivos e mídia
- com deploy funcional em produção
- com organização de código suficiente para crescer

Esse é o tipo de material que comunica domínio de desenvolvimento, arquitetura e capacidade de entregar solução completa.