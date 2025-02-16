/// <reference types="astro/client" />

declare module 'jsonwebtoken';

interface ImportMetaEnv {
  readonly JWT_SECRET: string;
  readonly PUBLIC_NETLIFY_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Netlify specific types
interface NetlifyContext {
  geo: {
    city?: string;
    country?: {
      code?: string;
      name?: string;
    };
    subdivision?: {
      code?: string;
      name?: string;
    };
  };
}

// Extend the existing AstroGlobal interface
declare namespace Astro {
  interface AstroGlobal {
    netlify: NetlifyContext;
  }
}

// If you're using React with Astro, you might want to add this
declare namespace JSX {
  interface IntrinsicElements {
    // Add any custom elements here
  }
}