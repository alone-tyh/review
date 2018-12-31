const mongodb=require('mongodb');
const MongodbClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId

const mongodbUrl='mongodb://127.0.0.1:27017'

MongodbClient.connect(mongodbUrl,{useNewUrlParser:true},function(err,client){
    if(err){
        console.log(err)
        return}
    var db=client.db('test')
    //查
    // db.collection('user').find({}).toArray(function(error,res){
    //     console.log(res)
    //     client.close()
    // })
    //增加
    // db.collection('user').insert({name:'aaaa'},function(err,res){
    //     console.log(res)
    //     client.close()
    // })
    //删除
    // db.collection('user').remove({ "_id" :ObjectId("5bf6746bc5cd50953da5ed2c")},function(error,res){
    //     console.log(res.result)
    //     client.close
    // })
    //更新
    db.collection('user').update({name:'qiao'},{$set:{age:60}},function(error,res){
        console.log(res.result)
    })
})