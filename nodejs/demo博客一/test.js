var MongoControl=require('./demo3').MongoControl
var page=new MongoControl('test','page')

page.insert({
    content:`<h1>文章一</h1><p>正文</p>`,
    title:`文章一`
},()=>{})