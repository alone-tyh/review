const http=require('http');

var server=http.createServer(function(req,res){
    if(req.method.toLocaleLowerCase() == 'get'){
        if(req.url=='/getinfo'){
            res.setHeader('Access-Control-Allow-Origin','*')
            res.writeHead(200,{'Content-Type':'text/json'});
            res.write(JSON.stringify({code:200}));
            res.end();
        }
    }
});
server.listen(8080);