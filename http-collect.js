const hyperquest = require('hyperquest')
const  bl         = require('bl')
const url        = process.argv[2];
 
hyperquest(url).pipe(bl(function (err, data) {
    if(err){
        console.log("erroe hai");
    }
    if(res.on(end, function(end){
        console.log(data.length);
        console.log(data.toString());
    });
    
}));