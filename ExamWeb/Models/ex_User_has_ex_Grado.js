/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_User_has_ex_Grado', {
    ex_User_idUser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_User',
        key: 'idUser'
      }
    },
    ex_Grado_idGrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ex_Grado',
        key: 'idGrado'
      }
    }
  }, {
    tableName: 'ex_User_has_ex_Grado'
  });
};
