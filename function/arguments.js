

// function add(a,b){
//     // return a+b
//     var result = a+b
//     console.log(result)
// }

// add(10,20)
// add = add(10,20)
// console.log(add)



// function sumArray(arr){
//     var sum = 0
//     for(var i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     console.log(sum)
// }

// sumArray([1,2,2,4,5])
// sumArray([1, 2,3,4,5,6,7,8])


function sum(){
    sm = 0
    for(var i=0; i<arguments.length;i++){
        sm = sm+arguments[i]
    }
    console.log(sm)
}

sum(10,20)
sum(10,20,30)