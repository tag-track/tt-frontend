

// app/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_BACKEND: string;
    }
  }
}

export {};