function Sum(){
    var sm = 0
    for(var i=0;i<arguments.length;i++){
        sm+=arguments[i]
    }
    return sm
}

a = Sum(1,2)
console.log(a)

function ssum(name,age){
    
    return {
        name: name,
        age: age
    }
}

b = ssum('abir', 23)
console.log(b)

