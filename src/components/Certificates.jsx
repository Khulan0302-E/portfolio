import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'
import { certificates } from '../data/certificates'

const filters = [
  { key: 'all', label: 'Бүгд' },
  { key: 'volunteer', label: 'Сайн дурын ажил' },
  { key: 'research', label: 'Эрдэм шинжилгээ' },
]

export default function Certificates() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const list = filter === 'all' ? certificates : certificates.filter((c) => c.type === filter)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div className="tabs" role="tablist">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            className={`tab ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
            <span className="tab__count">
              {f.key === 'all' ? certificates.length : certificates.filter((c) => c.type === f.key).length}
            </span>
          </button>
        ))}
      </div>
      <div className="certs">
        {list.map((c) => (
          <article key={c.id} className="cert">
            {c.image ? (
              <button type="button" className="cert__image" onClick={() => setOpen(c)} aria-label={`${c.title} — томруулж харах`}>
                <img src={c.image} alt="" loading="lazy" />
                <span className="cert__zoom">Томруулах</span>
              </button>
            ) : (
              <div className="cert__image cert__image--empty">
                <span>{c.org}</span>
              </div>
            )}
            <div className="cert__body">
              <div className="cert__meta">
                <span>{c.type === 'research' ? 'Эрдэм шинжилгээ' : 'Сайн дурын ажил'}</span>
                <span>{c.date}</span>
              </div>
              <h3 className="cert__title">{c.title}</h3>
              <p className="cert__org">{c.org}</p>
              <p className="cert__desc">{c.description}</p>
              {c.hours && <span className="cert__hours">{c.hours} цаг</span>}
            </div>
          </article>
        ))}
      </div>
      {open &&
        createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={open.image} alt={open.title} />
            <figcaption>
              {open.title} · {open.date}
            </figcaption>
          </figure>
          <button type="button" className="icon-btn lightbox__close" onClick={() => setOpen(null)} aria-label="Хаах">
            <Icon name="close" />
          </button>
        </div>,
          document.body
        )}
    </>
  )
}
