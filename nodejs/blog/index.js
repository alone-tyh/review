//引入express模块
const express = require('express')  
//引入cookie-parser模块
const cookieParser = require('cookie-parser')
//引入body-parser模块
const bodyParser = require('body-parser')
//初始化urlencoded解析器
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//初始化express模块
const app = express()
//引入ejs模块，做后端渲染
const ejs = require('ejs')
//引入moment模块(时间模块)
const moment = require('moment')
//引入marked模块
const marked=require('marked')


//引入自己实现的MongControl模块
const MongoControl = require('./tools/demo3').MongoControl
//初始化文章表
const page = new MongoControl('blog', 'page')
//初始化存储的集合
const comment = new MongoControl('blog', 'comment')

//为请求添加中间件，解析cookie
app.use(cookieParser())

//处理静态文件请求
app.use(express.static('./static', {
    index: false
}))

//后台的程序接口
//后台功能接口的静态文件请求
app.use('/admin', express.static('./static', { index: false }))
//后台功能路由
app.use('/admin', require('./admin'))




//前台的程序接口


//提供首页接口
app.get('/', function (req, res) {
    //在page数据库里查找全部文章
    page.find({}, function (err, data) {
        //ejs渲染json文章数据页面中
        ejs.renderFile('./ejs-tpl/index.ejs', { data: data }, function (error, html) {
            if (error) {
                console.log(error)
                return
            }
            res.send(html)
        })
    })
})

//提供某一篇文章浏览接口
app.get('/p', function (req, res) {
    //获取前端传入的_id
    var _id = req.query._id
    //根据_id查询文章
    page.findId(_id, function (err, result) {
        //如果没有这篇文章，则报404
        if (result.length == 0) {
            res.status(404).send('文章不存在')
            return
        }
        //根据文章的_id查询评论
        var data = result[0];//_id查询肯定只返回一条
        data.content=marked(data.content)//使用marked处理md为html文件
        comment.find({ fid: _id, state: 1 }, function (err, result) {
            //渲染评论
            ejs.renderFile('./ejs-tpl/page.ejs', { data: data, comment: result }, function (err, html) {
                html=html.replace('<!--html-->',data.content)
                res.send(html)
            })
        })
    })
})


//前台童虎提交评论接口
//用户提交评论
app.post('/submitComment', urlencodedParser, function (req, res) {

    //获取携带在url中的文章id
    var _id = req.query._id;
    //获取评论内容，email和content
    var { email, content } = req.body

    //简单的表单验证：不允许为空
    if (!_id) {
        res.send('请注册用户')
        return
    }
    if (!email || !content) {
        res.send('发送失败')
        return
    }
    //操作评论数据库
    comment.insert({
        fid: _id,
        author: email,
        content: content,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        state: 0
    }, (err, result) => {
        if (err) {
            //如果操作数据库失败，则返回500
            res.status(500).send('发送失败')
            return
        }
        //成功则重定向这个文章
        res.redirect('/p?_id=' + _id)
    })
})



//监听 8080端口
app.listen(8080)