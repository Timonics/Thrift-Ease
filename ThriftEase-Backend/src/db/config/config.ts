import { Dialect } from "sequelize";
import { config } from "dotenv";

config();

interface DbConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
}

interface Config {
  development: DbConfig;
  test: DbConfig;
  production: DbConfig;
}

const dbConfig: Config = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "Oladotun1",
    database: process.env.DB_NAME || "thriftease",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: "",
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "",
    database: "database_prod",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
};

// Export for TypeScript modules...
export default dbConfig;

// Also export as CommonJS for Sequelize CLI
module.exports = dbConfig;
