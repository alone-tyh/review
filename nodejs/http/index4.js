const http=require('http');
const fs=require('fs');

var server=http.createServer(function(req,res){
    console.log(req.url)
    if(req.method.toLocaleLowerCase() == 'get'){
        //页面标题图标请求
        if(req.url=='/favicon.ico'){
            res.writeHead(404);
        }
        //首页请求
        if(req.url=='/'){
            fs.readFile('./demo.html',{'encoding':'utf-8'},function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"});
                res.write(data);
                res.end();            
            })
        }
        
        //css请求
        if(req.url=='/demo.css'){
            fs.readFile('./demo.css',{encoding:'utf-8'},function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type':'text/css;charset=utf-8'});
                res.write(data);
                res.end();
            })
        }

        //js请求
        if(req.url == '/demo.js'){
            fs.readFile('./demo.js',{encoding:'utf-8'},function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type':'application/x-javascript;charset=utf-8'});
                res.write(data);
                res.end();
            })
        }

        //jpg请求
        if(req.url=='/001.jpg'){
            fs.readFile('./001.jpg',function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type':'image/jpeg'});
                res.write(data);
                res.end();
            })
        }
    }
});
server.listen(8080);