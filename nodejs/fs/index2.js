//fs.open  fs.read fs.write

const fs=require('fs');

fs.open('./1.txt','r',function(err,fd){
	//fd:file id
	console.log(fd);
})