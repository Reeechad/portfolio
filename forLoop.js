console.log("-10 to 19");
for(var i = -10; i < 20; i++){
    console.log(i);
}

console.log("even");
for(var i = 10; i <= 40; i+=2){
    console.log(i);
}
 for(var i = 10; i<= 40; i+=1){
    if(i % 2 === 0){
        console.log(i);
    }
}


console.log("odd");
for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

console.log("5 and 3");
for(var i = 5; i < 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}