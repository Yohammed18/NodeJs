//AVOID THE CALL BACK FROM HELL IN NODEJS
//What are Promises? A Promise/s are objects that rapresents the eventual completion (or failure) of an asychrnous operations and its resulting value
//What is await? The await operator is used to wait for a Promise. it can only be used inside an async function within regular javascript code and JavaScript modules.
//In summary, asynchronous programming is an essential concept in JavaScript that allows your code to run in the background without blocking the execution of other code. Developers can create more efficient and responsive applications by using features like callbacks, async/await, and promises.
const fsPromise = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(
            __dirname, 'files','lorem.txt'), 'utf8')
        console.log(data)
        //deletes existing files
        await fsPromise.unlink(path.join(
            __dirname, 'files','RenamedFile.txt'))
        await fsPromise.writeFile(path.join(__dirname,'files','newFile.txt'), data) 
        await fsPromise.appendFile(path.join(__dirname,'files','newFile.txt'),"\nSuccessfully appended the file.")
        await fsPromise.rename(path.join(__dirname,'files','newFile.txt'), path.join(__dirname,'files','RenamedFile.txt'))
        const newData = await fsPromise.readFile(path.join(
            __dirname, 'files','RenamedFile.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}


fileOps()