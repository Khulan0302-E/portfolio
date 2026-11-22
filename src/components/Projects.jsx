import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Walker from './Walker'
import Me from './Me'
import Chat from './Chat'
import { projects } from '../data/projects'

const START_X = 6
const MS_PER_PERCENT = 45
const TOUR_DELAY = 4500

export default function Projects() {
  const [active, setActive] = useState(0)
  const [spots, setSpots] = useState([])
  const [walker, setWalker] = useState({ x: START_X, duration: 0, walking: false, facing: 'right' })
  const roomRef = useRef(null)
  const frameRefs = useRef([])
  const [chatOpen, setChatOpen] = useState(false)
  const closeChat = useCallback(() => setChatOpen(false), [])
  const posRef = useRef(START_X)
  const [started, setStarted] = useState(false)
  const paused = useRef(false)
  const project = projects[active]

  useLayoutEffect(() => {
    const measure = () => {
      const room = roomRef.current?.getBoundingClientRect()
      if (!room) return
      setSpots(
        frameRefs.current.map((el) => {
          const r = el.getBoundingClientRect()
          return ((r.left + r.width / 2 - room.left) / room.width) * 100
        })
      )
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(roomRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true)
        observer.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(roomRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !spots.length) return
    const from = posRef.current
    const target = spots[active]
    const distance = Math.abs(target - from)
    const duration = distance * MS_PER_PERCENT
    setWalker((w) => ({
      x: target,
      duration,
      walking: distance > 0.5,
      facing: target < from ? 'left' : target > from ? 'right' : w.facing,
    }))

    const stop = setTimeout(() => {
      posRef.current = target
      setWalker((v) => ({ ...v, walking: false }))
    }, duration + 150)
    return () => clearTimeout(stop)
  }, [active, spots, started])

  useEffect(() => {
    if (!started || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => {
      if (!paused.current) setActive((a) => (a + 1) % projects.length)
    }, TOUR_DELAY + walker.duration)
    return () => clearTimeout(timer)
  }, [active, walker.duration, started])

  const go = (step) => setActive((active + step + projects.length) % projects.length)

  return (
    <div
      className="gallery"
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      <div className="room" ref={roomRef}>
        <div className="room__ceiling">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="room__light" />
          ))}
        </div>
        <div className="room__wall room__wall--left" />
        <div className="room__wall room__wall--right" />
        <div className="room__floor" />
        <span className="deco deco--l1" />
        <span className="deco deco--l2" />
        <span className="deco deco--r1" />
        <span className="deco deco--r2" />
        <div className="room__back">
          {projects.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => (frameRefs.current[i] = el)}
              type="button"
              className={`frame ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`${p.title} — дэлгэрэнгүй`}
              aria-pressed={i === active}
            >
              <span className="frame__art">
                <img src={p.image_url} alt="" loading="lazy" />
              </span>
              <span className="frame__label">{p.title}</span>
            </button>
          ))}
        </div>
        <span className="bench" />
        <Walker {...walker} bubble={project.title} />
        <Me onClick={() => setChatOpen(true)} />
      </div>
      <p className="gallery__hint">Зураг дээр дарахад дүр тэр бүтээл рүү алхана · Буланд байгаа над дээр дарж асуулт асуугаарай</p>
      {chatOpen && <Chat onClose={closeChat} />}

      <article className="plaque" key={project.id}>
        <div className="plaque__head">
          <span className="plaque__no">
            №{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="plaque__nav">
            <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Өмнөх бүтээл">
              <Icon name="left" />
            </button>
            <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Дараагийн бүтээл">
              <Icon name="right" />
            </button>
          </div>
        </div>
        <p className="plaque__subtitle">{project.subtitle}</p>
        <h3 className="plaque__title">{project.title}</h3>
        <p className="plaque__desc">{project.description}</p>
        <ul className="plaque__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="plaque__links">
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noreferrer" className="btn-pill">
              Сайт үзэх <Icon name="arrow" />
            </a>
          )}
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" rel="noreferrer" className="btn-pill btn-pill--ghost">
              GitHub <Icon name="arrow" />
            </a>
          )}
        </div>
      </article>
    </div>
  )
}
