const logEvents = require('./logEvents')
const EventEmitter = require('events')

class MyEmitter extends EventEmitter{
    //emit is used to trigger an event
    //on is used to add a callback function that's going to be executed when the event is triggered
}

//initialize object
const emitter = new MyEmitter();

//add a listenr for the log event
emitter.on('log', (msg)=> logEvents(msg));

setTimeout(() =>{
    //emit event
    emitter.emit('log','Log event emitted!\n')
}, 2000)