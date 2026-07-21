import SectionHeading from './SectionHeading.jsx'
import './Stack.css'

const GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks',
    items: ['Next.js'],
  },
  {
    label: 'Libraries',
    items: ['React', 'Redux', 'Vue.js', 'Vuex', 'jQuery'],
  },
  {
    label: 'UI Libraries',
    items: ['MUI', 'PrimeReact', 'Mantine UI', 'Chakra UI', 'PrimeVue', 'React Bootstrap', 'AntD'],
  },
  {
    label: 'Frontend Design',
    items: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'Cypress'],
  },
  {
    label: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    label: 'API',
    items: ['REST API'],
  },
  {
    label: 'AI Skills',
    items: ['AI-native development', 'n8n workflow automation', 'AI model integration'],
  },
  {
    label: 'Organizational',
    items: ['Leadership', 'Team management'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <SectionHeading
        index={4}
        label="STACK"
        title="Parts list"
        note="The tools reached for most often — organized the way a spec sheet would list them."
      />

      <div className="stack__grid">
        {GROUPS.map((g) => (
          <div key={g.label} className="stack__group">
            <span className="mono stack__group-label">{g.label}</span>
            <div className="stack__items">
              {g.items.map((item) => (
                <span key={item} className="stack__item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
