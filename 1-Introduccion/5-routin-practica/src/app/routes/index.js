function servirPagina(path,response)
{
    const fs = require('fs');
    fs.readFile(path,'utf-8',function(err,data)
    {
        if(err)
        {
            console.log(err);
        }
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(data);
    });
}
function index(request,response)
{
    servirPagina('./src/app/views/index.html',response);
    //response.writeHead(200);
    //response.end('Index dir');
}
function info(request,response)
{
    response.writeHead(200);
    response.end('Info dir');
}
const routes = 
{
    '/': index,
    '/index':index,
    '/info':info
}
module.exports = routes;