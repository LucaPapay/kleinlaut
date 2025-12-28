<template>
  <header :class="barClass">
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
const isFixed = computed(() => route.path === '/fotos' || route.path === '/')

const barClass = computed(() => {
  const positionClass = isFixed.value
    ? 'fixed top-0 left-0 right-0'
    : 'sticky top-0'
  return `${positionClass} z-50 bg-accent py-3 text-center font-display text-base text-black`
})
const menuTarget = computed(() => (route.path === '/menu' ? '/' : '/menu'))
</script>
