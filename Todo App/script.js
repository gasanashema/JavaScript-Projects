document.addEventListener("DOMContentLoaded", () => {


 let form = document.querySelector("#todoForm");
 
 form.addEventListener("submit", addTodo);

 function addTodo(event) {
   event.preventDefault();

   let inputValue = form.querySelector("input").value;
   let ul = document.getElementById("todoList");
   if (!inputValue.trim()) return;

   
   let listItem = document.createElement("li");
   listItem.classList.add("list-group-item");

   let formCheck = document.createElement('div');
   formCheck.classList.add("form-check");


   let checkBox = document.createElement("input");
   checkBox.classList.add("form-check-input");
   checkBox.type = "checkbox";

   formCheck.appendChild(checkBox);

   let label = document.createElement("label");
   label.classList.add("form-check-label");
   label.textContent = inputValue;

   formCheck.appendChild(label);

   let deleteBtn = document.createElement("button");
   deleteBtn.classList.add("btn", "btn-outline-danger", "float-end");

   deleteBtn.textContent = "X";
   formCheck.appendChild(deleteBtn);
console.log(ul);
    listItem.appendChild(formCheck);
   ul.appendChild(listItem);

   form.querySelector("input").value = "";
   // deleteBtn.addEventListener('click',removeElement);
 }

 let ul = document.getElementById("todoList");

 ul.addEventListener('click',removeElement);

 function removeElement(event) {
    if (event.target.tagName == 'BUTTON') {
        event.preventDefault();
        event.target.parentElement.parentElement.remove();
    }else if(event.target.tagName=='INPUT' && event.target.type == 'checkbox'){
         let label = event.target.nextElementSibling;
         
            if (event.target.checked) {
               label.style.textDecoration = "line-through";
            } else {
               label.style.textDecoration = "none";
            }
    }
    
 }

});
