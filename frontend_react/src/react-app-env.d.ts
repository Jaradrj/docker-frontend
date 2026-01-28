/// <reference types="react-scripts" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
  MODE?: string;
  VITE_BASEURL?: string;
  [key: string]: any;
}

interface ImportMeta {
  env: ImportMetaEnv;
}