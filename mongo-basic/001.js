const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/sample";
const mongoose = require('mongoose');
const co = require("co");

MongoClient.connect(url, (err, client) => {
    mongoose.connect(url);

    var NameSchema = new mongoose.Schema({
        "name": {type: String},
        "family": {type: String},
    }, {collection: "names"});


    var StudentSchema = new mongoose.Schema({
        "name":{type:String},
        "family":{type:String}
    },{
        collection:"students"
        }
        );

    Student = mongoose.model("Student",StudentSchema);


    s= new Student({
        "name":"ali student",
        "family":"kalan student"
    })



 //   s.save().then((docs)=>{
     //   console.log(docs);
  //  });


    Name = mongoose.model("Name", NameSchema);
//    console.log(Name.find().exec());


/*
    Name.find({}).exec(
        (err, docs) => {
            console.log(docs);
            mongoose.disconnect();
        })



    Name.find().exec().then(
        (docs)=>{
            console.log(docs);
            mongoose.disconnect();
        }
    )
*/
co(function* () {
  var  names = yield Name.find().exec();
  var students = yield Student.find().exec();


    console.log(students);


    console.log(names);
})



    /*   if(err){return;}

       const  db = client.db("sample");
       db.collection("names").insertOne({
           "name":"ali",
           "family":"kalantari"
       }).then((doc)=>{
           console.log(doc);
           console.log("DONE ...!");
       });
   client.close();*/
    //console.log(err);
    //console.log("********");
    //  console.log(db);
});