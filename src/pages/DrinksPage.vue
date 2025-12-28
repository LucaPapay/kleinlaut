<template>
  <section class="min-h-screen">
    <TopBar />
    <div class="relative min-h-[calc(100vh-48px)]">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="heroImage"
        alt="Cocktail in a dimly lit bar"
      />
      <div class="absolute inset-0 bg-black/35"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div
        class="relative flex min-h-[calc(100vh-48px)] flex-col items-center justify-end px-6 pb-16 text-center"
      >
        <img
          class="w-56 max-w-[70%] animate-fade-rise drop-shadow-lg"
          :src="logoImage"
          alt="Kleinlaut"
        />
        <p class="mt-2 font-body text-sm text-accent animate-fade-rise">
          Dienstag bis Samstag<br />18:00 - 02:00
        </p>
        <p class="mt-10 max-w-xs text-xs text-yellow-100/90 animate-fade-in">
          Bei Fragen melde dich gerne per Anruf, WhatsApp, slide in unsere DMs oder
          schreibe uns eine Mail :)
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import heroImage from '@/assets/images/hero.jpg'
import logoImage from '@/assets/images/logo.png'
</script>
