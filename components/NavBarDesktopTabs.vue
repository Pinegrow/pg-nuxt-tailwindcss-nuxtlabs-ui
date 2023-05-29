<script setup lang="ts">
  import { isCurrentRoute } from '~/composables/nav'

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full hidden items-center md:flex md:ml-6">
    <div class="flex h-full space-x-2">
      <UButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
        :label="navlink.text"
        size="lg"
        :variant="isCurrentRoute(navlink, currentPath) ? 'solid' : 'ghost'"
        class="!rounded-lg"
      >
      </UButton>
    </div>
    <UButton
      class="ml-3"
      target="_blank"
      to="https://pinegrow.com/vue-designer"
      size="xl"
      icon="i-mdi-pine-tree"
      trailing
      ><span class="pl-2">Try Now</span>
    </UButton>
  </div>
</template>
<style scoped></style>
