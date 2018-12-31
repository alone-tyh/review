const express=require('express')
const app=express()
const path=require('path')

var MongoControl = require('./demo3').MongoControl

var page= new MongoControl('test','page')

app.use(express.static('./static',{
    index:'index.html'
}))

app.get('/pages',function(req,res){
    res.sendFile(
        path.resolve('./static/pages/pageOne.html')
    )
})


app.get('/getPage',function(req,res){
    var _id=req.query._id
    page.findId(_id,function(error,result){
        res.send(result)
    })
})

app.get('/getIndexList',function(req,res){
    page.find({},function(error,result){
        res.send(result)
    })
})

app.listen(8080)