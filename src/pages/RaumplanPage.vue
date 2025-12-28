<template>
  <section class="h-[100dvh] overflow-hidden bg-black">
    <TopBar />
    <div class="flex h-[calc(100dvh-48px)] flex-col items-center justify-center px-4">
      <div class="w-full max-w-[300px]">
        <img class="h-auto w-full" :src="raumplanImage" alt="Raumplan" />
      </div>
      <div class="mt-6 w-full max-w-[320px] text-[11px] leading-5 text-gray-300">
        <div class="grid grid-cols-[1fr_auto] gap-x-4">
          <span>Garten (nur im Sommer)</span>
          <span>&rarr; 6 Tische / max. 16 Personen</span>
          <span>Separee</span>
          <span>&rarr; 2 Tische / max. 12 Personen</span>
          <span>Floor</span>
          <span>&rarr; 2 Tische fur je 4 Personen</span>
          <span>Hinterraum</span>
          <span>&rarr; Platz fur ca. 30 Personen</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import raumplanImage from '@/assets/images/raumplan.png'
</script>
