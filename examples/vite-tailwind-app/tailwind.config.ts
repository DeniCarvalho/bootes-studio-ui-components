import type { Config } from "tailwindcss";

import { tailwindPlugin } from "../../.";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tailwindPlugin],
} satisfies Config;

export default config;
