const express = require('express')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'arex',
    password: '123',
    database: 'student'
})

const app = express()

app.listen(3000,()=>{
    console.log('server started')
    connection.connect()
    console.log('connected to database')
    connection.query('select * from students',(err,results,fields)=>{
        console.log(results)
    })
})