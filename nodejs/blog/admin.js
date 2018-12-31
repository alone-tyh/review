const express = require('express')
const router = express.Router();
const moment = require('moment')
const MongoControl = require('./tools/demo3').MongoControl
const path = require('path')
const page = new MongoControl('blog', 'page')
const comment = new MongoControl('blog', 'comment')

//引入cookie管理模块
const CookieControl = require('./cookie')

var admin = new CookieControl()


var urlencodedParser = require('body-parser').urlencoded({ extended: false })


//后台管理首页
router.get('/', function (req, res) {
    if (admin.checkToken(req.cookies.token)) {
        res.sendFile(path.resolve('./static/admin.html'))
    } else {
        res.redirect('/admin/login')
    }
})


//管理员登录界面
router.get('/login', function (req, res) {
    res.sendFile(path.resolve('./static/login.html'))
})

//登录接口
router.post('/login', urlencodedParser, function (req, res) {
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        res.cookie('token', admin.getToken())
        res.redirect('/admin')
        // res.send('登陆成功')
    } else {
        res.status(403).send('登录失败')
    }
})


// 管理员提交文章
router.post('/uploadPage', urlencodedParser, function (req, res) {
    if (admin.checkToken(req.cookies.token)) {

    } else {
        res.redirect('/admin/login')
        return
    }
    var { sort, title, author, content, intro } = req.body
    var now = moment().format('YYYY-MM-DD HH:mm:ss')
    page.insert({
        sort: sort,
        title: title,
        author: author,
        content: content,
        intro: intro,
        date: now
    }, () => {
        res.send('文章发表成功')
    })
})


//评论相关接口

//获取评论
router.get('/getComment', function (req, res) {
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
        return
    }
    comment.find({ state: 0 }, function (error, data) {
        if(data.length==0){
            res.send([])
            return
        }
        var count = 0
        for (var i = 0; i < data.length; i++) {
            var nowData = data[i]
            var nowDataFid = data[i].fid
            page.findId(nowDataFid, function (error, result) {
                var page = result[0]
                nowData.f_title = page.title
                nowData.f_intro = page.intro
                count++
                if (count == data.length) {
                    res.send(data)
                }
            })
        }
    })
})

//通过某个评论
router.get('/passComment', function (req, res) {
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
        return
    }
    var _id = req.query._id
    comment.updateId(_id, { state: 1 }, function (error, result) {
        res.send({ result: 'ok' })
    })
})

//不通过某个评论
router.get('/nopassComment', function (req, res) {
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
        return
    }
    var _id = req.query._id
    comment.updateId(_id, { state: 2 }, function (error, result) {
        res.send({ result: 'ok' })
    })
})

module.exports = router