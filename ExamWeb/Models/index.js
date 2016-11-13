var Sequelize = require('sequelize');

var sequelize = new Sequelize('examenes', 'root', '',{
    dialect : 'mysql',
    host : '127.0.0.1',
    port : 3306 
});

var models = require('sequelize-auto-import')(sequelize, '');

//Relación materia - grado
models.ex_Materia.belongsTo(models.ex_Grado, {
    foreignKey: 'ex_Grado_idGrado'
});

models.ex_Grado.hasMany(models.ex_Materia, {
    foreignKey: 'ex_Grado_idGrado'
});

//Relacion usuario - estado
models.ex_Usuario.belongsTo(models.ex_Estado, {
    foreignKey: 'idEstado'
});

models.ex_Estado.hasMany(models.ex_Usuario, {
    foreignKey: 'idEstado'
});

module.exports = models;