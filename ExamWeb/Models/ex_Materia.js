/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Materia', {
    idMateria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombreMateria: {
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: 'ex_Materia'
  });
};
