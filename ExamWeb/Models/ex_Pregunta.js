/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Pregunta', {
    idPregunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pregunta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ex_Examen_idExamen: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Examen',
        key: 'idExamen'
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_TipoPregunta_idTipoPregunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_TipoPregunta',
        key: 'idTipoPregunta'
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
    tableName: 'ex_Pregunta'
  });
};
