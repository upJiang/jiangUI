import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from 'path';

export default defineConfig({
  server: {
    port: 9999,
    open:true
  },
   // 配置别名
   resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue()
  ]
});  