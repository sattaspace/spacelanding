<template>
  <section class="relative py-24 md:py-32 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-deep-space via-cosmic-navy/60 to-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-entity/20 to-transparent"></div>

    <!-- Radial glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-quantum-cyan/[0.02] blur-[120px]"></div>

    <div class="relative z-10 max-w-5xl mx-auto">
      <ScrollReveal>
      <div class="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <!-- Decorative corners -->
        <div class="absolute top-0 left-0 w-20 h-20 border-t border-l border-quantum-cyan/10 rounded-tl-3xl"></div>
        <div class="absolute top-0 right-0 w-20 h-20 border-t border-r border-quantum-cyan/10 rounded-tr-3xl"></div>
        <div class="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-quantum-cyan/10 rounded-bl-3xl"></div>
        <div class="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-quantum-cyan/10 rounded-br-3xl"></div>

        <!-- Content -->
        <div class="relative z-10">
          <!-- Vision Emblem -->
          <div class="flex justify-center mb-8">
            <div class="relative">
              <div class="absolute -inset-2 bg-warm-entity/10 rounded-2xl blur-lg"></div>
              <img src="/favicon.svg" alt="SattaSpace" class="relative w-12 h-12 rounded-xl shadow-[0_0_20px_rgba(255,107,53,0.15)]" />
            </div>
          </div>

          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warm-entity/20 bg-warm-entity/[0.05] mb-8">
            <span class="w-1.5 h-1.5 bg-warm-entity rounded-full animate-pulse-glow"></span>
            <span class="text-xs tracking-[0.25em] uppercase text-warm-entity font-display font-medium">{{ data.kicker }}</span>
          </div>

          <h2 class="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {{ data.headingLine1 }}<br>
            <span class="text-gradient-cyan">{{ data.headingLine2Prefix }}</span> <span class="text-gradient-warm">{{ data.headingLine2Suffix }}</span>
          </h2>

          <p class="text-white/40 max-w-2xl mx-auto leading-relaxed text-lg mb-10">
            {{ data.description }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a :href="data.ctaPrimary.href" class="group relative px-8 py-3.5 bg-warm-entity text-white font-display font-semibold text-sm tracking-wider uppercase rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:scale-105">
              <span class="relative z-10">{{ data.ctaPrimary.label }}</span>
              <div class="absolute inset-0 bg-amber-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a :href="data.ctaSecondary.href" class="px-8 py-3.5 border border-white/10 text-white/60 font-display font-medium text-sm tracking-wider uppercase rounded-lg hover:border-warm-entity/30 hover:text-warm-entity transition-all duration-300 hover:scale-105">
              {{ data.ctaSecondary.label }}
            </a>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { vision } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = vision
</script>
