var Sequelize = require('sequelize');

var sequelize = new Sequelize('examenes', 'root', '',{
    dialect : 'mysql',
    host : '127.0.0.1',
    port : 3306 
});

var models = require('sequelize-auto-import')(sequelize, '');

//Relación materias - grado
models.ex_Materia.belongsTo(models.ex_Grado, {
    foreignKey: 'ex_Grado_idGrado'
});

models.ex_Grado.hasMany(models.ex_Materia, {
    foreignKey: 'ex_Grado_idGrado'
});

//Relacion usuarios - estado
models.ex_User.belongsTo(models.ex_Estado, {
    foreignKey: 'ex_Estado_idEstado'
});

models.ex_Estado.hasMany(models.ex_User, {
    foreignKey: 'ex_Estado_idEstado'
});

//Relacion datosAcademicos - usuario
models.ex_DatosAcademicos.belongsTo(models.ex_User, {
    foreignKey: 'ex_user_idUser'
});

models.ex_User.hasOne(models.ex_DatosAcademicos, {
    foreignKey: 'ex_user_idUser'
});

//Relacion datosAcademicos - carrera
models.ex_DatosAcademicos.belongsTo(models.ex_Carrera, {
    foreignKey: 'ex_Carrera_idCarrera'
});

models.ex_Carrera.hasMany(models.ex_DatosAcademicos, {
    foreignKey: 'ex_Carrera_idCarrera'
});

//Relacion datosAcademicos - gradoAcademico
models.ex_DatosAcademicos.belongsTo(models.ex_GradoAcademico, {
    foreignKey: 'ex_Grado_idGrado'
});

models.ex_GradoAcademico.hasMany(models.ex_DatosAcademicos, {
    foreignKey: 'ex_Grado_idGrado'
});

//Relacion estados - pais
models.ex_Estado.belongsTo(models.ex_Pais, {
    foreignKey: 'ex_Pais_idpais'
});

models.ex_Pais.hasMany(models.ex_Estado, {
    foreignKey: 'ex_Pais_idpais'
});

//Relacion examenes - usuario
models.ex_Examen.belongsTo(models.ex_User, {
    foreignKey: 'ex_User_idUser'
});

models.ex_User.hasMany(models.ex_Examen, {
    foreignKey: 'ex_User_idUser';
});

//Relacion examenes - periodo
models.ex_Examen.belongsTo(models.ex_Periodo, {
    foreignKey: 'ex_Periodo_idPeriodo'
});

models.ex_Periodo.hasMany(models.ex_Examen, {
    foreignKey: 'ex_Periodo_idPeriodo'
});

//Relacion examenes - materia
models.ex_Examen.belongsTo(models.ex_Materia, {
    foreignKey: ex_Materia_idMateria
});

models.ex_Materia.hasMany(models.ex_Examen, {
    foreignKey: 'ex_Materia_idMateria'
});

module.exports = models;