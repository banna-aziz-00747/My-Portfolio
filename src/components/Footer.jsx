import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="mono footer__line">
        © {year} MOHAMMAD ABDUL AZIZ — BUILT WITH REACT, THREE.JS &amp; VITE
      </p>
      <a href="#top" className="mono footer__top">
        BACK TO TOP ↑
      </a>
    </footer>
  )
}
