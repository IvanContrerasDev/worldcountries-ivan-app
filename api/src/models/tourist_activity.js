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
      type: D.INTEGER,
    },
    season: {
      type: D.ENUM('verano','otoño','invierno','primavera'),
    }
  },{
    timestamps: false
  });
};
