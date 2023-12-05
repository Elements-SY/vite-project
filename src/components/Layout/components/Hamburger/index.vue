<template>
 <div
  class="hamburger"
  @click="toggleClick"
 >
  <svg-icon
   class="hamburger-icon"
   :class="{ 'is-active': isActive }"
   icon-class="shrink"
  />
 </div>
</template>
<script setup lang="ts">
defineProps({
 isActive: {
  required: true,
  type: Boolean,
  default: false,
 },
});

const emit = defineEmits(['toggleClick']);

function toggleClick() {
 emit('toggleClick');
}
</script>

<style scoped lang="scss">
.hamburger {
 vertical-align: middle;
 cursor: pointer;
 transform: scaleX(-1);
 .hamburger-icon {
 }
 .is-active {
  transform: scaleX(1);
 }
}
</style>
