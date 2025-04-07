import { Sequelize } from "sequelize";
import dbConfig from "./config";

import dotenv from "dotenv";
dotenv.config();

const node_env = process.env.NODE_ENV
if (!node_env) {
  throw new Error("Environment not specified")
}

const env = (node_env) as keyof typeof dbConfig;
const { username, password, database, host, port, dialect } = dbConfig[env];

const dbConnect = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
});

const init = async () => {
  try {
    await dbConnect.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

init();

export default dbConnect;
