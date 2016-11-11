/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_TipoPregunta', {
    idTipoPregunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
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
    tableName: 'ex_TipoPregunta'
  });
};
