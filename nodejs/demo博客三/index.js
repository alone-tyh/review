const express = require('express')
const app = express()
const fs = require('fs')

const MongoControl = require('./demo3').MongoControl
const page = new MongoControl('test', 'page')


app.get('/', function (req, res) {
    fs.readFile('./static/index.html', { encoding: 'utf-8' }, function (err, data) {
        if (err) {
            res.status(500)
            return
        }
        var tpl = data
        var html = ''
        page.find({}, function (error, result) {
            result.forEach(element => {
                html += `<li><a href="/p?_id=${element._id}">${element.title}</a> </li>`
            });
            tpl = tpl.replace('<!--htmltpl-->', html)
            res.send(tpl)
        })
    })
})

app.get('/p',function(req,res){
    var _id=req.query._id
    fs.readFile('./static/page.html',{encoding:'utf-8'},function(err,data){
        page.findId(_id,function(error,result){
            if(error){
                res.status(500)
                return
            }
            var json=result[0]
            var html=''
            html=data.replace('<!--title-->',json.title).replace('<!--content-->',json.content)
            res.send(html)
        })
    })
})

app.listen(8080)