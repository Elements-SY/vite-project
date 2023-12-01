<template>
 <div class="layout">
  <!-- 侧边栏菜单布局风格 -->
  <div class="side-menu-layout">
   <aside>
    <Logo />
    <SideMenu
     :menuList="permissionStore.routes"
     base-path=""
    />
   </aside>
   <main>
    <header>
     <Hamburger />
     <Breadcrumb />
     <NavRight />
    </header>
    <section class="section-tags-menu">
     <TagsMenu />
    </section>
    <AppMain />
    <footer></footer>
   </main>
  </div>
  <!-- 头部菜单布局风格 -->
  <div
   class="header-menu-layout"
   v-if="false"
  >
   <main>
    <header>
     <Logo />
     <HeaderMenu />
     <NavRight />
    </header>
    <section class="section-tags-menu">
     <TagsMenu />
    </section>
    <AppMain />
    <footer></footer>
   </main>
  </div>
  <Settings />
 </div>
</template>
<script setup lang="ts">
import {
 Logo,
 AppMain,
 Settings,
 HeaderMenu,
 SideMenu,
 TagsMenu,
 NavRight,
 Hamburger,
 Breadcrumb,
} from './index';
import { usePermissionStore } from '@/store/modules/menu';
// import { menuList } from '@/mock/menuData';
const permissionStore = usePermissionStore();
// console.log("permissionStore：", permissionStore.routes)
</script>
<style lang="scss">
@import url('@/assets/style/Layout/index.scss');
</style>
