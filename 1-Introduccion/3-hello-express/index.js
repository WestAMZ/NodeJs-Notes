// Importamos express
const express = require('express');
// Creamos una aplicación con el objeto express
const app = express();

const port = 3000;
//Establecemos la respuesta para el método get en '/' (la raíz)
app.get('/',function (request,response)
{
    response.send("Hello World!");
});

app.listen(port,function()
{
    console.log('Server listeninng on port http://localhost:'+ port);
});
