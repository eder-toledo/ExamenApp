/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_User_has_ex_Materia', {
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_User',
        key: 'idUser'
      }
    },
    ex_Materia_idMateria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_Materia',
        key: 'idMateria'
      }
    }
  }, {
    tableName: 'ex_User_has_ex_Materia'
  });
};
