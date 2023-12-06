interface ImportMetaEnv {
  VITE_CLIENT_ID: string
  VITE_CLIENT_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
