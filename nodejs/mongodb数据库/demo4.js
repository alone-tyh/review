const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const MongoControl = require("./demo3").MongoControl;

const contactControl = new MongoControl('test', 'contact');

app.use(express.static('./statics'))


var handle500 = function (res) {
    res.status(500).send("数据库查询错误")
}


//获取联系人
app.get('/getAllContact', (req, res) => {
    contactControl.find({}, function (err, result) {
        if (err) {
            handle500(res)
            return
        }
        res.send(result)
    })
})
//获取一个联系人
app.get('/getContact', function (req, res) {
    var _id = req.query._id
    contactControl.findId(_id, function (err, result) {
        if (err) {
            handle500(res)
            return
        }
        res.send(result)
    })
})


//搜索联系人
app.get('/search', (req, res) => {
    var wd = req.query.wd
    var reg = new RegExp(wd, 'i')
    contactControl.find({
        $or: [
            { name: { $regex: reg } },
            { phoneNumber: { $regex: reg } }
        ]
    }, function (err, result) {
        if (err) return handle500(res)
        res.send(result)
    })
})

//删除联系人
app.get('/remove', (req, res) => {
    var _id = req.query._id
    contactControl.removeId(_id, (err, result) => {
        if (err) return handle500(res)
        res.send(result)
    })
})

//添加联系人
app.post('/addContact', urlencodedParser, (req, res) => {
    var { name, phoneNumber } = req.body
    var data = {
        name: name,
        phoneNumber: phoneNumber
    }
    contactControl.insert(data, (err, result) => {
        if (err) {
            handle500(res)
            return
        }
        res.send({ result: 'ok' })
    })
})

//修改联系人
app.post('/revise', urlencodedParser, (req, res) => {
    var { _id, name, phoneNumber } = req.body

    contactControl.updateId(_id, { name: name, phoneNumber: phoneNumber }, function (err, result) {
        if (err) {
            return handle500(res)
        }
        res.send({ 'result': 'ok' })
    })
    // contactControl.insert({
    //     name:name,
    //     phoneNumber:phoneNumber
    // },function(err,result){
    //     if(err){
    //         handle500(res)
    //         console.log("修改联系人 - 插入数据出错")
    //         return
    //     }
    //     contactControl.removeId(_id,function(error,result){
    //         if(error){
    //             handle500(res)
    //             console.log('修改联系人 - 删除旧数据出错')
    //             return
    //         }
    //         res.send({result:'ok'})
    //     })
    // })
})

app.listen(8080)