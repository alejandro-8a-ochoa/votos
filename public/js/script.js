const hash=require('./hash-generetor');

var getData = function(){

    var name = document.getElementById("nombre").value;
    var apellidoPaterno=document.getElementById("apellido-paterno").value;
    var apellidoMaterno=document.getElementById("apellido-materno").value;
    name=name.toUpperCase();
    apellidoPaterno=apellidoPaterno.toUpperCase();
    apellidoMaterno=apellidoMaterno.toUpperCase();
    var entero=name+apellidoPaterno+apellidoMaterno;
    console.log(entero);
}