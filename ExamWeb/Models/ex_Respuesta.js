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
      allowNull: false
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
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ex_Respuesta'
  });
};
