const express=require('express');
const cookieParser=require('cookie-parser');
const bodyParser=require("body-parser");
const path=require("path");

var app=express();
app.listen(8080);
app.use(cookieParser());
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.get('/',function(req,res){
    console.log(req.query)
    res.sendFile(path.resolve('./static/index.html'))
});
app.post('/upload',urlencodedParser,function(req,res){
    console.log(req.body);
    res.redirect('/');
})



app.use(express.static('./static'))