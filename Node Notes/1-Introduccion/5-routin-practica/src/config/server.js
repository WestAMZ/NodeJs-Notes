const server =
{
    http :require('http'),
    port : 3000,
    host: "localhost",
    init : function(routes)
    {
       var port = this.port;
       var host = this.host;
       var app = this.http.createServer((request,response)=>
       {
           if(request.url in routes)
           {
               return routes[request.url](request,response);
           }
       });
       app.listen({port,host},()=>
       {
        console.log("Server en http:"+host+":"+port);
       })
       
    }
}


module.exports = server;