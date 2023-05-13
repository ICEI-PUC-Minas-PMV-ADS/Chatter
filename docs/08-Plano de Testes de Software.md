# Plano de Testes de Software


Aqui, vamos descrever como fizemos para testar a nossa aplicação de mensageria com testes de integração usando a biblioteca de testes Jest. A aplicação de mensagens inclui testes de integração para garantir que os componentes do frontend e do backend estejam funcionando corretamente. Os testes são escritos usando o Jest, um framework de teste de JavaScript.

Vale lembrar, que a aplicação de mensageria consiste em um servidor que recebe mensagens de usuários e as envia para outros usuários. A aplicação usa um banco de dados para armazenar as mensagens enviadas e recebidas.

<div align="center">

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Chatter/assets/90533356/ee870eee-f902-429a-afc3-2dd334155ad7)

</div>
 
## Ferramentas de Testes

### Pré-requisitos

Para executar os testes de integração, nos certificamos de ter as seguintes ferramentas instaladas:

- Node.js

- NPM

- MongoDB

Para criar o nosso plano de testes utilizando Node.js como linguagem e Jest como a ferramenta para execução dos testes, seguimos as seguintes etapas:

1. Identificamos as funcionalidades fundamentais do sistema: antes de começar a escrever testes, identificamos as funcionalidades fundamentais do sistem  a que precisam ser testadas. Incluindo operações relacionadas ao banco de dados e API.

2. Definimos os cenários de teste: para cada funcionalidade fundamental identificada, definimos cenários de teste que cobrem possíveis situações de uso. Por exemplo, 

3. Escrevemos os testes: usando a sintaxe do Jest, escrevemos os testes para cada cenário de teste definido na etapa anterior. Testando tanto os casos de sucesso quanto os casos de falha.

4. Executamos os testes: executamos todos os testes escritos para garantir que o sistema está funcionando conforme o esperado, nos certificando de que todos os testes passam e que nenhum erro é lançado.

## Executando os testes

Segue pontos iportantes para execução do teste realizado:

1. Certifique-se de que o servidor não esteja em execução.

2. Na pasta raiz do projeto, execute o comando npm run test.

3. O Jest executará os testes e exibirá os resultados no terminal.

4. Os testes de integração são armazenados na pasta  "__tests__". Cada arquivo de teste deve ter o sufixo .test.js.

Segue exemplo de teste realizado:
