require("dotenv").config({ path: "../../config.env" });
const env = process.env;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 6000, // 6s
  },
  pool: {
    max: 20,
    min: 3,
    acquire: 120000,
    idle: 120000,
    evict: 120000,
  },
  retry: {
    max: 3,
    match: [
      /Deadlock/i,
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
    ],
  },
});

module.exports = {
  sequelize: sequelize,
  connect: async () => {
    try {
      console.log("[DB] Connecting...");
      await sequelize.authenticate();
      console.log("[DB] Connection has been established successfully! 👌");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  },
};
