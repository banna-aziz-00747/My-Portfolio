import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReducedMotion.js'

/**
 * Animates an integer from 0 to `target` once the returned ref scrolls
 * into view. `suffix` is appended untouched (e.g. "+").
 */
export function useCountUp(target, { duration = 1100, suffix = '' } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0)
  const started = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()

        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(eased * target))
          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, `${value}${suffix}`]
}
