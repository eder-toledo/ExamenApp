/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_user_has_ex_materia', {
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_user',
        key: 'idUser'
      }
    },
    ex_Materia_idMateria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_materia',
        key: 'idMateria'
      }
    }
  }, {
    tableName: 'ex_user_has_ex_materia'
  });
};
