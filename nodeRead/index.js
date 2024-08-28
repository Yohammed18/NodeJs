//Challenge. Using NodeJs, write a command that will prompt the application to read the readmessage.txt file
const fs = require('fs');

fs.readFile('./readmessage.txt','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})