const express = require('express')
const app = express()
const fs = require('fs')

const MongoControl = require('./demo3').MongoControl
const page = new MongoControl('test', 'page')
const ejs=require("ejs")

app.get('/', function (req, res) {
    page.find({},function(error,result){
        ejs.renderFile('./static/index.ejs', { data: result }, function (err, html) {
            res.send(html)
        })
    })
})

app.get('/p',function(req,res){
    var _id=req.query._id
    // fs.readFile('./static/page.html',{encoding:'utf-8'},function(err,data){
    //     page.findId(_id,function(error,result){
    //         if(error){
    //             res.status(500)
    //             return
    //         }
    //         var json=result[0]
    //         var html=''
    //         html=data.replace('<!--title-->',json.title).replace('<!--content-->',json.content)
    //         res.send(html)
    //     })
    // })
    page.findId(_id,function(err,result){
        var data=result[0]
        ejs.renderFile('./static/page.ejs',{data:data},function(error,html){
            res.send(html)
        })
    })
})

app.listen(8080)