module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "sky@123",
    DB: "Real_estate",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };