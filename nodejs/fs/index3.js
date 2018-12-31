const fs=require('fs');
const path=require('path');

// //创建文件夹
// fs.mkdir('./test1',function(err){
// 	if(err)
// 		console.log(err);
// 	console.log('文件夹创建完成');
// })

//读取文件夹
fs.readdir(src,function(err,files){
	if(err)
		console.log(err);
	files.forEach(function(e){
		if(path.parse(e).ext == '.exe'){
			console.log(e);
		}
	})
})

// //删除文件夹  不能删除非空的文件夹
// fs.rmdir('./test1',function(err){
// 	if(err){
// 		console.log(err)
// 	};
// 	console.log('删除成功')
// })
