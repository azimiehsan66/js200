var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            $("*").each((i, v) => {
                if ($(v).text().search(/\+\+ C/)) {
                    console.log($(v).text());
                }
            });
            // $("a").each((i, v) => {
            //     console.log(v.attribs.href);
            // });
        }
        done();
    }
});

c.queue('http://www.laitec.ir');