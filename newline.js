
reading(callBacks());
 
 function reading(callBacks) {
     
 
var len = 0;
var fs = require("fs");
var buf = new Buffer(fs.readFile(process.argv[2]));

   
var str = buf.toString(); len = str.split("\n").length;
 len -=1;


}

function callBacks(len){
    console.log(len);
    
}

 
 
 



 



