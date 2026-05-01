<template>
  <div ref="heroRef" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- JWST-style Nebula Background -->
    <div class="absolute inset-0 nebula-bg"></div>

    <!-- Stars Canvas -->
    <StarsCanvas />

    <!-- Orbital Ring System -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="absolute w-[700px] h-[400px] md:w-[900px] md:h-[500px] border border-quantum-cyan/10 rounded-full animate-orbit"></div>
      <div class="absolute w-[500px] h-[300px] md:w-[700px] md:h-[400px] border border-quantum-cyan/[0.06] rounded-full animate-orbit-reverse"></div>
      <div class="absolute w-[300px] h-[180px] md:w-[500px] md:h-[280px] border border-quantum-cyan/[0.04] rounded-full animate-orbit-slow"></div>

      <div class="absolute w-[700px] h-[400px] md:w-[900px] md:h-[500px] animate-orbit">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-quantum-cyan rounded-full animate-pulse-glow"></div>
      </div>
      <div class="absolute w-[500px] h-[300px] md:w-[700px] md:h-[400px] animate-orbit-reverse">
        <div class="absolute bottom-0 right-0 w-1.5 h-1.5 bg-warm-entity rounded-full animate-pulse-glow"></div>
      </div>
      <div class="absolute w-[300px] h-[180px] md:w-[500px] md:h-[280px] animate-orbit-slow">
        <div class="absolute top-1/2 left-0 w-1 h-1 bg-electric-blue rounded-full animate-pulse-glow"></div>
      </div>
    </div>

    <!-- Atmospheric glow layers — JWST-style gaseous clouds -->
    <div class="absolute top-[10%] right-[8%] w-[800px] h-[600px] rounded-full bg-quantum-cyan/[0.07] blur-[160px]"></div>
    <div class="absolute bottom-[12%] left-[5%] w-[600px] h-[500px] rounded-full bg-warm-entity/[0.08] blur-[140px]"></div>
    <div class="absolute top-[35%] left-[35%] w-[500px] h-[400px] rounded-full blur-[130px] purple-mist"></div>
    <!-- Warm starlight haze — subtle amber bloom across mid-scene -->
    <div class="absolute top-[40%] left-[30%] w-[900px] h-[700px] rounded-full blur-[180px] amber-haze"></div>

    <!-- Grid Overlay -->
    <div class="absolute inset-0 opacity-[0.015] grid-overlay"></div>

    <!-- Scan Line -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      <div class="w-full h-px bg-quantum-cyan scan-line-anim"></div>
    </div>

    <!-- Hero SVG Watermark — massive, behind everything -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] watermark-wrap"
      :class="visible ? 'opacity-100' : 'opacity-0'"
    >
      <img
        src="/favicon.svg"
        alt=""
        class="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[540px] md:h-[540px] lg:w-[640px] lg:h-[640px] opacity-[0.04] blur-[1px] select-none watermark-mask"
      />
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Logo Emblem Badge -->
      <div
        class="flex justify-center mb-8 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'"
      >
        <!-- <div class="relative group">
          <div class="absolute -inset-3 bg-quantum-cyan/10 rounded-2xl blur-xl group-hover:bg-quantum-cyan/20 transition-all duration-700"></div>
          <img
            src="/favicon.svg"
            alt="SattaSpace Emblem"
            class="relative w-18 h-18 sm:w-20 sm:h-20 rounded-3xl shadow-[0_0_25px_rgba(0,180,230,0.15)] group-hover:shadow-[0_0_40px_rgba(0,180,230,0.3)] transition-all duration-500 group-hover:scale-110"
          />
        </div> -->
      </div>

      <!-- Kicker -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-quantum-cyan/20 bg-quantum-cyan/[0.05] mb-8 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <span class="w-1.5 h-1.5 bg-quantum-cyan rounded-full animate-pulse-glow"></span>
        <span class="text-xs tracking-[0.25em] uppercase text-quantum-cyan font-display font-medium">
          {{ data.kicker }}
        </span>
      </div>

      <!-- Main Title -->
      <h1
        class="font-brand leading-[0.95] mb-6 transition-all duration-700 delay-200"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <span class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">{{ data.titleLine1 }}</span>
        <span class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-cyan">{{ data.titleLine2 }}</span>
      </h1>

      <!-- Bengali Subtitle -->
      <div
        class="text-xl md:text-2xl text-quantum-cyan/30 font-light mb-4 transition-all duration-700 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        {{ data.bengaliSubtitle }}
      </div>

      <!-- Divider -->
      <div
        class="w-16 h-0.5 bg-quantum-cyan/60 mx-auto mb-6 transition-all duration-700 delay-[350ms]"
        :class="visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
      ></div>

      <!-- Tagline -->
      <p
        class="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-[400ms]"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        {{ data.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a :href="data.ctaPrimary.href" class="group relative px-8 py-3.5 bg-quantum-cyan text-deep-space font-display font-semibold text-sm tracking-wider uppercase rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,230,0.3)] hover:scale-105">
          <span class="relative z-10">{{ data.ctaPrimary.label }}</span>
          <div class="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a :href="data.ctaSecondary.href" class="group px-8 py-3.5 border border-white/10 text-white/60 font-display font-medium text-sm tracking-wider uppercase rounded-lg hover:border-quantum-cyan/30 hover:text-quantum-cyan transition-all duration-300 hover:scale-105">
          {{ data.ctaSecondary.label }}
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700"
      :class="visible ? 'opacity-100' : 'opacity-0'"
    >
      <span class="text-[10px] tracking-[0.3em] uppercase text-white/20">{{ data.scrollLabel }}</span>
      <div class="w-px h-8 bg-gradient-to-b from-quantum-cyan/40 to-transparent animate-float"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { hero } from '../../data/site'
import StarsCanvas from './StarsCanvas.vue'

const data = hero
const heroRef = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true
  })
})
</script>

<style scoped>
/* ── JWST-style Nebula ── 4-color brand ratio: Navy 60% · Cyan 25% · Warm 10% · Gray 5% ── */
.nebula-bg {
  background:
    /* Cyan hotspot core — bright star-forming region */
    radial-gradient(circle 12% at 68% 22%, rgba(180,240,255,0.45) 0%, rgba(0,180,230,0) 100%),
    /* Warm hotspot core — stellar nursery */
    radial-gradient(circle 8% at 28% 72%, rgba(255,190,130,0.4) 0%, rgba(255,107,53,0) 100%),
    /* Warm ambient wash — golden starlight bathing the entire scene */
    radial-gradient(ellipse 120% 100% at 50% 50%, rgba(255,140,60,0.06) 0%, rgba(200,80,30,0.03) 40%, transparent 70%),
    /* Warm secondary glow — amber drift center-bottom */
    radial-gradient(ellipse 60% 50% at 45% 65%, rgba(255,120,50,0.12) 0%, rgba(220,80,20,0.04) 45%, transparent 75%),
    /* Purple/magenta mixing zone — where cyan meets warm (JWST signature) */
    radial-gradient(ellipse 45% 40% at 48% 48%, rgba(160,50,160,0.24) 0%, rgba(120,30,130,0.1) 40%, transparent 70%),
    /* Quantum Cyan — 25% — vivid upper-right nebula cloud */
    radial-gradient(ellipse 85% 65% at 70% 25%, rgba(0,180,230,0.55) 0%, rgba(0,180,230,0.25) 30%, rgba(0,120,180,0.08) 55%, transparent 75%),
    /* Warm Entity — 10% — vivid lower-left nebula cloud */
    radial-gradient(ellipse 55% 50% at 25% 75%, rgba(255,107,53,0.5) 0%, rgba(255,80,30,0.22) 35%, rgba(180,50,10,0.07) 60%, transparent 80%),
    /* Nebula Gray — 5% — dusty corner with warm undertone */
    radial-gradient(ellipse 40% 35% at 82% 82%, rgba(130,115,105,0.3) 0%, rgba(90,80,72,0.1) 50%, transparent 70%),
    /* Deep dust lane — dark structural pillar (adds JWST depth) */
    radial-gradient(ellipse 30% 80% at 50% 50%, rgba(3,8,20,0.45) 0%, transparent 70%),
    /* Cosmic Navy — 60% — dominant deep-space base with warm undertone */
    radial-gradient(ellipse 140% 120% at 40% 50%, #0E2B5A 0%, #0B1F44 35%, #06101F 75%, #030810 100%);
}

/* Atmospheric glow helpers */
.purple-mist { background: rgba(150,50,170,0.06); }
.amber-haze  { background: rgba(255,130,50,0.04); }

/* Grid overlay */
.grid-overlay {
  background-image:
    linear-gradient(rgba(0,180,230,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,180,230,1) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Scan line animation */
.scan-line-anim {
  animation: scan-line 8s linear infinite;
}

/* Watermark mask */
.watermark-mask {
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

/* Watermark fade-in */
.watermark-wrap {
  transition: opacity 2s ease 0.3s;
}
</style>
