var http = require("http");
var url = require("url");
var str = "";

function onRequest(req, res){
    
    str = url.parse(req.url, true).query;
     var date = Date(str); 
     console.log(date);
     
   
   res.writeHead(200, { 'Content-Type': 'application/json' });
   res.write(function(chunk){
       var da = new Date();
       JSON.stringify(date, function(str){
           da.getMinutes();
           da.getHours();
           da.getSeconds();
           
       });
   });
   res.end();
    

   }
     
http.createServer(onRequest).listen(process.argv[2]);