//isEven 
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

//factorial
function factorial(num){
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <=num; i++){
        result *= i;
    }
    //return the result variable
    return result;
}

//kebabToSnake
function kebabToSnake(str){
    var result = str.replace(/-/g,"_")
    return result;
}