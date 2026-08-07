import { Suspense, lazy } from 'react'
import { useCountUp } from '../hooks/useCountUp.js'
import { useMagnetic } from '../hooks/useMagnetic.js'
import './Hero.css'

const CircuitField = lazy(() => import('../three/CircuitField.jsx'))

export default function Hero() {
  const [yearsRef, years] = useCountUp(6, { suffix: '+', duration: 900 })
  const [modulesRef, modules] = useCountUp(40, { suffix: '+', duration: 1200 })
  const [rolesRef, roles] = useCountUp(7, { duration: 800 })
  const primaryBtnRef = useMagnetic(0.25)
  const ghostBtnRef = useMagnetic(0.25)

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
          Senior Full-Stack Engineer <span className="hero__role-sep">/</span> React, Next.js, Node.js &amp; TypeScript
        </p>

        <p className="hero__desc">
          Frontend-Leaning Full-Stack Engineer with 6+ years turning dense product requirements into interfaces
          that feel inevitable — architected for scale, tuned for speed,
          and finished with the eye of someone who once drew the pictures
          by hand before he built the systems that render them.
        </p>

        <div className="hero__actions">
          <a
            ref={primaryBtnRef}
            href="#projects"
            className="hero__btn hero__btn--primary"
          >
            View selected work
          </a>
          <a ref={ghostBtnRef} href="#contact" className="hero__btn hero__btn--ghost">
            Get in touch
          </a>
        </div>

        <div className="hero__stats">
          <div ref={yearsRef} className="hero__stat">
            <span className="mono hero__stat-num">{years}</span>
            <span className="hero__stat-label">Years in production frontend</span>
          </div>
          <div ref={modulesRef} className="hero__stat">
            <span className="mono hero__stat-num">{modules}</span>
            <span className="hero__stat-label">UI modules shipped at Friends Corp.</span>
          </div>
          <div ref={rolesRef} className="hero__stat">
            <span className="mono hero__stat-num">{roles}</span>
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
