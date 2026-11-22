import { useReveal } from '../hooks/useReveal'

export default function Section({ id, badge, title, children }) {
  const [ref, visible] = useReveal(0.12)
  return (
    <section id={id} className="section container">
      <div ref={ref} className={`glass section__panel reveal ${visible ? 'is-visible' : ''}`}>
        <span className="badge">{badge}</span>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
