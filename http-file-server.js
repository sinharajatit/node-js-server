var http = require("http");
var fs = require("fs");

function onRequest(req, res){
    fs.createReadStream(process.argv[3]).pipe(res);
    
}


http.createServer(onRequest).listen(process.argv[2]);