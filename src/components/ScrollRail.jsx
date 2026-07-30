import { useEffect, useRef } from 'react'
import './ScrollRail.css'

const SECTIONS = [
  { id: 'about', ref: '01' },
  { id: 'experience', ref: '02' },
  { id: 'projects', ref: '03' },
  { id: 'stack', ref: '04' },
  { id: 'contact', ref: '05' },
]

export default function ScrollRail() {
  const fillRef = useRef(null)
  const dotRef = useRef(null)
  const tickRefs = useRef([])
  const percents = useRef([])

  useEffect(() => {
    const computePercents = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      percents.current = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el || scrollable <= 0) return 0
        return Math.min(100, Math.max(0, (el.offsetTop / scrollable) * 100))
      })
      tickRefs.current.forEach((tick, i) => {
        if (tick) tick.style.top = `${percents.current[i]}%`
      })
    }

    let ticking = false
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      const pct = progress * 100

      if (fillRef.current) fillRef.current.style.height = `${pct}%`
      if (dotRef.current) dotRef.current.style.top = `${pct}%`

      tickRefs.current.forEach((tick, i) => {
        if (!tick) return
        tick.classList.toggle('rail__tick--active', pct >= percents.current[i] - 0.5)
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    computePercents()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', computePercents)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', computePercents)
    }
  }, [])

  return (
    <div className="rail" aria-hidden="true">
      <div className="rail__track">
        <div ref={fillRef} className="rail__fill" />
      </div>
      <div ref={dotRef} className="rail__dot" />
      {SECTIONS.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => (tickRefs.current[i] = el)}
          className="rail__tick"
        >
          <span className="rail__tick-mark" />
          <span className="mono rail__tick-label">REF/{s.ref}</span>
        </div>
      ))}
    </div>
  )
}
