function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;
    let toDoString = '';

    //checks for to-do list from local storage
    toDoString = localStorage.getItem('toDos');
    if (toDoString !== null) {
        toDos = JSON.parse(toDoString);
    }
    renderTheUI();

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
        saveData();
        renderTheUI();
    }

    //renders UI for to do list
    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
            const newLi = document.createElement('li');

            //creates checkbox input and adds click event
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', event => {
               if (checkbox.checked) {
                   toDo.complete = true;
                   alert(toDo.complete);
               }
               else {
                   toDo.complete = false;
                   alert(toDo.complete);
               }
            })
            
            //creates delete button and adds click event
            const deleteButton = document.createElement('button');
            const deleteText = document.createTextNode('Delete');
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener('click', event => {
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
                })

                saveData();
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

    //saves to-do list data
    function saveData(){
        toDoString = JSON.stringify(toDos);
        localStorage.setItem('toDos', toDoString);
    }

}

window.onload = function() {
   onReady();
};