# Plano de Testes de Software

O objetivo dos testes foi garantir que todos os componentes do frontend e do backend estejaão funcionando corretamente. Para realizar esses testes, a equipe utilizou a biblioteca de testes Jest, um framework de teste de JavaScript.

É importante destacar que a aplicação de mensageria é composta por um servidor que recebe mensagens de usuários e as envia para outros usuários. Além disso, a aplicação utiliza um banco de dados para armazenar as mensagens enviadas e recebidas.

Os testes de integração permitram verificar se todos os componentes da aplicação estão funcionando em conjunto de forma adequada. Isso significa que, além de testar as funcionalidades de cada componente individualmente, foi possível testar a comunicação entre eles e avaliar a integração como um todo.


## Ferramentas de Testes

Após a análise do que já existia no mercado foram escolhidas as seguintes ferramentas/frameworks open source para proceder à automatização de testes de APIs. 

<div align="center">

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Chatter/assets/90533356/74f50361-9b31-43a8-b8f1-c369a190879a)
 
 </div>

Para se proceder á instalação, primeiramente tem que se instalar o node.js na máquina pretendida, para isso basta fazer o download do executável.

De seguida, através da linha de comandos aceder a uma pasta onde se queira guardar os testes e executar os seguintes comandos:

- npm init — para inicializarmos a utilização do npm e definirmos algumas informações sobre os testes/projeto, nomeadamente a parte em que definimos qual o comando que vai fazer com que corram os testes, neste caso colocou-se “test”. Após a execução deste comando vamos ter na pasta selecionada um ficheiro cujo nome é “package.json” que serve para guardar algumas definições, como scritps de execução de comandos, caminhos de diretorias onde são guardados outputs dos resultados dos testes, dependências, etc;

- npm install jest supertest — para instalarmos os packages do jest e supertest.

## Executando os testes

Segue pontos iportantes para execução do teste realizado:

1. Certifique-se de que o servidor não esteja em execução.

2. Na pasta raiz do projeto, execute o comando npm run test.

3. O Jest executará os testes e exibirá os resultados no terminal.

4. Os testes de integração são armazenados na pasta  "__tests__". Cada arquivo de teste deve ter o sufixo .test.js.
