import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";
import { usePageTitle } from "../hooks/usePageTitle";

const content = {
  ja: {
    eyebrow: "Est. 2024 — Osaka, Japan",
    title: ["Bridging", "Japan &", "Europe."],
    titleJp: "デジタルの力で、日本の価値をヨーロッパへ。",
    desc: "デジタルマーケティングと骨董・アンティークの越境取引を通じて、日本とヨーロッパを繋ぐ新しいビジネスを創出します。",
    cta: "View our services →",
    stats: [
      { num: "Curate", label: "目利き・厳選" },
      { num: "Connect", label: "デジタルで繋ぐ" },
      { num: "Deliver", label: "ヨーロッパへ" },
    ],
    sectionLabel: "Our Services",
    cards: [
      {
        num: "01",
        en: ["Digital", "Marketing"],
        jp: "デジタルマーケティング支援",
        desc: "SEO・広告運用・SNSマーケティングを中心に、法人向けのデジタル集客を支援します。自社での実践から得たノウハウを、クライアントの成長に還元します。",
        link: "詳しく見る →",
      },
      {
        num: "02",
        en: ["Antique &", "Collectibles"],
        jp: "骨董・アンティーク越境取引",
        desc: "日本国内で厳選した骨董・アンティーク品を、ヨーロッパの市場へ届けます。古物商免許のもと、確かな目利きと誠実な取引を大切にしています。",
        link: "詳しく見る →",
      },
    ],
    philLabel: "Our Philosophy",
    philQuote: '"We don\'t just advise —\nwe practice what we preach."',
    philSub:
      "自らも市場に立ち、デジタルで販路を開く。その実践から生まれた知見を、クライアントへの支援に活かしています。",
  },
  en: {
    eyebrow: "Est. 2024 — Osaka, Japan",
    title: ["Bridging", "Japan &", "Europe."],
    titleJp: "Bringing Japan's value to Europe through digital.",
    desc: "We create new cross-border business connecting Japan and Europe through digital marketing and antique & collectible trading.",
    cta: "View our services →",
    stats: [
      { num: "Curate", label: "Select & Assess" },
      { num: "Connect", label: "Bridge Digitally" },
      { num: "Deliver", label: "Ship to Europe" },
    ],
    sectionLabel: "Our Services",
    cards: [
      {
        num: "01",
        en: ["Digital", "Marketing"],
        jp: "Digital Marketing Support",
        desc: "We support B2B digital marketing — from SEO and ad management to social media. Our advice is grounded in our own hands-on practice, applied directly to client growth.",
        link: "Learn more →",
      },
      {
        num: "02",
        en: ["Antique &", "Collectibles"],
        jp: "Cross-border Antique Trading",
        desc: "We deliver carefully selected Japanese antiques and collectibles to European markets. Licensed as an antique dealer, we value honest assessment and transparent trading.",
        link: "Learn more →",
      },
    ],
    philLabel: "Our Philosophy",
    philQuote: '"We don\'t just advise —\nwe practice what we preach."',
    philSub:
      "We operate in the market ourselves, building digital sales channels. The knowledge gained from this practice is applied directly to our clients.",
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];
  usePageTitle(lang === "ja" ? "宗株式会社" : "Shuu Corporation");

  return (
    <div className="page">
      <section className="shuu-hero">
        <div className="shuu-hero-left">
          <p className="shuu-eyebrow">{t.eyebrow}</p>
          <h1 className="shuu-title">
            {t.title[0]}
            <br />
            {t.title[1]}
            <br />
            {t.title[2]}
          </h1>
          <p className="shuu-title-jp">{t.titleJp}</p>
          <p className="shuu-desc">{t.desc}</p>
          <Link className="shuu-cta" to="/service">
            {t.cta}
          </Link>
        </div>
        <div className="shuu-hero-right">
          <div className="shuu-kanji">宗</div>
          <div className="shuu-stats">
            {t.stats.map((s) => (
              <div className="shuu-stat" key={s.num}>
                <div className="shuu-stat-num">{s.num}</div>
                <div className="shuu-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shuu-divider">
        <span>Digital Marketing</span>
        <hr />
        <span>Antique &amp; Collectibles</span>
        <hr />
        <span>Japan × Europe</span>
      </div>

      <section className="shuu-services">
        <p className="shuu-section-label">{t.sectionLabel}</p>
        <div className="shuu-grid">
          {t.cards.map((card) => (
            <div className="shuu-card" key={card.num}>
              <p className="shuu-card-num">{card.num}</p>
              <h2 className="shuu-card-en">
                {card.en[0]}
                <br />
                {card.en[1]}
              </h2>
              <p className="shuu-card-jp">{card.jp}</p>
              <p className="shuu-card-desc">{card.desc}</p>
              <Link className="shuu-card-link" to="/service">
                {card.link}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="shuu-philosophy">
        <p className="shuu-phil-label">{t.philLabel}</p>
        <div>
          <p className="shuu-phil-quote">
            &quot;We don&apos;t just advise —<br />
            we practice what we preach.&quot;
          </p>
          <p className="shuu-phil-sub">{t.philSub}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
