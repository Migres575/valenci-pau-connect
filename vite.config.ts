import { defineConfig } from "vite";
import react from "@vitejs/react-swc";
import path from "path";

export default defineConfig({
  base: "/valenci-pau-connect/", // AQUESTA LÍNIA ÉS LA CLAU
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
