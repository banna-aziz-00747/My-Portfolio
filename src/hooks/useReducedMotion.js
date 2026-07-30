let cached = null

export function prefersReducedMotion() {
  if (cached !== null) return cached
  cached =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return cached
}

export function isFinePointer() {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
}
