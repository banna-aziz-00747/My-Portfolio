import { useEffect, useRef } from 'react'
import { isFinePointer, prefersReducedMotion } from './useReducedMotion.js'

/**
 * Nudges the element toward the cursor while it's hovered, within `strength`
 * of the pointer offset, and springs back on leave.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion() || !isFinePointer()) return
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const onLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
