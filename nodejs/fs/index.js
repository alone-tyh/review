 const fs=require('fs');

 //fs => File System
 
 //1.简单文件操作
 //2.复杂文件操作
 //3.文件夹操作
 //4.文件/文件夹通用的
 //5.文件监听
 //6.文件流
 
//1.  appendFile  追加到文件
//copyFile   复制一个文件到另一个文件
//readFile  读取文件全部内容
//writeFile  写入文件(文件存在则会覆盖)
//unlink     删除文件


//1.懂得去看函数参数类型和意义
//2.在fs模块里，一班回调函数的第一个参数都是错误
//3.同步方法不需要异步回调
 // fs.appendFile('./1.txt','文件已生成并且成功添加进来',{encoding:'utf-8'},function(err){
 // 	if(err){
 // 		console.log(err);
 // 		return; 		
 // 	}
 // 	console.log('文件追加完成')
 // })
 // fs.appendFileSync('./1.txt','这是同步方进来的',{encoding:'utf-8'})

 // console.log('程序读取到最后一行')
 // fs.copyFile('./1.txt','./2.txt',function(err){
 // 	if(err){
 // 		console.log(err)
 // 	}
 // 	console.log('复制完成')
 // });
 // fs.readFile('./2.txt',function(err,data){
 // 	if(err)
 // 		console.log(err);
 // 	var fileData = data;
 // 	fs.appendFile('./2.txt','啦啦啦啦',{encoding:'utf-8'},function(err){
 // 		if(err)
 // 			console.log(err);
 // 		console.log('文字添加完成')
 // 	})
 // })
 // fs.writeFile('./2.txt','只有aaaaaaaa',{encoding:'utf-8'},function(err){
	// if(err)
	// 	console.log(err)
	// console.log('文件写入完成') 	
 // })
 // //删除文件
// fs.unlink('./index.html',function(err){
// 	if(err)
// 		console.log(err)
// 	console.log('文件删除完成')
// })
 var copyFile=function(src,dest){
 	fs.readFile(src,function(err,data){
 		if(err)
 			console.log(err)
 		fs.appendFile(dest,data,function(err){
 			if(err)
 				console.log(err);
 			console.log('文件载入完成');
 		})
 	})
 }

 copyFile('./1.txt','./2.txt');