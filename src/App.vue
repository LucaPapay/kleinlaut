<template>
  <div class="min-h-screen bg-black text-white">
    <router-view />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.path,
  (path) => {
    const allowScroll = path === '/fotos'
    document.body.classList.toggle('allow-scroll', allowScroll)
    document.documentElement.classList.toggle('allow-scroll', allowScroll)
  },
  { immediate: true }
)
</script>
