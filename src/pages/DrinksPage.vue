<template>
  <section class="min-h-screen">
    <TopBar label="MENU" to="/menu" />
    <div class="relative min-h-[calc(100vh-48px)]">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1514361892635-6f07bf83b4a6?auto=format&fit=crop&w=900&q=80"
        alt="Cocktail in a dimly lit bar"
      />
      <div class="absolute inset-0 bg-black/35"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div
        class="relative flex min-h-[calc(100vh-48px)] flex-col items-center justify-end px-6 pb-16 text-center"
      >
        <p class="font-display text-3xl tracking-[0.45em] text-accent animate-fade-rise">
          KLEINLAUT
        </p>
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
</script>
