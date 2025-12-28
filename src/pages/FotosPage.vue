<template>
  <section class="min-h-screen bg-black">
    <TopBar />
    <div
      class="min-h-[calc(100vh-48px)] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)] px-0 py-0"
    >
      <div class="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <img
          v-for="(src, index) in galleryImages"
          :key="src"
          class="block h-screen w-full object-cover shadow-none sm:h-auto sm:shadow-soft-glow"
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
  .sort(([first], [second]) => {
    const numberFromPath = (value) => {
      const match = value.match(/(\d+)(?=\.[^.]+$)/)
      return match ? Number(match[1]) : Number.POSITIVE_INFINITY
    }

    const firstNumber = numberFromPath(first)
    const secondNumber = numberFromPath(second)

    if (firstNumber !== secondNumber) {
      return firstNumber - secondNumber
    }

    return first.localeCompare(second)
  })
  .map(([, src]) => src)
</script>
