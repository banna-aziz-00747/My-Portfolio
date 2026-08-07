import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { isFinePointer, prefersReducedMotion } from '../hooks/useReducedMotion.js'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    name: 'Hyperlocal Work Marketplace',
    desc: 'Bengali-first PWA connecting job seekers and employers in Bandarban, Bangladesh.',
    tags: ['React 19', 'Full-Stack', 'PWA'],
    href: 'https://www.connectbandarban.com/',
  },
  {
    id: '02',
    name: 'Property Management System',
    desc: 'Scalable multi-tenant frontend for a Japanese real estate client, handling apartment listings, tenants and management workflows end to end.',
    tags: ['React', 'Next.js', 'Multi-tenant'],
    href: 'https://app.inaflash-prop.com/auth/login',
  },
  {
    id: '03',
    name: 'Healthcare Management Platform',
    desc: 'React frontend for medical product distribution, streamlining ordering and inventory workflows for 200+ practitioners.',
    tags: ['React', 'Healthcare', 'Workflow UI'],
    href: 'https://app.xcareplatform.com/login',
  },
   {
    id: '04',
    name: 'TestJet',
    desc: 'Web automation tool for QA teams. Built the React frontend that turns manual test scripts into repeatable, shareable automation runs.',
    tags: ['React', 'Testing Tools', 'Dashboard'],
    href: 'https://www.testjet.dev/',
  },
   {
    id: '05',
    name: 'Netiworld A Platform of Collaboration',
    desc: "Student, parent and teacher's collaboration platform to exchanging their information, Netiworld is the social community site for education",
    tags: ['React', 'Redux', 'Education', "Collaboration", "Multirole application"],
    href: 'https://banna00747.github.io/demo-travel-site',
  },
   {
    id: '06',
    name: 'Colabo Talk',
    desc: 'Colabo Talk is a team chat and collaboration application designed to improve communication across different projects and departments',
    tags: ['React', 'Team Communication', 'Chat Application', 'Collaboration'],
    href: 'https://talk.colaboapp.com/signin',
  },
  {
    id: '07',
    name: 'Travel Agency Portfolio Site',
    desc: 'A themed portfolio build exploring editorial layout and motion for a travel-agency concept brand.',
    tags: ['React', 'Design', 'Portfolio'],
    href: 'https://banna00747.github.io/demo-travel-site',
  },
]

function handleTilt(e) {
  if (prefersReducedMotion() || !isFinePointer()) return
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  card.style.setProperty('--rx', `${(0.5 - py) * 9}deg`)
  card.style.setProperty('--ry', `${(px - 0.5) * 9}deg`)
  card.style.setProperty('--mx', `${px * 100}%`)
  card.style.setProperty('--my', `${py * 100}%`)
}

function resetTilt(e) {
  const card = e.currentTarget
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}

export default function Projects() {
  return (
    <section id="projects" className="proj">
      <SectionHeading
        index={3}
        label="PROJECTS"
        title="Selected work"
        note="A handful of the products shipped across fintech, real estate, healthcare and internal tooling. Several enterprise builds remain behind client logins and aren't listed here."
      />

      <div className="proj__grid">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.id}
            as="a"
            delay={i * 80}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="proj__card"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="proj__card-top">
              <span className="mono proj__id">{p.id}</span>
              <span className="proj__arrow" aria-hidden="true">↗</span>
            </div>
            <h3 className="proj__name">{p.name}</h3>
            <p className="proj__desc">{p.desc}</p>
            <div className="proj__tags">
              {p.tags.map((t) => (
                <span key={t} className="mono proj__tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="proj__note">
        <span className="mono proj__note-label">ALSO SHIPPED</span>
        <p>
          12+ additional React and Vue applications for fintech and SaaS
          clients — including an e-wallet system, merchant dashboard, and
          CMS — built internally between 2019 and 2025 and not publicly
          accessible.
        </p>
      </div>
    </section>
  )
}
