# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

Sabendo que um requisito é a propriedade que um software exibe para solucionar problemas reais, sendo o nosso caso uma solução para um "problema" de comunicação, para a elaboração deste projeto, listamos os requisitos funcionais e não funcionais de acordo com o que analisamos ser necessário para execução do mesmo. A seleção desses requisitos foi baseada nos conceitos já estudado em períodos anteriores.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Registro de usuário: O aplicativo deve permitir que os usuários se registrem e criem uma conta para acessar seus recursos, sendo eles as mensagens e as funcionalidades da aplicação. | ALTA | 
|RF-002| Enviar mensagem: O aplicativo deve permitir que os usuários enviem mensagens de texto, imagens, áudio e vídeo para outros usuários.   | ALTA |
|RF-003| Receber mensagem: O aplicativo deve permitir que os usuários recebam mensagens enviadas por outros usuários.   | ALTA |
|RF-004| Compartilhamento de arquivos: O aplicativo deve permitir que os usuários compartilhem arquivos (como fotos e vídeos) com outros usuários.   | MÉDIA |
|RF-005| Histórico de mensagens: O aplicativo deve permitir que os usuários acessem seu histórico de mensagens e possam procurar por mensagens específicas.   | BAIXA |
|RF-006| Personalização de perfil: O aplicativo deve permitir que os usuários personalizem seu perfil, incluindo imagem de perfil, status e outras informações pessoais.  | MÉDIA |
|RF-007| Excluir mensagens: O aplicativo deve permitir que os usuários excluam mensagens específicas ou toda uma conversa, sendo a mesma excluída de seu próprio dispositivo.   | MÉDIA |
|RF-008| Notificação de mensagens: O aplicativo deve notificar o usuário quando uma nova mensagem é recebida, através de um alerta sonoro.     | ALTA |
|RF-009| Notificações push: O aplicativo deve ser capaz de enviar notificações push para alertar os usuários sobre novas mensagens recebidas.   | ALTA |
|RF-010| Listas de contatos: Os usuários devem ser capazes de criar e gerenciar listas de contatos, para que possam facilmente enviar mensagens a grupos específicos de pessoas.   | MÉDIA |
|RF-011| Verificação de status de entrega: Os usuários devem ser capazes de verificar se as mensagens que enviaram foram entregues com sucesso.   | MÉDIA |
|RF-012| Integração de emoji e GIFs: O aplicativo deve permitir que os usuários enviem e recebam emoji e GIFs em suas mensagens.   | BAIXA |
|RF-013| Sincronização entre dispositivos: permitir que os usuários acessem suas mensagens em vários dispositivos, como smartphones, tablets e computadores.   | ALTA |
|RF-014| Busca de mensagens: A aplicação deve permitir que os usuários pesquisem suas mensagens antigas.   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Usabilidade: O aplicativo deve focar nos conceitos de usabilidade, dando ênfase a critérios dentro de design e acessibilidade. | ALTA | 
|RNF-002| Confiabilidade: O aplicativo deve ser confiável, com mensagens entregues consistentemente e sem erros ou falhas. |  ALTA | 
|RNF-003| Compatibilidade: O aplicativo deve ser compatível com sistemas operacionais Android e Windowns, para que os usuários possam usá-lo em diferentes plataformas. |  MÉDIA |
|RNF-004| Manutenibilidade: O aplicativo deve ser fácil de manter e atualizar, com código limpo e bem documentado, além de possuir recursos que facilitem a resolução de problemas. |  MÉDIA |
|RNF-005| Desempenho: O aplicativo deve ser capaz de lidar com um grande número de mensagens simultaneas, sem atrasos ou falhas. |  MÉDIA |
|RNF-006| Personalização: o aplicativo deve permitir que os usuários personalizem suas configurações e preferências de notificação. |  BAIXA |
|RNF-007| Desempenho: O aplicativo deve ser rápido e responsivo, sem atrasos significativos na entrega de mensagens ou na atualização da interface. |  ALTA |
|RNF-008| Regulamentação: O aplicativo deve estar em conformidade com as regulamentações de privacidade e segurança de dados. |  ALTA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser implementado com uso de tecnologias front end, back end e mobile, podendo fazer uso de bibliotecas que influenciem positivamente na qualidade do software. |
|02| O projeto deverá ter seu código versionado utilizando Git.       |
|03| A primeira etapa do projeto deverá ser entregue até o dia 19/03/2023, respeitando o prazo estipulado.        |
|04| A segunda etapa do projeto deverá ser entregue até o dia 23/04/2023, respeitando o prazo estipulado.        |
|05| A terceira etapa do projeto deverá ser entregue até o dia 15/05/2023, respeitando o prazo estipulado.        |
|06| A quarta etapa do projeto deverá ser entregue até o dia 04/06/2023, respeitando o prazo estipulado.        |
|07| O projeto completo, com suas respectivas funcionalidades, necessita ser entregue até o dia 25/06/2023, respeitando o prazo estipulado.        |
## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

| Requisito | Funcionalidade | Design | Desenvolvimento | Teste |
|-----------|----------------|---------|-----------------------|-------|
| Interface simples e minimalista |  |  X | X | X |
| Atraente para todos os usuários |  | X | X | X |
| Comunicação entre diferentes plataformas | X | X | X | X |
| Recursos intuitivos e de fácil acesso | X | X | X | X |
| Melhorar a comunicação para empresas e equipes | X | X | X | X |
| Acessibilidade para usuários mais velhos |  | X | X | X |
| Solução para comunicação entre diferentes dispositivos e sistemas | X | X | X | X |


![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
