<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'glass py-3' : 'py-5'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <img src="/favicon.svg" alt="SattaSpace Logo" class="w-11 h-11 rounded-lg group-hover:shadow-[0_0_15px_rgba(0,180,230,0.2)] transition-all duration-300" />
        <span class="font-brand text-2xl">
          <span class="text-white">{{ namePrefix }}</span><span class="text-quantum-cyan">{{ nameSuffix }}</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-xs tracking-[0.15em] uppercase text-white/40 hover:text-quantum-cyan transition-colors duration-300 font-display"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden w-10 h-10 flex items-center justify-center text-white/50 hover:text-quantum-cyan transition-colors"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileOpen" class="md:hidden glass mt-2 mx-4 rounded-xl p-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block py-3 px-4 text-sm text-white/50 hover:text-quantum-cyan transition-colors font-display tracking-wider"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { site, nav } from '../../data/site'

const scrolled = ref(false)
const mobileOpen = ref(false)

// Derive logo parts from site name
const namePrefix = computed(() => site.name.slice(0, -4))  // e.g. "Satta"
const nameSuffix = computed(() => site.name.slice(-4))       // e.g. "Space"

const links = nav.links

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
