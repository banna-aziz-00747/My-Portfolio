import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BootIntro from './components/BootIntro.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ScrollRail from './components/ScrollRail.jsx'

export default function App() {
  return (
    <>
      <BootIntro />
      <CustomCursor />
      <ScrollRail />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
