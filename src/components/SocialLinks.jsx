import Icon from './Icon'
import { contacts } from '../data/profile'

export default function SocialLinks() {
  return (
    <div className="socials">
      {contacts.map((c, i) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="social"
          style={{ '--i': i }}
        >
          <span className="social__left">
            <span className="social__icon">
              <Icon name={c.icon} />
            </span>
            <span>
              <span className="social__label">{c.label}</span>
              <span className="social__handle">{c.value}</span>
            </span>
          </span>
          <span className="social__arrow">
            <Icon name="arrow" />
          </span>
        </a>
      ))}
    </div>
  )
}
