import { Sequelize } from "sequelize";
import { config as dotenvConfig } from "dotenv";
import dbConfig from "./config";

dotenvConfig();

const node_env = process.env.NODE_ENV || "development";

let sequelize: Sequelize;

if (node_env === "production") {
  // ✅ Production: Use Supabase connection string
  const connectionUri = process.env.SUPABASE_DB_URL;
  if (!connectionUri) {
    throw new Error("Missing SUPABASE_DB_URL in environment variables");
  }

  sequelize = new Sequelize(connectionUri, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} else {
  // ✅ Development: Use local configuration
  const { username, password, database, host, port, dialect } =
    dbConfig.development;

  sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
  });
}

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Database connected successfully [${node_env}]`);
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();

export default sequelize;
