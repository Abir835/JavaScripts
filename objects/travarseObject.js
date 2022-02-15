var obj = {
    name: 'hello',
    age: 23
}

// console.log('name' in obj)

for(var i in obj){
    console.log(i+ ' : '+ obj[i])
}