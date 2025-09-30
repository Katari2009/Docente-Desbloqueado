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
// FIX: Use namespace augmentation to extend NodeJS.ProcessEnv instead of redeclaring `process`.
// This resolves `Cannot redeclare block-scoped variable 'process'` errors by merging
// with existing global types instead of creating a conflicting declaration.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}
