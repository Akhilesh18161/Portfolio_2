'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Mail, Menu, X } from 'lucide-react'

const projects = [
  { year: '2026', type: 'DATA / VISUALIZATION', name: 'KATHMANDU AIR QUALITY', detail: 'A live dashboard translating urban sensor data into clear, humane stories.', accent: 'orange' },
  { year: '2025', type: 'MACHINE LEARNING', name: 'NEPAL TRAFFIC FLOW', detail: 'Forecasting movement through the Kathmandu valley with open mobility data.', accent: 'blue' },
  { year: '2025', type: 'PRODUCT / RESEARCH', name: 'LUMEN BUDGET', detail: 'A calm finance tool that helps students see where their money goes.', accent: 'yellow' },
  { year: '2024', type: 'COMPUTER VISION', name: 'KRONOS ATELIER', detail: 'Recognising patterns in hand-drawn textile motifs from the Himalayas.', accent: 'red' },
  { year: '2024', type: 'WEB / EXPERIMENT', name: 'SYNCFLOW CLOUD', detail: 'A playful study of realtime collaboration and shared workspaces.', accent: 'black' },
]

const faqs = [
  'How does a typical project take shape?',
  'Do I need to prepare specific data or research beforehand?',
  'What is it like working with you?',
  'Are there recurring maintenance or ongoing retainers?',
  'What if our timeline needs to move?',
  'Is the website completely optimised for mobile devices?',
  'Will I have access to the source code?',
  'Do you also provide teaching or workshops?',
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1050)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className={`page-loader ${isLoading ? '' : 'page-loader-hidden'}`} aria-hidden={!isLoading}>
        <span className="loader-mark">A</span>
        <span className="loader-line"><i /></span>
        <span className="loader-caption">LOADING PORTFOLIO / 2026</span>
      </div>
      <main className={`portfolio-shell ${isLoading ? 'site-loading' : 'site-ready'}`}>
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Akhilesh Yadav home">A</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">WORK <span>↘</span></a>
          <a href="#about">ABOUT <span>↘</span></a>
          <a href="#services">SERVICES <span>↘</span></a>
          <a href="#contact">CONTACT <span>↘</span></a>
        </nav>
        <div className="header-right">
          <span className="availability"><i /> AVAILABLE FOR SELECTED PROJECTS</span>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        <a href="#work" onClick={() => setMenuOpen(false)}>WORK ↘</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT ↘</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>SERVICES ↘</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT ↘</a>
      </nav>}

      <section id="top" className="hero reveal" data-reveal>
        <div className="eyebrow-row"><span>PORTFOLIO / 2026</span><span>KATHMANDU, NEPAL</span></div>
        <h1>DATA <span>THAT</span><br />MAKES <em>IDEAS</em><br /><strong>IMPOSSIBLE</strong> TO IGNORE.</h1>
        <div className="hero-bottom">
          <p className="hero-intro">Fresher data scientist and builder exploring the space between meaningful numbers, thoughtful products, and curious people.</p>
          <div className="hero-links"><a href="#work" className="button-link">SEE THE WORK <ArrowUpRight size={15} /></a><a href="#contact" className="underlined">LET&apos;S TALK ↘</a></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section id="services" className="dark-section reveal" data-reveal>
        <div className="section-intro"><span className="section-label">WHAT I DO</span><p>Turning messy questions into useful, legible and occasionally beautiful things. Every project is an excuse to learn something new.</p></div>
        <div className="service-list">
          {[['01', 'DESIGN & BUILD', 'I shape ideas into clear digital experiences — from the first sketch to a responsive, working interface.', 'PRODUCT THINKING / UI DESIGN / DEVELOPMENT'], ['02', 'DATA SCIENCE', 'I use data to find signals, explain complexity and build models that make decisions feel a little more human.', 'ANALYSIS / MACHINE LEARNING / STORYTELLING'], ['03', 'RESEARCH & GROWTH', 'I like asking better questions, testing assumptions and turning small discoveries into useful next steps.', 'EXPERIMENTS / PROTOTYPES / DOCUMENTATION']].map(([number, title, text, tags]) => <div className="service-row reveal-item" data-reveal key={number} style={{ '--delay': `${Number(number) * 90}ms` } as React.CSSProperties}><span className="service-number">{number}.</span><div className="service-copy"><h2>{title}</h2><p>{text}</p></div><span className="service-tags">{tags}</span></div>)}
        </div>
      </section>

      <section id="work" className="projects-section reveal" data-reveal>
        <div className="projects-head"><div><span className="section-label">SELECTED WORK</span><h2>PROJECTS<span className="accent-dot">.</span></h2></div><p>Fictional case studies for a portfolio in progress — built with real curiosity and made-up deadlines.</p></div>
        <div className="project-list">{projects.map((project, index) => <a href="#contact" className="project-row reveal-item" data-reveal key={project.name} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}><span className="project-index">0{index + 1}</span><span className="project-meta">{project.year}<br /><small>{project.type}</small></span><span className="project-name">{project.name}<small>{project.detail}</small></span><span className={`project-swatch ${project.accent}`} /><ArrowUpRight className="project-arrow" size={18} /></a>)}</div>
      </section>

      <section id="about" className="about-section reveal" data-reveal><div className="about-top"><span className="section-label">A LITTLE ABOUT ME</span><h2>HEY — I&apos;M<br /><span>AKHILESH</span><span className="accent-dot">.</span></h2><div className="about-copy"><p>I&apos;m a Data Science student at Kathmandu University, learning in public and building in the gaps between classes.</p><p>I enjoy the messy middle: asking questions, finding patterns, and making the answer easier to understand.</p><a className="underlined light-link" href="https://github.com/Akhilesh18161?tab=repositories" target="_blank" rel="noreferrer">VIEW MY GITHUB ↗</a></div></div><div className="facts-grid"><div><span>BASED IN</span><strong>KATHMANDU<br />NEPAL</strong></div><div><span>STUDYING</span><strong>DATA SCIENCE<br />2024 — 2028</strong></div><div><span>ALSO INTO</span><strong>COFFEE / PHOTOGRAPHY<br />OPEN SOURCE</strong></div><div><span>LANGUAGES</span><strong>PYTHON / SQL<br />JAVASCRIPT / R</strong></div></div></section>

      <section className="faq-section reveal" data-reveal><span className="section-label">THE SMALL PRINT</span><h2>FREQUENTLY ASKED<br />QUESTIONS<span className="accent-dot">.</span></h2><div className="faq-list">{faqs.map((faq, index) => <button className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={faq} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><small>0{index + 1}</small>{faq}</span><ChevronDown size={16} /><p>{index === 0 ? 'Usually with a good question, a shared document, and a small first experiment. The rest becomes clearer as we go.' : 'Absolutely. We can keep it simple, focused, and shaped around what you need to learn or launch.'}</p></button>)}</div></section>

      <section id="contact" className="cta-section reveal" data-reveal><span className="section-label">HAVE A QUESTION? / SAY HELLO</span><h2>READY FOR YOUR<br /><span>NEXT IDEA?</span></h2><a href="mailto:akhilesh.yadav@example.com" className="cta-button">START A CONVERSATION <Mail size={16} /></a><p>Based in Kathmandu · open to curious collaborations</p></section>

      <footer><div className="footer-brand">AKHILESH YADAV<span className="accent-dot">.</span><p>Data science student.<br />Builder of useful things.</p></div><div className="footer-links"><a href="mailto:akhilesh.yadav@example.com">EMAIL ↗</a><a href="https://www.instagram.com/dear_aayush" target="_blank" rel="noreferrer">IG / INSTAGRAM ↗</a><a href="https://github.com/Akhilesh18161?tab=repositories" target="_blank" rel="noreferrer">GH / GITHUB ↗</a></div><div className="footer-note">© 2026 AKHILESH YADAV<br />MADE IN KATHMANDU</div></footer>
      </main>
    </>
  )
}
