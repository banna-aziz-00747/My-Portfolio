import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { useInView } from '../hooks/useInView.js'
import './Experience.css'

const ROLES = [
  {
    company: 'Connect Bandarban',
    role: 'Solo Founder & Full-Stack Engineer',
    location: 'Bandarban, Bangladesh',
    period: 'Jan 2026 — Present',
    points: [
      'Designed, built, and shipped a full-stack marketplace PWA.',
      'Architected the backend around Prisma/PostgreSQL and Express.',
      'Built a real-time messaging system.',
      'Instrumented product analytics with PostHog.',
      'Set up CI/CD from scratch.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'TanStack Router/Query',
      'Zustand',
      'Tailwind CSS v4',
      'Vite',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Socket.IO',
      'JWT auth',
      'PostHog',
      'Nginx',
      'PM2',
      'GitHub Actions',
      'Contabo VPS',
    ],
  },
  {
    company: 'Friends Corp.',
    role: 'Senior Software Engineer',
    location: 'Tokyo, Remote',
    period: 'May 2023 — Jul 2025',
    points: [
      'Architected and scaled enterprise React + Next.js + TypeScript applications for Japanese clients.',
      'Delivered 40+ responsive UI modules from Figma, boosting development speed.',
      'Integrated complex API logic and form validations, cutting production bugs.',
      'Optimized frontend performance and worked on improving team velocity.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Chakra UI', 'MUI', 'AntD'],
  },
  {
    company: 'GeekPicker Limited',
    role: 'Front End Engineer',
    location: 'Dhaka, Bangladesh',
    period: 'Aug 2021 — Apr 2023',
    points: [
      'Built pixel-perfect React UI components for SaaS platforms.',
      'Reduced page load time through code-splitting and performance tuning.',
      'Automated testing with Jest & Cypress, raising coverage and reducing QA cycles.',
      'Collaborated with backend engineers to streamline API integration, accelerating delivery by 2 weeks per sprint.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Tailwind CSS', 'MUI', 'AntD', 'Jest', 'Cypress'],
  },
  {
    company: 'Cisscom',
    role: 'Front End Engineer',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2021 — Jul 2021',
    points: [
      'Engineered reusable Vue.js dashboard components.',
      'Improved dashboard responsiveness, increasing mobile adoption.',
    ],
    stack: ['Vue.js', 'Vuex', 'SCSS', 'Bootstrap', 'Jest'],
  },
  {
    company: 'Newroz Technologies Limited',
    role: 'Front End Engineer',
    location: 'Dhaka, Bangladesh',
    period: 'Oct 2020 — Dec 2020',
    points: [
      'Configured React applications for merchant dashboards, admin panels, and landing pages.',
      'Integrated APIs and security validations, ensuring 100% compliance with client requirements.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'Mantine UI', 'Tailwind', 'GitLab CI/CD'],
  },
  {
    company: 'Netizen IT Limited',
    role: 'Front End Developer',
    location: 'Dhaka, Bangladesh',
    period: 'Feb 2019 — Aug 2020',
    points: [
      'Delivered UIs for multiple SaaS products (Eduman, Netiworld, NetiCMS, Admisia) serving 1,000+ active users.',
      'Improved responsive design and accessibility, boosting mobile adoption.',
    ],
    stack: ['React', 'Redux', 'JavaScript', 'PrimeReact', 'TypeScript', 'SCSS', 'Bootstrap'],
  },
  {
    company: 'EndingScene Inc.',
    role: '2D Digital Artist',
    location: 'Dhaka, Bangladesh',
    period: 'May 2018 — Oct 2018',
    points: [
      'Created character and background assets for animation projects, collaborating with cross-functional creative teams.',
    ],
    stack: ['Photoshop', 'Illustration'],
  },
  {
    company: 'Debug BD Limited',
    role: '2D Digital Artist',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2018 — Apr 2018',
    points: [
      'Created background and character assets for animation.',
      'Prepared files into Photoshop layers for animation.',
    ],
    stack: ['Photoshop', 'Illustration'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="exp">
      <SectionHeading
        index={2}
        label="EXPERIENCE"
        title="Eight roles, one throughline"
        note="From hand-drawn animation frames in 2018, through enterprise React systems for Tokyo clients, to founding and shipping a full-stack marketplace platform of his own in 2026."
      />

      <ol className="exp__list">
        {ROLES.map((r) => (
          <ExperienceItem key={`${r.company}-${r.period}`} role={r} />
        ))}
      </ol>
    </section>
  )
}

function ExperienceItem({ role: r }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <li ref={ref} className={`exp__item ${inView ? 'exp__item--active' : ''}`}>
      <div className="exp__marker" aria-hidden="true">
        <span className="exp__marker-dot" />
        <span className="exp__marker-line">
          <span className="exp__marker-line-fill" />
        </span>
      </div>

      <div className={`exp__body reveal ${inView ? 'reveal--visible' : ''}`}>
        <div className="exp__head">
          <h3 className="exp__company">{r.company}</h3>
          <span className="mono exp__period">{r.period}</span>
        </div>
        <p className="exp__role">
          {r.role} <span className="exp__dot">·</span> {r.location}
        </p>
        <ul className="exp__points">
          {r.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
        <div className="exp__stack">
          {r.stack.map((s) => (
            <span key={s} className="mono exp__tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}
