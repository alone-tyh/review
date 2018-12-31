var http=require('http');
var fs=require('fs');

var imgName=1400;

var requestWeb=function(path,i){
    //http://fm.shiyunjj.com/large/2018/1534.jpg
    var request=http.request({
        protocol:'http:',
        host:'fm.shiyunjj.com',
        port:80,
        path:path,
        method:'get',
        headers:{
            'Referer': 'http://m.mmjpg.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
        }
    });
    request.end();
    request.on('contect',function(){
        console.log("请求头已发出，开始接受响应")
    });
    request.on('response',function(res){
        console.log('响应已收到');
        var arr=[];
        res.on('data',function(chunk){
            arr.push(chunk);
        });
        
        res.on('end',function(){
            //把jpg文件进行解析
            fs.writeFile('./'+i+'.jpg',Buffer.concat(arr),function(err){
                console.log('写入完成')
            })
            console.log("服务器响应完成")
        })
    });
};

for(var i=0;i<10;i++){
    imgName++;
    var path='/large/2018/'+imgName+'.jpg';
    requestWeb(path,i);
}