/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: string
  readonly API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}