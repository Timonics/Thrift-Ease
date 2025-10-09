"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var dbConfig = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "Oladotun1",
    database: process.env.DB_NAME || "thriftease",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres", // Explicitly set the dialect
  },
  production: {
    use_env_variable: "SUPABASE_DB_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
// Export for TypeScript modules...
exports.default = dbConfig;
// Also export as CommonJS for Sequelize CLI
module.exports = dbConfig;
