var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("div#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // valor padrão

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#')

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        // linkElement.innerHTML = "Excluir"; // Qual a diferença?
       
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);
    }
}

renderTodos();

function adicionarTodo() {
    var todoText = inputElement.value;
    
    todos.push(todoText);

    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = adicionarTodo;

function deleteTodo(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}