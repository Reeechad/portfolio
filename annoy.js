//var answer = prompt("are we there yet?");
//
//while(answer !== "yes"){
//    var answer = prompt("are we there yet?")
//}
//
//alert("YAY, We MADE IT!")


// if(answer === "yes"){
//    alert("YAY,We made it!")
// } else{
//
// }

//Version 2

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}
alert("yay we made it!")
