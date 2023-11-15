import { defineConfig, splitVendorChunkPlugin, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// import { fileURLToPath, URL } from 'node:url'
import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";
import { visualizer } from "rollup-plugin-visualizer";
import vueJsx from "@vitejs/plugin-vue-jsx";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite";
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite'
//element
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver'
import momentToDayjs from 'unplugin-moment-to-dayjs/vite'
// 注意如果项目中使用了plugin-vue-jsx插件那么在template模板中语法声明时就需要把<script setup lang="ts"></script>改成<script setup lang="jsx"></script>
// 为打包后的文件提供传统浏览器兼容性支持：https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // console.log("command-----", command);
  // console.log("mode-----", mode);
  const { VITE_PUBLIC_PATH, VITE_PROXY_PORT, VITE_PROXY_URL } = loadEnv(
    mode,
    process.cwd()
  )
  console.log("--------", VITE_PUBLIC_PATH)
  console.log("--------", VITE_PROXY_PORT)
  console.log("--------", VITE_PROXY_URL)
  console.log("--------", mode)
  console.log("--------", process.cwd())
  return {
    // root: resolve(__dirname, '/public'),
    base: "./",
    mode: "development",
    // define: "",
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
      //element按需导入
      AutoImport({
        //安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ['vue', 'vue-router'],
        dts: "src/auto-import.d.ts",
        //element
        resolvers: [ElementPlusResolver(), IconsResolver({
          prefix: 'Icon',
        })],
      }),
      Components({
        //element
        resolvers: [ElementPlusResolver(), IconsResolver({
          enabledCollections: ['ep'], //@iconify-json/ep 是 Element Plus 的图标库，所以 IconsResolver 配置了 enabledCollections: ['ep']
        })],
        dts: true,
      }),
      Icons({
        autoInstall: true,
      }),
      momentToDayjs()
    ],
    // publicDir: "",
    // cacheDir: "",
    resolve: {
      // Vite路径别名配置
      alias: {
        "@": resolve(__dirname, "src"), // @代替src
      },
      /*
        在vite中导入.vue文件时后缀不能省，配置extensions也不行，
        官方已经不允许不使用vue文件后缀导入了： https://github.com/vitejs/vite/issues/178
      */
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      preserveSymlinks: false,
    },
    // https://cn.vitejs.dev/config/shared-options.html#css-postcss
    css: {},
    // envDir: "/",
    build: {
      // https://cn.vitejs.dev/config/build-options.html#build-target
      target: ["es2015", "chrome63"],
      minify: "terser", // vite 默认开启了代码压缩，所以加不加minify都无所谓
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // rollupOptions配置项指南地址：https://cn.vitejs.dev/guide/build.html#customizing-the-build
      // rollupOptions API的配置项地址：https://cn.rollupjs.org/configuration-options/
      // https://cn.rollupjs.org/configuration-options/#output-intro-output-outro
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          manualChunks(id: string | string[]) {
            if (id.includes('node_modules')) {
              const arr = id.toString().split('node_modules/')
              return arr[arr.length - 1].split('/')[0].toString()
            }
          }
        }
      },
      // reportCompressedSize: true,
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态文件目录
    },
    // 依赖优化 - 预构建
    optimizeDeps: {
      include: ['vue', 'pinia', 'vue-router', 'element-plus'],
    },
    preview: {
      port: 8080,
    },
    server: {
      port: 3030,
      open: true,
      proxy: {
        [VITE_PROXY_PORT]: {
          target: VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
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
 pinia-plugin-persistedstate：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
*/
