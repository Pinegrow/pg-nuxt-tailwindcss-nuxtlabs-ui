<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>
<template>
  <UButton
    size="xl"
    :icon="
      isMobileMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    "
    class="!py-2 !rounded-lg"
    @click="openMobileMenu"
  >
    <span class="sr-only">Open main menu</span>
  </UButton>
</template>
<style scoped></style>
