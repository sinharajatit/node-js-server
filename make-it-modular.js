/*  
        module containing: 
            1. Directory Reading.
            2. Filtering function
*/


 var fs = require("fs");
var arr = [];
//var x = "";
var chkext = [];


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
          // console.log(list);
           var x = list.length;
            var z = process.argv[3];
            //console.log(z);
             
            //console.log(str1);
            
            
             //console.log(list);
            
             var chkext = list.filter(checkExt);
             
             console.log(chkext.join("\n"));
             
             
             
            
            
            
              
               
               
               
            }
      
            
      
      });
     
      
  }
  
   var abc  = makeModular(process.argv[2], process.argv[3], xyz());
    
    function checkExt(value){
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
                 
             }
      
      
      
      

  
/*  {
arr = fs.readdir(process.argv[2], function(err, list){
    if(err){
        console.log("error");
    }
       
       
      for(var i =0; i<list.length; i++){
           x = "."+process.argv[3];
           if(x==require("path").extname(list[i])){
               arr = list[i];
               console.log(arr);
               
            }
            
          
      }
         
      });
 };
 
 */
 
  module.exports = abc;
      


      
  
    

     
     
      
 
  
     
