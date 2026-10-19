let sum = 0;

function sumArray(array){
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

myArray = [6,6,7]

console.log(sumArray(myArray));