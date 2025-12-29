<template>
  <section class="h-[100dvh] overflow-hidden bg-black">
    <TopBar label="ZURÜCK"/>
    <div
        class="flex h-[calc(100dvh-48px)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)]"
    >
      <nav class="space-y-5 text-center font-display text-5xl tracking-normal">
        <a
            class="block transition-colors text-accent hover:text-white"
            :href="drinksPdf"
            target="_blank"
            rel="noreferrer"
        >
          DRINKS
        </a>
        <router-link class="block transition-colors text-accent hover:text-white" to="/fotos">FOTOS</router-link>
        <router-link class="block transition-colors text-accent hover:text-white" to="/raumplan">
          RAUMPLAN
        </router-link>
        <router-link class="block transition-colors text-accent hover:text-white" to="/impressum">
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
