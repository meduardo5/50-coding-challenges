function avgArray(array){
    if (array.length === 0)
        return "Empty Array";

    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum / array.length;
}

console.log(avgArray([]));