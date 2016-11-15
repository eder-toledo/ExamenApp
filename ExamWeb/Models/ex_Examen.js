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
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_User',
        key: 'idUser'
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
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estatus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'ex_Examen'
  });
};
