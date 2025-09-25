
import { expressjwt as jwt } from "express-jwt";
import { CustomJWTPayload } from "../interfaces/user.interface";
import { Request } from "express";
import { Jwt } from "jsonwebtoken";
import { match } from "path-to-regexp";

export const authJwt = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required");
  }

  const USER_ALLOWED_ROUTES = [
    { method: "GET", route: "/users/my-profile" },
    { method: "POST", route: "/products/new-product" },
    { method: "PUT", route: "/products/:productID" },
    { method: "DELETE", route: "/products/:productID" },
    { method: "POST", route: "/shops/new-shop" },
    { method: "PUT", route: "/shops/update-shop/:shopID" },
  ];

  const PUBLIC_ROUTES = [
    { method: "GET", route: "/categories" },
    { method: "GET", route: "/categories/:categoryID/sub-categories" },
    { method: "GET", route: "/products" },
    { method: "GET", route: "/products/category/:categoryID" },
    { method: "GET", route: "/products/:productID" },
    { method: "GET", route: "/shops" },
    { method: "GET", route: "/users/:userID" },
    { method: "POST", route: "/users/login" },
    { method: "POST", route: "/users/register" },
    { method: "POST", route: "/users/logout" },
  ];

  const matchRoute = (routePattern: string, actualPath: string) => {
    try {
      const matcher = match(routePattern, { decode: decodeURIComponent });
      const result = matcher(actualPath);
      return result !== false;
    } catch (error) {
      console.error("Route matching error:", error);
      return false;
    }
  };

  return jwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: async (req: Request, token: Jwt | undefined) => {
      const method = req.method;
      const path = req.path;

      if (!token || !token.payload) {
        return true;
      }

      const payload = token.payload as CustomJWTPayload;
      const userRole = payload.role;

      console.log(`[JWT] Checking access for ${method} ${path}, role: ${userRole}`);

      //skips auth checks for admin
      if (userRole === "admin") return false;

      if (userRole === "user") {
        const isAllowed = USER_ALLOWED_ROUTES.some(
          (route) => route.method === method && matchRoute(route.route, path)
        );
        console.log(`[JWT] User route access ${isAllowed ? "granted" : "denied"}`);
        return !isAllowed
      }

  
      return true;
    },
  }).unless({
    custom: (req: Request) => {
      const method = req.method;
      const path = req.path;

      const isPublic = PUBLIC_ROUTES.some(
        (route) => route.method === method && matchRoute(route.route, path)
      );
      if (isPublic) {
        console.log(`[JWT] Public route: ${method} ${path} - skipping JWT check`);
      }

      return isPublic;
    },
  });
};
