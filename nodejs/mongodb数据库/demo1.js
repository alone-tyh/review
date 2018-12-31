var MongoControl=require('./dbc').MongoControl

var user= new MongoControl('test','user')
var contact=new MongoControl('test','contact')


user.insert({},function(error,res){
    console.log(res)
})

// contact.insert({
//     phoneName:111,name:222
// },function(err,res){
//     console.log(res)
// })

contact.removeId('5bf69ceba625673784effa3f',function(err,res){
    
})