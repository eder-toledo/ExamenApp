exec = function (server, db, Sequelize) {
    require('./materiasRoute.js');
    materiasRoute(server, db, Sequelize);
}

module.exports = exec;