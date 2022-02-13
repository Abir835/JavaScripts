var array = [1,2,3,4]

var res = 0

for (var i=0;i<array.length;i++){
    if (array[i] % 2 != 0){
        continue
    }
    res = res+array[i]
}

console.log(res)