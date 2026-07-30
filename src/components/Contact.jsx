import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { useMagnetic } from '../hooks/useMagnetic.js'
import './Contact.css'

const CHANNELS = [
  { label: 'Email', value: 'banna00747@gmail.com', href: 'mailto:banna00747@gmail.com' },
  { label: 'Phone', value: '+880 1925 140 327', href: 'tel:+8801925140327' },
  { label: 'LinkedIn', value: 'linkedin.com/in/banna00747', href: 'https://linkedin.com/in/banna00747' },
  { label: 'GitHub', value: 'github.com/banna-aziz-00747', href: 'https://github.com/banna-aziz-00747' },
]

export default function Contact() {
  const mainRef = useMagnetic(0.08)

  return (
    <section id="contact" className="contact">
      <SectionHeading
        index={5}
        label="CONTACT"
        title="Building something worth shipping?"
        note="Open to senior frontend and full-stack roles, and select freelance engagements. Based in Chittagong, working remote."
      />

      <div className="contact__grid">
        <Reveal
          as="a"
          ref={mainRef}
          href="mailto:banna00747@gmail.com"
          className="contact__main"
        >
          <span className="mono contact__main-label">START A CONVERSATION</span>
          <span className="contact__main-email">banna00747@gmail.com</span>
          <span className="contact__main-arrow">↗</span>
        </Reveal>

        <Reveal as="div" delay={100} className="contact__channels">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className="contact__channel"
            >
              <span className="mono contact__channel-label">{c.label}</span>
              <span className="contact__channel-value">{c.value}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
