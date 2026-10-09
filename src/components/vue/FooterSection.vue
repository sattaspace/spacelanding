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
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="/favicon.svg" alt="SattaSpace Logo" class="w-8 h-8 rounded-lg" />
            <span class="font-brand text-lg">
              <span class="text-white">{{ namePrefix }}</span><span class="text-quantum-cyan">{{ nameSuffix }}</span>
            </span>
          </div>
          <p class="text-sm text-white/40 leading-relaxed max-w-sm mb-4">
            {{ data.tagline }}
          </p>
          <div class="flex items-center gap-2">
            <span class="text-xs px-2.5 py-1 rounded-full bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/20">
              সত্ত্বা = Entity / Essence
            </span>
            <span class="text-xs text-white/30">{{ data.establishedLabel }}</span>
          </div>
        </div>

        <!-- Ecosystem -->
        <div>
          <h4 class="font-display text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Ecosystem</h4>
          <ul class="space-y-2.5">
            <li><a href="/ecosystem" class="text-sm text-quantum-cyan hover:underline transition-colors font-medium">All Entities Directory →</a></li>
            <li><a href="https://blogs.sattaspace.com/" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Blogs & Insights</a></li>
            <li><a href="https://tools.sattaspace.com/" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Developer Tools</a></li>
            <li><a href="https://tokenops.sattaspace.com/" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">TokenOps Utility</a></li>
            <li><a href="https://mechtime.sattaspace.com/" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Mech Time Horology</a></li>
          </ul>
        </div>

        <!-- Trust & Legal (AdSense Mandatory) -->
        <div>
          <h4 class="font-display text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Trust & Legal</h4>
          <ul class="space-y-2.5">
            <li><a href="/about" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">About SattaSpace</a></li>
            <li><a href="/contact" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Contact & Location</a></li>
            <li><a href="/privacy-policy" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">Terms of Service</a></li>
            <li><a href="/disclaimer" class="text-sm text-warm-entity/80 hover:text-warm-entity transition-colors">Brand Disclaimer</a></li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h4 class="font-display text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Connect</h4>
          <ul class="space-y-2.5">
            <li><a :href="'mailto:' + data.ctaEmail" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">{{ data.ctaEmail }}</a></li>
            <li><span class="text-sm text-white/40">{{ data.locationLabel }}</span></li>
            <li v-if="siteData.twitter"><a :href="'https://twitter.com/' + siteData.twitter" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">X (Twitter)</a></li>
            <li v-if="siteData.linkedin"><a :href="siteData.linkedin" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">LinkedIn</a></li>
            <li v-if="siteData.github"><a :href="siteData.github" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-quantum-cyan transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>
      </ScrollReveal>

      <!-- Non-Gambling AdSense Policy Notice -->
      <div class="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-white/40 leading-relaxed text-center md:text-left">
        <span class="text-quantum-cyan font-semibold">Important Clarification:</span> {{ data.disclaimerNote }}
      </div>

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
import { site as siteData, footer, ecosystem, legal, t } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const data = footer
const heading = t(footer.heading)
const namePrefix = computed(() => siteData.name.slice(0, -4))
const nameSuffix = computed(() => siteData.name.slice(-4))
</script>