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

## JS assíncrono