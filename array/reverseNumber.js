var res = 0
var num = 123456
let lastadegit

while(num != 0){
    lastadegit = num%10
    res = res*10+lastadegit
    num = Math.floor(num/10)
}

console.log(res)
