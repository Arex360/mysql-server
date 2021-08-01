const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'arex',
    password: '123',
    database: 'student'
})

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.post('/findbyid',(req,response)=>{
    let id = parseInt(req.body.id)
    connection.connect()
    connection.query(`select * from students where id = ${id}`,(err,res,field)=>{
        console.log(res)
        response.send(res)
    })
    connection.end()
})


app.listen(3000,()=>{
    console.log('server started')
    
})