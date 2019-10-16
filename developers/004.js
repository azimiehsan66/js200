const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/js_200";
mongoose.connect(url);

var Schema = mongoose.Schema;

var personSchema = Schema({
        _id: Schema.Types.ObjectId,
        name: String,
        age: Number,

        stories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story'
        }]
    }
);


var storySchema = Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Person'},
    title: String,
    fans: [{type: Schema.Types.ObjectId, ref: 'Person'}]
});

var Story  = mongoose.model('Story',storySchema);
var Person = mongoose.model('Person',personSchema);

var autor = new Person({
   _id:new mongoose.Types.ObjectId(),
   name:'Ian Fleming',
   age:50
});

autor.save(function (err) {
    if (err) return handleError(err);

    var story1 = new Story({
        title:'Casino Royale',
        author:autor._id
    });

    story1.save(function (err) {
       if(err) return handleError(err);
    });

});


Story.findOne({title:'Casino Royale'}).
    populate('author').
    exec(function (err,story) {
    if(err) return handleError(err);
    console.log('the autor is %s', story.author.name);
});