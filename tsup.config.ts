import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    background: './src/background/index.ts',
    'content-scripts': './src/content-scripts/index.tsx',
  },
  noExternal: [/.*/],
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'production',
    ),
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
