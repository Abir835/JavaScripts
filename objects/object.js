// object litteral
var obj = {
    name: 'Abir',
    age: 23,
    hight: 5.2
}

obj.hight = 5.4
obj.greade = 3.39
delete obj.greade
console.log(obj)
console.log(obj.name) // dot notation
console.log(obj['name']) // array notation

var show = 'name'
console.log(obj[show])


// var new = new Object() object constractor
// var new = Object() same