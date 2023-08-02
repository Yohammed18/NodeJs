//Nodes runs on the server (strictly focus on handling back-end work and development.)

//console is the termonal window
console.log("Welcome to the Full Node JS Tutorial.")
//Node uses the object global instead of the window object that we use in the web browser .
console.log(global)
//The common core module that NodeJs provides are OS, Path, and direct
//CommonJS uses a require() statement, ES6 uses the imports statement but they basically do the same thing
const os = require('os')
const path = require('path')
//imports the functions or variables from the class we created or we can deconstruct
const {add, sub, div, mul} = require('./math')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

//to get the directory or file name use the global veriables below
console.log(`Directory: ${__dirname}`)
console.log(`File: ${__filename}`)
console.log(path.dirname(__filename))
console.log(`Name of the file: ${path.basename(__filename)}`)
console.log(`File ext: ${path.extname(__filename)}`)

console.log(path.parse(__filename))

//
console.log(add(3,2))
console.log(sub(3,2))
console.log(mul(3,2))
console.log(div(3,2))
