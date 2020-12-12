const Sequelize = require("sequelize");
const connection = require("../../database/db");

const Account = connection.define('accounts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Account.sync({ force: false })

module.exports = Account;