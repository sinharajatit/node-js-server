/** Code to filter a directory  */

var fs = require("fs");
var arr = [];
var ext = [];
var x = "";
arr = fs.readdir(process.argv[2], function(err, list){
    if(err){
        console.log("error");
    }
      for(var i = 0; i < list.length; i++){
           x = "."+process.argv[3];
           if(x==require("path").extname(list[i])){
               arr = list[i];
               console.log(arr);
            }
         }
      });




    

