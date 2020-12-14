const Sequelize = require("sequelize");
const connection = require("../../database/db");

const Case = connection.define("cases", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT
  }
});

Case.sync({ force: false });

module.exports = Case;