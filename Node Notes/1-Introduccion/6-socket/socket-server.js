'use strict'

var tls = require('tls');
var fs = require('fs');

const PORT = 1337;
const HOST = '127.0.0.1'

var options ={
    key : fs.readFileSync('private-key.pem'),
    cert :fs.readFileSync('public-cert.pem'),
}

var server = tls.createServer(options,function(socket)
{
    // Envia un mensaje
    socket.write("Soy un servidor enviandote un mensaje");

    //Imprime la información recivida

    socket.on('data',function(data)
    {
        //` ALT+96
        console.log(`Recivido: %s [esto es detamaño  %d bytes]`,
        data.toString().replace('/(\n)/gm',""),
        data.length)

    });

    socket.on('end',function()
    {
        console.log("Final de la trasmisión");
    });
});

// Empezamos a escuchar en un puerto y una direccion especifica
server.listen(PORT, HOST, function() 
{
    console.log("Escuchando en http://%s:%s", HOST, PORT);
});
// Si se presenta un error se mostrará esto
server.on('error', function(error) 
{
    console.error(error);
    // Close the connection after the error occurred.
    server.destroy();
});