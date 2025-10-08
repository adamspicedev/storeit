import path from "path";

const buildEslintCommand = (filenames) => {
  return `eslint --fix ${filenames
    .filter((f) => f.includes("/src/") && !f.includes("/src/components/ui/"))
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;
};

const config = {
  "*.{ts,tsx}": [buildEslintCommand],
};

export default config;
