/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_datosacademicos', {
    idDatosAcademicos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ex_Grado_idGrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_gradoacademico',
        key: 'idGrado'
      }
    },
    ex_Carrera_idCarrera: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_carrera',
        key: 'idCarrera'
      }
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Sin especialidad'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ex_user_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_user',
        key: 'idUser'
      }
    }
  }, {
    tableName: 'ex_datosacademicos'
  });
};
