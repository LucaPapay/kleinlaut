<template>
  <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
    <router-link
      :to="to"
      class="inline-flex items-center justify-center"
      :aria-label="label"
    >
      {{ label }}
    </router-link>
  </header>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
