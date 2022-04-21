interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_AUTH_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
