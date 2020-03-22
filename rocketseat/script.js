var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos=JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var removeLink = document.createElement('a');
        var removeText = document.createTextNode('Excluir');
        removeLink.appendChild(removeText);
        removeLink.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        removeLink.setAttribute('onclick', 'deleteTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(removeLink)
        listElement.appendChild(todoElement)
    }
}

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value='';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;
renderTodos();