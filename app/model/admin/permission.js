const db = require("../../helpers/mysqlHelper");
const Role = require("./role");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class Permission extends Sequelize.Model {}

Permission.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    permission_type: {
      type: DataTypes.SMALLINT,
    },
    permission_description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "Permission",
    tableName: "permission",
  }
);

module.exports = Permission;
