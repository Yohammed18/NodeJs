let express = require('express')
let app = express()
let router = express.Router()

app.use(express.text())

router.get("/", (req, res)=>{
    res.send(`<h1>Read File Page</h1>`)
})

app.use('/api', router)

module.exports = app