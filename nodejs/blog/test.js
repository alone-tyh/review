const MongoControl = require('./tools/demo3').MongoControl
const page = new MongoControl('blog', 'page')
const comment = new MongoControl('blog', 'comment')
const moment=require('moment')

var getDateStr=function(dateObj){

}

// page.insert({
//     sort: 'JS',
//     title: 'JS--不错的语言',
//     author: '齐澳',
//     date: moment().format('YYYY-MM-DD HH:mm:ss'),
//     content: 'JS用起来最方便.......',
//     intro: 'JS的好处'
// },()=>{})


comment.insert({
    fid:'5bfb6a6206426508e4212557',
    content:'好好好好 说的都对！！！！',
    author:'123124234@qq.com',
    date:moment().format('YYYY-MM-DD HH:mm:ss'),
},()=>{})