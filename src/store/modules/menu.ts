import { defineStore } from 'pinia';
import { constantRoutes } from '@/router';
import store from '@/store';
import { filterAsyncRoutes, getMixLeftMenu } from '@/utils/routeMenu';
import { RouteRecordRaw } from 'vue-router';
import { menuList } from '@/mock/menuData';
const views = import.meta.glob('../../views/**/**.vue');
const Layout = () => import('@/components/Layout/index.vue');
// setup
export const usePermissionStore = defineStore('permission', () => {
 // state
 const routes = ref<RouteRecordRaw[]>([]);

 // actions
 function setRoutes(newRoutes: RouteRecordRaw[]) {
  routes.value = constantRoutes.concat(newRoutes);
 }
 /**
  * 生成动态路由
  *
  * @param roles 用户角色集合
  * @returns
  */
 const onlyOneChild:
  | ConcatArray<RouteRecordRaw>
  | {
     path: string;
     children: RouteRecordRaw[];
     component: () => Promise<typeof import('@/components/Layout/index.vue')>;
    }[] = [];
 let len = 0;
 function generateRoutes(roles: string[]) {
  return new Promise<RouteRecordRaw[]>((resolve, reject) => {
   const accessedRoutes = filterAsyncRoutes(menuList, roles);
   accessedRoutes.filter((item) => {
    if (!item.children || item.children.length == 0) {
     const component = views[`../../views${item.component}.vue`];
     if (component) {
      item.component = component;
      onlyOneChild.push({
       path: '/',
       children: [item],
       component: Layout,
      });
     }
    }
   });
   // 将处理好没有children的父级菜单与有children的菜单合并
   let result = accessedRoutes.concat(onlyOneChild);
   // 计算有几个没有children的父级菜单   
   result.map((item) => {
    if (!item.children || item.children.length == 0) {
     len++;
    }
   });
   result.filter((item, i, arr) => {
    if (!item.children || item.children.length == 0) {
     result.splice(i, len);
    }
   });
   setRoutes(result);
   resolve(result);
  });
 }
 return { routes, setRoutes, generateRoutes, getMixLeftMenu };
});

// 非setup
export function usePermissionStoreHook() {
 return usePermissionStore(store);
}
