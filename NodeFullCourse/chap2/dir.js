const fs = require('fs') //fs stands for File System. Throught this module we can interact with the local file system by reading/write to files, create directory, etc..

//In this exercise check if the dist folder is created to deleted with this method, and vise versa.
if(fs.existsSync('./dist')){
    fs.rmdir('./dist',(err)=>{
        if(err) throw err
        console.log("Directory has been deleted.")
    })
}


if(!fs.existsSync('./dist')){
    fs.mkdir('./dist',(err)=>{
        if(err) throw err
        console.log("Directory has been created.")
    })
}
