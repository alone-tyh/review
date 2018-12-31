const http=require('http');
const querystring=require('querystring');
const fs=require('fs')


var server=http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('./login.html',{encoding:'utf-8'},function(err,data){
            if(err) console.log(err);
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    if(req.method.toLocaleLowerCase() == 'post'){
        if(req.url=='/login'){
            var data=''
            req.on('data',function(chunk){
                data+= chunk.toString();
            });
            req.on('end',function(){
                var query=querystring.parse(data);
                var u=query.username;
                var p=query.password;
                res.setHeader('Set-Cookie','u='+u)
                res.setHeader('Set-Cookie','p='+p)
                res.writeHead(200);
                res.write('ok');
                res.end();
            })
        }
    }
});
server.listen(8080);