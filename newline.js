/**
var fs = require("fs");
var buf = new Buffer(fs.readFileSync(process.argv[2]));
   
var str = buf.toString();
var len = str.split("\n").length;
len -=1;

console.log(len);

*/


var str = undefined;

 function reading(callBacks) {
     
 

var fs = require("fs");
var buf = new Buffer(fs.readFile(process.argv[2]));
   
str = buf.toString();
var len = str.split("\n").length;
len -=1;


}

function callBacks(len){
    console.log(len);
    
}

 reading(callBacks());
 
 
 



 
