
//export variables and function via the module.exports{}
const firstName = "Michael Jordan"
const secondName = "Lebron James"
const thirdName = "Kobe Bryant"

function sayHI(name){
    console.log(`Hello, my name is ${name}.`)
}

module.exports = {
    firstName, secondName, thirdName, sayHI
}