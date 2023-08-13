const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient ; 

const connectionUrl = 'mongodb://127.0.0.1:27017';

const dbname = 'project-1'; 

mongoClient.connect(connectionUrl , (error , result) => {
    if(error) {
        return console.log('aklna khara')
    }
    console.log('all perf') 

    const db = result.db(dbname) ; 
   db.collection('users').insertMany(
     [
        {
            name : 'sabri', 
            surName : 'almasri',
            age : 25
        },
        {
            name : 'nizar', 
            surName : 'alnizar',
            age : 25
        },
        {
            name : 'mohamad', 
            surName : 'absi',
            age : 25
        },
        {
            name : 'kasem', 
            surName : 'walid',
            age : 25
        },
        {
            name : 'ahmed', 
            surName : 'khori',
            age : 25
        },
        {
            name : 'ieman', 
            surName : 'alwalid',
            age : 20
        },
        {
            name : 'hala', 
            surName : 'sakkar',
            age : 21
        },
        {
            name : 'aya', 
            surName : 'saiyed',
            age : 35
        },
        {
            name : 'walha', 
            surName : 'edlebi',
            age : 35
        },
        {
            name : 'amir', 
            surName : 'yahya',
            age : 35
        },
     ], (err , data) => {
    if(err){
        console.log('error in adding')
    }
    else{
        console.log(data.insertedCount)
    }
   })

   db.collection('users').find({age:25}).count((err , count)=>{
    if(err) {
        return console.log('error occured')
    }
    console.log(count)
   })


   db.collection('users').find({age:25}).limit(3).toArray((err , users)=>{
    if(err) {
        return console.log('error occured')
    }
    console.log(users)
   })

// $set  name    4

db.collection('users').updateOne({_id:mongodb.ObjectId('64d7dcf0c04e4a91e321fe60')} , {
    $set :{ name : 'setedName'}
})
.then((data) =>{ console.log(data.modifiedCount)})
.catch((error)=> {console.log(error)})


// updateOne  for 1    inc  20

db.collection('users').updateOne({_id:mongodb.ObjectId('64d7dcf0c04e4a91e321fe5d')} , {
    $inc :{ age : 20}
})
.then((data) =>{ console.log(data.modifiedCount)})
.catch((error)=> {console.log(error)})


// updateMany  inc  age  10

db.collection('users').updateMany({} , {
    $inc : { age : 10}
})
.then((data) =>{ console.log(data.modifiedCount)})
.catch((error)=> {console.log(error)})



// deleteOne   1

db.collection('users').deleteOne({_id:mongodb.ObjectId('64d7dcf0c04e4a91e321fe5d')})
.then((data1) =>{ console.log(data1.deletedCount)})
.catch((error)=> {console.log(error)})


// deleteMany   age  35

db.collection('users').deleteMany({age : 35})
.then((data1) =>{ console.log(data1.deletedCount)})
.catch((error)=> {console.log(error)})

})