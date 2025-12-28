<template>
  <section class="h-[100dvh] overflow-hidden">
    <TopBar />
      <div class="relative h-[calc(100dvh-48px)]">
      <picture>
        <source :srcset="heroDesktopImage" media="(min-width: 1024px)" />
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="heroImage"
          alt="Cocktail in a dimly lit bar"
        />
      </picture>
      <div class="relative grid h-full grid-rows-[1fr_auto] px-6 text-center">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-48 max-w-[70%] animate-fade-rise drop-shadow-lg sm:w-56"
            :src="logoImage"
            alt="Kleinlaut"
          />
          <p class="mt-1 font-body text-xs leading-snug text-accent animate-fade-rise sm:mt-2 sm:text-sm">
            Dienstag bis Samstag<br />18:00 - 02:00
          </p>
        </div>
        <p
          class="mb-6 max-w-xs self-center text-center text-[0.72rem] leading-snug text-accent animate-fade-in sm:mb-10 sm:text-xs mx-auto"
        >
          Bei Fragen melde dich gerne per
          <a class="underline underline-offset-2" href="tel:+436766616644">Anruf</a>,
          <a class="underline underline-offset-2" href="https://wa.me/436766616644">WhatsApp</a>,
          slide in unsere
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
import heroImage from '@/assets/images/hero.jpg'
import heroDesktopImage from '@/assets/images/hero_desktop.jpg'
import logoImage from '@/assets/images/logo.png'
</script>
