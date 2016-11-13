/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_user_has_ex_grado', {
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_user',
        key: 'idUser'
      }
    },
    ex_Grado_idGrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_grado',
        key: 'idGrado'
      }
    }
  }, {
    tableName: 'ex_user_has_ex_grado'
  });
};
