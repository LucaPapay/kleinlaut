<template>
  <section class="h-[100vh] overflow-hidden bg-black">
    <TopBar />
    <div class="flex h-full flex-col items-center pt-12">
      <div class="w-full max-w-[320px] md:max-w-md">
        <img class="h-auto w-full" :src="raumplanImage" alt="Raumplan" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import raumplanImage from '@/assets/images/raumplan.webp'
</script>
