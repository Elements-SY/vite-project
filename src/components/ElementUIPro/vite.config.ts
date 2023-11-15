import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";
import { visualizer } from "rollup-plugin-visualizer";
import vueJsx from "@vitejs/plugin-vue-jsx"; 
// 注意如果项目中使用了plugin-vue-jsx插件那么在template模板中语法声明时就需要把<script setup lang="ts"></script>改成<script setup lang="jsx"></script>
// 为打包后的文件提供传统浏览器兼容性支持：https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // console.log("command-----", command);
  // console.log("mode-----", mode);
  return {
    base: "./",
    resolve: {
      // Vite路径别名配置
      alias: {
        "@": resolve(__dirname, "src"), // @代替src
      },
      /*
        在vite中导入.vue文件时后缀不能省，配置extensions也不行，
        官方已经不允许不使用vue文件后缀导入了： https://github.com/vitejs/vite/issues/178
      */
      // extensions: [".vue"],
    },
    plugins: [
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      vue(),
      vueJsx(),
      splitVendorChunkPlugin(),
      ViteRestart({
        restart: ["vite.config.js"],
      }),
      visualizer({
        emitFile: false,
        filename: "stats.html", //分析图生成的文件名
        open: true, //如果存在本地服务端口，将在打包后自动展示
      }),
    ],
    build: {
      // https://cn.vitejs.dev/config/build-options.html#build-target
      target: ["es2015", "chrome63"],
      // rollupOptions配置项指南地址：https://cn.vitejs.dev/guide/build.html#customizing-the-build
      // rollupOptions API的配置项地址：https://cn.rollupjs.org/configuration-options/
      rollupOptions: {
        // https://cn.rollupjs.org/configuration-options/#output-intro-output-outro
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
      minify: true, // vite 默认开启了代码压缩，所以加不加minify都无所谓
      // reportCompressedSize: true,
    },
    preview: {
      port: 8080,
    },
    server: {
      port: 3030,
      open: true,
    },
  };
});
/*
 vue-tsc插件的作用是检查vue中的script lang="ts"当为ts语法书写时就会去校验ts,
 我们可以配置在package.json中打包命令中如：
 "build": "rimraf dist && vue-tsc && vite build",
 也可以写在本地开发环境中如：
 "dev": "vue-tsc && vite",
 但是在打包命令或者启动本地服务命令中加上vue-tsc，那么不论是打包还是启动服务时间都会增加；
*/
