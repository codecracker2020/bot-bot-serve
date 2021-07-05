const port = process.env.port || 3000;

const express = require('express')
const app = express()

app.listen(port,(e)=>{
    console.log('Server started successfully @',port)
})