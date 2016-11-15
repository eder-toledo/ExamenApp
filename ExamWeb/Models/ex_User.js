/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_User', {
    idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_Estado_idEstado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Estado',
        key: 'idEstado'
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
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Activo'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ex_User'
  });
};
