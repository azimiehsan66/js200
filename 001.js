const fs = require('fs');
/*

let d = fs.readFile('data','utf8',(err,d)=>{
    console.log(d);
});

*/




function readFileP() {
    return new promise((resolve,reject)=>{
        fs.readFile("data","utf8",(err,data)=>{
            if (err){reject(err)}
            resolve(data);
        })

    });
}

readFileP();