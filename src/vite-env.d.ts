/// <reference types="vite/client" />

// content/*.yml, validated and converted to JSON by the plugin in vite.config.ts
declare module "*.yml" {
  const data: unknown;
  export default data;
}
