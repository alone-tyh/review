const request=require('request');
const cheerio=require('cheerio');
const http=require('http')
const path=require('path');
const url=require('url');
const fs=require('fs');

request('http://m.mmjpg.com/',{},function(err,res,body){
    var $ = cheerio.load(body);
    $('img').each(function(index,element){
        requestImg($(element).attr('data-img'))
    })
});

var requestImg=function(imgPath){
    var imgUrl=url.parse(imgPath)
    var fileName=path.parse(imgUrl.path).base
    var imgRequest=http.request({
        protocol:'http:',
        host:'fm.shiyunjj.com',
        port:80,
        path:imgUrl.path,
        method:'get',
        headers:{
            'Referer': 'http://m.mmjpg.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
        }
    },function(res){
        var arr=[]
        res.on('data',function(chunk){
            arr.push(chunk)
        });
        res.on('end',function(){
            fs.writeFile('./'+fileName,Buffer.concat(arr),function(err){
                console.log(fileName,'保存成功')
            })
        })
    })
    imgRequest.end();
}