function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        
        //create list item
        let newLi = document.createElement('li');  
        newLi.classList.add('mdl-list__item');

        //create primary span container
        let toDoContainer = document.createElement('span');
        toDoContainer.classList.add('mdl-list__item-primary-content');

        //create checkbox and attach to primary span container
        let toDoLabel = document.createElement('label');
        toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
        toDoLabel.htmlFor = 'list-checkbox-1';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'list-checkbox-1';
        checkbox.classList.add('mdl-checkbox__input');
        toDoLabel.appendChild(checkbox);
        toDoContainer.appendChild(toDoLabel);

        //create text and attach to primary span container
        let labelText = document.createTextNode(newToDoText.value);
        toDoContainer.appendChild(labelText);

        //append primary span container container to list item
        newLi.appendChild(toDoContainer);

        //create secondary span container
        let deleteContainer = document.createElement('span');
        deleteContainer.classList.add('mdl-list__item-secondary-action');

        //create delete button and append to secondary span container
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--icon');
        let icon = document.createElement('i');
        let text = document.createTextNode('delete');
        icon.classList.add('material-icons');
        icon.appendChild(text);
        deleteButton.appendChild(icon);
        deleteContainer.appendChild(deleteButton);
        deleteContainer.addEventListener('click', function(e) {
            toDoList.removeChild(deleteButton.parentNode.parentNode);
        });

        //append secondary span container to list item
        newLi.appendChild(deleteContainer);

        //add list item to to-do list
        toDoList.appendChild(newLi);

        //empty form input
        newToDoText.value = '';
    });
}

window.onload = function() {
   onReady();
}

