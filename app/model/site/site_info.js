const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class SiteInfo extends Sequelize.Model {}

SiteInfo.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    site_name: {
      type: DataTypes.STRING,
    },
    site_logo: {
      type: DataTypes.STRING,
    },
    site_host: {
      type: DataTypes.STRING,
    },
    site_keywords: {
      type: DataTypes.STRING,
    },
    site_description: {
      type: DataTypes.TEXT,
    },
    telegram: {
      type: DataTypes.STRING,
    },
    whatsapp: {
      type: DataTypes.STRING,
    },
    online_service: {
      type: DataTypes.STRING,
    },
    service_mail: {
      type: DataTypes.STRING,
    },
    official_mail: {
      type: DataTypes.STRING,
    },
    system_maintenance: {
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
    ModelName: "SiteInfo",
    tableName: "site_info",
  }
);

module.exports = SiteInfo;
