<template>
  <section class="min-h-screen bg-black">
    <TopBar />
    <div
      class="flex min-h-[calc(100vh-48px)] flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(0,0,0,0.94)_62%)] px-4"
    >
      <div class="mt-6 w-full max-w-[300px] rounded-2xl bg-[#2f2f2f] p-3 shadow-soft-glow">
        <img class="h-auto w-full rounded-xl" :src="raumplanImage" alt="Raumplan" />
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
