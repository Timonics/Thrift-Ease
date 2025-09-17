import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      "ixeo2z-ip-102-88-105-151.tunnelmole.net",
      ".tunnelmole.net",
    ],
    port: 5173,
    strictPort: true,
  },
});
