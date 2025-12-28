<template>
  <section class="relative h-[100lvh] min-h-[100vh] overflow-hidden">
    <TopBar />
    <div class="absolute inset-0 hero-background" aria-hidden="true"></div>
    <div class="relative h-[calc(100dvh-48px)]">
      <div class="relative z-10 grid h-full grid-rows-[1fr_auto] px-6 text-center">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-48 max-w-[70%] animate-fade-rise drop-shadow-lg sm:w-56"
            :src="logoImage"
            alt="Kleinlaut"
          />
          <p class="mt-4 font-body text-[0.9rem] leading-snug text-accent animate-fade-rise sm:mt-2 sm:text-sm">
            Dienstag bis Samstag<br />18:00 - 02:00
          </p>
        </div>
        <p
          class="mb-8 max-w-sm self-center text-center text-[0.9rem] leading-snug text-accent animate-fade-in sm:mb-10 sm:text-base mx-auto"
        >
          Bei Fragen melde dich gerne per
          <a class="underline underline-offset-2" href="tel:+436766616644">Anruf</a>,
          <a class="underline underline-offset-2" href="https://wa.me/436766616644">WhatsApp</a>,
          slide <br>in unsere
          <a
            class="underline underline-offset-2"
            href="https://www.instagram.com/kleinlaut1070/"
            target="_blank"
            rel="noreferrer"
          >
            DMs
          </a>
          oder schreibe uns eine
          <a class="underline underline-offset-2" href="mailto:peter@kleinlaut.wien">Mail</a> :)
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import logoImage from '@/assets/images/logo.png'
</script>
