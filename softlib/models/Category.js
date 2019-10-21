let mongoose = require('mongoose');
let CategorySchema = new mongoose.Schema({

        //category_id: {type: Number},
        name: {type: String},
        picture: {data: Buffer, contentType: String}


    }, {collection: 'categories'}
);

module.exports = mongoose.model('Category', CategorySchema);