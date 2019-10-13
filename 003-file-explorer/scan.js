var fs = require('fs');

module.exports = function scan(dir, alias){

    return {
        name: alias,
        type: 'folder',
        path: alias,
        items: walk(dir, alias)
    };

};


function walk(dir, prefix) {
    return fs.readdirSync(dir).map(function (f) {
        let p = (dir + '/' + f).replace('./', '');
        let s = fs.statSync(p);
        if (s.isDirectory()) {
            return {
                name: f,
                type: 'folder',
                path: prefix + '/' + p,
                items: walk(p, prefix)
            }
        }
        return {
            name: f,
            type: 'file',
            path: prefix + '/' + f,
            size: s.size
        }
    });
};