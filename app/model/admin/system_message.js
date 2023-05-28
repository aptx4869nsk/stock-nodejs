const db = require("../../helpers/mysqlHelper");
const User = require("./../users/user");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class SysMessage extends Sequelize.Model {}

SysMessage.init(
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
    type: {
      type: DataTypes.SMALLINT,
    },
    content: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.SMALLINT,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "SysMessage",
    tableName: "system_message",
  }
);

module.exports = SysMessage;
