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
models.ex_User.belongsTo(models.ex_Estado, {
    foreignKey: 'ex_Estado_idEstado'
});

models.ex_Estado.hasMany(models.ex_User, {
    foreignKey: 'ex_Estado_idEstado'
});

//Relacion datos academicos - usuario
models.ex_DatosAcademicos.belongsTo(models.ex_User, {
    foreignKey: 'ex_user_idUser'
});

models.ex_User.hasOne(models.ex_DatosAcademicos, {
    foreignKey: 'ex_user_idUser'
});

module.exports = models;