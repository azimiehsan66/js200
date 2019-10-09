const fs = require('fs');
/*

let d = fs.readFile('data','utf8',(err,d)=>{
    console.log(d);
});

*/


/*


function readFileP(filename) {
   return new Promise((resolve,reject)=>{
        fs.readFile(filename,"utf8",(err,data)=>{
            if (err){reject(err)}
            resolve(data);
        })

    });

}

console.log(readFileP("data1").then((data)=>{
    console.log(data);
}
).catch((err)=>{
        console.log(err);
    })


);*/




try{console.log(JSON.parse('{"name":"ali"}'));}catch (ex) {
    console.log(ex);

}