var http=require('http');

var request=http.request({
    protocol:'http:',
    host:'skipper.fun',
    port:80,
    path:'/',
    method:'get',
    headers:{}
});
request.end();
request.on('contect',function(){
    console.log("请求头已发出，开始接受响应")
});
request.on('response',function(res){
    console.log('响应已收到');
    res.on('data',function(chunk){
        console.log(chunk.toString());
    });
    res.on('end',function(){
        console.log("服务器响应完成")
    })
})