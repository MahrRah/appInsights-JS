const PORT = process.env.PORT || '8080'
const express = require('express')
const app = express()


app.get('/',(req,rest)=> {rest.send('Hello World!')})

app.listen(parseInt(PORT,10),() => {console.log(`Listening for request on https/localhost:${PORT}`)})