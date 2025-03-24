/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

// Ensure the plugins key is exported directly
export const plugins = config.plugins;
