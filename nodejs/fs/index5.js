const fs=require('fs');
//文件监听

//html监听器

//检测文件每一个变化
// //如果我们的node在监听的话，程序不会停止执行
// fs.watch('./1.txt',function(event,filename){
// 	console.log(event,filename);
// })

//检测文件名变化
fs.watchFile('./2.txt',function(curr,prev){
	console.log(curr,prev);
})