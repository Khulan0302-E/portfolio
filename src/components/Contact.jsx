import { useState } from 'react'
import SocialLinks from './SocialLinks'
import { contacts } from '../data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = contacts.find((c) => c.icon === 'mail')?.value

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="contact">
      <div className="contact__intro">
        <p>
          Дадлага хийх боломж, хамтын төсөл болон хамтран ажиллах саналд үргэлж нээлттэй. Та бүхэнтэй
          холбогдож, шинэ боломжуудыг хамтдаа бүтээхэд баяртай байх болно.
        </p>
        <div className="contact__buttons">
          <button type="button" className="btn-pill btn-pill--ghost" onClick={copyEmail}>
            {copied ? 'Хуулагдлаа ✓' : 'Имэйл хуулах'}
          </button>
        </div>
      </div>
      <SocialLinks />
    </div>
  )
}
