var array = [1,2,3,5,4,5,6,7,8,9]

for(var i = 0; i <(array.length/2); i++){
    var temp = array[i]
    array[i] = array[array.length-1-i]
    array[array.length-1-i] = temp

 
}

console.log(array)