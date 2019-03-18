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
        
        //create and attach new checkbox input to primary span container
        let toDoLabel = document.createElement('label');
        toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
        //toDoLabel.htmlFor = 'list-checkbox-1';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox'; 
        //checkbox.id = 'list-checkbox-1';
        checkbox.className = 'mdl-checkbox__input';
        toDoLabel.appendChild(checkbox);
        toDoContainer.appendChild(toDoLabel);    
        
        //retrieve text input and attach to list item
        let title = document.createTextNode(newToDoText.value);
        toDoContainer.appendChild(title);

        let icon = document.createElement('i');
        let text = document.createTextNode('delete');
        icon.classList.add('material-icons', 'close');
        icon.appendChild(text);
        icon.addEventListener('click', function(e) {
            toDoList.removeChild(icon.parentNode.parentNode);
        });

        toDoContainer.appendChild(icon);

        //append span container to list item
        newLi.appendChild(toDoContainer);
/*
        //create secondary span container
        let deleteToDo = document.createElement('span');
        deleteToDo.classList.add('mdl-list__item-secondary-action');
        deleteToDo.addEventListener('click', function(e) {
            toDoList.removeChild(deleteToDo.parentNode);
        });
        

        //create and attach delete button to secondary span container
        let icon = document.createElement('i');
        let text = document.createTextNode('delete');
        icon.classList.add('material-icons', 'close');
        icon.appendChild(text);
        deleteToDo.appendChild(icon);    
        
        //append secondary span container to list item
        newLi.appendChild(deleteToDo);
*/
        //add list item to to-do list
        toDoList.appendChild(newLi);

        //empty form input
        newToDoText.value = '';
    });
}

window.onload = function() {
   onReady();
}

