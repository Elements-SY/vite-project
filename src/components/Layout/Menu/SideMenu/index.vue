<template>
  <div class="side-menu">
    <el-menu
      mode="vertical"
    >
      <sub-menu
        v-for="route in state.menuList"
        :key="route.path"
        :item="route"
      />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue';
import {
  menuList
} from '../data'
const state = reactive({
  menuList: menuList
})
console.log(menuList)
</script>
<style lang="scss">

</style>
