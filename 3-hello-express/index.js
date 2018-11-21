// Importamos express
const express = require('express');
// Creamos una aplicación con el objeto express
const app = express();

const port = 3000;

app.get('/',function (request,response)
{
    response.send("Hello World!");
});
