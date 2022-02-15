var array = {
    x: 10,
    y: 20
}
console.log(Object.keys(array)) // return keys 
console.log(Object.values(array)) // return values
console.log(Object.entries(array)) // retuen multidimentionl array


var obj2 = Object.assign({}, array) // copy array or object
obj2.x = 100
console.log(array)
console.log(obj2)