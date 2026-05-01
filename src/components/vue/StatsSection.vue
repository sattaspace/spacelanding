<template>
  <section class="relative py-20 md:py-28 px-6 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-deep-space"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-cyan/20 to-transparent"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <ScrollReveal v-for="(stat, i) in statsState" :key="i" :delay="i * 100">
          <div class="text-center group">
            <div class="mb-3">
              <span
                class="font-display text-4xl md:text-5xl font-extrabold transition-colors duration-300"
                :class="stat.inView ? 'text-gradient-cyan' : 'text-white/10'"
              >{{ stat.display }}</span>
            </div>
            <p class="text-xs tracking-[0.2em] uppercase text-white/30 font-display group-hover:text-white/50 transition-colors">
              {{ stat.label }}
            </p>
            <div class="w-8 h-px mx-auto mt-3 transition-all duration-500" :class="stat.inView ? 'bg-quantum-cyan/40' : 'bg-white/5'"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { stats } from '../../data/site'
import ScrollReveal from './ScrollReveal.vue'

const statsState = reactive(
  stats.items.map((item) => ({
    ...item,
    display: '0',
    inView: false,
  }))
)

let observer: IntersectionObserver | null = null

function animateCount(index: number) {
  const stat = statsState[index]
  const target = stat.value
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(target * eased)
    stat.display = current + stat.suffix
    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const section = document.querySelector('#stats-section')
  if (!section) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        statsState.forEach((_, i) => {
          setTimeout(() => {
            statsState[i].inView = true
            animateCount(i)
          }, i * 150)
        })
        observer?.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(section)
})

onUnmounted(() => observer?.disconnect())
</script>
