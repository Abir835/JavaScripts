var str = 'hello'
var str1 = 'world'

var result = str.concat(' ', str1)

var d = result.substr(6, 1)
var carcat = result.charAt(2)
console.log(carcat)
console.log(d)
console.log(result)
console.log(result.toLocaleLowerCase())
console.log(result.split(' '))
console.log(result.startsWith('hello'))
console.log(result.endsWith('world'))
var list = '  hello  '
console.log(list.trimEnd())