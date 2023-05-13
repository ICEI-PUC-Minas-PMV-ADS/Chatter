# Plano de Testes de Software

O objetivo dos testes foi garantir que todos os componentes do frontend e do backend estão funcionando corretamente. Para realizar esses testes, a equipe utilizou a biblioteca de testes Jest, um framework de teste de JavaScript.

É importante destacar que a aplicação de mensageria é composta por um servidor que recebe mensagens de usuários e as envia para outros usuários. Além disso, a aplicação utiliza um banco de dados para armazenar as mensagens enviadas e recebidas.

Os testes de integração permitram verificar se todos os componentes da aplicação estão funcionando em conjunto de forma adequada. Isso significa que, além de testar as funcionalidades de cada componente individualmente, foi possível testar a comunicação entre eles e avaliar a integração como um todo.


## Ferramentas de Testes

Após a análise das opções disponíveis no mercado, a equipe responsável pela automatização de testes de APIs escolheu as seguintes ferramentas e frameworks open source para realizar os testes:

<div align="center">

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Chatter/assets/90533356/74f50361-9b31-43a8-b8f1-c369a190879a)
 
 </div>
 
 A análise prévia das opções disponíveis no mercado foi fundamental para escolher as ferramentas e frameworks mais adequados para o projeto. Ao avaliar as características e funcionalidades de cada ferramenta, foi possível selecionar as que melhor atendem às necessidades da equipe e da aplicação.
 
 ## Jest
 
Jest é um framework de teste de JavaScript que é amplamente utilizado para testes unitários, de integração e end-to-end. Ele fornece uma ampla gama de recursos, como testes assíncronos, testes em tempo real, suporte a mock, entre outros recursos que o tornam uma ferramenta poderosa para testes em JavaScript.

O Jest é especialmente popular em projetos que utilizam o React, mas pode ser utilizado em qualquer projeto JavaScript, pois é fácil de configurar e usar. Ele é executado em Node.js e é conhecido por sua velocidade e eficiência na execução de testes. Além disso, o Jest é uma ferramenta de código aberto, mantida pelo Facebook, e tem uma comunidade ativa de desenvolvedores que contribuem para o seu desenvolvimento e evolução.
 
 ## Supertest
 
 O Supertest é uma biblioteca de testes de integração para aplicativos Node.js que permite fazer requisições HTTP em um servidor e testar sua resposta. Ele é frequentemente utilizado em conjunto com frameworks de teste como o Mocha, Jasmine e o Jest.

Com o Supertest, é possível realizar testes de integração de forma simples e eficiente, enviando requisições HTTP para a API e verificando as respostas recebidas, sem a necessidade de iniciar um servidor separado para os testes.

Entre os recursos oferecidos pelo Supertest estão a possibilidade de enviar diferentes tipos de requisições, como GET, POST, PUT e DELETE, e a capacidade de enviar parâmetros de consulta e corpo da solicitação. Além disso, é possível verificar a resposta recebida do servidor, incluindo o status da resposta, cabeçalhos e corpo da resposta.
 
 ## Instalação 

Para realizar a instalação das ferramentas necessárias para executar os testes, é necessário seguir alguns passos. Primeiramente, é preciso instalar o node.js na máquina desejada. Para isso, é possível baixar o executável a partir do site oficial do node.js.

Após a instalação do node.js, é preciso abrir o terminal e acessar a pasta onde deseja guardar os testes. Em seguida, deve-se executar os seguintes comandos:

- npm init: Esse comando serve para inicializar a utilização do npm e definir algumas informações sobre os testes/projeto, como o nome, a descrição, a versão e o comando que vai fazer com que os testes sejam executados. Nesse caso, o comando que vai executar os testes foi definido como "test". Ao final da execução desse comando, um arquivo chamado "package.json" será criado na pasta selecionada. Esse arquivo serve para guardar algumas definições, como os scripts de execução de comandos, os caminhos de diretórios onde são guardados os outputs dos resultados dos testes, as dependências, entre outros.

- npm install jest supertest: Esse comando serve para instalar os pacotes necessários para a execução dos testes, que são o Jest e o Supertest. O Jest é um framework de teste para JavaScript e o Supertest é uma biblioteca para testar APIs.

## Executando os testes

Para realizar a execução dos testes, é importante seguir as seguintes instruções:

- Certifique-se de que o servidor não esteja em execução antes de executar os testes. Isso garantirá que os testes sejam executados corretamente, sem interferências externas.

- Na pasta raiz do projeto, execute o comando "npm run test" no terminal. Esse comando irá executar todos os testes presentes na pasta "tests" e exibirá os resultados no terminal.

- Os testes de integração foram armazenados na pasta *"tests"*. Cada arquivo de teste tem o sufixo ".test.js" para que o Jest possa reconhecê-los e executá-los corretamente.

Seguindo essas instruções, será possível executar os testes de forma eficiente e garantir a qualidade da aplicação.
