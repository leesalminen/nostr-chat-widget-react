import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as packageJson from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.jsx'),
      name: 'nostr-chat-widget-react',
      fileName: (format) => `nostr-chat-widget-react.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        manualChunks: undefined,
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ]
})
