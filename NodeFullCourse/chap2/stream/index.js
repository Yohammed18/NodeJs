const fs = require('fs')
const path = require('path')

console.log(__dirname)
const rs = fs.createReadStream(path.join(__dirname,'index.txt'), {encoding: 'utf-8'})

const ws = fs.createWriteStream(path.join(__dirname,'tempIndex.txt'))

// rs.on('data', (dataChunk) =>{
//     ws.write(dataChunk)
// })

//or use pipe
rs.pipe(ws)
