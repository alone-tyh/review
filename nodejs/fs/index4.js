//文件/文件夹通用的操作
const fs=require('fs');

//判断文件/文件夹是否存在
var result=fs.existsSync('./1.txt');
if(result){
	console.log(result);	
}

//检查文件/文件夹状态
fs.stat('./1.txt',function(err,stats){
	if(err){
		console.log(err);
	}
	console.log(stats);
});


//重命名
fs.rename('./1.html','./1.txt',function(err){
	if(err){
		return console.log(err)
	}
	console.log('文件更名完成');
})
