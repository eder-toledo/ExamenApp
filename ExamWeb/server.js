//Importando los modelos
var db = require('./Models/index.js');
var Sequelize = require('sequelize');

db.ex_Materia.belongsTo(db.ex_Grado, {
    foreignKey: 'ex_Grado_idGrado'
});

db.ex_Grado.hasMany(db.ex_Materia, {
    foreignKey: 'idGrado'
});
//Creando el servidor

var restify = require('restify');

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


function respond(req, res, next) {
    db.ex_Materia.findAll({
        attributes: ['idMateria', 'nombreMateria','ex_Grado_idGrado'],
        include: [{
            model: db.ex_Grado,
            attributes: ['idGrado', 'nombre'],
            exclude: ['UserRolePermission'],
            where: { state: Sequelize.col('ex_Materia.ex_Grado_idGrado') }
        }] }).then(function (contacts) {
        var data = {
            error: "false",
            data: contacts
        };

        res.send(data);
        next();
    });
}

server.get('/hello/:name', respond);