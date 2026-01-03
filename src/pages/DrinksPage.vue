<template>
  <section class="relative bg-black pt-12">
    <TopBar />
    <div class="relative h-[100vh] overflow-hidden">
      <picture>
        <source :srcset="heroDesktopImage" media="(min-width: 1024px)" />
        <img
          class="absolute inset-0 h-[100vh] w-full object-cover"
          :src="heroImage"
          alt="Cocktail in a dimly lit bar"
        />
      </picture>
      <div class="relative z-10 grid h-full grid-rows-[1fr_auto] px-6 text-center pb-24 sm:pb-12">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-48 max-w-[70%] animate-fade-rise drop-shadow-lg sm:w-72"
            :src="logoImage"
            alt="Kleinlaut"
          />
          <p
            class="mt-4 font-body font-extrabold text-[0.9rem] leading-snug text-accent animate-fade-rise sm:mt-2 sm:text-lg"
          >
            Dienstag bis Samstag<br />18:00 - 02:00
          </p>
        </div>
        <p
          class="mb-24 max-w-md self-center text-center text-[0.9rem] leading-snug text-accent animate-fade-in sm:mb-10 sm:text-lg mx-auto"
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
    <div class="bg-black">
      <div class="mx-auto w-full">
        <a
          class="block sm:hidden"
          href="https://www.google.com/maps?q=kleinlaut"
          target="_blank"
          rel="noreferrer"
        >
          <img :src="mapMobileImage" alt="Kleinlaut on Google Maps" class="h-auto w-full" />
        </a>
        <div class="hidden sm:block">
          <div class="overflow-hidden aspect-[20/6]">
            <iframe
              :src="mapSrc"
              class="h-full w-full border-0 filter grayscale invert hue-rotate-180 contrast-90"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              title="Kleinlaut location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import heroImage from '@/assets/images/hero.webp'
import heroDesktopImage from '@/assets/images/hero_desktop.webp'
import logoImage from '@/assets/images/logo.png'
import mapMobileImage from '@/assets/images/map_mobile.webp'

const mapSrc =
  'https://www.google.com/maps?q=kleinlaut&z=18&output=embed'
</script>
