import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";

const content = {
  ja: {
    eyebrow: "Our Services",
    title: ["What", "We Do."],
    titleJp: "事業内容",
    lead: "デジタルマーケティング支援と、骨董・アンティークの越境取引。\nふたつの事業は、ひとつの哲学から生まれています。\n自らも市場に立つからこそ、実践に根ざした提案ができる。",
    services: [
      {
        num: "01 — Digital Marketing",
        enTitle: ["Digital", "Marketing"],
        jp: "デジタルマーケティング支援",
        body: "法人向けのデジタル集客支援を行います。SEOから広告運用、SNSマーケティングまで、自社での実践から得た知見をもとに、クライアントの成長を支えます。",
        items: [
          "SEO対策・コンテンツマーケティング",
          "リスティング・SNS広告運用",
          "SNSアカウント運用支援",
          "アクセス解析・改善提案",
        ],
        cta: "お問い合わせ →",
        visualLabel: "Service 01",
        flow: [
          { label: "現状分析・戦略立案", num: "Step 01" },
          { label: "施策の実行・運用", num: "Step 02" },
          { label: "効果測定・改善", num: "Step 03" },
          { label: "レポーティング", num: "Step 04" },
        ],
        big: "01",
        reverse: false,
      },
      {
        num: "02 — Antique & Collectibles",
        enTitle: ["Antique &", "Collectibles"],
        jp: "骨董・アンティーク越境取引",
        body: "日本国内で厳選した骨董・アンティーク品を、ヨーロッパの市場へ届けます。古物商免許のもと、確かな目利きと誠実な取引を大切にしています。",
        items: [
          "日本国内での仕入れ・買取",
          "真贋・状態の査定・管理",
          "ヨーロッパへの輸出・販売",
          "バイヤー・パートナー企業との連携",
        ],
        cta: "お問い合わせ →",
        visualLabel: "Service 02",
        flow: [
          { label: "国内仕入れ・買取", num: "Japan" },
          { label: "査定・クリーニング", num: "Osaka" },
          { label: "輸出手続き・発送", num: "JP → EU" },
          { label: "ヨーロッパにて販売", num: "Europe" },
        ],
        big: "02",
        reverse: true,
      },
    ],
    philLabel: "Our Philosophy",
    philQuote: '"We don\'t just advise —\nwe practice what we preach."',
    philSub:
      "自らも市場に立ち、デジタルで販路を開く。その実践から生まれた知見を、クライアントへの支援に活かしています。",
  },
  en: {
    eyebrow: "Our Services",
    title: ["What", "We Do."],
    titleJp: "Our Business",
    lead: "Digital marketing support and cross-border antique trading.\nBoth businesses emerge from a single philosophy:\nbecause we operate in the market ourselves, we can offer advice rooted in practice.",
    services: [
      {
        num: "01 — Digital Marketing",
        enTitle: ["Digital", "Marketing"],
        jp: "Digital Marketing Support",
        body: "We provide digital marketing support for businesses. Drawing on knowledge gained through our own practice — from SEO and ad management to social media — we support our clients' growth.",
        items: [
          "SEO / Content Marketing",
          "PPC & Social Ad Management",
          "Social Media Account Management",
          "Analytics & Improvement Consulting",
        ],
        cta: "Contact Us →",
        visualLabel: "Service 01",
        flow: [
          { label: "Analysis & Strategy", num: "Step 01" },
          { label: "Execution", num: "Step 02" },
          { label: "Measurement & Improvement", num: "Step 03" },
          { label: "Reporting", num: "Step 04" },
        ],
        big: "01",
        reverse: false,
      },
      {
        num: "02 — Antique & Collectibles",
        enTitle: ["Antique &", "Collectibles"],
        jp: "Cross-border Antique Trading",
        body: "We deliver carefully selected Japanese antiques and collectibles to European markets. Licensed as an antique dealer, we value careful assessment and honest, transparent trading.",
        items: [
          "Domestic Sourcing & Purchasing",
          "Authentication & Condition Assessment",
          "Export to Europe & Sales",
          "Collaboration with Buyers & Partners",
        ],
        cta: "Contact Us →",
        visualLabel: "Service 02",
        flow: [
          { label: "Domestic Sourcing", num: "Japan" },
          { label: "Assessment & Cleaning", num: "Osaka" },
          { label: "Export & Shipping", num: "JP → EU" },
          { label: "Sales in Europe", num: "Europe" },
        ],
        big: "02",
        reverse: true,
      },
    ],
    philLabel: "Our Philosophy",
    philQuote: '"We don\'t just advise —\nwe practice what we preach."',
    philSub:
      "We operate in the market ourselves, building digital sales channels. The knowledge gained from this practice is applied directly to our clients.",
  },
};

export default function Service() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="page">
      <div className="shuu-page-header">
        <div>
          <p className="shuu-page-eyebrow">{t.eyebrow}</p>
          <h1 className="shuu-page-title">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h1>
          <p className="shuu-page-title-jp">{t.titleJp}</p>
        </div>
        <p className="shuu-page-lead">
          {t.lead.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      {t.services.map((s) => (
        <div
          className={`shuu-service-block${s.reverse ? " reverse" : ""}`}
          key={s.num}
        >
          <div className="shuu-service-info">
            <p className="shuu-service-num">{s.num}</p>
            <h2 className="shuu-service-en">
              {s.enTitle[0]}
              <br />
              {s.enTitle[1]}
            </h2>
            <p className="shuu-service-jp">{s.jp}</p>
            <p className="shuu-service-body">{s.body}</p>
            <div className="shuu-items">
              {s.items.map((item) => (
                <div className="shuu-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
            <Link className="shuu-service-cta" to="/contact">
              {s.cta}
            </Link>
          </div>
          <div className="shuu-service-visual">
            <p className="shuu-visual-label">{s.visualLabel}</p>
            <div className="shuu-flow">
              {s.flow.map((step) => (
                <div className="shuu-flow-step" key={step.num}>
                  <span className="shuu-flow-step-label">{step.label}</span>
                  <span className="shuu-flow-step-num">{step.num}</span>
                </div>
              ))}
            </div>
            <div className="shuu-visual-big">{s.big}</div>
          </div>
        </div>
      ))}

      <div className="shuu-bridge">
        <p className="shuu-bridge-label">{t.philLabel}</p>
        <div>
          <p className="shuu-bridge-text">
            &quot;We don&apos;t just advise —<br />
            we practice what we preach.&quot;
          </p>
          <p className="shuu-bridge-sub">{t.philSub}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
