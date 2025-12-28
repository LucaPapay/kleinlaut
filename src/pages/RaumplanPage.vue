<template>
  <section class="min-h-screen bg-black">
    <TopBar label="ZURUCK" to="/menu" />
    <div
      class="flex min-h-[calc(100vh-48px)] flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(0,0,0,0.94)_62%)] px-4"
    >
      <div class="mt-6 w-full max-w-[280px] rounded-2xl bg-[#2f2f2f] p-4 shadow-soft-glow">
        <svg viewBox="0 0 240 360" class="h-auto w-full" role="img" aria-label="Raumplan">
          <path
            d="M36 20h168v42h-52v26h64v98h-36v38h-58v-40h-52v-44h38V80H36z"
            fill="#3a3a3a"
            stroke="#c6ba18"
            stroke-width="2"
          />
          <text x="70" y="48" fill="#f0e548" font-size="10" font-family="'Cormorant Garamond', serif">
            Schanigarten
          </text>
          <text x="34" y="108" fill="#d7d7d7" font-size="10" font-family="'Cormorant Garamond', serif">
            Separee
          </text>
          <text x="144" y="108" fill="#d7d7d7" font-size="10" font-family="'Cormorant Garamond', serif">
            Bar
          </text>
          <text x="56" y="166" fill="#d7d7d7" font-size="10" font-family="'Cormorant Garamond', serif">
            WC
          </text>
          <text x="152" y="180" fill="#d7d7d7" font-size="10" font-family="'Cormorant Garamond', serif">
            Floor
          </text>
          <text x="92" y="300" fill="#d7d7d7" font-size="10" font-family="'Cormorant Garamond', serif">
            Hinterraum
          </text>
          <circle cx="28" cy="16" r="12" fill="#3c6b2f" />
          <circle cx="210" cy="20" r="12" fill="#3c6b2f" />
          <circle cx="66" cy="134" r="10" fill="#3c6b2f" />
          <circle cx="156" cy="206" r="12" fill="#3c6b2f" />
          <polygon points="118,66 126,66 122,80" fill="#d00000" />
        </svg>
      </div>
      <div class="mt-6 w-full max-w-[320px] text-[11px] leading-5 text-gray-300">
        <div class="grid grid-cols-[1fr_auto] gap-x-4">
          <span>Garten (nur im Sommer)</span>
          <span>&rarr; 6 Tische / max. 16 Personen</span>
          <span>Separee</span>
          <span>&rarr; 2 Tische / max. 12 Personen</span>
          <span>Floor</span>
          <span>&rarr; 2 Tische fur je 4 Personen</span>
          <span>Hinterraum</span>
          <span>&rarr; Platz fur ca. 30 Personen</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBar from '../components/TopBar.vue'
</script>
