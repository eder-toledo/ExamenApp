/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_Respuesta', {
    idRespuesta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    respuesta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ex_Pregunta_idPregunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_Pregunta',
        key: 'idPregunta'
      }
    },
    ex_TipoRespuesta_idTipoRespuesta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_TipoRespuesta',
        key: 'idTipoRespuesta'
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
    tableName: 'ex_Respuesta'
  });
};
