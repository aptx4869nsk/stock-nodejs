const db = require("../helpers/mysqlHelper");
db.connect();

const DataInitialize = require("./data-seeder");

const seeder = async () => {
  await DataInitialize.seedAdmin();
  await DataInitialize.seedUser();
  await DataInitialize.seedRole();
  await DataInitialize.seedPermission();
  await DataInitialize.seedTableRolePermission();
};

seeder()
  .then(() => {
    console.log("[DB] Seed completed! 👌");
    process.exit(0); // 退出程序
  })
  .catch((error) => {
    console.error("[DB] Error seeding database:", error);
    process.exit(1); // 退出程序并指示错误
  });
