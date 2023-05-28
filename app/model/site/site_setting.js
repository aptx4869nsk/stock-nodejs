const db = require("../../helpers/mysqlHelper");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = db.sequelize;

class SiteSetting extends Sequelize.Model {}

SiteSetting.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    buy_fee: {
      type: DataTypes.DECIMAL,
    },
    buy_min_amount: {
      type: DataTypes.DECIMAL,
    },
    buy_min_nbr: {
      type: DataTypes.DECIMAL,
    },
    buy_max_nbr: {
      type: DataTypes.DECIMAL,
    },
    buy_max_amt_percent: {
      type: DataTypes.DECIMAL,
    },
    buy_same_times: {
      type: DataTypes.SMALLINT,
    },
    buy_same_nbr: {
      type: DataTypes.SMALLINT,
    },
    buy_nbr_times: {
      type: DataTypes.SMALLINT,
    },
    buy_nbr_lots: {
      type: DataTypes.SMALLINT,
    },
    sell_fee: {
      type: DataTypes.DECIMAL,
    },
    stay_fee: {
      type: DataTypes.DECIMAL,
    },
    duty_fee: {
      type: DataTypes.DECIMAL,
    },
    stay_max_days: {
      type: DataTypes.SMALLINT,
    },
    charge_min_amt: {
      type: DataTypes.DECIMAL,
    },
    force_stop_fee: {
      type: DataTypes.DECIMAL,
    },
    force_stop_percent: {
      type: DataTypes.DECIMAL,
    },
    hight_and_low: {
      type: DataTypes.SMALLINT,
    },
    with_min_amt: {
      type: DataTypes.DECIMAL,
    },
    crease_max_percent: {
      type: DataTypes.DECIMAL,
    },
    with_time_begin: {
      type: DataTypes.BIGINT,
    },
    with_time_end: {
      type: DataTypes.BIGINT,
    },
    trans_am_begin: {
      type: DataTypes.BIGINT,
    },
    trans_am_end: {
      type: DataTypes.BIGINT,
    },
    trans_pm_begin: {
      type: DataTypes.BIGINT,
    },
    trans_pm_end: {
      type: DataTypes.BIGINT,
    },
    trans_am_begin_us: {
      type: DataTypes.BIGINT,
    },
    trans_am_end_us: {
      type: DataTypes.BIGINT,
    },
    trans_pm_begin_us: {
      type: DataTypes.BIGINT,
    },
    trans_pm_end_us: {
      type: DataTypes.BIGINT,
    },
    with_fee_sigle: {
      type: DataTypes.SMALLINT,
    },
    with_fee_percent: {
      type: DataTypes.DECIMAL,
    },
    site_lever: {
      type: DataTypes.STRING,
    },
    cant_sell_time: {
      type: DataTypes.BIGINT,
    },
    kc_crease_max_percent: {
      type: DataTypes.DECIMAL,
    },
    stock_days: {
      type: DataTypes.SMALLINT,
    },
    stock_rate: {
      type: DataTypes.DECIMAL,
    },
    stock_chaa: {
      type: DataTypes.DECIMAL,
    },
    stock_chab: {
      type: DataTypes.DECIMAL,
    },
    stock_chac: {
      type: DataTypes.DECIMAL,
    },
    force_stop_remind_ration: {
      type: DataTypes.DECIMAL,
    },
    cy_crease_max_percent: {
      type: DataTypes.DECIMAL,
    },
    fall_buy_display: {
      type: DataTypes.SMALLINT,
    },
    trans_am_begin_hk: {
      type: DataTypes.BIGINT,
    },
    trans_am_end_hk: {
      type: DataTypes.BIGINT,
    },
    trans_pm_begin_hk: {
      type: DataTypes.BIGINT,
    },
    trans_pm_end_hk: {
      type: DataTypes.BIGINT,
    },
    vip_qc_max_amt: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    timestamps: false,
    ModelName: "SiteSetting",
    tableName: "site_setting",
  }
);

module.exports = SiteSetting;
