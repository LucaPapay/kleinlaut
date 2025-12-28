<template>
  <header
    class="sticky top-0 z-50 bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black"
  >
    <router-link
      :to="menuTarget"
      class="inline-flex items-center justify-center"
      aria-label="Menu"
    >
      MENU
    </router-link>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuTarget = computed(() => (route.path === '/menu' ? '/drinks' : '/menu'))
</script>
