# Plano de Testes de Software

O objetivo dos testes foi garantir que todos os componentes do frontend e do backend estão funcionando corretamente. Para realizar esses testes, a equipe utilizou a biblioteca de testes Jest, um framework de teste de JavaScript.

A seguir, apresentamos os casos de testes de software para avaliação do sistema. Todos os testes estão associados a um ou mais requisitos funcionais. 

Caso de Teste | CT-01: Cadastro do usuário
---|---
Requisitos Associados | RF-001: O aplicativo deve permitir que os usuários se registrem e criem uma conta para acessar seus recursos, sendo eles as mensagens e as funcionalidades da aplicação. 
Objetivo do Teste | Verificar se as funções cadastro e login estão operando corretamente.
Passos | 1.	Abrir o app; <br>2.	Ser direcionado para a tela de login; <br>3.	Criar uma conta dentro da página de registro de usuário.
Critérios de Êxito | •	As funções de cadastro de usuário devem ser completadas com êxitos, ao salvar informações que possiblitem acesso a aplicação; •	As funções de login devem ser completadas com êxito ao retornar informações cadastradas no cadastro de usuário.

Caso de Teste | CT-02: Envio e recebimento de mensagens
---|---
Requisitos Associados | RF-002: Enviar mensagem: O aplicativo deve permitir que os usuários enviem mensagens de texto, imagens, áudio e vídeo para outros usuários e RF-003: Receber mensagem: O aplicativo deve permitir que os usuários recebam mensagens enviadas por outros usuários.
Objetivo do Teste | Verificar se as mensagens enviadas entre os usuários estão sendo direcionadas aos destinatários corretos.
Passos | 1.	Fazer login no aplicação com usuário devidamente cadastrado conforme CT-01; <br>	2.	Ser direcionada para a tela de conversas pré existentes ou criar uma nova conversa; <br> 3. Selecionar usuário destinatário; <br>4.	Realizar o envio de uma mensagem; <br>5.	O usuário destinatário deverá receber instantaneamente a mensagem enviada pelo usuário emitente.
Critérios de Êxito | •	Envio de mensagem ao usuário selecionado; <Br> •	Recebimento de mensagem enviada pelo emitente.
 
Caso de Teste | CT-03: Compartilhamento de arquivos
---|---
Requisitos Associados | RF-004	Compartilhamento de arquivos: O aplicativo deve permitir que os usuários compartilhem arquivos (como fotos e vídeos) com outros usuários.
Passos | 1.	Fazer login com usuário previamente cadastrado; <br>	2.	Selecionar mensagem ou iniciar nova conversa com usuário destinatário; <br>3.	Selecionar um dos itens disponíveis para o compartilhamento de arquivos; <br>4.	Selecionar arquivo a ser compartilhado. <br>5.	Selecionar botão de envio.
Critérios de Êxito | •	Envio de arquivo para o usuário destinatário; <br>•	Recebimento de arquivo enviado pelo usuário emitente.
 

 Caso de Teste | CT-04: Visualização de histórico de mensagens
---|---
Requisitos Associados | RF-005	Histórico de mensagens: O aplicativo deve permitir que os usuários acessem seu histórico de mensagens e possam procurar por mensagens específicas.
Passos | 1.	Fazer login com usuário previamente cadastrado; <br>	2.	Na tela inicial, após a abertura da aplicação, o usuário poderá visualizar mensagens já iniciadas; <br>3.	Ao selecionar uma das mensagens, será possível visualizar todo o histórico da conversa.
Critérios de Êxito | •	Visualização do histórico de mensagens e arquivos previamente compartilhados entre os usuários.

Caso de Teste | CT-05: Personalização
---|---
Requisitos Associados | RF-006	Personalização de perfil: O aplicativo deve permitir que os usuários personalizem seu perfil, incluindo imagem de perfil, status e outras informações pessoais.
Passos | 1.	Acessar a página de perfil do usuário; <br>	2.	Selecionar ícone de avatar; <br>3.	Incluir uma imagem da sua escolha.
Critérios de Êxito | •	Alteração da imagem de perfil.
 
 Caso de Teste | CT-06: Alerta de notificações
---|---
Requisitos Associados | RF-008	Notificação de mensagens: O aplicativo deve notificar o usuário quando uma nova mensagem é recebida, através de um alerta sonoro e RF-009	Notificações push: O aplicativo deve ser capaz de enviar notificações push para alertar os usuários sobre novas mensagens recebidas.
Passos | 1.	Receber mensagem de usuário emitente; <br>2.	Receber a notificação no ato do recebimento da mensagem; <br>3.	Disparo de alerta sonoro no momento do recebimento da mensagem; <br>4. Notificação por push com a prévia da exibição da mensagem no ato do recebimento.
Critérios de Êxito | •	O usuário destinatário será notificado através de notificações push e alerta sonoro ao receber mensagens do usuário emitente.
 
 Caso de Teste | CT07: Listagem de contatos
---|---
Requisitos Associados | RF-010	Listas de contatos: Os usuários devem ser capazes de criar e gerenciar listas de contatos, para que possam facilmente enviar mensagens a grupos específicos de pessoas.
Objetivo do Teste | Garantir que o usuário possa selecionar um usuário específico dentro da aplicação.
Passos | 1.	Fazer login com usuário previamente cadastrado; <br>	2.	A aplicação listará todos os usuários previamente cadastrados bem como conversas anteriores; <br>3.	Para enviar a mensagem para um usuário específico, basta selecionar uma das mensagens. 
Critérios de Êxito | •	Êxito na seleção correta de usuário previamente cadastrado, possibilitando o compartilhamento de mensagens e arquivos para o usuário destinatário correto.
 
  Caso de Teste | CT-08: Verificação de recebimento de mensagem
---|---
Requisitos Associados | RF-011	Verificação de status de entrega: Os usuários devem ser capazes de verificar se as mensagens que enviaram foram entregues com sucesso.
Objetivo do Teste | Garantir que o usuário destinário tenha recebido a mensagem enviada pelo usuário emitente, através do recurso da exibição do item de confirmação de recebimento da mensagem.
Passos | 1.	Fazer login com usuário previamente cadastrado; <br>	2.	Envio de mensagem pelo usuário emitente <br>3.	Recebimento de mensagem na aplicação do usuário destinatário <br>4. Abertura da conversa referente a mensagem recebida <br>5. Alteração de ícone para usuário emitente <br>
Critérios de Êxito | • Alteração do ícone de verificação de status a partir da mensagem devidamente entregue ao usuário destinatário.

  Caso de Teste | CT-09: Compartilhamento de emojis entre os usuários
---|---
Requisitos Associados | RF-012	Integração de emoji e GIFs: O aplicativo deve permitir que os usuários enviem e recebam emoji e GIFs em suas mensagens.
Objetivo do Teste | Verificar se o sistema permite aos usuários compartilhar emojis corretamente em diferentes áreas da aplicação.
Passos | 1.	Selecionar uma conversa; <br>	2.	Localizar e selecionar opção de emoji através de ícone padrão; <br>3.	Abertura da bandeja de emojis disponíveis; <br>4. Selecionar emoji a ser enviado.
Critérios de Êxito | • O sistema deve permitir ao usuário selecionar e enviar emojis corretamente.



  Caso de Teste | CT-10: Sincronização entre mobile e web
---|---
Requisitos Associados | RF-013	Sincronização entre dispositivos: permitir que os usuários acessem suas mensagens em vários dispositivos, como smartphones, tablets e computadores.
Objetivo do Teste | Garantir que a sicronização entre dispositivos web e mobile ocorram corretamente, permitindo que as informações e ações realizadas em dispositivos diferentes sejam refletidas adequadamente.
Passos | 1.	Fazer login com usuário previamente cadastrado; <br>	2.	Realizar ações em um dos dispositivos, sejam eles mobile ou web; <br>3.	Verificar a sincronização entre eles, de modo que as informações sejam atualizadas em ambos.
Critérios de Êxito | • As informações e ações nos dispositivos web-mobile devem ser exibidas de sincronizadas corretamente, não havendo falhas entre as informações compartilhadas entre os mesmos.
 
 ## Passos para execução dos testes de integração


Aqui, vamos descrever como fizemos para testar a nossa aplicação de mensageria com testes de integração usando a biblioteca de testes Jest. A aplicação de mensagens inclui testes de integração para garantir que os componentes do frontend e do backend estejam funcionando corretamente. Os testes são escritos usando o Jest, um framework de teste de JavaScript.

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

