var Sequelize = require('sequelize');

var sequelize = new Sequelize('examenes', 'root', '',{
    dialect : 'mysql',
    host : '127.0.0.1',
    port : 3306 
});

var models = require('sequelize-auto-import')(sequelize, '');

//Relación materias - grado
models.ex_Materia.belongsTo(models.ex_Grado, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'grado'
});

models.ex_Grado.hasMany(models.ex_Materia, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'materia'
});

//Relacion usuarios - estado
models.ex_User.belongsTo(models.ex_Estado, {
    foreignKey: 'ex_Estado_idEstado',
    as: 'estado'
});

models.ex_Estado.hasMany(models.ex_User, {
    foreignKey: 'ex_Estado_idEstado',
    as: 'user'
});

//Relacion datosAcademicos - usuario
models.ex_DatosAcademicos.belongsTo(models.ex_User, {
    foreignKey: 'ex_user_idUser',
    as: 'user'
});

models.ex_User.hasOne(models.ex_DatosAcademicos, {
    foreignKey: 'ex_user_idUser',
    as: 'datosAcademicos'
});

//Relacion datosAcademicos - carrera
models.ex_DatosAcademicos.belongsTo(models.ex_Carrera, {
    foreignKey: 'ex_Carrera_idCarrera',
    as: 'carrera'
});

models.ex_Carrera.hasMany(models.ex_DatosAcademicos, {
    foreignKey: 'ex_Carrera_idCarrera',
    as: 'datosAcademicos'
});

//Relacion datosAcademicos - gradoAcademico
models.ex_DatosAcademicos.belongsTo(models.ex_GradoAcademico, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'gradoAcademico'
});

models.ex_GradoAcademico.hasMany(models.ex_DatosAcademicos, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'datosAcademicos'
});

//Relacion estados - pais
models.ex_Estado.belongsTo(models.ex_Pais, {
    foreignKey: 'ex_Pais_idpais',
    as: 'pais'
});

models.ex_Pais.hasMany(models.ex_Estado, {
    foreignKey: 'ex_Pais_idpais',
    as: 'estado'
});

//Relacion examenes - usuario
models.ex_Examen.belongsTo(models.ex_User, {
    foreignKey: 'ex_User_idUser',
    as: 'user'
});

models.ex_User.hasMany(models.ex_Examen, {
    foreignKey: 'ex_User_idUser',
    as : 'examen'
});

//Relacion examenes - materia
models.ex_Examen.belongsTo(models.ex_Materia, {
    foreignKey: 'ex_Materia_idMateria',
    as: 'materia'
});

models.ex_Materia.hasMany(models.ex_Examen, {
    foreignKey: 'ex_Materia_idMateria',
    as: 'examen'
});

//Relacion grados - nivel
models.ex_Grado.belongsTo(models.ex_Nivel, {
    foreignKey: 'ex_Nivel_idNivel',
    as: 'nivel'
});

models.ex_Nivel.hasMany(models.ex_Grado, {
    foreignKey: 'ex_Nivel_idNivel',
    as: 'grado'
});

//Relacion periodos - grado
models.ex_Periodo.belongsTo(models.ex_Grado, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'grado'
});

models.ex_Grado.hasMany(models.ex_Periodo, {
    foreignKey: 'ex_Grado_idGrado',
    as: 'periodo'
});



module.exports = models;