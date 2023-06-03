# Plano de Testes de Usabilidade


O objetivo principal é avaliar a usabilidade do aplicativo de mensageria, identificando possíveis problemas e áreas de melhoria, através da navegação do usuário dentro da aplicação.

| Objetivos do Teste                                     |
|--------------------------------------------------------|
|  Avaliar a usabilidade da aplicação de mensagens distribuída. |
|  Identificar problemas de usabilidade que possam afetar a experiência do usuário. |
|  Coletar feedback dos usuários para melhorar a interface e a funcionalidade da aplicação. |

| Metodologia                                                                                                       |
|------------------------------------------------------------------------------------------------------------------|
| Selecionar um grupo diversificado de usuários representativos do público-alvo da aplicação.                  |
| Definir cenários de teste realistas, abrangendo diferentes funcionalidades da aplicação, como enviar mensagens individuais, visualizar histórico de mensagens, etc. |
| Utilizar técnicas de observação direta e registro de interações dos usuários para coletar dados durante os testes. |


| Execução dos Testes                                                                                                             |
|------------------------------------------------------------------------------------------------------------------------------|
| Registrar as interações dos usuários durante a execução dos cenários, incluindo capturas de tela ou gravações de vídeo.    |
| Observar atentamente o comportamento dos usuários, identificando possíveis problemas de usabilidade, como dificuldades de navegação, erros de interface ou fluxos confusos. |


| Análise dos Resultados                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rever as gravações e capturas de tela dos testes de usabilidade, identificando problemas específicos e padrões de comportamento.                                                   |
| Classificar os problemas de usabilidade por gravidade e frequência, priorizando os que têm maior impacto na experiência do usuário.                                                |
| Gerar um relatório detalhado dos resultados, documentando os problemas encontrados e fornecendo recomendações para melhorias.                                                     |

| Ações de Melhoria                                                                                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------|
| Com base nos resultados dos testes de usabilidade, priorizar e planejar as ações corretivas necessárias.                          |
| Trabalhar em estreita colaboração com a equipe de desenvolvimento e design para implementar as melhorias recomendadas.              |
| Realizar testes adicionais para verificar a eficácia das melhorias implementadas.                                                  |

| Iteração e Aperfeiçoamento Contínuo                                                                             |
|--------------------------------------------------------------------------------------------------------------|
| Repetir os testes de usabilidade em versões subsequentes da aplicação para acompanhar as melhorias e identificar novos problemas. |
| Manter um ciclo contínuo de testes de usabilidade, feedback dos usuários e melhorias na aplicação.            |

## Avaliação

Segue abaixo funcionalidades e critérios avaliados:

|Caso de teste 01     | CX 01 - Criar conta                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------
|Objetivo do teste| Verificar se o cadastro do usuário é concluído de forma efetiva.                                                                  |
|Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em "Criar conta". <br> 3) Preencher campos solicitados <br> 4) Clicar em "Criar usuário" <br> 4) Clicar em "Selecione seu avatar"
|Critérios de êxito| O usuário deverá ter ser registro criado, afim de realizar a utilização do app


|Caso de teste 02     | CX 02 - Login |
|-------|-------------------------
|Objetivo do teste|  Verificar se o usuário consegue acessar a conta criada.  |
|Ações esperadas |	1) Acessar a aplicação. <br>  2) Preencher campos de usuário e senha  <br> 3) Clicar em "Login". |
|Critérios de êxito| Acesso a conta criada, permitindo a troca de mensagens e o acesso ao histórico de mensagens. |

|Caso de teste 03     | CX 03 -  Encerrar sessão                                                                 |
|-------|----------------------------------------------------------------------------------------------
|Objetivo do teste| Verificar se o usuário consegue se desconectar da conta a qual fez o processo de login.                                                |
|Ações esperadas | 1) Acessar a aplicação.  <br> 2) Clicar no botão com o ícone de desligar.  <br> 3) O usuário deverá ser direcionado a tela de login. |
|Critérios de êxito| Ao clicar no botão com o ícone de desligar o usuário será direcionado a tela de login.            |

|Caso de teste 04     | CX 04 -  Visualização de histórico                                                                                                                                                    |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|Objetivo do teste| Visualizar histórico de mensagens enviadas e recebidas                                                                                                                |
|Ações esperadas | 	1) Acessar a aplicação.  <br>  2) Realizar processo de login.  <br> 3) Visualizar histórico de conversas. <br> 4) Selecionar uma conversa.<br> 5) Exibição do histórico do histórico de mensagens. |
|Critérios de êxito| O usuário deverá visualizar as mensagens enviadas e recebidas durante o processo de utilização da aplicação. |


|Caso de teste 05    | CX 05 -  Envio de mensagens e recebimento de mensagens |
|-------|-------------------------
|Objetivo do teste| Verificar se as mensagens estão sendo enviadas e entregues com êxito.  |
|Ações esperadas |	1) Acessar a aplicação.  <br>  2) Realizar processo de login.  <br> 3) Selecionar um dos usuários disponibilizados na tela de conversas <br> 4) Seleção do campo com "Escreva sua mensagem". <br> 5) O usuário destinatário aguarda por novas mensagens a serem recebidas.|
|Critérios de êxito| O usuário envia e recebe mensagens com sucesso. |

|Caso de teste 06     | CX 06 -  Seleção de emojis |
|-------|-------------------------
|Objetivo do teste| Verificar o fluxo de login de usuário cadastrado no aplicativo.  |
|Ações esperadas |	1) Acessar a aplicação.  <br>  2) Realizar processo de login.  <br> 3) Selecionar um dos usuários disponibilizados na tela de conversas <br> 4) Seleção do ícone localizado ao lado esquerdo do campo com "Escreva sua mensagem". <br> 5) Exibição da bandeja de emojis. <br> 6) Seleção de emoji desmontrado na bandeja.|
|Critérios de êxito| O usuário deverá conseguir selecionar e enviar para outros usuários emojis disponibilizados na aplicação, bem como recebe-los. |
