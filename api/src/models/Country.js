const { DataTypes: D } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: D.STRING,
      allowNull: false,
    },
    flag: {
      type: D.STRING,
      allowNull: false
    },
    region: {
      type: D.STRING,
      allowNull: false
    },
    capital: {
      type: D.STRING,
      allowNull: false
    },
    subregion: {
      type: D.STRING,
    },
    area: {
      type: D.FLOAT,
    },
    population: {
      type: D.FLOAT,
    }
  },{
    timestamps: false
  });
};
