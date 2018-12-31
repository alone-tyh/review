const http=require('http');

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.write('你们好');
    res.end();
})
server.listen(8080);