function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        
        //create list item
        let newLi = document.createElement('li');  
        
        //create and attach new checkpot input to list item
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox"; 
        newLi.appendChild(checkbox);       
        
        //retrieve text input and attach to list item
        let title = document.createTextNode(newToDoText.value);
        newLi.appendChild(title);

        //create and attach delete button to list item
        let btn = document.createElement('button');
        let text = document.createTextNode('Delete');
        btn.className = 'close';
        btn.appendChild(text);
        newLi.appendChild(btn);        

        //add list item to to-do list
        toDoList.appendChild(newLi);

        //empty form input
        newToDoText.value = "";
        
        //deletes list items when delete button is clicked
        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            parent = document.getElementById("toDoList")
            child = this.parentNode;
            parent.removeChild(child);
          }
        }
    });
}

window.onload = function() {
   onReady();
}

