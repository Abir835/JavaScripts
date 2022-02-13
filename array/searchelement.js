var array = [1, 2, 3, 4, 5]
var find = 7

var isOk = false
for(var i = 0; i< array.length; i++){
    if(array[i] == find){
        console.log('index:' + i,' Find Value: '+ array[i])
        isOk = true
        break
    }
    // else{
    //     console.log('Data is not found!!')
    //     break
    // }
}

if (!isOk){
    console.log('Data is not found!!')
}