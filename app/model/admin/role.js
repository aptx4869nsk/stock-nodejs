const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class Role extends Sequelize.Model {}

Role.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.STRING,
    },
    role_description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "Role",
    tableName: "role",
  }
);

module.exports = Role;
