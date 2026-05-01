<template>
  <Teleport to="body" :disabled="!mounted">
    <transition name="fade-up">
      <button
        v-if="show"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-[9999] w-11 h-11 rounded-xl glass flex items-center justify-center text-quantum-cyan hover:bg-quantum-cyan/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,180,230,0.15)] group"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
const mounted = ref(false)

function handleScroll() {
  show.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  mounted.value = true
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}
</style>
