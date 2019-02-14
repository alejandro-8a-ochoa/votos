const express = require('express');


const app = express();
let port=3000;
app.use(express.static('public'));

app.listen(3000,()=>{
    console.log(`servidor corriendo en puerto: ${port}`);
});