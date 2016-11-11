/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Periodo', {
    idPeriodo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ex_Grado_idGrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Grado',
        key: 'idGrado'
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
    tableName: 'ex_Periodo'
  });
};
