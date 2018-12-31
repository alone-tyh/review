const path=require('path');


// //parse ==>  把路径字符串变成对象
// var pathObject=path.parse('D:/nodejs复习第二阶段/path模块/index.js');


// //format  ==> 把路径对象转化成字符串
// var pathString=path.format(pathObject);

// console.log(pathString);
// console.log(pathObject);


//resolve ==> 把一堆路径解析成绝对路径
console.log(path.resolve('./index.js'));


//join ==> 把一堆路径解析成相对路径
console.log(path.join('../','nodejs复习第二阶段','./path模块','index.js'))