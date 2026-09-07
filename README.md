# Catecismo Júnior Online

Aplicação web acessível do **Catecismo Júnior da Igreja Metodista Unida**, criada para facilitar o acesso aos conteúdos em português europeu (**pt-PT**), com especial atenção a pessoas com deficiência visual e a utilizadores de tecnologias de assistência.

---

## Instruções do projeto

### Objetivo
O **Catecismo Júnior Online** é uma iniciativa de acessibilidade e inclusão. O projeto procura tornar os ensinamentos do livro *Catecismo Júnior* mais acessíveis aos irmãos e irmãs em Cristo com deficiência visual, proporcionando maior autonomia através de dispositivos digitais, leitores de ecrã, navegação tátil por toques e funcionalidades de voz.

O projeto mantém uma experiência simples, limpa e inclusiva, com texto legível, navegação previsível, instruções audíveis e suporte para português europeu (**pt-PT**).

---

### Conteúdo e experiência prevista

- **Estrutura dos conteúdos**:
  - A aplicação apresenta o Catecismo Júnior em formato digital e áudio.
  - A introdução contém a **Parte 0 (Prefácio)**. *(A antiga referência à Parte 0.1 do Prefácio à Edição Revista foi descontinuada e removida para simplificar a experiência inicial).*
  - O catecismo é composto por **20 lições completas** (da Parte 1: *Deus* à Parte 20: *A Vida Eterna*).
- **Instrução inicial**: Ao abrir a aplicação, o utilizador recebe uma instrução audível para ouvir o Prefácio antes de interagir com o ecrã.
- **Navegação por toques (*Multi-tap*)**:
  - Tocar de **1 a 20 vezes** permite selecionar e reproduzir a lição correspondente (ex.: 1 toque = Parte 1: *Deus*; 20 toques = Parte 20: *A Vida Eterna*).
  - Tocar **21 vezes** descarrega automaticamente o pacote com todos os ficheiros de áudio MP3 em formato ZIP.
  - Tocar **22 vezes** repete as instruções completas de acessibilidade e o Prefácio.
  - Um toque ou interação inicial é utilizado para desbloquear o motor de áudio, contornando os bloqueios de reprodução automática dos navegadores móveis e desktop.
- **Descarregamento offline**: A aplicação disponibiliza uma área e botão dedicado para descarregar todos os áudios reais num ficheiro ZIP e utilizá-los offline.
- **Síntese de voz**: Sempre que houver síntese de voz (Web Speech API), é utilizada a variante europeia do português (**pt-PT**), dando preferência a uma voz feminina natural (*Joana, Inês, Catarina, etc.*) quando disponível no dispositivo.
- **Interface e identidade**:
  - Apresenta de forma visível a mensagem: *“Acessibilidade e inclusão — Para os nossos irmãos e irmãs em Cristo com deficiência visual”*.
  - Logótipo oficial vetorial da **Cruz e Chama** da Igreja Metodista Unida.
  - Durante a reprodução ativa de qualquer lição ou discurso, é exibido um **ícone animado de volume** posicionado acima do topo da cruz, indicando visualmente a saída de som.

---

### Mensagem de boas-vindas de referência

> *"Bem-vindo ao Catecismo Júnior online da Igreja Metodista Unida. Esta é uma iniciativa de acessibilidade e inclusão, especialmente preparada para os nossos irmãos e irmãs em Cristo com deficiência visual. Por favor, não toque em nada de momento para ouvir o Prefácio. Pode tocar no ecrã para mudar de lição de acordo com o número de toques e também pode tocar no ecrã 21 vezes para descarregar todos os ficheiros de áudio. Para utilizar os ficheiros de forma offline, dirija-se à sua igreja local. Se tiver um iPhone, a equipa da sua igreja poderá ajudá-lo a configurar atalhos de Siri para abrir cada lição. Para telemóveis Android, a equipa da sua igreja local irá automatizar o processo para que possa abrir os ficheiros de áudio reais do projeto de forma simples e sem complicações. O catecismo é composto pela parte 0 do Prefácio, e pelas lições da parte 1 até à parte 20. Se quiser ouvir novamente estas instruções, toque no ecrã 22 vezes. Em nome do Pai, do Filho e do Espírito Santo. Ámen."*

**Mensagem de conclusão do prefácio:**
> *"Introdução e prefácio concluídos. O áudio está em pausa. Toque 1 vez no ecrã para ouvir a Parte 1 sobre Deus."*

---

### Acesso

A versão acessível pode ser consultada através de um navegador em:  
👉 **[https://catecismojunioronline.web.app](https://catecismojunioronline.web.app/)**

Também podem ser utilizados comandos de voz:
- No **iPhone ou iPad**: *“Siri, abre o site catecismojunioronline.web.app”*.
- Num dispositivo **Android**: *“Ok Google, abre o site catecismojunioronline.web.app”*.

Podem ainda ser configurados atalhos e automações para abrir o site ou os ficheiros de áudio descarregados. Para obter apoio na configuração da Siri, do Android, de atalhos ou de automações, recomenda-se procurar ajuda junto da sua igreja local.

---

### Instalação e desenvolvimento

#### Requisitos
- Node.js 20 ou superior
- npm 10 ou superior, ou pnpm 9 ou superior

#### Instalar dependências
Na pasta raiz do projeto:
```bash
npm install
# ou
pnpm install
```

#### Executar localmente
```bash
npm run dev
# ou
pnpm dev
```
O servidor de desenvolvimento apresenta a aplicação no endereço indicado no terminal (ex.: `http://localhost:3000`).

#### Validar e preparar uma versão de produção
```bash
# Validar regras de código
npm run lint

# Compilar para produção e gerar HTML estático (dist/)
npm run build

# Pré-visualizar localmente a versão compilada
npm run preview
```

---

### Estrutura dos ficheiros

- `public/` — robots.txt e ficheiros de áudio MP3 reais das 21 partes (`/audio`).
- `src/assets/` — Metadados dos recursos de áudio e vetores.
- `src/components/` — Componentes reutilizáveis da interface (incluindo `MethodistLogo.tsx`).
- `src/data/lessons.ts` — Conteúdo estruturado das lições, textos integrais, referências bíblicas e mensagens de boas-vindas.
- `src/hooks/` — Hooks React partilhados.
- `src/lib/sound-feedback.ts` — Tons audíveis para feedback de toques e desbloqueio do motor de áudio.
- `src/routes/index.tsx` — Página principal, lógica de navegação por toques, geração de arquivo ZIP e animação de volume.
- `src/router.tsx` — Configuração do TanStack Router.
- `src/server.ts` & `src/start.ts` — Entrada do servidor, SSR e cabeçalhos de segurança.
- `src/styles.css` — Estilos globais e tokens visuais com Tailwind CSS.
- `firebase.json` & `.firebaserc` — Configuração de regras e hosting no Firebase.
- `vite.config.ts` — Configuração do Vite e TanStack Start.
- `package.json` — Scripts e dependências do projeto.

---

### Regras para alterações

1. Manter o idioma da interface e das locuções em português europeu (**pt-PT**).
2. Preservar a navegação por teclado e o funcionamento com leitores de ecrã (através de regiões `aria-live` e semântica HTML).
3. Usar HTML semântico, etiquetas associadas aos controlos e estados visíveis de foco.
4. Garantir contraste suficiente entre texto, fundo e controlos.
5. Não depender apenas de cor, som ou gestos para transmitir uma informação importante.
6. Testar a reprodução de áudio em telemóvel e computador, respeitando a necessidade de uma interação inicial para desbloqueio do hardware.
7. Manter os ficheiros de áudio e os dados das lições organizados e identificados pelos respetivos números (Parte 0 a Parte 20).
8. Executar `lint` e `build` antes de propor uma alteração.

---

### Pré-visualização e publicação

O projeto utiliza um fluxo direto e simplificado:

- **Pré-visualização para contribuidores no Vercel**:  
  O projeto conta com ambiente de pré-visualização no **Vercel** ([https://catecismojunioronlineteste.vercel.app/](https://catecismojunioronlineteste.vercel.app/)). Desta forma, os contribuidores podem acompanhar no navegador o resultado das alterações e testá-las em dispositivos reais antes da versão final.
- **Fluxo de publicação**:
  1. Realizar as alterações no código e validá-las localmente com `npm run lint` e `npm run build`.
  2. Submeter a ramificação para o GitHub para revisão e verificação visual no Vercel.
  3. O projeto não utiliza GitHub Actions; com as alterações validadas e prontas, a versão final é compilada e publicada diretamente no **Firebase Hosting**.

---

### Contribuição

O projeto está aberto à colaboração de programadores, designers, profissionais de UX/UI, especialistas em acessibilidade, igrejas e outras pessoas que possam contribuir para a sua evolução.

As contribuições podem incluir:
- Correções de acessibilidade;
- Melhorias na navegação e na experiência de áudio;
- Revisão de textos em português europeu;
- Organização e melhoria dos dados das lições;
- Correções de problemas;
- Novas funcionalidades que aumentem a autonomia dos utilizadores.

O código pode ser analisado no GitHub para propor melhorias, corrigir problemas e desenvolver novas funcionalidades. Cada contribuição deve explicar o que foi alterado e como foi testada com teclado, leitor de ecrã e reprodução de áudio.

---

### Conteúdos e direitos

Qualquer digitalização, adaptação ou redistribuição de conteúdos pertencentes a terceiros deve ser realizada com autorização dos respetivos autores ou detentores dos direitos. Todos os conteúdos e textos do catecismo utilizados nesta aplicação serão devidamente confirmados e validados junto dos autores originais do livro antes da sua distribuição definitiva. Antes de adicionar novos textos, gravações, imagens ou materiais de igrejas, confirme que existe autorização formal para a sua utilização e publicação.
