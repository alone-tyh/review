// var math=require('./math');
// var add=math.add;
// console.log(add(1,2));



const file=require('fs');
file.readFile('./math',function(err,data){
	console.log("文件已读取");
})
console.log("程序最后一行");