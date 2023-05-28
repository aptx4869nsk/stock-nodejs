const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const User = require("./user");
const sequelize = db.sequelize;

class User_withdrawal extends Sequelize.Model {}

User_withdrawal.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: User,
        key: "id",
      },
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    withdrawal_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    withdrawal_addr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
      comment: "0=>Pending | 2=>success | 3=>fail",
    },
    apply_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    trans_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    remark: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "User_withdrawal",
    tableName: "user_withdrawal",
  }
);

module.exports = User_withdrawal;
