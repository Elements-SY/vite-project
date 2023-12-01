<template>
  <section class="app-main">
        <router-view>
        <template #default="{ Component, route }">
          <transition name="fade-slide" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </template>
      </router-view>
  </section>
</template>
<script setup lang="ts">

</script>
<style lang="scss">

</style>
