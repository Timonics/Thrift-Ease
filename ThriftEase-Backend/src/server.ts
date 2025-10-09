import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";
import shopRoutes from "./routes/shop.routes";
import orderRoutes from "./routes/order.routes";

import { authJwt } from "./authorization/auth";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = express();

// ---------------- Swagger Configuration ----------------
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ThriftEase API Documentation",
      version: "1.0.0",
      description: "API documentation for ThriftEase with JWT authentication",
      contact: {
        name: "API Support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url:
          process.env.BASE_URL ||
          `http://localhost:${process.env.PORT || 5000}`,
        description:
          process.env.NODE_ENV === "production"
            ? "Production Server"
            : "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts", "./src/APIs/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// ---------------- Middleware ----------------
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "https://thrift-ease.vercel.app", // frontend on Vercel
      "http://localhost:5173", // local dev
    ],
    credentials: true,
  })
);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// JWT Middleware
app.use(authJwt());

// ---------------- Routes ----------------
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/shops", shopRoutes);
app.use("/orders", orderRoutes);

// ---------------- Health Check ----------------
app.get("/health", (_, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// ---------------- Error Handler ----------------
app.use(errorHandler);

// ---------------- Server Start ----------------
const PORT = Number(process.env.PORT) || 8080;
const BASE_URL =
  process.env.BASE_URL || `https://thriftease-production.up.railway.app`;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
  console.log(
    `📘 Swagger docs available at ${
      process.env.NODE_ENV === "development"
        ? `http://localhost:${PORT}/api-docs`
        : `${BASE_URL}/api-docs`
    }`
  );
});
