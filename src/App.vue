<template>
  <div class="bg-black text-white">
    <section class="min-h-screen">
      <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
        MENU
      </header>
      <div class="relative min-h-[calc(100vh-48px)]">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
          alt="Cocktail in a dimly lit bar"
        />
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative flex min-h-[calc(100vh-48px)] flex-col items-center justify-end px-6 pb-16 text-center">
          <p class="font-display text-3xl tracking-[0.45em] text-accent">KLEINLAUT</p>
          <p class="mt-2 font-body text-sm text-accent">
            Dienstag bis Samstag<br />18:00 - 02:00
          </p>
          <p class="mt-10 max-w-xs text-xs text-yellow-100">
            Bei Fragen melde dich gerne per Anruf, WhatsApp, slide in unsere DMs oder
            schreibe uns eine Mail :)
          </p>
        </div>
      </div>
    </section>

    <section class="min-h-screen bg-black bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(0,0,0,0.95)_62%)]">
      <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
        ZURUCK
      </header>
      <div class="flex min-h-[calc(100vh-48px)] items-center justify-center">
        <div class="space-y-5 text-center font-display text-3xl tracking-[0.2em]">
          <p>DRINKS</p>
          <p>FOTOS</p>
          <p>RAUMPLAN</p>
          <p>IMPRESSUM</p>
        </div>
      </div>
    </section>

    <section class="min-h-screen bg-black bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_rgba(0,0,0,0.96)_65%)]">
      <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
        ZURUCK
      </header>
      <div class="flex min-h-[calc(100vh-48px)] flex-col">
        <div class="relative h-[55vh]">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?auto=format&fit=crop&w=900&q=80"
            alt="Table setting with glassware"
          />
          <div class="absolute inset-0 bg-black/10"></div>
        </div>
        <div class="relative flex h-[45vh] items-end bg-black">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Warm bar lighting"
          />
          <div class="absolute inset-0 bg-black/25"></div>
          <div class="relative p-6">
            <p class="font-display text-2xl tracking-[0.2em] text-accent">KLEINLAUT</p>
          </div>
        </div>
      </div>
    </section>

    <section class="min-h-screen bg-black bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(0,0,0,0.94)_62%)]">
      <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
        ZURUCK
      </header>
      <div class="flex min-h-[calc(100vh-48px)] flex-col items-center justify-center px-4">
        <div class="mt-6 w-full max-w-[280px] rounded-2xl bg-[#2f2f2f] p-4 shadow-soft-glow">
          <svg viewBox="0 0 240 360" class="h-auto w-full">
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
            <span>&rarr; 2 Tische für je 4 Personen</span>
            <span>Hinterraum</span>
            <span>&rarr; Platz für ca. 30 Personen</span>
          </div>
        </div>
      </div>
    </section>

    <section class="min-h-screen bg-black">
      <header class="bg-accent py-3 text-center font-display text-base tracking-[0.35em] text-black">
        ZURUCK
      </header>
      <div class="flex min-h-[calc(100vh-48px)] items-center justify-center px-6 text-center">
        <div class="space-y-1 text-sm text-gray-300">
          <p class="font-body text-base font-semibold text-white">JP Frameworks GmbH</p>
          <p>Loewengasse 28/30, 1030 Wien</p>
          <p>peter@kleinlaut.wien</p>
          <p>+43 676 661 66 44</p>
          <p>ATU80958368</p>
          <p>FN 617457 a</p>
          <p>Gastronomie Betrieb</p>
        </div>
      </div>
    </section>
  </div>
</template>
