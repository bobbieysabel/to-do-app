function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;

    //creates new to do item and adds item to array
    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');

        if (!newToDoText.value) { return; }

        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        });

        id++;

        newToDoText.value = '';

        renderTheUI();
    }

    //renders UI for to do list
    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            //creates delete button and adds click event
            const deleteButton = document.createElement('button');
            const deleteText = document.createTextNode('Delete');
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener('click', event => {
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
                })

                renderTheUI();
            });

            newLi.textContent = toDo.title;

            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);

            newLi.appendChild(deleteButton);
        });
    }

    //creates new to do when form is submitted
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();

        renderTheUI();
    });

}

window.onload = function() {
   onReady();
};