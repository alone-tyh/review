const http=require('http');
const querystring=require('querystring');
const fs=require('fs')

var parseCookie=function(req){
    var cookie=req.headers.cookie;
    if(typeof cookie=='string'){

    }else{
        return req.cookie=={}
    }
    var cookieArr=cookie.split(';');
    var cookieObj={}
    cookieArr.forEach(function(e,index){
        if(index==0){

        }else{
            e=e.slice(1,e.length);
        }
        var cookieOne= querystring.parse(e);
        var key = Object.keys(cookieOne)[0];
        var value=cookieOne[key];
        cookieObj[key]=value
    })
    req.cookie = cookieObj
}

var checkUser=function(cookie){
    if(cookie.u=='admin'&&cookie.p=='admin'){
        return true
    }else{
        return false
    }
}


var server=http.createServer(function(req,res){
    parseCookie(req)
    if(req.method.toLocaleLowerCase() == 'get'){
        if(req.url=='/login'){
            if(checkUser(req.cookie)){
                res.writeHead(302,{Location:'/'});
                res.end()
            }else{
                    fs.readFile('./login.html',{encoding:'utf-8'},function(err,data){
                    if(err) console.log(err);
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                })
            }
        }
        if(req.url=='/'){
            if(checkUser(req.cookie)){
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.write('登录状态');
                res.end();  
            }else{
                res.writeHead(302,{Location:'/login'});
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
                var u=query.username;
                var p=query.password;
                res.setHeader('Set-Cookie','p='+p)
                res.setHeader('Set-Cookie','u='+u)
                res.writeHead(302,{Location:'/'});
                res.end();
            })
        }
    }
});
server.listen(8080);