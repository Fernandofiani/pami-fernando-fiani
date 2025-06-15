# PAMI-Felipe_Rocha
Programação de Aplicativos Mobile I por João SIles e Bruno Cano

Crie um projeto em Expo
Expo é um framework, uma ferramenta que facilita a criação de aplicativos React Native, eliminando a necessidade de configurar ambientes complicados como Android Studio ou Xcode. Com Expo, é possível iniciar um projeto com poucos comandos e testá-lo diretamente no celular.

Pré-requisitos
Antes de começar, é necessário ter instalado na sua máquina:

Node.js (recomenda-se a versão LTS)

npm ou yarn

Expo CLI (instalado via npm)

Um celular com o aplicativo Expo Go (disponível na Play Store e App Store)

Passo a Passo

1. Instale o Expo CLI

Abra o terminal e insira a seguinte linha:

npm install -g expo-cli

2. Crie o Projeto

Depois da instalação, crie um novo projeto com a seguinte linha:

npx create-expo-exemplo-app

Escolha um template
Ao executar o comando acima, o Expo CLI perguntará qual template você deseja usar. Você pode escolher entre:

blank — projeto básico, sem extras

blank (TypeScript) — projeto básico com suporte ao TypeScript

tabs (TypeScript) — projeto com navegação em abas, usando TypeScript

E outros templates que podem estar disponíveis.

Entre no repositório do projeto
Após o projeto ser criado, entre na pasta:

cd aplicativo-teste

Iniciando o projeto
Execute o servidor de desenvolvimento com:

expo start

Isso abrirá o Expo Developer Tools no navegador, de onde você pode rodar seu app em um emulador ou dispositivo físico.

📲Testar o aplicativo no dispositivo
No celular, abra o aplicativo Expo Go.

Use o leitor de QR Code para escanear o código exibido no terminal ou no navegador.

O app será carregado no celular, e toda modificação no código será atualizada automaticamente.

📡Compartilhamento da aplicação
Você pode compartilhar a aplicação com outras pessoas via QR code, ou publicar com:

npx expo export

Links Auxiliares de documentação

Documentação oficial do Expo

Documentação do React Native

