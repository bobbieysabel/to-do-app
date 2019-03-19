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

    //creates new to-do item and adds item to array
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
            //create list item
            const newLi = document.createElement('li');
            newLi.className = 'mdl-list__item';

            //create primary span container
            const toDoContainer = document.createElement('span');
            toDoContainer.className = 'mdl-list__item-primary-content';

            //creates checkbox input and adds to primary span container
            const toDoLabel = document.createElement('label');
            toDoLabel.className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'mdl-checkbox__input';
            checkbox.addEventListener('click', event => {
               if (checkbox.checked) {
                   toDo.complete = true;
               }
               else {
                   toDo.complete = false;
               }
            });
            toDoLabel.appendChild(checkbox);
            toDoContainer.appendChild(toDoLabel);

            //creates to-do item text and appends to primary span container
            let labelText = document.createTextNode(toDo.title);
            toDoContainer.appendChild(labelText);

            //create secondary span container
            const deleteContainer = document.createElement('span');
            deleteContainer.className = 'mdl-list__item-secondary-action';
            
            //creates delete button and appends to secondary span container
            const deleteButton = document.createElement('button');
            deleteButton.className = 'mdl-button mdl-js-button mdl-button--icon';
            
            //const deleteText = document.createTextNode('Delete');
            const icon = document.createElement('i');
            const deleteText = document.createTextNode('delete');
            icon.className = 'material-icons';
            icon.appendChild(deleteText);
            deleteButton.appendChild(icon);
            deleteContainer.appendChild(deleteButton);
            deleteContainer.addEventListener('click', event => {
                event.preventDefault();
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
                });

                saveData();
                renderTheUI();
            });

            //putting it all together
            toDoList.appendChild(newLi);
            newLi.appendChild(toDoContainer);
            newLi.appendChild(deleteContainer);

            //upgrades MDL components
            componentHandler.upgradeDom();
        });
    }

    //creates new to-do when form is submitted
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