
var a=[[1,2,3]];
var b=a[0];
b[0]=5;
console.log('a-->',a);

console.log('b-->',b);
var arr=[];
b.map(i=>{
    arr.push(i);
})
console.log('arr-->',arr)
arr[0]=11111;
console.log('arr-->',arr)



var x=1;
var y=x;
y=333;
console.log(x);