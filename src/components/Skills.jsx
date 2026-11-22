import { useState } from 'react'
import { skills, skillCategories } from '../data/profile'

const VISIBLE = 8

function SkillIcon({ skill }) {
  const [broken, setBroken] = useState(false)
  if (!skill.icon || broken) {
    return <span className="skill__fallback">{skill.abbr ?? skill.name.slice(0, 2).toUpperCase()}</span>
  }
  return (
    <img
      src={skill.icon}
      alt=""
      loading="lazy"
      className={skill.darkIcon ? 'is-dark' : ''}
      onError={() => setBroken(true)}
    />
  )
}

export default function Skills() {
  const [cat, setCat] = useState('all')
  const [expanded, setExpanded] = useState(false)

  const list = cat === 'all' ? skills : skills.filter((s) => s.cat === cat)
  const shown = expanded ? list : list.slice(0, VISIBLE)
  const hidden = list.length - shown.length

  const choose = (key) => {
    setCat(key)
    setExpanded(false)
  }

  return (
    <div className="skills-box">
      <div className="skill-tabs" role="tablist">
        {skillCategories.map((c) => (
          <button
            key={c.key}
            type="button"
            role="tab"
            aria-selected={cat === c.key}
            className={`skill-tab ${cat === c.key ? 'is-active' : ''}`}
            onClick={() => choose(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="skill-grid">
        {shown.map((s, i) => (
          <li key={s.name} className="skill" style={{ '--i': i % VISIBLE }}>
            <span className="skill__icon">
              <SkillIcon skill={s} />
            </span>
            <span>
              <span className="skill__name">{s.name}</span>
              <span className="skill__tag">{s.tag}</span>
            </span>
          </li>
        ))}
      </ul>

      {(hidden > 0 || expanded) && list.length > VISIBLE && (
        <div className="skill-more-wrap">
          <button type="button" className="skill-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? '↑ Хураах' : `↓ Бүгдийг харах (${hidden} үлдсэн)`}
          </button>
        </div>
      )}
    </div>
  )
}
