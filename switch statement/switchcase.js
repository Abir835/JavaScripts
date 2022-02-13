var date = new Date()
var today = date.getDay()
console.log(today)


switch(today){
    case 1:
        console.log('Saturday')
        break
    case 2:
        console.log('Sunday')
        break
    case 3:
        console.log('monday')
        break
    case 4:
        console.log('tuesday')
        break
    case 5:
        console.log('wednessday')
        break
    case 6:
        console.log('thursday')
        break
    case 7:
        console.log('friday')
        break
    default:
        console.log('not a valid date')
}