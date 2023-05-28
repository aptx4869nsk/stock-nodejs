const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const User = require("./user");
const sequelize = db.sequelize;

class User_deposit extends Sequelize.Model {}

User_deposit.init(
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
    from_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    trans_nbr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid_screenshot: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
      comment: "0=>Pending | 2=>success | 3=>fail",
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "User_deposit",
    tableName: "user_deposit",
  }
);

module.exports = User_deposit;
