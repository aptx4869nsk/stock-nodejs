const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class Currency extends Sequelize.Model {}

Currency.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    coin: {
      type: DataTypes.STRING,
    },
    dynamic_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
      comment: "USDT base",
    },
    default_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
      comment: "USDT base",
    },
    status: {
      type: DataTypes.SMALLINT,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "Currency",
    tableName: "currency",
  }
);

module.exports = Currency;
