var Sequelize = require('sequelize');

var sequelize = new Sequelize('examenes', 'root', '',{
    dialect : 'mysql',
    host : '127.0.0.1',
    port : 3306 
});

var models = require('sequelize-auto-import')(sequelize, '');

module.exports = models;