const querystring=require('querystring');

var qs = 'name=1&age=20';

console.log(querystring.parse(qs));

console.log(querystring.stringify(querystring.parse(qs)))



console.log(querystring.unescape('https://www.baidu.com/s?wd=%E5%90%B4%E4%BA%A6%E5%87%A1'))