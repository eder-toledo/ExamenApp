/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Grado', {
    idGrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ex_Nivel_idNivel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Nivel',
        key: 'idNivel'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'ex_Grado'
  });
};
