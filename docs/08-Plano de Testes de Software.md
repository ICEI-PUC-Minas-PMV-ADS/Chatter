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
 
 ## Instalação 

Para realizar a instalação das ferramentas necessárias para executar os testes, é necessário seguir alguns passos. Primeiramente, é preciso instalar o node.js na máquina desejada. Para isso, é possível baixar o executável a partir do site oficial do node.js.

Após a instalação do node.js, é preciso abrir o terminal e acessar a pasta onde deseja guardar os testes. Em seguida, deve-se executar os seguintes comandos:

- npm init: Esse comando serve para inicializar a utilização do npm e definir algumas informações sobre os testes/projeto, como o nome, a descrição, a versão e o comando que vai fazer com que os testes sejam executados. Nesse caso, o comando que vai executar os testes foi definido como "test". Ao final da execução desse comando, um arquivo chamado "package.json" será criado na pasta selecionada. Esse arquivo serve para guardar algumas definições, como os scripts de execução de comandos, os caminhos de diretórios onde são guardados os outputs dos resultados dos testes, as dependências, entre outros.

- npm install jest supertest: Esse comando serve para instalar os pacotes necessários para a execução dos testes, que são o Jest e o Supertest. O Jest é um framework de teste para JavaScript e o Supertest é uma biblioteca para testar APIs.

## Executando os testes

Segue pontos iportantes para execução do teste realizado:

1. Certifique-se de que o servidor não esteja em execução.

2. Na pasta raiz do projeto, execute o comando npm run test.

3. O Jest executará os testes e exibirá os resultados no terminal.

4. Os testes de integração são armazenados na pasta  "__tests__". Cada arquivo de teste deve ter o sufixo .test.js.
