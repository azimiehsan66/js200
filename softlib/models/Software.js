let mongoose = require('mongoose');

var Schema = mongoose.Schema;


/*var categorySchema = Schema({
    _id: Schema.Types.objectId,
    category_name: String,
    picture: {data: Buffer, contentType: String}
    softwares: [{
        type: Schema.Types.ObjectId,
        ref: 'Software'
    }]

}, {collection: 'categories'});*/

let softwareSchema = Schema({
        name: {type:  String},
        description: {type: String},
        last_update: {type: Date},
        downloads: {type: Number},
        user_rating: {type: Number},
        licence: {type: String},
        publisher: {type: String},
        picture: {data: Buffer, contentType: String},
        version: {type: String}


    }, {collection: 'softwares'}
);


var Software = mongoose.model('Software', softwareSchema);
//var Category = mongoose.model('Category', categorySchema);


//module.exports = mongoose.model('Software', softwareSchema);
