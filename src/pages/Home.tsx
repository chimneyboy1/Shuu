import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <section className="so-hero">
        <div className="so-hero-left">
          <p className="so-eyebrow">Est. 2024 — Osaka, Japan</p>
          <h1 className="so-title">Bridging<br />Japan &amp;<br />Europe.</h1>
          <p className="so-title-jp">デジタルの力で、日本の価値をヨーロッパへ。</p>
          <p className="so-desc">デジタルマーケティングと骨董・アンティークの越境取引を通じて、日本とヨーロッパを繋ぐ新しいビジネスを創出します。</p>
          <Link className="so-cta" to="/service">View our services →</Link>
        </div>
        <div className="so-hero-right">
          <div className="so-kanji">宗</div>
          <div className="so-stats">
            <div className="so-stat"><div className="so-stat-num">Curate</div><div className="so-stat-label">目利き・厳選</div></div>
            <div className="so-stat"><div className="so-stat-num">Connect</div><div className="so-stat-label">デジタルで繋ぐ</div></div>
            <div className="so-stat"><div className="so-stat-num">Deliver</div><div className="so-stat-label">ヨーロッパへ</div></div>
          </div>
        </div>
      </section>

      <div className="so-divider">
        <span>Digital Marketing</span><hr />
        <span>Antique &amp; Collectibles</span><hr />
        <span>Japan × Europe</span>
      </div>

      <section className="so-services">
        <p className="so-section-label">Our Services</p>
        <div className="so-grid">
          <div className="so-card">
            <p className="so-card-num">01</p>
            <h2 className="so-card-en">Digital<br />Marketing</h2>
            <p className="so-card-jp">デジタルマーケティング支援</p>
            <p className="so-card-desc">SEO・広告運用・SNSマーケティングを中心に、法人向けのデジタル集客を支援します。自社での実践から得たノウハウを、クライアントの成長に還元します。</p>
            <Link className="so-card-link" to="/service">詳しく見る →</Link>
          </div>
          <div className="so-card">
            <p className="so-card-num">02</p>
            <h2 className="so-card-en">Antique &amp;<br />Collectibles</h2>
            <p className="so-card-jp">骨董・アンティーク越境取引</p>
            <p className="so-card-desc">日本国内で厳選した骨董・アンティーク品を、ヨーロッパの市場へ届けます。古物商免許のもと、確かな目利きと誠実な取引を大切にしています。</p>
            <Link className="so-card-link" to="/service">詳しく見る →</Link>
          </div>
        </div>
      </section>

      <section className="so-philosophy">
        <p className="so-phil-label">Our Philosophy</p>
        <div>
          <p className="so-phil-quote">&quot;We don&apos;t just advise —<br />we practice what we preach.&quot;</p>
          <p className="so-phil-sub">自らも市場に立ち、デジタルで販路を開く。その実践から生まれた知見を、クライアントへの支援に活かしています。</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
