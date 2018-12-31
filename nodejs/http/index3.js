const http=require('http');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"});
    res.write('aaaa');
    res.write('bbbb');
    res.write('cccc');
    res.write('dddd');
    res.end();
});
server.listen(8080);