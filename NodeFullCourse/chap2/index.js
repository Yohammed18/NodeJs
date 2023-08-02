const { error } = require('console')
const fs = require('fs')

//we can use the path to make the code more dynamic
const path = require('path')
console.log(__dirname) //returns the name of the current module's directory
console.log(__filename)//returns the filename of the code being executed
//READ FILE PROCESS
fs.readFile(path.join(__dirname, 'files','lorem.txt'), (err, data) =>{
    if(err) throw err
    console.log(data.toString()) //the method toString() is needed in order to output the content in non byte code
})

//try to not hardcord the paths of file. user the __dirname variable that can always be access when using node js
fs.readFile('./files/lorem.txt','utf-8', (err,data) =>{
    if(err) throw err
    console.log(data)//the encoding "utf8" will make the data readable
})

//exit on uncaught errors
process.on('uncaughtException', err =>{
    console.error(`There was an uncaught error: ${error}`)
    process.exit(1)
})

const fileData = 'Pneumonoultramicroscopicsilicovolcanoconiosis is The longest English word. This word is forty-five letters long and refers to a type of lung disease.'
//WRITE FILE PROCESS
fs.writeFile(path.join('./files/starter.txt'), fileData,err =>{
    if(err) throw err
    console.log("You successfully written to the file.")
})

fs.appendFile(path.join('./files/starter.txt'), '\nWe are appending to the starter.txt file.',err =>{
    if(err) throw err
    console.log("You successfully appended the file.")
})