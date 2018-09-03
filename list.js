var todos = ["cool"];
window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here
 
var input = prompt("What would you like to do?");


while(input !== "quit"){
    //handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
       addTodos();
    } else if(input === "delete"){
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("You have quit the App")

function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, i){
        console.log(i+ ": " + todo);
    });
    console.log("**********")
    }
function addTodos(){
     //ask for new todo
     var newTodo = prompt("Enter new todo");
     //add to todos array
     todos.push(newTodo);
     console.log("Added Todo");
}
function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of task to delete")
    //delete that todo
    //splice() 
    todos.splice(index,1);
    console.log("Deleted Todo");
}
}, 500);