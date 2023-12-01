import path from 'path-browserify';
import { RouteRecordRaw } from 'vue-router';
const views = import.meta.glob('../views/**/**.vue');
const Layout = () => import('@/components/Layout/index.vue');
import { constantRoutes } from '@/router';
/**
 * Use meta.role to determine if the current user has permission
 *
 * @param roles 用户角色集合
 * @param route 路由
 * @returns
 */
export function hasPermission(roles: string[], route: RouteRecordRaw) {
 if (route.meta && route.meta.roles) {
  // 角色【超级管理员】拥有所有权限，忽略校验
  if (roles.includes('ROOT')) {
   return true;
  }
  return roles.some((role) => {
   if (route.meta?.roles !== undefined) {
    return (route.meta.roles as string[]).includes(role);
   }
  });
 }
 return false;
}
/**
 * 递归过滤有权限的异步(动态)路由
 *
 * @param routes 接口返回的异步(动态)路由
 * @param roles 用户角色集合
 * @returns 返回用户有权限的异步(动态)路由
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
 const asyncRoutes: RouteRecordRaw[] = [];
 routes.forEach((route) => {
  const tmpRoute = { ...route }; // ES6扩展运算符复制新对象
  if (!route.name) {
   tmpRoute.name = route.path;
  }
  // 判断用户(角色)是否有该路由的访问权限
  if (hasPermission(roles, tmpRoute)) {
   if (tmpRoute.component?.toString() == 'Layout') {
    tmpRoute.component = Layout;
   } else {
    const component = views[`../views/${tmpRoute.component}.vue`];
    if (component) {
     tmpRoute.component = component;
    } else {
     if (tmpRoute.children) {
      tmpRoute.component = component;
     }
    }
   }
   if (tmpRoute.children) {
    tmpRoute.children = filterAsyncRoutes(tmpRoute.children, roles);
   }
   asyncRoutes.push(tmpRoute);
  }
 });

 return asyncRoutes;
}

/**
 * 混合模式左侧菜单
 */
export function getMixLeftMenu(routes: { value: any[] }, activeTop: string) {
 const mixLeftMenu = ref<RouteRecordRaw[]>([]);
 routes.value.forEach((item) => {
  if (item.path === activeTop) {
   mixLeftMenu.value = item.children || [];
  }
 });
 return mixLeftMenu;
}

/**
 * 判断当前路由是否只有一个子路由
 *
 * 1：如果只有一个子路由： 返回 true
 * 2：如果无子路由 ：返回 true
 *
 * @param children 子路由数组
 * @param parent 当前路由
 */
export function hasOneShowingChild(children = [], parent: any) {
 const onlyOneChild = ref(); // 临时变量，唯一子路由
 // 子路由集合
 const showingChildren = children.filter((item: any) => {
  if (item.meta?.hidden) {
   // 过滤不显示的子路由
   return false;
  } else {
   // 临时变量（多个子路由 onlyOneChild 变量是用不上的）
   onlyOneChild.value = item;
   return {
    showChildren: true,
    onlyOneChild: onlyOneChild,
   };
  }
 });

 // 如果只有一个子路由, 返回 true
 if (showingChildren.length === 1) {
  return {
   showChildren: true,
   onlyOneChild: onlyOneChild,
  };
 }

 // 如果没有子路由，显示父级路由
 if (showingChildren.length === 0) {
  onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
  return {
   showChildren: true,
   onlyOneChild: onlyOneChild,
  };
 }
 return false;
}

/**
 *  解析路由路径(相对路径 → 绝对路径)
 *
 * @param routePath 路由路径
 */
export function resolvePath(routePath: string) {
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
function key(value: string, index: number, array: string[]): unknown {
 throw new Error('Function not implemented.');
}
