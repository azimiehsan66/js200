let mongoose = require('mongoose');

var Schema = mongoose.Schema;


var categorySchema = Schema({
    _id:Schema.Types.objectId,
    category_name:String,
    picture : { data: Buffer, contentType: String }
    softwares: [{

    }]

},{collection:'categories'});

let SoftwareSchema = Schema({
        name: {type: String},
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

module.exports = mongoose.model('Software', SoftwareSchema);