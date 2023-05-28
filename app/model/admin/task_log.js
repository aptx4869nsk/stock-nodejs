const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class TaskLog extends Sequelize.Model {}

TaskLog.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    target: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.SMALLINT,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW.toString,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "TaskLog",
    tableName: "task_log",
  }
);

module.exports = TaskLog;
