# Arquitetura da Solução

Iremos utilizar o Kafka Apache para enviar e receber mensagens de texto (SMS). A comunicação com o cliente será feita por node.js. No entanto, para uma comunicação em tempo real entre o cliente e o servidor, como um chat em tempo real, é necessário utilizar sockets. Nesse caso, a socket.io se comunica com o servidor node.js. Para integração dessa API, iremos utilizar React JS e para armazenamento dos dados persistentes será usado o MongoDB.

![image](img/imp.jpg)
![image](img/impflow.jpg)


## Diagrama de Classes

A arquitetura de um aplicativo de mensagens distribuído pode ser complexa, mas geralmente segue um modelo cliente-servidor. No modelo deste projeto o servidor fornece serviços para os clientes, através da troca de mensagens, que pode ser realizada por intermédio do aplicativo móvel ou desktop, desde que conectados à Internet. Segue abaixo os diagramas Web e Mobile respectivamente.

![DC Web](https://github.com/ICEI-PUC-Minas-PMV-ADS/Chatter/blob/Mariane/docs/img/diagrama.png?raw=true)


## Processos e suas Respectivas Atividades

Nesta sessão, apresentaremos os modelos de gestão do projeto: BPMN, Tabelas, Gráficos ou Dashboards com no mínimo 5 indicadores de desempenho e metas para o processo de negócio e para o processo de desenvolvimento.

Com auxílio das aulas de Modelagem e Gestão de Processos e Negócios, o grupo determinou como método de gestão de processos, o modelo “**Ciclo BPM**”.


![image](https://user-images.githubusercontent.com/78277341/194152367-22ff0c32-7c18-48b0-b2c0-e2d5b7c314c6.png)

É importante destacar a abordagem de que processo é um trabalho ponta a ponta que atravessa a empresa de maneira transversal ou horizontal para criar valor para o cliente. Para Silva (2017, p. 49): “*Processos ponta a ponta são processos que nascem da necessidade do cliente, passam por várias áreas e departamentos, e terminam na entrega do produto ou serviço para o cliente*”.

![image](https://user-images.githubusercontent.com/78277341/194152637-826cfa03-d11a-44e8-abdf-424a775dcc60.png)

Assim, o grupo pretende diminuir a complexidade, fazer o projeto de forma mais ágil e com menos recursos.

![image](https://user-images.githubusercontent.com/78277341/194152816-dfc4f772-8ea0-4d87-b74d-c1afeac9ee60.png)

Para reforçar o comprometimento com o gerenciamento dos processos, iremos realizar um ciclo contínuo, incluindo as seguintes atividades:

1. **Planejamento** = Início do ciclo; orientação estratégica da organização. Quais serão os processos que atenderão esses preceitos da estratégia: detalhamento.
2. **Análise** = compreender as atividades do processos e os resultados que serão entregues. A organização tem condições de realizar? Quais as dificuldades? A análise é realizada por meio de algumas técnicas, com modelagens, entrevistas com as pessoas envolvidas, simulações, etc. Aqui, ainda não se objetiva encontrar soluções, mas apenas analisar eventuais problemas que possam ocorrer. O processo como ele é.
3. **Desenho** = preocupar com as mudanças necessárias do processo que impactarão o alcance das metas e das organizações, visando a satisfação do cliente. Valor do produto que será entregue. O design (desenho) indica algo futuro. Que deverá ser executado. Como o processo será, já incorporadas as melhores detectadas na fase de Análise (To-be)? Em que momento serão implementados os recursos de tecnologias e os responsáveis do processos. Metas e indicadores e como serão suas implementações, como serão executados.
4. **Implementação** = novo as-is. Nessa fase, modelagem, automação, rp, rm, a implementação irá envolver a programação dessas ferramentas. Preparação das bases de dados, etc. Ao seu final, espera-se o processo em execução (automatizado ou manual, ou híbridos)
5. **Monitoriamento e Controle** = a execução do processo será acompanhada. Não só observar, mas é necessário também agir no sentido de controlar as interferências: medições, comparações, indicadores, *Dashboards*, mapas, cartões, etc. Tudo isso para garantir o alinhamento com as estratégias estabelecidas pelo grupo.
6. **Refinamento** = Os ajustes, aperfeiçoar a implementação. Por mais que seja bem planejado, o processo muitas vezes necessita de refinamentos. O refinamento fecha o ciclo BPM de gerenciamento de processos de negócios.

A imagem abaixo demonstra o monitoramento e controle dos 6 elementos, gerados através de dados no Planner, registrados pelos membros, de suas respectivas atividades:



![Projeto Messageria](https://user-images.githubusercontent.com/75712250/222975674-d29ec7e7-b084-4523-9eb7-36709a5a67ba.png)

### Modelo e Notação de Processos de Negócio
O modelo *Business Process Model and Notation* (BPMN ou em português Modelo e Notação de Processos de Negócio), foi utilizado para descrever o processo de metodologia adotado para o processo de desenvolvimento e para o processo de negócios. Por ser padronizada, a notação BPMN facilitará o entendimento das pessoas envolvidas no projeto.
Neste sentido, com o modelo BPMN, utilizaremos o seu conjunto de elementos gráficos para representar aquelas atividades de trabalho, agrupadas em processos, para indicar como eles serão executados.

Abaixo está o modelo do fluxo de mensagens entre os usuarios A e B e suas determinadas interações com a Aplicação durante uma conversa: 

![modelo BPMN](https://user-images.githubusercontent.com/75712250/222975679-7836974f-0df3-48d2-94b0-205221c46422.png)


## Modelo Físico

Segue abaixo o modelo físico contendo o  JSON de criação da tabela "usuário" do banco de dados. Este modelo inclui a definição dos campos que farão parte da tabela, bem como as restrições de integridade necessárias.

![modelo fisico usuario](https://user-images.githubusercontent.com/90660755/232941488-fcbfab16-4e3c-4182-ac4f-bde4fee740d4.PNG)

Segue abaixo o modelo físico contendo  o  JSON  de criação da tabela "mensagem" do banco de dados. Este modelo inclui a definição dos campos que farão parte da tabela, bem como as restrições de integridade necessárias.

![modelo fisico mensagem](https://user-images.githubusercontent.com/90660755/232941799-11bd805a-3992-4bf8-8f18-33fe971ed987.PNG)

Segue abaixo o modelo físico contendo  o  JSON  de criação da tabela "conversa" do banco de dados. Este modelo inclui a definição dos campos que farão parte da tabela, bem como as restrições de integridade necessárias.

![modelo fisico conversa](https://user-images.githubusercontent.com/90660755/232941869-1616c6c6-b625-4e76-ae5f-a425cb687ce0.PNG)

### Metas e Indicadores

A BPMN utiliza o seu conjunto de elementos gráficos para representar aquelas atividades de trabalho, agrupadas em processos, para indicar como eles são executados:


![image](https://user-images.githubusercontent.com/78277341/194154347-06506bbc-662f-43fc-a011-3124266b0553.png)

Diante disso, o grupo estabeleceu as seguintes metas e indicadores nesse processo de desenvolvimento:

1. Separar regras de negócio das aplicações - **visibilidade e processos mais inteligentes**.
2. Automatizar as regras - **Consistência**
3. Gerenciar um repositório de regras - **Regras como ativos**.
4. Expressar regras de negócio em termos que as pessoas de negócio compreendam - **Visibilidade dos modelos de decisão**
5. Estimular a colaboração entre pessoas de negócio e TI - **Agilidade**

Como meta de negócio, sabe-se que o cliente utilizará o produto com o fim de otimizar o tempo.
Não faz sentido, portanto, que ele gaste muito tempo configurando o serviço. Assim, o grupo estabeleceu que o procedimento de instalar, logar, ver tutorial de uso, determinar tempo e alarme, não deverá ultrapassar 10 minutos.

O objetivo é criar um produto simples e rápido, onde o tempo de instalação e configurações de uso fiquem dentro da margem de aceite (MA) estabelecida pela meta.


| Classificação <br/>de Indicadores | Métrica      |
| ------------- |--------------|
| Viável  | Dentro da Meta |
| Aceitável  | Meta + MA |
| Inviável  | Acima de Meta + MA |

| Evento                    | Descrição                                                        | Meta       | Margem de Aceite (MA) |
|---------------------------|------------------------------------------------------------------|------------|-----------------------|
| Instalação                | Período entre a compra do produto até a completa instalação (**) | 5 minutos  | 3 minutos             |
| Configuração              | Acesso ao app, configurações de conta e configurações de uso      | 5 minutos | 3 minutos             |
| Instalação e Configuração | até 10 minutos                                                   | 10 minutos | 3 minutos             |


| Metas de Negócio | Meta      |      MA      | 
| ------------- |--------------|--------------|      
| downloads  | aumento de 35% em downloads no app |    3.0   |
| receita  | aumento de 25% na receita de anúncios no app |     3.0  |
| retenção  | nenhuma redução na retenção |   3.0    |

Para acompanhar as metas de negócio, o grupo irá integrar o app ao Google Analytics para Firebase, que permite criar um registro quando os usuários abrem o app. O núcleo do Firebase é o Google Analytics, uma solução de análise ilimitada disponível sem custos financeiros. O Analytics se integra a recursos do Firebase e oferece geração ilimitada de relatórios para até 500 eventos distintos que podem ser definidos usando o SDK do Firebase. Com os relatórios do Analytics, o grupo poderá compreender a compenhar claramente o comportamento dos usuários, podendo assim, obter melhores decisões sobre otimizações de desempenho do app.

![image](https://user-images.githubusercontent.com/78277341/194724407-77a13510-ee1a-4743-baae-b1dc860d8f09.png)


Para alcançar as metas, o grupo utilizará o método **_SMART_**, estabelecendo-se 5 indicadores de desempenho:

![image](https://user-images.githubusercontent.com/78277341/194154472-573a0947-e7ed-41dc-b421-821696eb8017.png)

1. **Specific/Específico** = Projeto completo até a data 07/12/2022. Utilização do aplicativo em 10 minutos pelo usuário.

2. **Measurable/Mensurável** = em quanto tempo o resultado deve ser alcançado alcançado? Em 3 meses.

3. **Attainable/Atingível** = considerando a capacidade produtiva dos membros do grupo, é viável a construção de um pomodoro cuja utilização e configuração para uso, não ultrapasse 10 minutos até a data final da conclusão do projeto.

4. **Relevante/Relevant** = a meta é importante pois o serviço está relacionado à administração de tempo e produtividade. Caso o produto atrase o usuário em seus estudos ou tarefas, o produto torna-se completamente inútil. É importante que os membros estabeleçam funcionalidades simples e de fácil usuabilidade para que o principal objetivo do cliente seja atingido: não disperdiçar tempo.

5. **Time Base** = Os membros do grupo deverão ser consultados sobre os prazos de cada etapa do processo, de modo que o cronograma seja definido de forma conjunta entre todos os envolvidos. Cada atividade deverá constar o nome do responsável e data de conclusão.

As etiquetas SMART são definidas no momento em que as atividades são criadas e distribuídas no backlog:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/assets/78277341/a70a64b0-dbe5-4f75-8f0a-37884732684a)

A figura a seguir mostra uma visão geral e atual do método SMART no backlog do projeto:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/assets/78277341/d07c752c-f501-4a47-88d9-8d53aa9bb566)

Para acompanhar o custo e a dificuldade de cada atividade desenvolvida no projeto, foi criado também 3 indicadores de medida: Difícil, Média e Fácil.

![image](https://user-images.githubusercontent.com/78277341/194154763-cbbc3d01-b14c-477d-b4c6-75a6c163b7db.png)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/assets/78277341/131d21d7-c690-4d82-81b5-d9a4873286b7)
Assim, é possível visualizar as tarefas que irão requerer maior atenção e maior gasto de tempo, servindo inclusive de parâmetro para futuras medições ou atualizações de processos existêntes. Outra vantagem, é a possibilidade de se visualizar possível excesso ao atribuir tarefas à um determinado membro, de modo a distribuir as atividades de forma mais justa e eficiênte de acordo com o grau de dificuldade, sem sobrecarregar os integrantes.




### Quadro Visual Atual de Gestão de Trabalho
Conforme estabelecido na "Figura Processo de Desenvolvimento", após cada integrante chamar uma atividade, ele realizará também o registro do andamento e os indicadores já demonstrados.
A figura a seguir, demonstra o atual quadro de divisão de tarefas, conforme a terceira etapa do projeto. O acompanhamento dinâmico desse quadro, pode ser acessado em nosso Planner [aqui](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=b2f50c33-795c-4898-b98d-8e101e9a50dc&planId=_aRpoM24dk6R1JSYpdDmnWQACBdM) (_é necessário está logado em sua conta Microsoft_).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/assets/78277341/253d4c89-c835-48ab-a7ca-4f3dddcf0c28)

Na mesma ferramenta, podemos ainda visualizar o  gráfico geral do controle de desempenho dos integrantes:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/assets/78277341/e351e779-8c6e-4b68-a89f-0ad8852e9d79)



## Tecnologias Utilizadas

A linguagem de programação Javascript, atrelado a biblioteca React Native e React JS, juntamente com o framework e Node.js foi escolhidas para a aplicação por dois motivos. Primeiro, essas tecnologias são altamente escaláveis e permitem que a aplicação suporte muitos usuários simultâneos.
Outro motivo para a escolha dessas linguagens de programação foi a experiência do grupo de desenvolvimento com elas. Como os integrantes já possuíam habilidades prévias com Javascript, React Native e Node.js, foi mais eficiente para eles implementar essas tecnologias no app "Chatter".

| Linguagem         | Aplicação       |
|------------------|-----------------|
| Node.js          | BackEnd         |
| Node.js          | WebAPI Rest     |
| Javascript       | FrontEnd WEB    |
| React Native     | FrontEnd Mobile |
| React JS          | FrontEnd Mobile |
| VSCode           | Software de Código |
| Mongo DB        | Banco de Dados |
| Postman         | Teste de API    |

![chatter aplicação](https://user-images.githubusercontent.com/90660755/232940106-ebbcb65b-d8f8-4753-ae6f-3a005eb4ad76.png)

## Documentação da Implementação da WEB API Rest:

| Operação | Chamada HTTP |
|----------|--------------|
| Read     | GET          |
| Create   | POST         |
| Create   | POST         |
| Create   | POST         |

![test register](https://user-images.githubusercontent.com/90660755/233220152-99ca67f2-1c1d-4cd6-abc2-324ccf998151.PNG)


![user test](https://user-images.githubusercontent.com/90660755/233220541-72a07e9f-f509-444f-a319-c313861074be.jpeg)


![msg test](https://user-images.githubusercontent.com/90660755/233220623-15716bb7-2d60-4375-934b-718324998522.jpeg)


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
