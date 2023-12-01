<template>
   <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot></slot>
  </a>
  <div v-else @click="push">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { isExternal } from "@/utils/index";
import { useRouter } from "vue-router";
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
const router = useRouter();
function push() {
  console.log(props.to)
  router.push(props.to).catch((err) => {
    console.log(props.to, err);
  });
}
</script>
<style lang="scss"></style>
