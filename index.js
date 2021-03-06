require('dotenv').config({path: __dirname + '/.env'})
const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({info:"Hello from Express"})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})