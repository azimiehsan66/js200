let mongoose = require('mongoose');

let SoftwareSchema = new mongoose.Schema({
        //software_id: {type: Number},
        name: {type: String},
        description: {type: String},
        last_update: {type: Date},
        downloads: {type: Number},
        user_rating: {type: Number},
        licence: {type: String},
        publisher: {type: String},
        picture: {data: Buffer, contentType: String},
        version: {type: String}
        // category_id: {type: Number}


    }, {collection: 'softwares'}
);

module.exports = mongoose.model('Software', SoftwareSchema);