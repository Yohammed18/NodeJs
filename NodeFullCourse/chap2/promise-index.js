//AVOID THE CALL BACK FROM HELL IN NODEJS
const fsPromise = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(
            __dirname, 'files','lorem.txt'), 'utf8')
        console.log(data)
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