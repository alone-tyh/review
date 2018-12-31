var mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId
const mongodbUrl='mongodb://127.0.0.1:27017'

var MongoControl=function(dbName,tableName){
    this.dbName=dbName
    this.tableName=tableName
    this.insert=function(data,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(err,client)=>{
            if(err){
                console.log(err)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.tableName).insert(data,function(error,res){
                callback(error,res)
                client.close();
            })
        })
    }
    this.removeId=function(_id,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(err,client)=>{
            if(err){
                console.log(err)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.tableName).remove({_id:ObjectId(_id)},function(error,res){
                callback(error,res)
                client.close();
            })
        })
    }
}

exports.MongoControl=MongoControl