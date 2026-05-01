<template>
  <section id="brand" class="relative py-24 md:py-32 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-deep-space via-cosmic-navy/30 to-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-cyan/20 to-transparent"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Header -->
      <ScrollReveal>
        <div class="text-center mb-16">
          <span class="text-xs tracking-[0.3em] uppercase text-quantum-cyan/60 font-display block mb-4">{{ data.sectionLabel }}</span>
          <h2 class="font-display text-3xl md:text-5xl font-bold text-white mb-4" v-html="heading"></h2>
          <p class="text-white/40 max-w-xl mx-auto">{{ data.subheading }}</p>
        </div>
      </ScrollReveal>

      <!-- Logo Mark Showcase -->
      <ScrollReveal :delay="50">
      <div class="mb-20">
        <h3 class="font-display text-sm tracking-[0.2em] uppercase text-white/50 mb-8">Logo Mark</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Full Color -->
          <div class="glass rounded-2xl p-8 flex flex-col items-center justify-center group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-quantum-cyan/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src="/favicon.svg" alt="SattaSpace Logo Mark" class="w-24 h-24 rounded-2xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,180,230,0.1)]" />
            <span class="text-[10px] tracking-[0.2em] uppercase text-quantum-cyan/60 font-display relative z-10">Full Color</span>
          </div>
          <!-- On Dark (Glow) -->
          <div class="glass rounded-2xl p-8 flex flex-col items-center justify-center group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-warm-entity/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src="/favicon.svg" alt="SattaSpace Logo Mark" class="w-24 h-24 rounded-2xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,180,230,0.25)] group-hover:shadow-[0_0_50px_rgba(0,180,230,0.4)]" />
            <span class="text-[10px] tracking-[0.2em] uppercase text-quantum-cyan/60 font-display relative z-10">Glow</span>
          </div>
          <!-- Minimal / Monochrome hint -->
          <div class="rounded-2xl p-8 flex flex-col items-center justify-center group relative overflow-hidden" style="background: rgba(240,244,248,0.05);">
            <div class="absolute inset-0 bg-stellar-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src="/favicon.svg" alt="SattaSpace Logo Mark" class="w-24 h-24 rounded-2xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 brightness-200 contrast-50" />
            <span class="text-[10px] tracking-[0.2em] uppercase text-white/30 font-display relative z-10">Light Surface</span>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <!-- Color Palette -->
      <ScrollReveal :delay="100">
      <div class="mb-20">
        <h3 class="font-display text-sm tracking-[0.2em] uppercase text-white/50 mb-6">Primary Palette</h3>
        <div class="grid grid-cols-3 md:grid-cols-7 gap-3">
          <div
            v-for="color in data.colors"
            :key="color.hex"
            class="group cursor-pointer"
            @click="copyColor(color.hex)"
          >
            <div
              class="aspect-[3/4] rounded-xl mb-2 transition-transform duration-300 group-hover:scale-105 relative overflow-hidden"
              :style="{ background: color.hex }"
            >
              <div class="absolute inset-0 flex items-end p-2.5">
                <span class="text-[10px] font-mono" :class="color.light ? 'text-black/40' : 'text-white/50'">{{ color.hex }}</span>
              </div>
              <!-- Copy indicator -->
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span class="text-white text-xs font-display">{{ copied === color.hex ? '✓' : 'Copy' }}</span>
              </div>
            </div>
            <p class="text-[11px] text-white/40 truncate">{{ color.name }}</p>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <!-- Color Ratio Bar -->
      <ScrollReveal :delay="200">
      <div class="mb-20">
        <h3 class="font-display text-sm tracking-[0.2em] uppercase text-white/50 mb-6">Color Ratio</h3>
        <div class="flex h-12 rounded-xl overflow-hidden mb-4">
          <div
            v-for="ratio in data.colorRatio"
            :key="ratio.hex"
            class="flex items-center justify-center text-xs font-mono"
            :class="ratio.textColor"
            :style="{ width: ratio.percent + '%', background: ratio.hex }"
          >
            {{ ratio.percent }}%
          </div>
        </div>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/30">
          <span v-for="ratio in data.colorRatio" :key="ratio.hex" class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" :style="{ background: ratio.hex }"></span> {{ ratio.name }}
          </span>
        </div>
      </div>
      </ScrollReveal>

      <!-- Typography -->
      <ScrollReveal :delay="300">
      <div>
        <h3 class="font-display text-sm tracking-[0.2em] uppercase text-white/50 mb-6">Typography</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Brand / Logo Font -->
          <div class="glass rounded-2xl p-8 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-quantum-cyan/[0.04] via-transparent to-warm-entity/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <span class="text-[10px] tracking-[0.2em] uppercase text-quantum-cyan/80 block mb-4 relative z-10">Brand / Logo Font</span>
            <p class="font-brand text-4xl text-white mb-2 relative z-10">{{ data.typography.brand.sample }}</p>
            <p class="text-xs text-white/30 mb-4 relative z-10">{{ data.typography.brand.name }} · {{ data.typography.brand.category }} · {{ data.typography.brand.weights }}</p>
            <p class="text-[11px] text-white/25 relative z-10">{{ data.typography.brand.usage }}</p>
          </div>
          <!-- Display Typeface -->
          <div class="glass rounded-2xl p-8">
            <span class="text-[10px] tracking-[0.2em] uppercase text-quantum-cyan/60 block mb-4">Display Typeface</span>
            <p class="font-display text-4xl font-bold text-white mb-2">{{ data.typography.display.name }}</p>
            <p class="text-xs text-white/30 mb-4">{{ data.typography.display.category }} · Weights {{ data.typography.display.weights }}</p>
            <p class="font-display text-lg text-white/50 leading-relaxed">{{ data.typography.display.sample }}</p>
          </div>
          <!-- Body Typeface -->
          <div class="glass rounded-2xl p-8">
            <span class="text-[10px] tracking-[0.2em] uppercase text-warm-entity/60 block mb-4">Body Typeface</span>
            <p class="text-4xl font-semibold text-white mb-2">{{ data.typography.body.name }}</p>
            <p class="text-xs text-white/30 mb-4">{{ data.typography.body.category }} · Weights {{ data.typography.body.weights }}</p>
            <p class="text-base text-white/50 leading-relaxed">{{ data.typography.body.sample }}</p>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { brand, t } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = brand
const heading = t(brand.heading)
const copied = ref<string | null>(null)

function copyColor(hex: string) {
  navigator.clipboard.writeText(hex).then(() => {
    copied.value = hex
    setTimeout(() => { copied.value = null }, 1500)
  })
}
</script>
