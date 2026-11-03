import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useInView(options = { threshold: 0.4 }) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    // Old browsers (and tests) don't have IntersectionObserver: just show it
    if (!('IntersectionObserver' in window)) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    }, options)

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
