interface ImportMetaEnv {
  VITE_CLIENT_ID: string
  VITE_CLIENT_SECRET: string
  VITE_AUTH_BASE_URL: string
  VITE_PRODUCT_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
