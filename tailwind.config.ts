import type { Config } from "tailwindcss";

import { shadcnPlugin } from "./src/lib/shadcn-plugin";

const config = {
  content: ["src/**/*.{ts,tsx}"],
  plugins: [shadcnPlugin],
} satisfies Config;

export default config;
