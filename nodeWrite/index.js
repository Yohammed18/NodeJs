//require() is a built-in function to include external modules that exist in separate files
const fs = require("fs")

fs.writeFile('message.txt','You created a file, wrote this message, and it\'s now saved. Congrats developer.',(err)=>{
    if(err) throw err;
    console.log("The file has been saved!")
})


