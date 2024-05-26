import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  test: {
    coverage: {
      exclude: ["*.config.*", ".eslintrc.js", "coverage", ".next"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    environment: "jsdom",
  },
});
