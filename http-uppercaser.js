var http = require("http");
var map = require("through2-map");



function onRequest(inStream, outStream){
    inStream.pipe(map(function(chunk){
    return chunk.toString().toUpperCase()
})).pipe(outStream);
    
    
}


http.createServer(onRequest).listen(process.argv[2]);