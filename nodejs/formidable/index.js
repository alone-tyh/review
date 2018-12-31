const express = require('express');
const app = express();
const fs = require('fs')
const formidable = require('formidable')
const path = require('path')

app.use(express.static('./static'))

app.post('/upload', function (req, res) {
    // var data=[]
    // req.on('data',function(chunk){
    //     data.push(chunk)
    // })
    // req.on('end',function(){
    //     fs.writeFile('./file/02.jpg',Buffer.concat(data),function(err){
    //         console.log('文件上传呗存储到02.jpg中了')
    //     })
    // })

    //初始化一个表单上传对象
    var form = new formidable.IncomingForm()
    //设置文件上传路径
    form.uploadDir = './file'

    form.parse(req, function (err, fields, files) {
        //获取前端的name属性“img”
        var uploadImg = files.img;
        // console.log(uploadImg)
        fs.rename(path.join('./', uploadImg.path), path.join('./file', uploadImg.name), function (err) {
            console.log('文件上传成功')
        })
    })
    res.send('文件上传成功')
})

app.listen(8080)