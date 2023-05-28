const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const db = require("../helpers/mysqlHelper");
db.connect();

//user
require("../model/users/user");
require("../model/users/user_deposit");
require("../model/users/user_withdrawal");

//admin
require("../model/admin/admin");
require("../model/admin/mail_log");
require("../model/admin/permission");
require("../model/admin/role");
require("../model/admin/table_role_permission");
require("../model/admin/system_message");
require("../model/admin/task_log");

//site
require("../model/site/currency");
require("../model/site/globalization");
require("../model/site/site_article");
require("../model/site/site_info");
require("../model/site/site_notice");
require("../model/site/site_setting");
require("../model/site/site_wallet");
require("../model/site/stock_subscribe");

// 同步数据库
// 使用 force: true 可以强制删除并重新创建表，慎用
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("[DB] Database synced 👌");
    process.exit(0); // 退出程序
  })
  .catch((error) => {
    console.error("[DB]Error syncing database:", error);
    process.exit(1); // 退出程序并指示错误
  });
