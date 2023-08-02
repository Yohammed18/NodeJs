const logEvents = require('./logEvents')


const EventEmitter = require('events')


class MyEmitter extends EventEmitter{

}


//initialize object
const myEmmiter = new MyEmitter();

//add a listenr for the log event
myEmmiter.on('log', (msg)=> logEvents(msg));

setTimeout(() =>{
    //emit event
    myEmmiter.emit('log','Log event emitted!\n')
}, 2000)