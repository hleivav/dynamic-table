import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Lägg till denna rad!
  plugins: [react()],
});
