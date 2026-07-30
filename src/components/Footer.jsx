import { useEffect, useState } from 'react'
import './Footer.css'

function dhakaTime() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export default function Footer() {
  const year = new Date().getFullYear()
  const [time, setTime] = useState(dhakaTime)

  useEffect(() => {
    const id = setInterval(() => setTime(dhakaTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer">
      <p className="mono footer__line">
        © {year} MOHAMMAD ABDUL AZIZ — BUILT WITH REACT, THREE.JS &amp; VITE
      </p>
      <p className="mono footer__status">
        <span className="footer__status-dot" aria-hidden="true" />
        DHAKA {time}
      </p>
      <a href="#top" className="mono footer__top">
        BACK TO TOP ↑
      </a>
    </footer>
  )
}
