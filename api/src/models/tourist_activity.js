const { DataTypes: D } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tourist_activity', {
    name: {
      type: D.STRING,
      allowNull: false,
    },
    difficulty: {
      type: D.INTEGER,
    },
    duration: {
      type: D.STRING,
    },
    season: {
      type: D.ENUM('verano','otoño','invierno','primavera','all'),
    }
  },{
    timestamps: false
  });
};
