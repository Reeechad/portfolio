document.getElementById("add").onclick = function(){
    var node = document.createElement("li");
    var song = document.getElementById("song").value;
    var artist = document.getElementById("artist").value;
    var list = "<li>" + song + " by " + artist + "</li>";
    var textnode= document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("li").appendChild(node);
}



// document.getElementById("add").onclick = function() { 
//     var node = document.createElement("Li"); 
//     var text = document.getElementById("user_input").value; 
//     var textnode=document.createTextNode(text); node.appendChild(textnode); 
//     document.getElementById("list_item").appendChild(node); } 