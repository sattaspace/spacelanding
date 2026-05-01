<template>
  <div
    ref="el"
    class="scroll-reveal"
    :class="visible ? 'is-visible' : 'is-hidden'"
    :style="delay ? { transitionDelay: delay + 'ms' } : {}"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  delay?: number
  threshold?: number
}>(), {
  delay: 0,
  threshold: 0.15,
})

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { visible.value = true }, props.delay)
        observer?.disconnect()
      }
    },
    { threshold: props.threshold }
  )
  observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.scroll-reveal {
  display: flex;
  flex-direction: column;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.scroll-reveal > :deep(*) {
  flex-grow: 1;
}
.is-hidden {
  opacity: 0;
  transform: translateY(40px);
}
.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
