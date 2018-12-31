const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId
const mongodbUrl='mongodb://127.0.0.1:27017'
class MongoControl{
    constructor(dbName,collectionName){
        this.dbName=dbName
        this.collectionName=collectionName
    }
    find(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(err,client)=>{
            if(err){
                callback(err)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.collectionName).find(findQuery).toArray((err,result)=>{
                callback(err,result)
                client.close();
            })
        })
    }
    insert(data,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.collectionName).insert(data,(err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    update(findQuery,newdata,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.collectionName).update(findQuery,{$set:newdata},(err,res)=>{
                callback(err,res)
                client.close();
            })
        })
    }
    remove(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db=client.db(this.dbName)
            db.collection(this.collectionName).remove(findQuery,(err,res)=>{
                callback(err,result)
                client.close();
            })
        })
    }
}

var user=new MongoControl('test','user')
user.find({name:'qiao'},function(err,res){
    console.log(res)
})