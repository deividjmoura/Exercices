# QRAdmin — apresentação institucional

Página institucional independente para apresentar o QRAdmin a restaurantes, lanchonetes e outras operações de alimentação.

## Nota de validação do produto e da marca

O repositório original não contém a aplicação QRAdmin, seus módulos, capturas de tela, logotipo oficial, guia de marca, endereço do ambiente ou materiais de prova social. A pasta `qrcodegenerator/` existente é um gerador isolado de QR Code, não o sistema administrativo QRAdmin.

Por isso, esta apresentação foi construída para não atribuir ao produto funcionalidades ou resultados que não puderam ser conferidos:

- Os recursos descritos na página são apresentados como **escopo informado**, sem afirmar que estejam disponíveis hoje.
- A jornada e as interfaces são **estudos visuais conceituais**, produzidos para esta apresentação; não são capturas do sistema, protótipo funcional nem reprodução de telas existentes.
- Marca, símbolo, paleta e favicon são uma **direção visual provisória**, desenvolvida na ausência de assets oficiais. Substitua-os pelos arquivos e tokens oficiais antes de publicar a página como material final de marca.
- Não foram inventados clientes, resultados, depoimentos, preços, dados de operação, contatos, endereço comercial, CNPJ ou certificações.

Antes da publicação comercial, confirme cada recurso no produto, substitua as demonstrações por capturas reais autorizadas quando disponíveis e valide a identidade oficial do QRAdmin.

## Tecnologias

- React 18
- Vite 6
- DM Sans e DM Serif Display em arquivos locais (`@fontsource`)
- CSS próprio, sem biblioteca de componentes ou de animação

O projeto mantém as dependências e a configuração dentro de `apresentacao/`; não depende da inicialização da aplicação principal.

## Estrutura

```text
apresentacao/
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/       # Marca provisória, ícones, links e estudos de interface
│   ├── sections/         # Header, hero, fluxo, módulos, produto, audiência e footer
│   ├── styles/main.css   # Identidade visual, layout, estados e responsividade
│   ├── App.jsx
│   ├── config.js         # URL de acesso opcional, validada para HTTP/HTTPS
│   └── main.jsx
├── .env.example
├── index.html            # Metadados SEO e Open Graph
├── package.json
└── vite.config.js
```

## Instalação e desenvolvimento

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
cd apresentacao
npm install
npm run dev
```

O servidor local do Vite ficará disponível em `http://localhost:5173`.

### Configurar o acesso ao sistema

O repositório não informa o endereço oficial do QRAdmin. Para habilitar os links “Acessar o sistema”, crie `apresentacao/.env.local` a partir de `.env.example` e informe o endereço oficial:

```env
VITE_QRADMIN_APP_URL=https://endereco-oficial-do-sistema
```

O valor é incluído no build pelo Vite. Sem ele, os links levam à nota de configuração no rodapé, em vez de apontar para um endereço inventado. Apenas URLs HTTP ou HTTPS são aceitas.

## Build e pré-visualização de produção

```bash
cd apresentacao
npm run build
npm run preview
```

O resultado estático é gravado em `apresentacao/dist/` (ignorado pelo Git). `npm run preview` serve localmente o build em `http://localhost:4173`.

## Implantação independente

1. Execute `npm ci` na pasta `apresentacao/`.
2. Configure `VITE_QRADMIN_APP_URL` no ambiente de build, caso exista um endereço oficial, e `VITE_SITE_URL` com o domínio público para gerar a URL absoluta de `og:image`.
3. Execute `npm run build`.
4. Publique somente o conteúdo de `apresentacao/dist/` em um host estático, servindo o `index.html` na raiz do domínio.
5. Se for implantar sob um subcaminho, ajuste `base` em `vite.config.js` e revise os caminhos públicos antes de gerar o build.

Não é necessário iniciar, modificar ou compartilhar configuração com nenhum servidor da aplicação principal.

## Acessibilidade e experiência

A página inclui HTML semântico, link para pular ao conteúdo, foco visível, navegação mobile por teclado, controles acessíveis para a demonstração, descrições das interfaces ilustrativas, rolagem suave com respeito a `prefers-reduced-motion`, layout responsivo e fontes servidas localmente. Não carrega imagens remotas nem depende de serviços externos em tempo de execução.
