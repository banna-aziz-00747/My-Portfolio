import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Base is set to the repo name for GitHub Pages project sites (username.github.io/portfolio).
// If deploying to a "<username>.github.io" root repo instead, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
