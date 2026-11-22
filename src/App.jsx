import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certificates from './components/Certificates'

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
    }
  }, [theme])

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
      </div>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Section id="certificates" badge="01 · Батламж" title="Сайн дурын ажил ба эрдэм шинжилгээ">
          <Certificates />
        </Section>
        <Section id="skills" badge="02 · Ур чадвар" title="Мэргэжлийн ур чадвар">
          <Skills />
        </Section>
        <Section id="projects" badge="03 · Бүтээлүүд" title="Сүүлийн бүтээлүүд">
          <Projects />
        </Section>
        <Section id="contact" badge="04 · Холбоо барих" title="Хамтдаа ажиллах уу?">
          <Contact />
        </Section>
      </main>
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Эрдэнэ-Очирын Хулан</p>
        <a href="#about">Дээш буцах ↑</a>
      </footer>
    </>
  )
}
