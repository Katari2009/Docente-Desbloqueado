/// <reference types="vite/client" />

// Fix: Add definitions for import.meta.env to make Vite environment variables type-safe
// and resolve errors in files that use them, such as geminiService.ts.
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
