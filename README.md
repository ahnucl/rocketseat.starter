# Curso Javascript

## Introdução Javascript

### INTERVALOS E TIMEOUUT

#### Intervalo
- "Intervalo" é uma função períodica, que será executada a cada "intervalo"

- Para **referenciar a função**, passar o escopo dela para outro local, deve-se usar o nome da função sem o parênteses. Se passar a função com o parênteses ela irá simplesmente executar e a referência não será passada.

#### Timeout
- É um atraso para executar a função.

```
setInterval(func, periodInMilis); // tempo em ms
setTimeout(func, delayInMilis)
```

#### Desafio

##### Questão5 

- O método "for... in" funciona para objetos; 
- para Arrays usar "Array.prototype.forEach()" ou "for... of"
- "Array.prototype.forEach()" lembra um paradigma mais funcional, declarativo
- "for... of" é um loop normal, imperativo

### Misc

Faz um "publish" no branch: (necessário antes de dar push)
``` 
git push -u origin master
```

## Manipulação da DOM

### Manipulando a DOM

- DOM: árvore de elementos do HTML; Elementos dispostos em tela

- Os atributos onclick, etc, recebem a função com parênteses


### Manipulando a DOM

- Recuperar elementos da DOM

- Armazenar "a referência" do elemento numa variável:
```
document.getElementById()
document.getElementsByTagName() // sempre retorna um vetor (HTMLCollection
document.getElementsByClassName() // sempre retorna um vetor também

// Query Selector - permite percorrer a DOM até encontrar o elemento desejado
document.querySelector("body div.app input#nome2"); // Caminho
    
    // Possível utilizar os atributos também -> usar [] para referenciar atributos
    document.querySelector("input[name=campo2]");

// Retorna apenas um único elemento, para retornar mais de um elemento usar querySelectorAll
    // Retonar uma NodeList

```
> "document" variável global que acessa a DOM da página
> Evita "sujar" a interface com código

### Lidando com elementos

- É posível criar novos elementos com Javascript 
    -> document.createElement()
    -> método appendChild de elementos HTML

- Texto -> precisar criar um TextNode como se fosse um elemento HTML e depois usar o appendChild

- removeChild() -> remove elemento

### Alterando estilos


## App de TODOS

- referenciar elementos na DOM

- complexidade do problema -> como é só texto, um array resolve; a estrutura poderia ser mais complexa.

- innerHTML manipula o conteúdo (HTML) do elemento

- Armazenamento local (local storage) - não relacional (chave-valor)

> Operaçções que modificam a lista -> salvar e deletar todos
> Storage acessado pela variável global "localStorage"
> métodos: localStorage.setItem('list_todos', todos);
> Storage não salva arrays, apenas string -> transferir para JSON (Extrutura de um Objeto do Javascript mas é uma String)
> JSON.stringify
> O conteúdo do storage pode ver visto na aba "application" no menu de dev do navegador

- Valor padrão para variável: "|| valor" - no caso do array: var array = JSON... || [] (valor padrão é um array vazio)
> Esse é um "problema" do JS - a tipagem fraca!
  
## JS assíncrono

### Requisição AJAX

- AJAX -> requisição assíncrona feita a algum backend

- No Javascript não há necessidade de recarregar a página após requisitar algo ao servidor

> classe XMLHttpRequest() -> recuperar informações com o AJAX


```(Javascript)
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ahnucl');
xhr.send(null);

// Requisição asíncrona, não acontece no mesmo fluxo do script
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) { // resposta voltou
        console.log(JSON.parse(xhr.responseText));
    }
}
```

### Promisses

- Códigos que não influenciam a linha do tempo de execução do código - devolvem algo apenas após um intervalo de tempo

- Promisse é uma classe do JS; resolve e reject são funções, resolve é retornado em caso de sucessoe reject em caso contrário
```
var minhaPromise = function() {
    return new Promise( function(resolve, reject) {
        
    });
}
```

- Esqueleto de uma Promisse:
```
var minhaPromise = function() {
    return new Promise( function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.git4hub.com/users/ahnucl');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // resposta voltou
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
``` 

- Promisse: quando chamar a função resolve (1º argumento) cai no "then", quando chamar a função reject (2º argumento) cai no "catch"; os argumentos para as funções no "then" e no "catch" são passados pelas funções da promisse.

### Utilizando Axios

- Usar Axios no lugar da XMLHttpRequest()
> https://github.com/axios/axios

- Importar a lib antes do script para ele já estar disponível

- Axios retorna mais coisas, inclusive a XMLHttpRequest, no mesmo objeto. É possível consultar o readyState, status, etc (campo request, é um XMLHttpRequest)

- Ou seja, o Axios é um Wrapper (encapsulamento) em volta da XMLHttpRequest

- Código equivalente ao do vídeo passado:
```
axios.get('https://api.github.com/users/ahnucl')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
```

# Curso JavaScript ES6

## Conceitos

### Introdução

- ES = EcmaScript

- 6 -> versão (ano + 1, 2015 no caso)

- JS antes do ES6 é bem diferente em questão de novas funcionalidades

- Babel: navegadores lentos para entender novas funcionalidades do ES, o Babel transpila as funcionalidades para códigos que todos os navegadores entendem (ES6+ não tem "Novas" funcionalidades, mas funcionalidades mais abstraídas, modificando a forma de escrever JS)

- Webpack: servidor de desenvolvimento para javacript

- Principais diferenças ES6+:
![](/misc/ES6.png)

- Async/Await é do ES8

### Configurando o Babel

- Instalando o babel e adicionando ele como dependência do projeto pelo yarn:
```
yarn add @babel/cli //instalando a cli do babel
```
- Outra dependência: "yarn add @babel/preset-env"

- "yarn.lock" -> tipo de cache do yarn

- node_nodules mantém todas as dependências do projeto

- após a inicialização de alguma dependência, criar o **.gitignore** para evitar que a pasta node_modules suba pro controle de versão

- arquivo de **configuração do babel** -> *".babelrc"*

- configuração básica do babel:
```
{
    "presets":["@babel/preset-env"]
}
```
> O preset-env é um preset do babel que entende qual ambiente estamos trabalhando (babel pode ser usado em browser, node, react native, etc)

- passar "-w" no comando do babel deixa o babel monitorando o serviço pra automaticamente gerar o novo bundle a cada alteração


### Classes

- Construtores: Propriedades podem ser definidas nos contrutores - o JS permite isso, não é necessário definir uma variável antes de chamá-la no construtor
```
class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Eu';
    }
```

- Ao adicionar um método de uma clase a um botão, é necessário uma função wrapper!
```
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('asdasd'); 
}
```

- Métodos estáticos são chamados independente do restante da classe; úteis quando o método deve apenas receber um valor e retonar outro, por exemplo


### Const e Let

- constantes (const); Não é possível reatribuir o valor, mas é possível **mutar** : mudar propriedades dentro de um objeto ou array
```
const usuario = { nome: "leo" };

usuario.nome = 'Leonardo';
``` 
- variáveis de escopo (let) - consultar freeCodeCamp

### Operações em Array

- map, filter e reduce recebem um função como parâmetro

- map

- reduce

- filter - função deve retornar um boolean para fazer a filtragem

### Arrow Functions
```
const newArr = arr.map(function(item) {
    return item * 2;
});
// Vira:
const new Arr = arr.map(item => item * 2);
```

- Para retornar objetos na sintaxe reduzida é necessário envolvê-lo em parênteses:
```
const retornaObjeto = w() => ({ nome: "Leonardo" });
```

### Valores padrão

- NaN: not a number

- usar atribuição na assinatura da função:
```
function soma(a = 0, b = 0) {
    return a + b;
}
// arrow function
const soma = (a = 0, b = 0) => a + b;
```

### Desestruturação

- Dado o objeto:
```
const usuario = {
    nome: "Leonardo",
    idade: 30,
    endereco: {
        cidade: "Brasília",
        estado: "DF",
    },
};
```

- É possível capturar valores dele em variáveis em apenas uma linha segundo a sintaxe:
```
const {nome, idade, endereco: { cidade } } = usuario;
```

- Usando diretamente em uma função:
```
function mostraNome( { nome, idade } ) {
    console.log(nome, idade);
}
mostraNome(usuario);
```

### Operadores rest/spread

- Utilizam os "..."

- Necessário instalar um novo pacote pois esses operadores ainda não foram acoplados à versão principal do Babel - instalar plugins:
```
yarn add @babel/plugin-proposal-object-rest-spread
```

- Aplicável em objetos e em arrays e em parâmetros de funções (rest)

- Um objeto **não pode** ter duas propriedades iguais

- *REST* - pegar o resto das propriedades / *SPREAD* - propaga um objeto/array para outra estrutura de dados
```
// REST
const usuario = {
    nome: "Leonardo",
    idade: 30,
    endereco: {
        cidade: "Brasília",
        estado: "DF",
    },
    empresa: "TODAS",
};

const { nome, ...resto} = usuario; // nome contém apenas usuario.nome, e resto contém as demais propriedades de usuario

const arr = [1,2,3,4,6];
const [a,b,...c] = arr; // a = 1, b = 2, c = [3,4,6] (resto)

function soma(...params) {
    return params.reduce((total,next) => total + next);
}
// SPREAD
const arr1 = [1,2,3];
const arr2 = [5,6,7];
const arr3 = [ ...arr1, ...arr2 ]; // [1,2,3,5,6,7]

const usuario1 = {
    nome:"Diego",
    idade:23,
    empresa:"Rocketseat",
}

const usuario2 = { ...usuario1, nome: "Leonardo", }; // primeiro "copia" o objeto e depois sobreescreve o que for especificado
```

### Template Literals

- forma de incluir variáveis dentro de Strings no JS a partir do ES6

- Usar sinal de crase (` `) no lugar de aspas (lembrando de simples e duplas no JS fazem a mesma coisa) e especificar o nome das variáveis, dentro da string, com "${ }"

### Object Short Syntax

- Usar mesmos nomes de variáveis e propriedades de objetos -> não é necessário fazer "nome: nome", por exemplo:
```
const nome = "jasdas";

const usuario = {
    nome, // não precisa ser "nome: nome",
    sobrenome: "asdasdas",

}
```

## Webpack Server

### Configurando Webpack

- Webpack - serviço que permite trabalhar com vários arquivos JS e outros tipos de arquivo também dentreo da mesma aplicação - todo esse código ainda é convertido em um único bundle.js -> **imports e exports**

- Dependências de desenvolvimento -> no package.json sob a chave "devDependencies"; usar -D no yarn add

- Arquivo de configuração do webpack -> webpack.config.js 
> Sintaxe um pouco diferente: module.exports (json); chaves obrigatórias: entry  (arquivo principal que contém o código ES6+); output; module.rules -> regras (o babel é uma)

### Import/export

- quando se usa a palavra reservada "export" em uma função, variável, ou classe, etc, é possível importar essa informação com a keyword "import"

- a procura no import por padrão considera o arquivo como ".js"

- cada arquivo pode ter um export default - frameworks frontend colocam uma classe ou função por arquivo, e ele é exportado por default
> pra importar defaults não precisa usar as { } e é possível usar qualquer nome

- para mudar o nome de um objeto no import comum deve-se usar o "as": { algum iport as a }

- caso um arquivo tenha um export default e outros normais:
```
import default, { normal1, normal2, ... } from './arquivo';
```

- importar tudo num único objeto:
```
import * as funcoes from './funcoes';
```

### Webpack dev server

- Estrutura de pastas: src -> arquivos js da aplicação
> dentro do diretório public ficam os arquivos que o webpack não precisa para trabalhar; os arquivos que o webpack precisa monitorar ficam no diretório src 

- o webpack-dev-server serve para trabalhar com o projeto offline, ele embute o bundle.js no index

- O dev-server monitora as alterações e dá um refresh automaticamente na página

## Async/Await

- sintaxe reduzida para Promises

- É necessário instalar uma biblioteca para trabalhar com async/await no Babel; adicionar outro plugin:
```
yarn add @babel/plugin-transform-async-to-generator -D
yarn add @babel/polyfill -D
```
>O polyfill deve ser adicionado no webpack.config.js e o plugin do babel no .babelrc

- await -> Chamada de funções que retornam Promises; usada dentro de uma função async;
>Tendo o await modificando uma função que retorna uma promisse garante que próxima linha só será executada quando a função terminar de executar;

- async -> transforma a função declarada numa Promise
>Não é possível utilizar o await a frente de uma Promise se não estiver dentro de uma função com async

### Configurando Axios

- Requisições HTTP assíncronas, acesos a APIs - não é dependência de desenvolvimento

```
yarn add axios
```

- Todas as funções do axios retornam Promises

- Com Promises tinha um bloco "then" pra resposta e um bloco "catch" para os erros; com o axios é lançado um erro (Uncaught), pois não há esses blocos... Deve-se usar um bloco try-catch encapsulando a chamada do axios

## Aplicação com ES6+

- estilos + classe principal "App" para controlar toda a aplicação

- array -> map() vs forEach()
> o map modifica o array, retorna algo, o forEach não modifica, apenas percorre

- Sempre que for importar um arquivo local (que não é de terceiros) sempre especifiar com caminho relativo (usando './', por exemplo), caso contrário a importação será procurada na pasta node_modules ( fonte das dependências terceiras) - reescrever essa anotação, ficou confusa

# NodeJS

## API e NodeJS

- Criação de APIs REST usando NodeJS

- Aplicações Full MVC -> front junto com o back

- Aplicações REST -> front separado do back
>Mais flexibilidade no front-end

## Criando estrutura

- Iniciar um projeto Node
```
npm init -y
```
> cria um package.json; esse arquivo, entre outras coisas, armazena as dependências do projeto

- express - micro-framework que lida com rotas e views
>rotas: endereços de url que o usuário pode acessar 

- package-lock.json -> cache de dependências

- arquivo principal: server.js ou index.js

- Servir o arquivo: node server.js

## Criando primeira rota

- req e res
>req: requisição que está sendo feita ao servidor: parâmetros, corpo, usuário, autenticação, etc.

## Utilizando o Nodemon

```
npm install -D nodemon
```

- Executando scrips do package.json: npm run 'nome_script'


## Instalando o MongoDB

- Instalação via Docker - containerização de recursos
> Fazer as instações em máquinas virtuais (docker) para ter reusabilidade e controle e limpeza; -> instalar Docker Community Edition (CE)
>Instalar com máquina virtual linux, e hyperV

- Baixar a MV do MongoDB (container do mongo)
```
    docker pull mongo
```
> Precisei iniciar o docker pelo Docker Desktop antes de usar a linha do comando

- Comandos Docker:
```
    docker run --name (nome do container) -p (porta_local : porta_VM) -d (imagem)
    // comando real:
    docker run --name mongodb -p 27017:27017 -d mongo

    docker ps -> lista quais imagens estão rodando
```
> -p: redirecionamento de porta
> -d: qual imagem quero subir

- Software: robo3t -> gerenciamento do mongoDB, inclusive dentro da VM

- Visualizar imagens que estão pausadas: "docker ps -a"

- Rodar imagens que já foram "criadas" (?): docker start (nome)

## Conectando Database

- npm install moongose
> ORM para bancos não relacionais como o MongoDB; encapsula lógica de operações com banco de dados para código

## Criando Model de produto

- Model: Representa uma entidade (tabela, estrutura de dados) do banco de dados (MVC)

- Schema: descrição de campos e tipos da entidade (model)

* TODO: Revisar essa parte!:
- mongoose.model('Product', ProductSchema);
> registra o model; indica para a aplicação que esse model existe

- biblioteca "require-dir" (centraliza os require dos models); subistitui o:
```
    require './modelDir/model';
    // por
    requireDir './modelDir'; // -> deixando disponível todos os models
```
 
## Reestruturação de arquivos

- express().use() -> recebe todo tipo de requisição (get, post, etc)
```
    app.use('/api', require('./src/routes')); 
    // roteia toda requisição que chegar no recurso /api para o arquivo src/routes.js
```

- Separar rotas para aum arquivo diferente

- Separar lógica da rota em controllers (MVC)

> O require/module.exports é sintaxe NodeJS, o import/export é EC6 (aparentemente mais moderno...)

## Utilizando o Insonmia

- Possível criar no ambiente (environment) um objeto com configurações, com por exemplo "base_url", para encurtar os endereços de teste

- usar ```app.use(express.json());``` após ```const app = express();``` para permitir à aplicação receber dados em formato JSON (enviar dados para a aplicação)

## CRUD

- Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
> o objeto com new = true indica à função findByIdAndUpdate para retornar o objeto já atualizado. Sem esse parâmetro ela retorna o objeto antes do update.

## Paginação da lista

- instalar pacote mongoose-paginate

## CORS

- Cross Access Origin Security: previne acessos de domínios diferentes

- CORS é muito mais complexo, mas para uso na aplicação basta instalar "cors" (npm install cors) e usar após a declaração do app: ```app.use(cors());```

# ReactJS

## Criando projeto

- Instalar globalmente o create-react-app: ```npm install --global (ou -g) create-react-app``` 
> Já vem com parte de transpilação configurada (babel, webpack, etc); chamar com ```create-react-app (nome)```

## Criando projeto

- PWA (progressive web app) a partir do manifest.json

- O README.md presente no diretório criado é o do create-react-app

- Iniciar: ```npm run start``` ou ```npm start```

## O que são componentes?

- index.js -> primeiro arquivo aberto pela aplicação React; chama o método ```ReactDOM.render```

- Componente é um conjunto de parte visual/estrutural (html em JSX), parte funcional (JavaScript) e parte de estilização (CSS)
> Pode ser uma função (stateless component) que retorna JSX ou uma classe (stateful component) que estende React.Component e implementa um método render() que retorna JSX

## Criando Header

- Criar componentes como "pastas" com um arquivo index.js dentro, ao invés de um arquivo com o nome do componente.

- Usando React, tudo passa pelo javacript; os estilos são importados via javascript, e não no html

## Buscando produtos da API

- Axios: biblioteca para consumir APIs; ```yarn add axios```

- Pasta "services": Armazenar arquivos para conexão com serviços externos

- Métodos de ciclo de vida do componente (FreeCodeCamp fala disso também)

- Para referenciar o "this" dentro de uma função de componente (classe) deve-se usar funções anônimas ou fazer o bind no construtor da classe
> Utilizando o modelo de arrow function evita usar o bind
> Probelas com o escopo do "this" -> arrow function não o sobescreve, 
> funções nomeadas precisam do "bind" (conforme freeCodeCamp)
> As funções de ciclo de vida do componente não têm esse problema

## Armazenando no estado

- O React trabalha com o conceito de "estado"

- existem linsteners para o estado do componente; o método **render** fica escutando tais alterações

## Listando produtos | Página anterior/próxima

- Basicamente código

## Configurando navegação

- lib: react-router-dom; ```yarn add react-router-dom```

- BroserRouter - utilizando rotas atravez de um browser

- Switch permite que apenas uma rota seja chamada por vez

- As rotas dentro do switch são procuradas em sequência de cima para baixo, e por padrão não existe um match "exato"; para usar a propriedade "exact" ```<Route exact path="/" component={Main} />```

- Componente Link do react-router-dom: criar links entre rotas; substituir o <a> por <Link> e o "href" por "to";

## Navegando por detalhe

- Como o props foi passado pro Product?

- Princípios básicos do React: componentização, roteamento (react-router-dom), ciclos de vida do componente, utilização de api, utilização do estado, utilização de propriedades, estilização

# React Native

## O que é o React Native

- O React Native **NÃO** converte Javascript para código nativo; ele torna possível que o dispositivo entenda Javascript através de uma dependência chamada *"react core"*;

- Continua utilizando React por trás;

- As tags são diferentes do HTML comum (lembram o xml do Java mobile);

