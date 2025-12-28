<template>
  <section class="h-[100dvh] overflow-hidden bg-black">
    <TopBar />
    <div
      class="flex h-[calc(100dvh-48px)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(0,0,0,0.95)_62%)] px-6 text-center"
    >
      <div class="space-y-1 text-sm text-accent">
        <p class="font-body text-base font-extrabold text-accent">JP Frameworks GmbH</p>
        <p>Loewengasse 28/30, 1030 Wien</p>
        <p>
          <a class="underline underline-offset-2" href="mailto:peter@kleinlaut.wien">
            peter@kleinlaut.wien
          </a>
        </p>
        <p>
          <a class="underline underline-offset-2" href="tel:+436766616644">+43 676 661 66 44</a>
        </p>
        <p>ATU80958368</p>
        <p>FN 617457 a</p>
        <p>Gastronomie Betrieb</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
</script>
