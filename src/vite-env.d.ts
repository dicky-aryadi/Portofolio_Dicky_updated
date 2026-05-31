declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  // tambahkan variable lain di sini
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}