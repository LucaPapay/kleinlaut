<template>
  <section class="min-h-screen">
    <TopBar />
    <div class="relative min-h-[calc(100vh-48px)]">
      <picture>
        <source :srcset="heroDesktopImage" media="(min-width: 1024px)" />
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="heroImage"
          alt="Cocktail in a dimly lit bar"
        />
      </picture>
      <div class="absolute inset-0 bg-black/35"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="relative flex min-h-[calc(100vh-48px)] flex-col px-6 text-center">
        <div class="flex flex-1 flex-col items-center justify-center">
          <img
            class="w-56 max-w-[70%] animate-fade-rise drop-shadow-lg"
            :src="logoImage"
            alt="Kleinlaut"
          />
          <p class="mt-2 font-body text-sm text-accent animate-fade-rise">
            Dienstag bis Samstag<br />18:00 - 02:00
          </p>
        </div>
        <p class="mb-10 max-w-xs self-center text-xs text-yellow-100/90 animate-fade-in">
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
import heroDesktopImage from '@/assets/images/hero_desktop.jpg'
import logoImage from '@/assets/images/logo.png'
</script>
