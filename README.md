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