const http=require('http');

var server=http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"});
    if(req.method.toLowerCase()=='get'){
        if(req.url=='/'){
            res.write("index");
        }else if(req.url=='/login'){
            res.write('login');
        }else{
            res.write("Not Found");
        }
        res.end();
    }
});
server.listen(8080);