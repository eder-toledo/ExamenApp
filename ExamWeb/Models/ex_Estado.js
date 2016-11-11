/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Estado', {
    idEstado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitud: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitud: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_Pais_idpais: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Pais',
        key: 'idpais'
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
    tableName: 'ex_Estado'
  });
};
