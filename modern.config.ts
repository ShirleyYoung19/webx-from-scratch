import { appTools, defineConfig } from '@modern-js/app-tools';
import createJITI from '@rsbuild/shared/jiti';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'webpack'>({
  runtime: {
    router: true,
  },
  plugins: [appTools()],
  source: {
    entriesDir: './src/pages',
  },
  output: {
    disableInlineRuntimeChunk: true,
    cleanDistPath: false,
    copy: [
      {
        from: './src/manifest.ts',
        to: './manifest.json',
        // @ts-expect-error
        transform(_content, filepath) {
          const jiti = createJITI(filepath, {
            requireCache: false,
            interopDefault: true,
          });
          const manifest = jiti(filepath);
          return JSON.stringify(manifest, null, 2);
        },
      },
    ],
  },
});
