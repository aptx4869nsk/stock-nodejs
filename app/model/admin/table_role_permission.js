const db = require("../../helpers/mysqlHelper");
const Role = require("./role");
const Permission = require("./permission");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class TableRolePermission extends Sequelize.Model {}

TableRolePermission.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Role,
        key: "id",
      },
    },
    permission_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Permission,
        key: "id",
      },
    },
    table_name: {
      type: DataTypes.STRING,
    },
    except_fields: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "TableRolePermission",
    tableName: "table_role_permission",
  }
);

module.exports = TableRolePermission;
