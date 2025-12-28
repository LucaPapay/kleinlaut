<template>
  <header class="sticky top-0 z-50 bg-accent py-3 text-center font-display text-base text-black">
    <router-link
      :to="menuTarget"
      class="inline-flex items-center justify-center"
      :aria-label="label"
    >
      {{ label }}
    </router-link>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  label: {
    type: String,
    default: 'MENU',
  },
})

const route = useRoute()
const menuTarget = computed(() => (route.path === '/menu' ? '/drinks' : '/menu'))
</script>
