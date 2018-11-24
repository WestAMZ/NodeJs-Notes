 const http = require('http');

 //Creamos un json donde pondremos nuestras ulr's

 var routes = 
 {
    '/': function index(request,response)
    {
        response.writeHead(200);
        response.end('Hello World');

    },
    '/foo':function foo(request,response)
    {
        response.writeHead(200);
        response.end('You are now viewing "foo" ');
    }
 }

 //Server

http.createServer(function (request,response)
{
    if(request.url in routes)
    {
        return routes[request.url](request,response);
    }
    //Se ejecuta si aun no se ha retornado nada
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(3000);