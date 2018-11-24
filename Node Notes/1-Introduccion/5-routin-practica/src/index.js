const server = require("./config/server");
const routes = require("./app/routes/index");
//Inicio de servidor
server.init(routes);