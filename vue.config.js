const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'frontend/src/main.js', // Ruta al archivo main.js
    },
  },
});
