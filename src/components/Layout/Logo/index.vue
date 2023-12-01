<template>
  <div class="logo">
    <transition name="sidebarLogoFade">
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </transition>
  </div>
</template>
<script setup lang="ts">
const logo = ref(new URL(`@/assets/image/logo/logo.png`, import.meta.url).href)
</script>
<style lang="scss">
.logo {
  background-color: #263445;
  height: 50px;
  text-align: center;
  img {
    height: 100%;
  }
}
</style>
