// The reference to 'vite/client' was removed to fix a type resolution error.
// The interfaces below provide type definitions for Vite's import.meta.env for any other potential usage.
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// FIX: Add type definition for process.env.API_KEY to align with guidelines,
// assuming it's made available in the execution environment.
declare var process: {
  env: {
    API_KEY: string;
  }
};
