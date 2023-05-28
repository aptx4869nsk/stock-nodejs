const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class SiteArticle extends Sequelize.Model {}

SiteArticle.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    source_id: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.SMALLINT,
    },
    image_path: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    content: {
      type: DataTypes.TEXT,
    },
    add_time: {
      type: DataTypes.BIGINT,
    },
    views: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.SMALLINT,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "SiteArticle",
    tableName: "site_article",
  }
);

module.exports = SiteArticle;
