let mongoose = require('mongoose');

mongoose.Query.prototype.paginate = function paginate(page, limit, cb) {
    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 10;

    let query = this;


    console.log("***");
    console.log(this);
    console.log("***");


    let model = this.model;
    let skipform = (page * limit) - limit;

    query = query.skip(skipform).limit(limit);

    if (cb) {
        query.exec(function (err, docs) {
            if (err) {
                cb(err, null, null);
            } else {
                model.count(query._conditions, function (err, total) {
                    if (err) {
                        cb(err, null, null);
                    } else {
                        cb(null, docs, total);
                    }
                });
            }
        });

    } else {
        return this;
    }


};

