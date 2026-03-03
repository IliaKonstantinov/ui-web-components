import { defineConfig } from 'vite';

// Vite-конфиг в режиме библиотеки.
// Собираем ESM-бандл(ы) из src/index.ts (чистый API)
// и src/define/auto.ts (авто-регистрация всех компонентов).
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        auto: 'src/define/auto.ts',
      },
      name: 'WebComponents',
      fileName: (format, entryName) => {
        // dist/index.js и dist/auto.js
        return `${entryName}.js`;
      },
      formats: ['es'],
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      // Здесь можно будет пометить внешний зависимости, если появятся.
      external: [],
    },
  },
});

