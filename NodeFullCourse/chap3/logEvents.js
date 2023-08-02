//nodemon: we already have installed nodemon globally. nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the

//you can run nodemon as a devDepenencies by running npm i nodemon -D or --save d
//* update all the time. ^ update the last 2 numbers. ~ update only the last digit.
const {format} = require('date-fns');
const {v4: uuid}=require('uuid');

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path')

const logEvents = async(message) =>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss\n')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);

    try {
        //checks if a the logs directory is created
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            //if the logs dir doesn't exit, creates directory
            await fsPromise.mkdir(path.join(__dirname,'logs'))
        }
        //appends the file by adding the new logs
        await fsPromise.appendFile(path.join(__dirname,'logs','eventLog.txt'), logItem)
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvents;

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
// console.log(uuid());
