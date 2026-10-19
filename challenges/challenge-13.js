function findMax(array){
    let max = array[0];
    for(i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max
}

console.log(findMax([9,2,5,10,2]));