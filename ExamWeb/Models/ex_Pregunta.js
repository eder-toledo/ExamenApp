/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_pregunta', {
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
        model: 'ex_examen',
        key: 'idExamen'
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Sin descripción'
    },
    ex_TipoPregunta_idTipoPregunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_tipopregunta',
        key: 'idTipoPregunta'
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
    tableName: 'ex_pregunta'
  });
};
