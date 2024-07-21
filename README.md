# Expo Amplify Store

Este teste é um aplicativo de exemplo desenvolvido com React Native, Expo e AWS Amplify. O aplicativo é uma loja de produtos simples que permite aos usuários visualizar produtos, adicionar produtos ao carrinho e visualizar o carrinho de compras. O aplicativo foi criado para testar a integração do Expo com o AWS Amplify para autenticação e armazenamento de dados.

. Este projeto foi criado usando o comando:

```bash
npx create-expo-app expo-amplify-store --template blank.
```

### Visão Geral

É um aplicativo simples que serve como teste para o desenvolvimento de aplicativos móveis
com React Native e Expo. Este README.md fornece instruções sobre como configurar e executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (versão 14 ou superior) <br/>
Expo CLI (npm install -g expo-cli)


### Configuração do Projeto

Clone este repositório para o seu ambiente local:

```bash
git clone git@github.com:caiobarilli/expo-amplify-store.git
cd expo-amplify-store
```

Instale as dependências do projeto:

```bash
npm install
```

Siga as instruções para configurar o AWS Amplify no projeto. Para mais informações, consulte a documentação oficial do [Amplify](https://docs.amplify.aws/gen1/react/start/getting-started/installation/)

```bash
amplify configure
```

Siga as instruções para configurar o [Amplify Auth](https://docs.amplify.aws/gen1/react/build-a-backend/auth/set-up-auth/)

```bash
amplify add auth

amplify push

amplify console
```

Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

Escaneie o QR code com o aplicativo Expo Go (disponível na App Store e Google Play) ou utilize um emulador para ver o aplicativo em execução.

Estrutura do Projeto
A estrutura básica do projeto é a seguinte:

```bash
expo-amplify-store/src/
├── amplifyconfiguration.json
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── cart.tsx
│   │   ├── index.tsx
│   │   └── profile.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   ├── _layout.tsx
│   └── product
│       └── details
│           └── [id].tsx
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── fonts
│   │   └── Roboto-Regular.ttf
│   ├── icon.png
│   └── splash.png
├── aws-exports.js
├── components
│   ├── ProductCard
│   │   └── index.tsx
│   └── ProductList
│       └── index.tsx
├── hooks
│   └── use-cart
│       └── index.tsx
└── lib
    ├── mocks
    │   └── products.ts
    └── types
        └── cart.ts
```
