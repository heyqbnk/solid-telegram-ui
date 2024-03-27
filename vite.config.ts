/* eslint-disable import/no-extraneous-dependencies */
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      outDir: 'dist/dts',
      tsconfigPath: './tsconfig.json',
    }),
    solidPlugin(),
  ],
  resolve: {
    alias: {
      '~': resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: 'src/index.ts',
      external: ['@tma.js/sdk', 'solid-js'],
    },

    lib: {
      name: 'solidTelegramUI',
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName(format) {
        switch (format) {
          case 'cjs':
            return 'index.cjs';
          case 'es':
            return 'index.mjs';
          case 'iife':
            return 'index.iife.js';
          default:
            return 'index';
        }
      },
    },
  },
});

