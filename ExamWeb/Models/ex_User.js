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
    estatus: {
      type: DataTypes.INTEGER(1),
      allowNull: true
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
    tableName: 'ex_User'
  });
};
