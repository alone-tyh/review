const http=require('http');
const fs=require('fs');
const path=require('path');
const mime=require('./mime')
const static='./static';


var server=http.createServer(function(req,res){
    console.log(req.url);
    if(req.method.toLocaleLowerCase() == 'get'){
        if(req.url.indexOf('.') > -1){
            var realPath = path.join(static,req.url)
            fs.readFile(realPath,function(err,data){
                if(err && err.code == 'ENOENT'){
                    res.writeHead(404);
                    res.end();
                    return;
                };
                res.writeHead(200,{'Content-Type':mime.getFile(req.url)});
                res.write(data);
                res.end();
            })
        }

        //首页请求
        if(req.url=='/'){
            fs.readFile('./static/demo.html',{'encoding':'utf-8'},function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type':"text/html"});
                res.write(data);
                res.end();  
            })
        }
    }
});
server.listen(8080);