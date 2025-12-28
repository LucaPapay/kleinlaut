<template>
  <section class="relative bg-black pt-12">
    <TopBar />
    <div class="relative min-h-[calc(100vh-48px)] h-[calc(100svh-48px)] overflow-hidden">
      <picture>
        <source :srcset="heroDesktopImage" media="(min-width: 1024px)" />
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="heroImage"
          alt="Cocktail in a dimly lit bar"
        />
      </picture>
      <div class="relative z-10 grid h-full grid-rows-[1fr_auto] px-6 text-center">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-48 max-w-[70%] animate-fade-rise drop-shadow-lg sm:w-56"
            :src="logoImage"
            alt="Kleinlaut"
          />
          <p
            class="mt-4 font-body font-extrabold text-[0.9rem] leading-snug text-accent animate-fade-rise sm:mt-2 sm:text-sm"
          >
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
    <div class="bg-black">
      <div class="mx-auto w-full max-w-5xl">
        <div class="aspect-[3/4] overflow-hidden sm:aspect-video">
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
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import heroImage from '@/assets/images/hero.jpg'
import heroDesktopImage from '@/assets/images/hero_desktop.jpg'
import logoImage from '@/assets/images/logo.png'

const mapSrc =
  'https://www.google.com/maps?q=Loewengasse%2028%2F30%201030%20Wien&output=embed'
</script>
