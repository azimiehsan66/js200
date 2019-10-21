let mongoose = require('mongoose');
let PlatformSchema = new mongoose.Schema({

        //platform_id: {type: Number},
        name: {type: String},
        installInstruction: {type: String}


    }, {collection: 'platforms'}
);

module.exports = mongoose.model('Platform', PlatformSchema);