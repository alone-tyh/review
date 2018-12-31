1. 上传文件必须为post请求
2. 发现 - req 的data事件没有被触发，获取不到二进制的chunk
3. 文件上传，form表单必须为 enctype="multipart/form-data"
4. 文件上传，input必须为“type=file” name=“img”属性
5. formidable的使用
```javascript
const formidable=require('formidable')
 //初始化一个表单上传对象
    var form=new formidable.IncomingForm()
    //设置文件上传路径
    form.uploadDir='./file'

    form.parse(req,function(err,fields,files){
        //获取前端的name属性“img”
        var uploadImg=files.img;
        // console.log(uploadImg)
        fs.rename(path.join('./',uploadImg.path),path.join('./file',uploadImg.name),function(err){
            console.log('文件上传成功')
        })
    })
```