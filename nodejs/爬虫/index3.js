var request=require('request');

request('http://fm.shiyunjj.com/large/2018/1534.jpg',{
    headers:{
        'Referer': 'http://m.mmjpg.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
    }
},function(err,res,body){
    console.log(body)
})