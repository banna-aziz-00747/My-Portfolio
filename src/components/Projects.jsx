import SectionHeading from './SectionHeading.jsx'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    name: 'TestJet',
    desc: 'Web automation tool for QA teams. Built the React frontend that turns manual test scripts into repeatable, shareable automation runs.',
    tags: ['React', 'Testing Tools', 'Dashboard'],
    href: 'https://app.testjet.ai/login',
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
    name: 'Travel Agency Portfolio Site',
    desc: 'A themed portfolio build exploring editorial layout and motion for a travel-agency concept brand.',
    tags: ['React', 'Design', 'Portfolio'],
    href: 'https://banna00747.github.io/demo-travel-site',
  },
]

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
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="proj__card"
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
          </a>
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
