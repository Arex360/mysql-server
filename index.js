const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'arex',
    password: '123',
    database: 'student'
})
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.post('/findbyid',(req,response)=>{
    let id = req.body.id
    connection.query(`select * from students where id = ${id}`,(err,res,field)=>{
        console.log(res)
        response.send(res)
    })
})
app.get('/getstudents',(req,res)=>{
    connection.query('select * from students',(err,result,field)=>{
        res.send(result)
    })
})
app.post('/insertStudent',(req,res)=>{
    let {name,age} = req.body
    connection.query(`insert into students (name,age,class) values ('${name}','${age}','${req.body.class}')`,(err,result,field)=>{
        res.send("Student added in record")
    })
})
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(3000,()=>{
    console.log('server started')
    
})