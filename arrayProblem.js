//Write a func printReverse() that prints an array in reverse order
function printReverse(arr){
    for(var i = arr.length - 1; i >=0; i--){
        console.log(arr[i])
    }
}

//Write a func isUnifrom() that takes an array as an argument and 
//returns true if identical
function isUniform(arr){
//make a var for the first item of the array.
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false
        }
    }
    return true;
}

//Write a function sumArray() that accepts an array of number and 
//returns the sum of all numbers in the array
function sumArray(arr){
//make a var for the total
    var total= 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

//Write a function max() that accepts an array of numbers and 
//returns the maximum number in the array
function max(arr) {
// make a var to keep track of the max, start it as the first element
    var max = arr[0];
//then loop thru every item to compare to max and if its greater that will be new
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];   
        }
    }
    return max;
}