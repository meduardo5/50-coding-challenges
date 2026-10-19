function posArray(array){
    let positives = [];
    for(i = 1; i < array.length; i++){
        if (array[i] >= 0){
            positives.push(array[i])
        }
    }
    return positives
}

let myArray = [-9, 1, -3, 4, 7, -2];

console.log(posArray(myArray));