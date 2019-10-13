const db = require("../init/db");

let DeveloperSchema = new db.Schema({
    "name":{type:String},
    "family":{type:String}
},{
    collection:"developers"
});

module.exports = Developer  = db.model("Developer",DeveloperSchema);