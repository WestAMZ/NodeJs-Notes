const http = require('http');

function index(request,response)
{
    response.writeHead(200);
    response.end('Hello World');   
}
http.createServer((request,response)=>
{
    //Se puede asignar o ejecutar una funcion en base a una condicional
    if(request.url == '/')
    {
        return index(request,response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(3000);