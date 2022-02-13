var array = [1,2,3,4]
var arr = [1,2,3]

// console.log(array.join(' '))
// console.log(array.fill(0)) at a time all value change of fill up

// var arr2 = array.concat(arr)
// console.log(Array.isArray(arr2)) is array or not check it

var arr2 = Array.from(arr)
arr2[0] = 5
console.log(arr)
console.log(arr2)