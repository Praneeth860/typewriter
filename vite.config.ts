import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    checker({ typescript: true }), // Correct syntax for including the plugin
  ],
  base: "/typewriter",
});
