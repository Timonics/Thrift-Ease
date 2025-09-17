// middleware/errorHandler.ts
import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

export const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log full error details
  console.error("Error details:", {
    message: err.message,
    name: err.name,
    stack: err.stack,
    url: req.url,
    method: req.method,
  });

  // Authorization / JWT Errors
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
      error: err.message,
    });
    return;
  }

  // Validation Errors
  if (err.name === "ValidationError") {
    res.status(400).json({
      success: false,
      message: "Validation error",
      error: err.message,
    });
    return;
  }

  // Sequelize Database / Validation Errors
  if (
    err.name === "SequelizeDatabaseError" ||
    err.name === "SequelizeValidationError"
  ) {
    res.status(400).json({
      success: false,
      message: "Database error",
      error:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Invalid request",
    });
    return;
  }

  // Default / Unknown Error
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: "Something went wrong",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
};
