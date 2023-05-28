const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class SiteWallet extends Sequelize.Model {}

SiteWallet.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
      defalutValues: "TRC20",
      comment: "TRC20 | ETC20",
    },
    address: {
      type: DataTypes.STRING,
    },
    qr_code: {
      type: DataTypes.STRING,
    },
    minimum: {
      type: DataTypes.SMALLINT,
    },
    remarks: {
      type: DataTypes.STRING,
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
    ModelName: "SiteWallet",
    tableName: "site_wallet",
  }
);

module.exports = SiteWallet;
