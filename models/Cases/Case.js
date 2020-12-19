const Sequelize = require("sequelize");
const connection = require("../../database/db");

const Account = require("../Account/Account");

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
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

// Case.sync({ force: false });

// Account.hasMany(Case);
// Case.belongsTo(Account);

module.exports = Case;