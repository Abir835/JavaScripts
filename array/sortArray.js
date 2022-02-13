var array = [1,3,5,2,1]

for (var i = 1; i < array.length; i++){
    for(var j = 0; j<i;j++){
        if(array[i]<array[j]){
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array)
