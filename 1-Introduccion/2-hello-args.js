'use strict'
/*
    Los argumentos de la linea de comandos son
    almacenados en el arreglo 'process.argv' con la siguiente
    estructura:

    [0] La ruta del ejecutable que ha iniciado el proceso de Node js
    [1] La ruta de esta aplicación
    [2-n] Argumentos de linea de comandos

    Ejm: ['C:\Program ...\bin\' ,'D:\Mis Documentos\ index.js','arg 1','arg2' ..]
*/ 

//Almacenamos el primer argumento

var username = process.argv[2];

//Revisamos que username no este vacío
const path = require('path'); //clase para operar sobre rutas
//sep devuelve el separador segun sistema operativo \ o /
if(!username)
{
    var appName = process.argv[1].split(path.sep).pop();
    console.error('Se perdio argumento! ejemplo: %s TU_NOMBRE',appName);
    process.exit(1)
}
console.log("Hello %s!", username);