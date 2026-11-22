import { useEffect, useRef } from 'react'

const GRAVITY = 9
const DAMPING = 1.1
const CARD_SPRING = 70
const CARD_DAMPING = 7
const MAX_ANGLE = 1.3

export default function IdBadge() {
  const anchorRef = useRef(null)
  const swingRef = useRef(null)
  const cardRef = useRef(null)
  const s = useRef({ angle: 0.6, velocity: 0, card: 0.6, cardVel: 0, dragging: false, lastT: 0 })

  useEffect(() => {
    const st = s.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      st.angle = st.card = 0
    }
    let raf
    let last = performance.now()

    const tick = (now) => {
      const dt = Math.min(0.032, (now - last) / 1000)
      last = now
      if (!st.dragging) {
        const accel = -GRAVITY * Math.sin(st.angle) - DAMPING * st.velocity
        st.velocity += accel * dt
        st.angle += st.velocity * dt
      }

      st.cardVel += (CARD_SPRING * (st.angle - st.card) - CARD_DAMPING * st.cardVel) * dt
      st.card += st.cardVel * dt

      swingRef.current.style.transform = `rotate(${st.angle}rad)`
      cardRef.current.style.transform = `rotate(${st.card - st.angle}rad)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const angleFromPointer = (e) => {
    const a = anchorRef.current.getBoundingClientRect()
    const dx = e.clientX - (a.left + a.width / 2)
    const dy = e.clientY - (a.top + a.height / 2)
    return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, -Math.atan2(dx, Math.max(dy, 1))))
  }

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    Object.assign(s.current, { dragging: true, velocity: 0, lastT: performance.now() })
  }

  const onPointerMove = (e) => {
    const st = s.current
    if (!st.dragging) return
    const now = performance.now()
    const next = angleFromPointer(e)
    const dt = Math.max(0.008, (now - st.lastT) / 1000)

    st.velocity = Math.max(-8, Math.min(8, (next - st.angle) / dt))
    st.angle = next
    st.lastT = now
  }

  const onPointerUp = (e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId)
    s.current.dragging = false
  }

  return (
    <div className="badge-area">
      <span className="badge-anchor" ref={anchorRef} />
      <div className="lanyard" ref={swingRef}>
        <span className="lanyard__strap">
          <span>ХУЛАН · ПОРТФОЛИО · ХУЛАН · ПОРТФОЛИО · ХУЛАН · ПОРТФОЛИО</span>
        </span>
        <div className="idcard-wrap" ref={cardRef}>
          <span className="idcard__clip" />
          <div
            className="idcard"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <span className="idcard__hole" />
            <div className="idcard__top">
              <img src="/logo.png" alt="" />
              <span>ПОРТФОЛИО · 2026</span>
            </div>
            <img className="idcard__photo" src="/badge.jpg" alt="Эрдэнэ-Очирын Хулан" draggable="false" />
            <div className="idcard__info">
              <p className="idcard__name">Эрдэнэ-Очирын Хулан</p>
              <p className="idcard__role">Мэдээллийн системийн оюутан</p>
              <div className="idcard__foot">
                <span>СЭЗИС · 2023–2027</span>
                <span className="idcard__barcode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
