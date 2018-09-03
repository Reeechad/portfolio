//document.querySelector("button").addEventListener("click", function(){
//    body.style.background = "purple"
//});

//var body = document.querySelector("body");
//button.addEventListener("click", function(){
 //   body.style.background = "purple"
//})

var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "white"
    } else{
        document.body.style.background = "purple"
    }
    isPurple = !isPurple;
})