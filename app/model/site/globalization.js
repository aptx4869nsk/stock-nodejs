const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class Globalization extends Sequelize.Model {}

Globalization.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_agreement: {
      type: DataTypes.TEXT,
    },
    privacy_agreement: {
      type: DataTypes.TEXT,
    },
    trade: {
      type: DataTypes.TEXT,
    },
    about_us: {
      type: DataTypes.TEXT,
    },
    trading_rules: {
      type: DataTypes.TEXT,
    },
    locale: {
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
    ModelName: "Globalization",
    tableName: "globalization",
  }
);

module.exports = Globalization;
