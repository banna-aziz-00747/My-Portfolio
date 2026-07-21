import SectionHeading from './SectionHeading.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <SectionHeading
        index={1}
        label="ABOUT"
        title="From hand-drawn frames to rendered interfaces"
      />

      <div className="about__grid">
        <div className="about__copy">
          <p>
            Before there was a component tree, there was a light table.
            Mohammad started his career as a 2D digital artist, drawing
            character and background assets for animation studios in Dhaka —
            work that lives or dies on precision, proportion, and how a
            single frame reads at a glance.
          </p>
          <p>
            That eye moved with him into frontend engineering. Over six-plus
            years he has shipped production React, Next.js and Vue.js
            applications for fintech, healthcare, real estate and SaaS
            products across Bangladesh and Japan — 40+ UI modules for
            enterprise clients in Tokyo alone, translated straight from
            Figma into interfaces that hold up under real usage.
          </p>
          <p>
            He works comfortably at both ends of the stack boundary:
            structuring state and API contracts on one side, and Jest /
            Cypress test suites that keep regressions out on the other. More
            recently, that same instinct for tooling has moved into
            AI-native development — wiring model calls and n8n automations
            into the products he builds.
          </p>
        </div>

        <div className="about__facts">
          <div className="about__fact">
            <span className="mono about__fact-label">BASE</span>
            <span className="about__fact-value">Chittagong, Bangladesh</span>
          </div>
          <div className="about__fact">
            <span className="mono about__fact-label">FOCUS</span>
            <span className="about__fact-value">React · Next.js · TypeScript</span>
          </div>
          <div className="about__fact">
            <span className="mono about__fact-label">WORKED WITH</span>
            <span className="about__fact-value">Clients across Bangladesh &amp; Japan</span>
          </div>
          <div className="about__fact">
            <span className="mono about__fact-label">EDUCATION</span>
            <span className="about__fact-value">
              B.Sc. Computer Science &amp; Engineering — International
              Islamic University Chittagong
            </span>
          </div>
          <div className="about__fact">
            <span className="mono about__fact-label">ORIGIN</span>
            <span className="about__fact-value">2D digital artist, animation industry</span>
          </div>
        </div>
      </div>
    </section>
  )
}
