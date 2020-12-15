const Sequelize = require("sequelize");
const connection = require("../../database/db");
const Case = require("../Cases/Case");

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

// Account.hasMany(Case);
// Case.belongsTo(Account);

Account.sync({ force: false })



module.exports = Account;