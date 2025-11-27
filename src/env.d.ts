/// <reference types="astro/client" />

interface Window {
  __translations__: {
    [lang: string]: {
      [key: string]: string;
    };
  };
}
