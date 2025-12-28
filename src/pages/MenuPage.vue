<template>
  <section class="min-h-screen bg-black">
    <TopBar />
    <div
      class="flex min-h-[calc(100vh-48px)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)]"
    >
      <nav class="space-y-5 text-center font-display text-3xl tracking-[0.2em]">
        <a class="block transition-colors hover:text-accent" :href="drinksPdf" download="kleinlaut.pdf">
          DRINKS
        </a>
        <router-link class="block transition-colors hover:text-accent" to="/fotos">FOTOS</router-link>
        <router-link class="block transition-colors hover:text-accent" to="/raumplan">
          RAUMPLAN
        </router-link>
        <router-link class="block transition-colors hover:text-accent" to="/impressum">
          IMPRESSUM
        </router-link>
      </nav>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import drinksPdf from '@/assets/pdfs/kleinlaut.pdf'
</script>
