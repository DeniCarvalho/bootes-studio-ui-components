import type { Config } from "tailwindcss";

import { shadcnPlugin } from "../../src/lib/shadcn-plugin";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [shadcnPlugin],
} satisfies Config;

export default config;
