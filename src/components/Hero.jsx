import Icon from './Icon'
import IdBadge from './IdBadge'

export default function Hero() {
  return (
    <section id="about" className="hero container">
      <div className="glass hero__panel">
        <div className="hero__grid">
          <div className="hero__main">
            <div className="hero__name anim" style={{ '--d': 1 }}>
              <img src="/name-mongol.png" alt="Эрдэнэ-Очир Хулан (монгол бичгээр)" className="hero__script" />
              <h1 className="hero__title">
                Хулан
                <br />
                <span className="nowrap">Эрдэнэ-Очир</span>
              </h1>
            </div>
            <p className="hero__role anim" style={{ '--d': 2 }}>
              Мэдээллийн системийн удирдлагаар сурч байгаа
            </p>
            <div className="hero__about anim" style={{ '--d': 3 }}>
              <p>
                Бизнесийн асуудлыг ойлгоод, түүнийг хэрэглэхэд хялбар, ажилладаг програм болгон хувиргах
                дуртай. Системийн шинжилгээ хийж, вэб, мобайл апп болон өгөгдөлтэй ажилладаг.
              </p>
            </div>
            <div className="cv-buttons anim" style={{ '--d': 4 }}>
              <a href="/Khulan_CV.jpg" download="Erdene-Ochir_Khulan_CV.jpg" className="btn-cv">
                <Icon name="download" />
                Download CV
              </a>
            </div>
          </div>
          <IdBadge />
        </div>
      </div>
    </section>
  )
}
