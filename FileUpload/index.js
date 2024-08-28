const app = require('./app')

const port = process.env.PORT || 5000


var server = app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
