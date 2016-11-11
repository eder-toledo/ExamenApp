/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Examen', {
    idExamen: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_User',
        key: 'idUser'
      }
    },
    ex_Periodo_idPeriodo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Periodo',
        key: 'idPeriodo'
      }
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    indicaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_Materia_idMateria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Materia',
        key: 'idMateria'
      }
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
  }, {
    tableName: 'ex_Examen'
  });
};
