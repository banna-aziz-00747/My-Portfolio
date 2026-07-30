import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'
import './BootIntro.css'

const LINES = [
  'SYSTEM BOOT — M. ABDUL AZIZ / FRONTEND ENGINEER',
  'LOADING MODULES: react · three.js · vite',
  'COMPILING INTERFACE LAYER...',
  'CALIBRATING SIGNAL PATHS...',
  'STATUS: READY',
]

const SEEN_KEY = 'boot-intro-seen'

export default function BootIntro() {
  const [skip] = useState(
    () => prefersReducedMotion() || sessionStorage.getItem(SEEN_KEY) === '1'
  )
  const [lineCount, setLineCount] = useState(0)
  const [closing, setClosing] = useState(false)
  const [done, setDone] = useState(skip)

  useEffect(() => {
    if (skip) return

    const timers = []
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLineCount(i + 1), 220 + i * 190))
    })
    timers.push(
      setTimeout(() => setClosing(true), 220 + LINES.length * 190 + 260)
    )
    timers.push(
      setTimeout(() => {
        setDone(true)
        sessionStorage.setItem(SEEN_KEY, '1')
      }, 220 + LINES.length * 190 + 260 + 650)
    )

    return () => timers.forEach(clearTimeout)
  }, [skip])

  const finish = () => {
    if (done) return
    setClosing(true)
    setDone(true)
    sessionStorage.setItem(SEEN_KEY, '1')
  }

  if (done) return null

  return (
    <div
      className={`boot ${closing ? 'boot--closing' : ''}`}
      onClick={finish}
      role="presentation"
    >
      <div className="boot__grid" aria-hidden="true" />
      <div className="boot__panel mono">
        {LINES.slice(0, lineCount).map((line, i) => (
          <p key={line} className="boot__line" style={{ '--i': i }}>
            <span className="boot__prompt">&gt;</span> {line}
          </p>
        ))}
        <div className="boot__bar">
          <div
            className="boot__bar-fill"
            style={{ width: `${(lineCount / LINES.length) * 100}%` }}
          />
        </div>
      </div>
      <button className="boot__skip mono" onClick={finish} type="button">
        SKIP ↵
      </button>
    </div>
  )
}
