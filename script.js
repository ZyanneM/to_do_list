
    const addBtn = document.querySelector('.user-task-btn');
    const liste = document.getElementById('list');
    const userTask = document.querySelector('#user-task-input');
    const todoContainer = document.querySelector('#todoContainer');
    const instructions = document.querySelector('#instructions');
    const leftArrow = document.querySelector('#left-arrow');
    const rightArrow = document.querySelector('#right-arrow');
    const listContainer = document.querySelector('#listContainer');
    

addBtn.addEventListener("click", addTask);

//Je définis mon id à 0 pour l'incrémenter ensuite
var id=0;


window.addEventListener('keydown', (e) => {
    if (e.code === "Enter" && userTask.value != "") {
        addTask();
    }
});



// localStorage.getItem('todo', item);


function addTask() {
 //J'incrémente l'id à chaque clic afin que chaque élément ait un id qui lui soit propre
    id++

//J'ajoute mon bloc d'instructions à l'ajout de la première tache
    instructions.style.display = "flex";
    leftArrow.style.display = "flex";
    rightArrow.style.display = "flex";
    leftArrow.classList.add("bounce-in-top");
    rightArrow.classList.add("bounce-in-top");


//Je crée une div qui va contenir 3 choses : mon item texte, le bouton valider, le bouton supprimer
    
    var itemContainer = document.createElement("div");
    
    itemContainer.setAttribute("id", "itemContainer"+id);
    itemContainer.classList.add("item-container");

//J'injecte ma div dans le container prévu pour mon ensemble d'items
    todoContainer.appendChild(itemContainer);

    // const item = {
    //     id : id,
    //     text: userTask.value,
    // }

    // console.log(item);

    // localStorage.setItem('todo', JSON.stringify(item));
    
//Je crée le bouton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("checked-btn");
//Je l'ajoute au container
    itemContainer.appendChild(completedButton);
//Je lui ajoute un id afin de pouvoir le valider indépendemment des autres
    completedButton.setAttribute("id", "checkBtn"+id);
    
//Je sélectionne le bouton check avec son id
    const checkBtn = document.querySelector('#checkBtn'+id); 

//Je lui applique la fonction checkItem
checkBtn.addEventListener("click", checkItem);

function checkItem() {
    // alert('Je suis cliqué');
    checkBtn.classList.toggle("checked-btn-style");
    itemText.classList.toggle("checked-text-style");
    checkBtn.classList.remove("checked-btn-style-edit");
}

//Je crée un paragraphe qui contient le nom de l'item
    var itemText = document.createElement("input");
    itemText.setAttribute("id", "itemText"+id);
    itemText.setAttribute("disabled", "disabled");
    itemText.setAttribute("value", userTask.value);
    itemText.classList.add("item");
    // itemText.innerHTML = userTask.value;

//Je l'injecte dans mon item container
    itemContainer.appendChild(itemText);
//Je vide l'input
    userTask.value = "";
    

    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.setAttribute("id", "editBtn"+id);
    editButton.classList.add("edit-btn");

    itemContainer.appendChild(editButton);


    editButton.addEventListener("click", editItem);
    function editItem() {
        itemText.removeAttribute('disabled');
        //Je lui applique focus pour qu'on voit bien que c'est éditable
        itemText.focus();
        checkBtn.classList.toggle("checked-btn-style-edit");
        editButton.style.backgroundColor = "rgba(219, 160, 219, 0.521)";
        //Quand on appuie sur entrée l'input n'est plus éditable
        window.addEventListener('keydown', (e) => {
            if (e.code === "Enter") {
                itemText.setAttribute("disabled", "disabled");
                checkBtn.classList.remove("checked-btn-style-edit");
                editButton.style.backgroundColor = "";
            }
        });
    }
//Je détecte si l'utilisateur place la souris en dehors du champ et le rend inéditable
    itemText.onblur = function() {
                itemText.setAttribute("disabled", "disabled");
                checkBtn.classList.remove("checked-btn-style-edit");
                editButton.style.backgroundColor = "";
    }
    

//Je crée le bouton supprimer
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.setAttribute("id", "deleteBtn"+id);
    deleteButton.classList.add("delete-btn");

    itemContainer.appendChild(deleteButton);

//De la même manière que pour le bouton check, je sélectionne le bouton avec son id
    var deleteBtn = document.querySelector('#deleteBtn'+id);
//Je lui applique la fonction delete
    deleteBtn.addEventListener("click", deleteItem);

    function deleteItem() {
//Je cible l'élément parent du bouton pour supprimer toute la div
       deleteBtn.parentElement.remove();
    }



}


