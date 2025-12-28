<template>
  <section class="h-[100dvh] overflow-hidden bg-black">
    <TopBar />
    <div class="flex h-[calc(100dvh-48px)] flex-col items-center justify-center px-4">
      <div class="w-full max-w-[300px] md:max-w-md">
        <img class="h-auto w-full" :src="raumplanImage" alt="Raumplan" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import raumplanImage from '@/assets/images/raumplan.webp'
</script>
