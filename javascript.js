addTask = function(){
    let tasks = document.getElementsByClassName('input-task');

    if(tasks[0].value == ""){
        alert("please enter a task.");
    }else{
        addToList(tasks[0].value);
    }
}

addToList = function(task){
    let listItem = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');

    div.appendChild(document.createTextNode(task));
    span.appendChild(document.createTextNode('\u2A09'));
    listItem.appendChild(div);
    listItem.appendChild(span);

    let list = document.getElementById("list");

    list.addEventListener("click", eventListener);

    list.appendChild(listItem);
}

eventListener = function(event){
    let target = event.target;
    if (target.tagName === 'DIV'){
        if (target.classList.contains('toggle')){
            target.classList.remove('toggle');
        }else{
            target.classList.add('toggle');
        }
    }else if (target.tagName === 'SPAN'){
        target.parentNode.classList.add('hide');
    }else{
        return;
    }
}
