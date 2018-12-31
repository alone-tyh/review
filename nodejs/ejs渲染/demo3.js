const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId
const mongodbUrl='mongodb://127.0.0.1:27017'
class MongoControl{
    constructor(dbName,collectionName){
        this.dbName=dbName
        this.collectionName=collectionName
    }
    _init(callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(err,client)=>{
            if(err){
                callback(err)
                return
            }
            var db=client.db(this.dbName)
            callback(
                null, db.collection(this.collectionName),client
            )
        })
    }
    find(findQuery,callback){
        this._init((err,collection,client)=>{
            collection.find(findQuery).toArray((err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    insert(data,callback){
        this._init((err,collection,client)=>{
            collection.insert(data,(err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    update(findQuery,newdata,callback){
        this._init((err,collection,client)=>{
            collection.update(findQuery,{$set:newdata},(err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    remove(findQuery,callback){
        this._init((err,collection,client)=>{
            collection.remove(findQuery,(err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    removeId(_id,callback){
        var findQuery={_id:ObjectId(_id)}
        this.remove(findQuery,callback)
    }
    updateId(_id,data,callback){
        var findQuery={_id:ObjectId(_id)}
        this.update(findQuery,data,callback)
    }
    findId(_id,callback){
        var findQuery={_id:ObjectId(_id)}
        this.find(findQuery,callback)
    }
}


exports.MongoControl=MongoControl
// var user=new MongoControl('test','user')
// // user.find({name:'qiao'},function(err,res){
// //     console.log(res)
// // })

// user.remove({name:'qiao'},function(err,res){
//     console.log(res)
// })