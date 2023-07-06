/// <reference types="vite/client" />

type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

type Envs = RemoveIndex<ImportMetaEnv>;

type EnvKeys = keyof Envs;

type CustomEnvKeys = keyof Omit<
  Envs,
  "BASE_URL" | "DEV" | "PROD" | "MODE" | "SSR"
>;

declare interface ImportMetaEnv {
  VITE_API_URL?: string;
  VITE_IS_HASH?: string;
}
