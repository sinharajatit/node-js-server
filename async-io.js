var fs = require("fs");
var count = 0;

fs.readFile(process.argv[2], function(err, data){
    if(err){
        return false;
    }
    else{
       for (var i=0; i < data.length; ++i)
      if (data[i] === 10) count++;
      console.log(count);
    }
    
    
});

/*  code by fcc

var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  
       console.log(lines)  
     })  


*/