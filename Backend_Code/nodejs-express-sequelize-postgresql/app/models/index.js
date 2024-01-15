const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("../models/customer.model.js")(sequelize, Sequelize); 
db.sellers = require("../models/seller.model.js")(sequelize, Sequelize); 
db.buyers = require("../models/buyer.model.js")(sequelize, Sequelize);
db.dealsCompleted = require("../models/dealscompleted.model.js")(sequelize, Sequelize);


module.exports = db;
