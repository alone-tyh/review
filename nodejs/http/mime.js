const path=require('path')

var getFile=function(filename){
    var ext=path.parse(filename).ext;
    switch(ext){
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.jpg':
            return 'image/jpeg'
        case '.js':
            return 'application/x-javascript'
    }
}

exports.getFile = getFile;