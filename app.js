'use strict'

//const express = require('express');


// const app = express();
let port=3000;
// app.use(express.static('public'));

// app.listen(3000,()=>{
//     console.log(`servidor corriendo en puerto: ${port}`);
// });


const http=require('http').createServer(webServer),
    form= require('fs').readFileSync('./public/index.html'),
    querystring=require('querystring'),
    util=require('util');
 let   dataString='';

    function webServer(req,res){
        if(req.method == 'GET')
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(form);
        }

        if (req.method== 'POST')
        {
            req 
                .on('data',function(data){
                    dataString+= data
                })
                .on('end',function(){
                    var templateString=`los datos que enviaste por POST como string son :${dataString}`;
                    console.log(templateString);
                    res.end(templateString);
                })
        }

    }

    http.listen(port);
    console.log(`servidor corriendo en puerto: ${port}`);
    