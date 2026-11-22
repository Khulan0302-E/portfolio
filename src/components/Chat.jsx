import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'
import { greeting, qa, findAnswer } from '../data/chat'

export default function Chat({ onClose }) {
  const [messages, setMessages] = useState([{ from: 'me', text: greeting }])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    inputRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const ask = (question, answer) => {
    if (typing || !question.trim()) return
    setMessages((m) => [...m, { from: 'guest', text: question }])
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'me', text: answer ?? findAnswer(question) }])
      setTyping(false)
    }, 700)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    ask(input)
    setInput('')
  }

  return createPortal(
    <div className="chat-backdrop" onClick={onClose}>
      <div className="chat glass" role="dialog" aria-modal="true" aria-label="Хулантай ярилцах" onClick={(e) => e.stopPropagation()}>
        <header className="chat__head">
          <img src="/avatar.jpg" alt="" className="chat__avatar" />
          <div>
            <p className="chat__name">Хулан</p>
            <p className="chat__status">Автомат хариулт</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Хаах">
            <Icon name="close" />
          </button>
        </header>
        <div className="chat__list" ref={listRef}>
          {messages.map((m, i) => (
            <p key={i} className={`msg msg--${m.from}`}>
              {m.text}
            </p>
          ))}
          {typing && (
            <p className="msg msg--me msg--typing" aria-label="Бичиж байна">
              <span />
              <span />
              <span />
            </p>
          )}
        </div>
        <div className="chat__chips">
          {qa.map((item) => (
            <button key={item.question} type="button" className="chip" onClick={() => ask(item.question, item.answer)}>
              {item.question}
            </button>
          ))}
        </div>
        <form className="chat__form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Асуултаа бичээрэй…"
            aria-label="Асуулт"
          />
          <button type="submit" className="icon-btn chat__send" aria-label="Илгээх">
            <Icon name="arrow" />
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
