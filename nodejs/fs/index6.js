const fs=require('fs');
const path=require('path');

// //创建一个递归函数，用来查询文件
// var readDir=function(dir){
//     //读取该目录的全部文件夹和文件
//     fs.readdir(dir,function(err,files){
//         //遍历所有文件夹和文件
//         files.forEach(function(e){
//             //计算子文件夹的路径
//             var newDir=path.join(dir,e);
//             //检查子文件夹的状态
//             var stats=fs.statSync(newDir);
//             //判断该文件是否是文件夹
//             if(stats.isDirectory()){
//                 //是，则递归
//                 readDir(newDir);
//             }else{
//                 //不是，则后台输出
//                 console.log(newDir);
//             }
//         })
//     })
// }
// readDir('../Font-Awesome-3.2.1')

// //异步版本
// var readDir=function(dir){
//     fs.readdir(dir,function(err,files){
//         if(err && err.code=='ENOTDIR'){
//             console.log(dir);
//             return;
//         }
//         files.forEach(function(e){
//             readDir(path.join(dir,e))
//         })
//     })
// }
// readDir('../Font-Awesome-3.2.1');

//同步版本
var result=[];
var readDirSync=function(dir){
    console.log(dir);
    try{
        var files=fs.readdirSync(dir);
        files.forEach(function(e){
            if(e.indexOf('$')>-1 || e=='node_modules') return;
            readDirSync(path.join(dir,e))
        })
    }catch(e){
        if(e.code=='ENOTDIR' && path.parse(dir).base=='sublime_text.exe'){
            result.push(dir);
        }
    }
}
readDirSync('d://')