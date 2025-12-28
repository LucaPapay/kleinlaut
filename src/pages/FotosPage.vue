<template>
  <section class="min-h-screen bg-black">
    <TopBar />
    <div
      class="min-h-[calc(100vh-48px)] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)] px-0 py-0"
    >
      <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 [column-gap:0]">
        <img
          v-for="(src, index) in galleryImages"
          :key="src"
          class="mb-0 block h-screen w-full break-inside-avoid object-cover shadow-none sm:mb-0 sm:h-auto sm:shadow-soft-glow"
          :src="src"
          :alt="`Gallery image ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'

const galleryImages = Object.entries(
  import.meta.glob('../assets/images/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, src]) => src)
</script>
