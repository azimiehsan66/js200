let mongoose = require('mongoose');

var Schema = mongoose.Schema;


var categorySchema = Schema({
    _id: Schema.Types.objectId,
    category_name: String,
    picture: {data: Buffer, contentType: String}
    softwares: [{
        type: Schema.Types.ObjectId,
        ref: 'Software'
    }]

}, {collection: 'categories'});


var Category = mongoose.model('Category', categorySchema);


//module.exports = mongoose.model('Category', CategorySchema);