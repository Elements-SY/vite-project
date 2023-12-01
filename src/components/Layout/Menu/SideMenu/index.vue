<template>
 <div class="side-menu">
  <el-scrollbar>
   <el-menu
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    mode="vertical"
    :collapse="false"
    :unique-opened="true"
    :collapse-transition="false"
   >
    <sub-menu
     v-for="route in menuList"
     :key="route.path"
     :item="route"
     :base-path="resolvePath(route.path)"
    />
   </el-menu>
  </el-scrollbar>
 </div>
</template>
<script setup lang="ts">
import path from 'path-browserify';
import variables from '@/assets/style/variables.module.scss';
import { isExternal } from "@/utils/index";
// import { resolvePath } from '@/utils/routeMenu';
import SubMenu from './SubMenu.vue';
const props = defineProps({
 menuList: {
  type: Array,
  required: true,
 },
 basePath: {
  type: String,
  required: true,
 },
});
console.log(props.menuList);
/**
 *  解析路由路径(相对路径 → 绝对路径)
 *
 * @param routePath 路由路径
 */
function resolvePath(routePath: string) {
 if (isExternal(routePath)) {
  return routePath;
 }
 if (isExternal(props.basePath)) {
  return props.basePath;
 }
 // 完整路径(/system/user) = 父级路径(/system) + 路由路径(user)
 const fullPath = path.resolve(props.basePath, routePath);
 return fullPath;
}
</script>
<style lang="scss">
@import url('@/assets/style/Menu/SideMenu/subMenu.scss');
</style>
