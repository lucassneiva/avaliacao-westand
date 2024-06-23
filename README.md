# Teste de Conhecimentos em Angular/React, TypeScript, SQL e Node.js

## 1. TypeScript

### Perguntas Teóricas

1. Explique a diferença entre `interface` e `type` em TypeScript.
   Interface serve para garantir que objetos sigam um formato específico. Type pode ser usado para definir objetos, combinações de tipos e até funções.

2. O que são generics e como eles são utilizados?
   Generics são uma forma de criar funções ou classes que podem funcionar com diferentes tipos de dados, serve para tornar o código mais flexível e reutilizável.

3. O que é um `Union Type` e como ele pode ser usado em TypeScript?
   É um meio de dizer que uma variável pode ser de um tipo ou de outro, permitindo variáveis terem mais de um tipo de dado.

### Desafios de Código

1. Escreva uma função em TypeScript que recebe uma lista de números e retorna o maior número da lista.
2. Crie uma interface `Person` com as propriedades `name` (string) e `age` (number). Escreva uma função que recebe um array de `Person` e retorna o nome da pessoa mais velha.

## 2. Angular/React

### Perguntas Teóricas

**Angular**

1. Explique a diferença entre `ngOnInit` e `constructor` em Angular.
   O "ngOnInit" é o método especial que é executado na inicialização do componente e serve para configurar o comportamento dele ao inicializar, como buscar dados do servidor.
   O "constructor" é o método especial chamado quando o componente é criado. Serve para configurar a criação do próprio componente e injetar dependências necessárias para o funcionamento do componente.

2. O que são `Services` e `Dependency Injection` em Angular?
   Services são elementos presentes na arquitetura do projeto responsáveis por fazer tarefas específicas, como buscar dados ou fazer cálculos. Serve para reutilização e organização.
   Dependency Injection é uma forma de fornecer ao componente os serviços que ele precisa para funcionar como esperado.

3. Como funciona o `Data Binding` em Angular?
   Uma forma de ligar dados entre a lógica do componente e a interface do usuário, de modo que mudanças nos dados se reflitam automaticamente na interface, e vice-versa, sem precisar atualizar manualmente.

**React**

1. Explique a diferença entre `Component` e `PureComponent` em React.
   Component é uma parte do código que representa uma parte da interface do usuário que é a tela. Serve para mostrar informações na tela e pode mudar com base no que acontece na aplicação. O PureComponent é uma versão especial de componente que verifica se houve alteração nos dados antes de atualizar. Serve para melhorar a performance, evitando atualizações desnecessárias.

2. O que são `Hooks` e por que eles são usados?
   Hooks são elementos do código que permitem usar estado e outras funcionalidades do React em componentes funcionais. Tornam os componentes funcionais mais poderosos, permitindo adicionar estado e outras características sem precisar usar classes.

3. Como funciona o `State` e o `Props` em React?
   State é o objeto especial dentro de um componente que guarda dados que podem mudar ao longo do tempo. Serve para armazenar informações importantes para o componente, como dados do usuário ou se algo está visível ou escondido. Props são dados que um componente recebe de outro componente, é utilizado para passar informações de um componente pai para um componente filho, o que permite personalizar e reutilizar componentes de maneira flexível.

### Desafios de Código

**Angular**

1. Crie um serviço simples em Angular que busca dados de uma API e injete-o em um componente.
2. Implemente um formulário reativo em Angular que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

**React**

1. Crie um componente funcional em React que busca dados de uma API e exibe esses dados em uma lista.
2. Implemente um formulário controlado em React que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

## 3. SQL

### Perguntas Teóricas

1. O que é uma `JOIN` e quais são os tipos principais de `JOIN` em SQL?
   JOIN é uma operação que combina linhas de duas ou mais tabelas com base em uma condição relacionada entre elas.

   Tipos principais de JOIN:
   INNER JOIN: Retorna linhas que têm correspondências em ambas as tabelas;
   LEFT JOIN: Retorna todas as linhas da tabela da esquerda e as correspondências da tabela da direita;
   RIGHT JOIN: Retorna todas as linhas da tabela da direita e as correspondências da tabela da esquerda;
   FULL JOIN: Retorna todas as linhas quando há uma correspondência em uma das tabelas;

2. Explique a diferença entre `WHERE` e `HAVING` em uma consulta SQL.
   "WHERE" É usado para filtrar linhas antes dos dados serem agrupados e é usado com colunas.
   "HAVING" Filtra grupos de dados após a aplicação de funções de agregação(COUNT, SUM, AVG).

3. O que são índices e por que são importantes?
   São estruturas de dados que melhoram a velocidade de recuperação de dados de uma tabela.
   Aumentam a performance das consultas ao permitir acesso rápido às linhas em uma tabela com base nos valores das colunas indexadas, também reduzindo o tempo de busca.

### Desafios de Código

1. Escreva uma consulta SQL para encontrar todos os clientes que fizeram pedidos no último mês.
2. Dada a tabela `Employees` com colunas `id`, `name` e `salary`, escreva uma consulta SQL para encontrar os 5 funcionários com os maiores salários.

## 4. Node.js

### Perguntas Teóricas

1. O que é o `Event Loop` em Node.js e como ele funciona?
   O "Event Loop" permite ao Node.js processar operações assíncronas de forma eficiente, gerenciando o tempo de execução das operações e mantendo o thread principal livre para continuar executando outras partes do código.

2. Explique a diferença entre `require` e `import` em Node.js.
   Basicamente o require é utilizado com o sistema de módulos CommonJS enquanto o import utilizado com ES6(ECMAScript 2015).

3. O que é `middleware` em Express.js e como ele é usado?
   É uma função que tem acesso ao objeto de solicitação, ao objeto de resposta e à próxima função middleware dentro do fluxo de solicitação-resposta da aplicação, para executar código, modificar os objetos de requisição e resposta, finalizar o fluxo ou chamar o próximo middleware.

### Desafios de Código

1. Crie uma API simples em Node.js usando Express que tem uma rota GET que retorna "Hello, World!".
2. Implemente um middleware em Express que registra todas as requisições recebidas com o método HTTP e a URL solicitada.
