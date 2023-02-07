
    const addBtn = document.querySelector('.user-task-btn');
    const liste = document.getElementById('list');
    const userTask = document.querySelector('#user-task-input');
    const todoContainer = document.querySelector('#todoContainer');


addBtn.addEventListener("click", addTask);

var id=0;

function addTask() {
    //J'incrémente l'id à chaque clic afin que chaque élément ait un id qui lui soit propre
    id++
    // Logique : Créer une div todoDiv avec createElement qui va prendre en classList toDo puis créer la li à l'intérieur de cette div, créer avec createElement le faux bouton check, l'ajouter à todoDiv, idem pour le bouton trash
    
    //Je crée une div qui va contenir 3 choses : mon item texte, le bouton valider, le bouton supprimer
    
    var itemContainer = document.createElement("div");
    

    itemContainer.classList.add("item-container");

    //J'injecte ma div dans le container prévu pour mon ensemble d'items
    todoContainer.appendChild(itemContainer);

   

    const completedButton = document.createElement("button");
    
    
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("checked-btn");

    itemContainer.appendChild(completedButton);
    completedButton.setAttribute("id", "checkBtn"+id);
    

    const checkBtn = document.querySelector('#checkBtn'+id); 


checkBtn.addEventListener("click", checkItem);

function checkItem() {
    // alert('Je suis cliqué');
    checkBtn.classList.toggle("checked-btn-style");
    itemText.classList.toggle("checked-text-style");
}

    //Je crée un paragraphe qui contient le nom de l'item
    var itemText = document.createElement("div");
    id++;
    itemText.setAttribute("id", "itemText"+id);
    itemText.classList.add("item");
    itemText.innerHTML = userTask.value;

    //Je l'injecte dans mon item container
    itemContainer.appendChild(itemText);
    //Je vide l'input
    userTask.value = "";
    


    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.classList.add("delete-btn");

    itemContainer.appendChild(deleteButton);
    
}



    // // alert('Vous avez cliqué');
    // if(userTask.value != ""){
    //     // Je crée mon élément li
    //     var element = document.createElement("li");
    //     }
    //     //J'ajoute mon texte à mon élément li
    //     element.innerHTML = userTask.value;
        
    //     // Je l'ajoute à mon ul:
    //     document.getElementById('list').appendChild(element);
