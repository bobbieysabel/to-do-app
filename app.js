function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        //retrieve input text
        let title = newToDoText.value;

        //create list item
        let newLi = document.createElement('li');

        //create new input
        let checkbox = document.createElement('input');

        //set input type to checkbox
        checkbox.type = "checkbox";

        //set title
        newLi.textContent = title;

        //attach checkbox to list item
        newLi.appendChild(checkbox);

        //add list item to to-do list
        toDoList.appendChild(newLi);

        //empty form input
        newToDoText.value = "";

    });
}

window.onload = function() {
   onReady();
}

