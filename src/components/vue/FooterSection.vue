<template>
  <footer id="connect" class="relative py-20 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-t from-deep-space via-cosmic-navy/40 to-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-cyan/15 to-transparent"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- CTA Section -->
      <ScrollReveal>
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4" v-html="heading"></h2>
          <p class="text-white/40 max-w-lg mx-auto mb-8">
            {{ data.subheading }}
          </p>
          <a :href="'mailto:' + data.ctaEmail" class="inline-flex items-center gap-2 px-8 py-3.5 bg-quantum-cyan text-deep-space font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:shadow-[0_0_30px_rgba(0,180,230,0.3)] hover:scale-105 transition-all duration-300">
            {{ data.ctaLabel }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </ScrollReveal>

      <!-- Footer Grid -->
      <ScrollReveal :delay="100">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="/favicon.svg" alt="SattaSpace Logo" class="w-8 h-8 rounded-lg" />
            <span class="font-brand text-lg">
              <span class="text-white">{{ namePrefix }}</span><span class="text-quantum-cyan">{{ nameSuffix }}</span>
            </span>
          </div>
          <p class="text-sm text-white/30 leading-relaxed max-w-sm mb-4">
            {{ data.tagline }}
          </p>
          <p class="text-lg text-quantum-cyan/20 font-light">{{ siteData.bengaliCredit }}</p>
        </div>

        <!-- Ecosystem -->
        <div>
          <h4 class="font-display text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Ecosystem</h4>
          <ul class="space-y-2.5">
            <li v-for="brand in ecosystemBrands" :key="brand.name">
              <a :href="brand.url" target="_blank" rel="noopener noreferrer" class="text-sm text-white/30 hover:text-quantum-cyan transition-colors">{{ brand.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h4 class="font-display text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Connect</h4>
          <ul class="space-y-2.5">
            <li><a :href="'mailto:' + data.ctaEmail" class="text-sm text-white/30 hover:text-quantum-cyan transition-colors">{{ data.ctaEmail }}</a></li>
            <li><span class="text-sm text-white/30">{{ data.locationLabel }}</span></li>
            <li><span class="text-sm text-white/30">{{ data.establishedLabel }}</span></li>
          </ul>
        </div>
      </div>
      </ScrollReveal>

      <!-- Bottom Bar -->
      <div class="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-[11px] text-white/20">{{ data.copyright }}</p>
        <div class="flex items-center gap-1">
          <span class="text-[11px] text-white/20">{{ data.builtWithPrefix }}</span>
          <span class="text-quantum-cyan/40 mx-0.5">{{ data.bengaliCredit }}</span>
          <span class="text-[11px] text-white/20">{{ data.builtWithSuffix }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { site as siteData, footer, ecosystem, t } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = footer
const heading = t(footer.heading)
const namePrefix = computed(() => siteData.name.slice(0, -4))
const nameSuffix = computed(() => siteData.name.slice(-4))
const ecosystemBrands = ecosystem.brands
</script>
