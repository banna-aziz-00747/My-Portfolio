import { Suspense, lazy } from 'react'
import './Hero.css'

const CircuitField = lazy(() => import('../three/CircuitField.jsx'))

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__field" aria-hidden="true">
        <Suspense fallback={null}>
          <CircuitField className="hero__canvas" />
        </Suspense>
      </div>

      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <p className="mono hero__eyebrow">
          <span className="hero__dot" /> DHAKA / CHITTAGONG, BANGLADESH — REMOTE
        </p>

        <h1 className="hero__title">
          Mohammad Abdul Aziz
        </h1>

        <p className="hero__role">
          Senior Frontend Engineer <span className="hero__role-sep">/</span> React, Next.js &amp; TypeScript
        </p>

        <p className="hero__desc">
          6+ years turning dense product requirements into interfaces
          that feel inevitable — architected for scale, tuned for speed,
          and finished with the eye of someone who once drew the pictures
          by hand before he built the systems that render them.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View selected work
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Get in touch
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="mono hero__stat-num">6+</span>
            <span className="hero__stat-label">Years in production frontend</span>
          </div>
          <div className="hero__stat">
            <span className="mono hero__stat-num">40+</span>
            <span className="hero__stat-label">UI modules shipped at Friends Corp.</span>
          </div>
          <div className="hero__stat">
            <span className="mono hero__stat-num">7</span>
            <span className="hero__stat-label">Engineering roles, Dhaka to Tokyo</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span className="mono">SCROLL</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
