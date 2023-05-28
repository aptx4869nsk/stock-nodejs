const bcrypt = require("bcrypt");
const tables = require("./table_struct");
const Admin = require("../model/admin/admin");
const User = require("../model/users/user");
const Role = require("../model/admin/role");
const Permission = require("../model/admin/permission");
const TableRolePermission = require("../model/admin/table_role_permission");

module.exports.seedAdmin = async () => {
  const currentDate = new Date(Date.now());
  const utcTimestamp = currentDate.getTime();
  // 设置默认密码
  const plainPassword = "123456";
  const saltRounds = 12; // 盐值的轮数，也可以理解为计算成本
  const password = await bcrypt.hash(plainPassword, saltRounds); // 生成哈希密码
  const admins = [
    {
      name: "super_admin",
      nick_name: "super_admin",
      status: "1",
      password: password,
      remarks: "This is super_admin_account",
      created_on: utcTimestamp,
      updated_at: utcTimestamp,
    },
    {
      name: "admin",
      nick_name: "admin",
      status: "1",
      password: password,
      remarks: "This is normal_admin_account",
      created_on: utcTimestamp,
      updated_at: utcTimestamp,
    },
    {
      name: "customer_service",
      nick_name: "service_man",
      status: "1",
      password: password,
      remarks: "This is customer_service_account",
      created_on: utcTimestamp,
      updated_at: utcTimestamp,
    },
  ];

  const count = await Admin.count();
  if (count == 0) {
    for (let index = 0; index < admins.length; index++) {
      const admin = admins[index];
      await Admin.create(admin);
    }
    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] AdminSeeder seeded successfully."
    );
  } else {
    console.log("\x1b[32m%s\x1b[0m", "[seeder] Admin Data Exists.");
  }
};

module.exports.seedUser = async () => {
  // 设置默认密码
  const plainPassword = "123456";
  const saltRounds = 12; // 盐值的轮数，也可以理解为计算成本
  const password = await bcrypt.hash(plainPassword, saltRounds); // 生成哈希密码
  const users = [
    {
      name: "user",
      nick_name: "user1",
      phone: "123456789",
      mail: "abcdef@abc.com",
      password: password,
      usdt_trc_addr: "Tsfw2sdfwfjwefewfewf",
      nrc_nbr: "123456789",
      nrc_name: "user",
      is_verified: "1",
      account_type: "1",
      usdt_amount: "99999999",
      enable_amount: "999999999",
      withdrawal_pass: "Test1234",
    },
  ];

  const count = await User.count();
  if (count == 0) {
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      await User.create(user);
    }
    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] UserSeeder seeded successfully."
    );
  } else {
    console.log("\x1b[32m%s\x1b[0m", "[seeder] User Data Exists.");
  }
};

module.exports.seedRole = async () => {
  const roles = [
    {
      role_name: "super_admin",
      role_description: "超级管理员",
    },
    {
      role_name: "admin",
      role_description: "管理员",
    },
    {
      role_name: "customer_service",
      role_description: "营销员",
    },
  ];

  const count = await Role.count();
  if (count == 0) {
    for (let index = 0; index < roles.length; index++) {
      const role = roles[index];
      await Role.create(role);
    }
    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] RoleSeeder seeded successfully."
    );
  } else {
    console.log("\x1b[32m%s\x1b[0m", "[seeder] Role Data Exists.");
  }
};

module.exports.seedPermission = async () => {
  const permissions = [
    {
      permission_type: 2,
      permission_description: "修改",
    },
    {
      permission_type: 6,
      permission_description: "添加,修改",
    },
    {
      permission_type: 7,
      permission_description: "添加,修改,删除",
    },
  ];

  const count = await Permission.count();
  if (count == 0) {
    for (let index = 0; index < permissions.length; index++) {
      const permission = permissions[index];
      await Permission.create(permission);
    }
    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] PermissionSeeder seeded successfully."
    );
  } else {
    console.log("\x1b[32m%s\x1b[0m", "[seeder] Permission Data Exists.");
  }
};

module.exports.seedTableRolePermission = async () => {
  const count = await TableRolePermission.count();

  if (count == 0) {
    const roles_ids = [2, 3];
    const permission_ids = [2, 3];
    for (let index = 0; index < 2; index++) {
      for (table in tables) {
        const role_id = roles_ids[index];
        const permission_id = permission_ids[index];
        const table_name = tables[table].name;
        const except_fields = tables[table].fields.toString();
        const temp = {
          role_id,
          permission_id,
          table_name,
          except_fields,
        };
        await TableRolePermission.create(temp);
      }
    }

    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] TableRolePermissionSeeder seeded successfully."
    );
  } else {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "[seeder] TableRolePermission Data Exists."
    );
  }
};
