const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class StockSubscribe extends Sequelize.Model {}

StockSubscribe.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    stock_type: {
      type: DataTypes.STRING,
    },
    stock_description: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.BIGINT,
    },
    gid: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    qty_issued: {
      type: DataTypes.BIGINT,
    },
    price_earning_ratio: {
      type: DataTypes.DECIMAL,
    },
    is_show: {
      type: DataTypes.SMALLINT,
    },
    is_lock: {
      type: DataTypes.SMALLINT,
    },
    application_date: {
      type: DataTypes.STRING,
    },
    acceptance_date: {
      type: DataTypes.STRING,
    },
    issued_date: {
      type: DataTypes.STRING,
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
    ModelName: "StockSubscribe",
    tableName: "stock_subscribe",
  }
);

module.exports = StockSubscribe;
