const fs=require('fs');
const http=require('http');
const querystring=require('querystring');
const path=require('path');
const url=require('url');

var server=http.createServer(function(req,res){
    if(req.method.toLocaleLowerCase() == 'get'){
        if(req.url=='/'){
            fs.readFile('./static/demo1.html',function(err,data){
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.write(data);
                res.end();
            })
        }
        var urlObj=url.parse(req.url);
        if(urlObj.pathname=='/pages'){
            var page=querystring.parse(urlObj.query).page;
            var realFile=path.join('./static',(page+'.txt'));
            console.log(realFile);
            fs.readFile(realFile,function(err,data){
                if(err){
                    res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
                    res.write("无法找到该文件");
                    res.end();
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
                res.write(data);
                res.end();
            })
        }
    }

    if(req.method.toLocaleLowerCase() == 'post'){
        console.log(req.url);
        if(req.url == '/login'){
            var data='';
            req.on('data',function(chunk){
                data += chunk.toString();
            })
            req.on('end',function(){
                var query;
                if(req.headers["content-type"]=='text/json'){
                    query=JSON.parse(data);
                }else{
                    query=querystring.parse(data);
                }
                console.log(query)
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                res.write('finish process Welcome'+query.username)
                res.end();
            })
        }
    }
});
server.listen(8080);