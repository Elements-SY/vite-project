<template>
    <div class="sub-menu">
        <template
          v-if="hasOneShowingChild(props.item.children, props.item) &&
              (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
              !props.item.meta?.alwaysShow
              "
        >
            <el-menu-item
              :index="resolvePath(onlyOneChild.path)"
            >
            <p>{{ props.item.meta.title }}</p>
            </el-menu-item>
        </template>
        <el-sub-menu v-else :index="resolvePath(props.item.path)" teleported>
          <template #title>
            <p>{{ props.item.meta.title }}</p>
          </template>

          <sub-menu
            v-for="child in props.item.children"
            :key="child.path"
            :is-nest="true"
            :item="child"
          />
        </el-sub-menu>
    </div>
</template>
<script setup lang="ts">
import path from "path-browserify";
const onlyOneChild = ref(); // 临时变量，唯一子路由
const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
console.log(path)
console.log(props.item)
function hasOneShowingChild(children = [], parent: any) {
    // 子路由集合
    const showingChildren = children.filter((item: any) => {
        if (item.meta?.hidden) {
            // 过滤不显示的子路由
            return false;
        } else {
            // 临时变量（多个子路由 onlyOneChild 变量是用不上的）
            onlyOneChild.value = item;
            return true;
        }
    });

    // 如果只有一个子路由, 返回 true
    if (showingChildren.length === 1) {
        return true;
    }

    // 如果没有子路由，显示父级路由
    if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
        return true;
    }
    return false;
}

/**
 *  解析路由路径(相对路径 → 绝对路径)
 *
 * @param routePath 路由路径
 */
function resolvePath(routePath: string) {
    if (isExternal(routePath)) {
        return routePath;
    }
    if (isExternal(props.path)) {
        return props.path;
    }

    // 完整路径(/system/user) = 父级路径(/system) + 路由路径(user)
    const fullPath = path.resolve(props.path, routePath);
    return fullPath;
}
function isExternal(path: string) {
    const isExternal = /^(https?:|http?:|mailto:|tel:)/.test(path);
    return isExternal;
}
</script>
<style lang="scss"></style>
