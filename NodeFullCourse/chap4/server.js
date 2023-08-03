//import http
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

//Define a port that will use for the server
const PORT = process.env.PORT || 3500;

const logEvents = require('../chap3/logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

// const emitter = new MyEmitter();
// emitter.on('log', (msg)=> logEvents(msg));

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    const extension = path.extname(req.url);
    let contentType;

    switch (extension) {
        case '.css':
            contentType = "text/css"
            break;
        case '.js':
            contentType = "text/javascript"            
            break;   
        case '.json':
            contentType = "application/json"
            break;
        case '.jpg':
            contentType = "image/jpg"
            break;
        case '.png':
            contentType = "image/pgn"
            break;
        case '.txt':
            contentType = "text/plain"
            break;          
        default:
            contentType = "text/html"
            break;
    }
    
})

server.listen(PORT,()=>console.log(`Server is running on port ${PORT}!!`))