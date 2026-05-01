<template>
  <section id="philosophy" class="relative py-24 md:py-32 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-deep-space via-cosmic-navy/50 to-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-cyan/20 to-transparent"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
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

      <!-- Philosophy Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal v-for="(item, i) in data.items" :key="i" :delay="i * 100">
          <div
            class="group glass rounded-2xl p-8 h-full hover:border-quantum-cyan/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
          >
            <!-- Shimmer effect on hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>

            <div class="flex items-start gap-5 relative z-10">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" :class="item.iconBg">
                <span v-html="item.icon"></span>
              </div>
              <div class="flex-1">
                <h3 class="font-display text-lg font-bold text-white mb-2" v-html="item.title"></h3>
                <p class="text-sm text-white/40 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- Bengali Quote -->
      <ScrollReveal :delay="400">
        <div class="mt-16 text-center">
          <div class="inline-block glass-light rounded-2xl px-10 py-8 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-r from-quantum-cyan/[0.03] via-transparent to-warm-entity/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p class="text-3xl md:text-4xl text-quantum-cyan/20 font-light mb-3 relative z-10">{{ data.bengaliQuote }}</p>
            <p class="text-sm text-white/30 tracking-wider relative z-10">{{ data.bengaliQuoteSub }}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { philosophy, t } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = philosophy
const heading = t(philosophy.heading)
</script>
