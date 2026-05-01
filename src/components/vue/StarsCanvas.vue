<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null
let stars: { x: number; y: number; size: number; speed: number; opacity: number; pulse: number }[] = []

function init() {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const resize = () => {
    el.width = el.offsetWidth * window.devicePixelRatio
    el.height = el.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }
  resize()
  window.addEventListener('resize', resize)

  const w = () => el.offsetWidth
  const h = () => el.offsetHeight

  // Generate stars
  stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * w(),
    y: Math.random() * h(),
    size: Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.15 + 0.02,
    opacity: Math.random() * 0.6 + 0.1,
    pulse: Math.random() * Math.PI * 2,
  }))

  // Shooting stars
  let shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; angle: number }[] = []

  function maybeAddShootingStar() {
    if (Math.random() < 0.003 && shootingStars.length < 2) {
      shootingStars.push({
        x: Math.random() * w(),
        y: Math.random() * h() * 0.5,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      })
    }
  }

  function animate() {
    if (!ctx || !el) return
    ctx.clearRect(0, 0, w(), h())

    // Draw stars
    const time = Date.now() * 0.001
    for (const star of stars) {
      const flicker = Math.sin(time * star.speed * 10 + star.pulse) * 0.3 + 0.7
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 180, 230, ${star.opacity * flicker})`
      ctx.fill()
    }

    // Shooting stars
    maybeAddShootingStar()
    shootingStars = shootingStars.filter(s => s.opacity > 0)
    for (const s of shootingStars) {
      const endX = s.x + Math.cos(s.angle) * s.len
      const endY = s.y + Math.sin(s.angle) * s.len
      const grad = ctx.createLinearGradient(s.x, s.y, endX, endY)
      grad.addColorStop(0, `rgba(0, 180, 230, ${s.opacity})`)
      grad.addColorStop(1, 'rgba(0, 180, 230, 0)')
      ctx.beginPath()
      ctx.moveTo(s.x, s.y)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.2
      ctx.stroke()

      s.x += Math.cos(s.angle) * s.speed
      s.y += Math.sin(s.angle) * s.speed
      s.opacity -= 0.012
    }

    animationId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
}

onMounted(init)
</script>
