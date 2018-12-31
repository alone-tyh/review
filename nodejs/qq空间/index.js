var http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const url=require('url');

var server=http.createServer(function(req,res){
    if(req.method.toLocaleLowerCase()== 'get'){
        if(req.url=='/'){
            fs.readFile('./login.html',{encoding:'utf-8'},function(err,data){
                if(err) console.log(err);
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            })
        }
        var urlObj=url.parse(req.url);
        var query=querystring.parse(urlObj.query);
        console.log(query)
        if(urlObj.pathname=='/index'){
            if(query.u=='admin' && query.p=='admin'){
                fs.readFile('./index.html',{encoding:'utf-8'},function(err,data){
                    if(err) console.log(err);
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                })
            }else{
                res.writeHead(403);
                res.write('forbidden');
                res.end();
            }
        }
    }
    if(req.method.toLocaleLowerCase() == 'post'){
        if(req.url=='/login'){
            var data=''
            req.on('data',function(chunk){
                data+= chunk.toString();
            });
            req.on('end',function(){
                var query=querystring.parse(data);
                if(query.username=='admin' && query.password=='admin'){
                    fs.readFile('./index.html',{encoding:'utf-8'},function(err,data){
                        if(err) console.log(err);
                        res.writeHead(200,{'Content-Type': 'text/html'});
                        res.write(data);
                        res.end();
                    })
                }else{
                    res.writeHead(403);
                    res.write('forbidden');
                    res.end();
                }
            })
        }
    }
});
server.listen(8080);