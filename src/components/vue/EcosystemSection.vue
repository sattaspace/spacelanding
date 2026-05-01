<template>
  <section id="ecosystem" class="relative py-24 md:py-32 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-cyan/20 to-transparent"></div>

    <!-- Grid BG -->
    <div class="absolute inset-0 opacity-[0.012]" style="background-image: linear-gradient(rgba(0,180,230,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,230,1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section Header -->
      <ScrollReveal>
        <div class="text-center mb-16 md:mb-20">
          <span class="text-xs tracking-[0.3em] uppercase text-quantum-cyan/60 font-display block mb-4">{{ data.sectionLabel }}</span>
          <h2 class="font-display text-3xl md:text-5xl font-bold text-white mb-4" v-html="heading"></h2>
          <p class="text-white/40 max-w-2xl mx-auto leading-relaxed">
            {{ data.subheading }}
          </p>
        </div>
      </ScrollReveal>

      <!-- Sub-brand Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ScrollReveal v-for="(brand, i) in data.brands" :key="i" :delay="i * 80">
          <div
            class="group relative glass rounded-2xl p-6 h-full hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
            @mouseenter="hoveredBrand = i"
            @mouseleave="hoveredBrand = null"
          >
            <!-- Hover Glow -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              :style="{ background: `radial-gradient(circle at 50% 50%, ${brand.color}08 0%, transparent 70%)` }"
            ></div>

            <!-- Top Accent Line -->
            <div
              class="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
              :style="{ background: `linear-gradient(90deg, transparent, ${brand.color}, transparent)` }"
            ></div>

            <!-- Bottom Glow Bar -->
            <div
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
              :style="{ background: brand.color, boxShadow: `0 0 20px ${brand.color}40` }"
            ></div>

            <div class="relative z-10">
              <!-- Icon + Name -->
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  :style="{ background: brand.color, boxShadow: hoveredBrand === i ? `0 0 25px ${brand.color}30` : 'none' }"
                >
                  {{ brand.icon }}
                </div>
                <div>
                  <h3 class="font-display text-base font-bold text-white group-hover:transition-colors">{{ brand.name }}</h3>
                  <span class="text-[11px] font-mono text-white/25">{{ brand.hex }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-sm text-white/40 leading-relaxed mb-5">{{ brand.desc }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in brand.tags"
                  :key="tag"
                  class="px-2.5 py-1 text-[10px] tracking-wider uppercase rounded-md border transition-all duration-300"
                  :style="{
                    borderColor: hoveredBrand === i ? brand.color + '30' : 'rgba(255,255,255,0.06)',
                    color: hoveredBrand === i ? brand.color : 'rgba(255,255,255,0.3)',
                    background: hoveredBrand === i ? brand.color + '08' : 'transparent'
                  }"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Arrow -->
              <div
                class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                :style="{ color: brand.color }"
              >
                →
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- Mother Brand Note -->
      <ScrollReveal :delay="500">
        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-3 glass-light rounded-full px-6 py-3">
            <div class="w-2 h-2 bg-quantum-cyan rounded-full animate-pulse-glow"></div>
            <span class="text-xs text-white/30 tracking-wider">{{ data.growingNote }}</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ecosystem, t } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = ecosystem
const heading = t(ecosystem.heading)
const hoveredBrand = ref<number | null>(null)
</script>
