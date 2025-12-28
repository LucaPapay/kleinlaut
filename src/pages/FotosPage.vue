<template>
  <section class="min-h-screen bg-black">
    <TopBar label="ZURUCK" to="/menu" />
    <div class="flex min-h-[calc(100vh-48px)] flex-col">
      <div class="relative h-[55vh]">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?auto=format&fit=crop&w=900&q=80"
          alt="Table setting with glassware"
        />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
      <div class="relative flex h-[45vh] items-end bg-black">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt="Warm bar lighting"
        />
        <div class="absolute inset-0 bg-black/25"></div>
        <div class="relative p-6">
          <p class="font-display text-2xl tracking-[0.2em] text-accent">KLEINLAUT</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
</script>
