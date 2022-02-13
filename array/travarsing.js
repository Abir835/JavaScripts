var array = [2, 3, 4, 5]

for(var i=0; i < (array.length); i++){
    // console.log(array[i])
    if (array[i] % 2 ==0){
        array[i] = array[i]+2
    }
    else{
        array[i] = array[i]+3
    }

    console.log(array[i])
}

console.log(array)