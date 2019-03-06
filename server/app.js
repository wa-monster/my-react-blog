const express = require('express')
const app = express()
const router = require('./routes')

app.use(express.static('./public'))

router(app)


app.listen(3000)
console.log('3000 is watching')