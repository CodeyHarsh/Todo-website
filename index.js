const formTodo=document.querySelector(".Form-list");
const todoList=document.querySelector(".todo-list")
const todoInput=document.querySelector(".Form-list input[type='text']");
formTodo.addEventListener("submit" , (e)=>{
   e.preventDefault();
   const newTodoItem = todoInput.value
   const newLi = document.createElement("li");
const newInnerHtml= `<span class="text">${newTodoItem}</span>
   <div class="todoBtn">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
   </div>`
   newLi.innerHTML=newInnerHtml;
   todoList.append(newLi);
   todoInput.value="";
})
todoList.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("done")){
      const spanLi= e.target.parentNode.previousElementSibling;
      spanLi.style.textDecoration="line-through";
   }
   if(e.target.classList.contains("remove")){
       const targetedLi=e.target.parentNode.parentNode;
       targetedLi.remove();
   }
})