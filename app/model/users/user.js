const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nick_name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usdt_trc_addr: {
      type: DataTypes.STRING,
    },
    usdt_erc_addr: {
      type: DataTypes.STRING,
    },
    btc_erc_addr: {
      type: DataTypes.STRING,
    },
    eth_erc_addr: {
      type: DataTypes.STRING,
    },
    nrc_nbr: {
      type: DataTypes.STRING,
    },
    nrc_name: {
      type: DataTypes.STRING,
    },
    nrc_front: {
      type: DataTypes.STRING,
    },
    nrc_back: {
      type: DataTypes.STRING,
    },
    nrc_holding: {
      type: DataTypes.STRING,
    },
    is_verified: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>unverified | 1=>verified",
    },
    account_type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>real account | 1=>simulation account",
    },
    usdt_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    enable_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    withdrawal_pass: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0=>disable | 1=>active",
    },
    is_locked: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>normal | 1=>Locked",
    },
    registered_ip: {
      type: DataTypes.STRING,
    },
    registered_addr: {
      type: DataTypes.STRING,
    },
    registered_time: {
      type: DataTypes.BIGINT,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "User",
    tableName: "user",
  }
);

module.exports = User;
