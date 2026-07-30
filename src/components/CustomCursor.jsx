import { useEffect, useRef } from 'react'
import { isFinePointer, prefersReducedMotion } from '../hooks/useReducedMotion.js'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [data-cursor-hover]'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const active = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion() || !isFinePointer()) return

    document.body.classList.add('custom-cursor')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: target.x, y: target.y }
    let frame

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!active.current) {
        active.current = true
        dotRef.current?.classList.add('cursor-dot--visible')
        ringRef.current?.classList.add('cursor-ring--visible')
      }
    }

    const onOver = (e) => {
      const hit = e.target.closest?.(INTERACTIVE_SELECTOR)
      ringRef.current?.classList.toggle('cursor-ring--hover', !!hit)
    }

    const onLeaveWindow = () => {
      active.current = false
      dotRef.current?.classList.remove('cursor-dot--visible')
      ringRef.current?.classList.remove('cursor-ring--visible')
    }

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeaveWindow)
    frame = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeaveWindow)
      cancelAnimationFrame(frame)
    }
  }, [])

  if (prefersReducedMotion() || !isFinePointer()) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
