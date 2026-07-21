import './SectionHeading.css'

export default function SectionHeading({ index, label, title, note }) {
  return (
    <div className="sh">
      <p className="mono sh__ref">
        REF/0{index} — {label}
      </p>
      <h2 className="sh__title">{title}</h2>
      {note && <p className="sh__note">{note}</p>}
    </div>
  )
}
