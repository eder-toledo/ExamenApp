//Importando modulos
var db = require('./Models/index.js');
var Sequelize = require('sequelize');
var routes = require('./Routes/index.js');
var restify = require('restify');

//Creando el servidor
var server = restify.createServer({
    name: "ExamApp",
    version: "0.0.1"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

//Implementando las rutas
routes(server, db, Sequelize);