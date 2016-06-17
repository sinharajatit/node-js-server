/*  
        module containing: 
            1. Directory Reading.
            2. Filtering function
*/

  var fs = require("fs");
var arr = [];



  function makeModular(path_dir, path_name, callBacks){
      
      
      callBacks;
     
  }
  
  function xyz(err){
      if(err){
          console.log("error!!");
      }
      
      
      fs.readdir(process.argv[2], function(err, list){
          if(err){
          console.log("error!!");
      }
      else{
             var chkext = list.filter(function checkExt(value){
       var path = require("path");
        var str1 = "";
        var str2 = "";
            str1  = "."+ process.argv[3];
            str2 =  path.extname(value);
           if(str2 == str1){
               return true;
           }
           else{
               return false;
           }
                 
             });
             console.log(chkext.join("\n"));
             }
       });
     
      
  }
  
   var abc  = makeModular(process.argv[2], process.argv[3], xyz());
    
   
 
  module.exports = abc;
      
