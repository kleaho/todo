var newtodo = document.querySelector("button");
function handlebuttonClick(event){
  event.preventDefault();
  var todocount = document.querySelector("a.todo-count").textContent;
  var newtodo = parseInt(todocount);
  document.querySelector("a.todo-count").textContent = newtodo+1;

  var textString = document.querySelector("#list-text");
  var textArray = textString.value.split(",");
  for (var i = 0; i < textArray.length; i++) {

    var parent = document.querySelector("main");

    var newTodoText = document.createElement("div");
    newTodoText.classList.add("all-submissions");
    parent.appendChild(newTodoText);

    var newli = document.createElement("li");
    newTodoText.appendChild(newli);

    var newlabel = document.createElement("label");
    newli.appendChild(newlabel);

    var newinput = document.createElement("input");
    newinput.type = "checkbox";
    newlabel.appendChild(newinput);

    var newspan = document.createElement("span");
    newspan.textContent = textArray[i];
    newlabel.appendChild(newspan);

    var clearTodoEntry = document.querySelector("#list-text");
    clearTodoEntry.value = null;

    var cleardefault = document.querySelector(".nothing-text");
    cleardefault.classList.add("clear-nothing");
    cleardefault.classList.remove("nothing");

  }
}
newtodo.addEventListener("click", handlebuttonClick);
