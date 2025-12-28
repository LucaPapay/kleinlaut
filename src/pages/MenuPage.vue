<template>
  <section class="min-h-screen bg-black">
    <TopBar label="ZURUCK" to="/drinks" />
    <div
      class="flex min-h-[calc(100vh-48px)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)]"
    >
      <nav class="space-y-5 text-center font-display text-3xl tracking-[0.2em]">
        <router-link class="block animate-fade-rise" to="/drinks">DRINKS</router-link>
        <router-link class="block animate-fade-rise" to="/fotos">FOTOS</router-link>
        <router-link class="block animate-fade-rise" to="/raumplan">RAUMPLAN</router-link>
        <router-link class="block animate-fade-rise" to="/impressum">IMPRESSUM</router-link>
      </nav>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
</script>
