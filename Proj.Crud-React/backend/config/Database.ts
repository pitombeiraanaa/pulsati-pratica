// const Sequelize = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "oracle",
//   database: "xe",
//   username: "system",
//   password: "pulsati2023",
//   host: "192.168.0.50",
//   port: 1521,
//   // porta padrao do oracle
//   dialectOptions: { connectTimeout: 30000 },
// });
// sequelize.sync();
// exports.getDbConfig = () => sequelize;


import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import { Aeroporto } from "../model/aeroporto";

const AppDataSource = new DataSource({
  type: "oracle",
  host: "192.168.0.50",
  port: 1521,
  username: "system",
  password: "pulsati2023",
  database: "xe",
  entities: [Aeroporto],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export default AppDataSource;
