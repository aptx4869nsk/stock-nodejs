const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class MailLog extends Sequelize.Model {}

MailLog.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    from: {
      type: DataTypes.STRING,
    },
    to: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    template: {
      type: DataTypes.TEXT,
    },
    send_time: {
      type: DataTypes.BIGINT,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "MailLog",
    tableName: "mail_log",
  }
);

module.exports = MailLog;
