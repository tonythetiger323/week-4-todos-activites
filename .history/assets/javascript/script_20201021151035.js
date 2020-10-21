// TODO It should loop over the todos array creating an li element for each index of the array.
// TODO It should set the content of the created li element to the value of the current array index.
// TODO Finally the new li should be appended to the ul provided.

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Initially set the text content of the todoList to an empty string.
var todoText = "";
// Create a variable to contain TODO count
var todoCount = 0;

// TODO todoCountSpan should show the total count of todos on the page
todoCountSpan.textContent(todoCount);

// verify what value is store in todoCount -- delete when finished
console.log(todoCount);
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];






