//requerimos el modulo http y lo asignamos a una constante
const http = require('http');

// http.createServer retorna un objeto server
const server = http.createServer((request,response)=>
{
    //mandamos un código de petición exitosa (200) y definimos el contenido del response
    response.writeHead(200,{ 'Content-Type': 'text-plain'});
    //Escribimos texto en el cuerpo de la página
    response.write("Hello World! \n");
    //Damos a conocer que el servidor ha terminado de contestar
    response.end();

});
//Establecemos el # de puerto en el que escuchará
server.listen(3000);
