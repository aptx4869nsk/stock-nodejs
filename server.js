const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// DB Connection
const DB = require("./app/helpers/mysqlHelper");
DB.connect();
app.set("sequelize", DB.sequelize);

// const port = process.env.SERVER_PORT || 8000;
// const host = process.env.SERVER_HOST || "localhost";
// const server = app.listen(port, host, () => {
//   console.log(`App listening on ${host}:${port} ....`);
// });

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
