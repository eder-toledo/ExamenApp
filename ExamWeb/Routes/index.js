var apiUrl = '/api/v1/';

exec = function (server, db, Sequelize) {
    require('./materiasRoute.js');
    materiasRoute(server, db, Sequelize, apiUrl);
    require('./carrerasRoute.js');
    carrerasRoute(server, db, Sequelize, apiUrl);
    require('./datosAcademicosRoute.js');
    datosAcademicosRoute(server, db, Sequelize, apiUrl);
    require('./examenesRoute.js');
    examenesRoute(server, db, Sequelize, apiUrl);
    require('./preguntasRoute.js');
    preguntasRoute(server, db, Sequelize, apiUrl);
    require('./respuestasRoute.js');
    respuestasRoute(server, db, Sequelize, apiUrl);
    require('./usersRoute.js');
    usersRoute(server, db, Sequelize, apiUrl);
    require('./estadosRoute.js');
    estadosRoute(server, db, Sequelize, apiUrl);
    require('./gradosRoute.js');
    gradosRoute(server, db, Sequelize, apiUrl);
    require('./gradoAcademicoRoute.js');
    gradoAcademicoRoute(server, db, Sequelize, apiUrl);
    require('./nivelesRoute.js');
    nivelesRoute(server, db, Sequelize, apiUrl);
    require('./paisesRoute.js');
    paisesRoute(server, db, Sequelize, apiUrl);
    require('./periodosRoute.js');
    periodosRoute(server, db, Sequelize, apiUrl);
    require('./tipoPreguntasRoute.js');
    tipoPreguntasRoute(server, db, Sequelize, apiUrl);
    require('tipoRespuestasRoute.js');
    tipoRespuestasRoute(server, db, Sequelize, apiUrl);
}

module.exports = exec;