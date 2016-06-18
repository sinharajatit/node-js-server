/*  
        module containing: 
            1. Directory Reading.
            2. Filtering function
*/
      
  
  
  
  
  
  
  /*  function abc(dir_add, file_ext){
  
       require("fs").readdir(dir_add, function(err, list){
          if(err){
          console.log("error!!");
      }
      else{
             var chkext = list.filter(function checkExt(value){
       var path = require("path");
        var str1 = "";
        var str2 = "";
            str1  = "."+ file_ext;
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
       
       
     
module.export =  abc(process.argv[2], process.argv[3]); */



var x = [];

  function dirRead(dir_Re, file_ext, callBack){
      this.diRe  = function(dir_re){
       require("fs").readdir(process.argv[2], function(error, list){
             if(error){
                 
                 return callBack(error);
                
                 
             } 
             else
             {
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
         
      };
      
     
      
      
  }
  
  module.exports = dirRead;

  
     
