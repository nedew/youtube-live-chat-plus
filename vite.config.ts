import { ManifestV3Export, crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest: manifest as unknown as ManifestV3Export }),
    tsconfigPaths(),
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: '@/',
  //       replacement: resolve(__dirname, './src/'),
  //       // replacement: `./src/`,
  //     },
  //   ],
  // },
});
