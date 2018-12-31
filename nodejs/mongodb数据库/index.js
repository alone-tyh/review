const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const unlencodeParser=bodyParser.urlencoded({extended:false})

const MongoControl=require("./demo3").MongoControl
const userControl=new MongoControl('test','user')

app.use(express.static('./static'));


app.post('/login',unlencodeParser,(req,res)=>{
    var username=req.body.username
    var password=req.body.password

    userControl.find({username:username,password:password},(err,result)=>{
        if(err){
            res.status(500).send("服务器错误")
            return 
        }
        if(result.length==0){
            //密码或者账号错误
            res.status(403).send("账号或者密码错误")
        }else{
            res.send("登陆成功")
        }
    })
})




app.post('/reg',unlencodeParser,function(req,res){
    var username=req.body.username
    var password=req.body.password
    if(username.length<6||password.length<6){
        res.status(403).send('账号或者密码过短')
        return
    }
    userControl.find({username:username},function(err,result){
        if(err){
            res.status(500).send("服务器错误")
            return
        }
        if(result.length>0){
            //用户名已存在
            res.status(200).send("账户已存在")
        }else{
            //用户名可以注册
            userControl.insert({username:username,password:password},(err,result)=>{
            if(err){
                res.status(500).send('服务器错误')
                return
            }
            res.send("注册成功")
        })
        }
    })
})


app.post('/changePassword',unlencodeParser,(req,res)=>{
    var {username,oldPassword,newPassword}=req.body
     userControl.find({username:username,password:oldPassword},(error,result)=>{
         if(error){
             res.status(500).send("服务器错误")
             return
         }
         if(result.length==0){
             res.send('旧密码和账号不匹配')
         }else{
             var _id=result[0]._id
             userControl.updateId(_id,{password:newPassword},(error,result)=>{
                 if(error){
                    res.status(500).send("服务器错误!,你的密码未改成")
                    return
                 }
                 res.send(`你的新密码是${newPassword}`)
             })
         }
     })
})
app.listen(8080)