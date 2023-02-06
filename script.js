
    const addBtn = document.querySelector('.user-task-btn');
    const liste = document.getElementById('list');
    const userTask = document.querySelector('#user-task-input');

addBtn.addEventListener("click", addTask);

function addTask() {
    // Logique : Créer une div todoDiv avec createElement qui va prendre en classList toDo puis créer la li à l'intérieur de cette div, créer avec createElement le faux bouton check, l'ajouter à todoDiv, idem pour le bouton trash
  
    // alert('Vous avez cliqué');
    if(userTask.value != ""){
    // Je crée mon élément li
    var element = document.createElement("li");
    }
    //J'ajoute mon texte à mon élément li
    element.innerHTML = userTask.value;
    
    // Je l'ajoute à mon ul:
    document.getElementById('list').appendChild(element);

    //Je vide l'input
    userTask.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);
    
}


