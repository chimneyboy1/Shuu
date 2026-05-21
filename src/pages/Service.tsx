import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <div className="page">
      <div className="so-page-header">
        <div>
          <p className="so-page-eyebrow">Our Services</p>
          <h1 className="so-page-title">What<br />We Do.</h1>
          <p className="so-page-title-jp">事業内容</p>
        </div>
        <p className="so-page-lead">デジタルマーケティング支援と、骨董・アンティークの越境取引。<br />ふたつの事業は、ひとつの哲学から生まれています。<br />自らも市場に立つからこそ、実践に根ざした提案ができる。</p>
      </div>

      <div className="so-service-block">
        <div className="so-service-info">
          <p className="so-service-num">01 — Digital Marketing</p>
          <h2 className="so-service-en">Digital<br />Marketing</h2>
          <p className="so-service-jp">デジタルマーケティング支援</p>
          <p className="so-service-body">法人向けのデジタル集客支援を行います。SEOから広告運用、SNSマーケティングまで、自社での実践から得た知見をもとに、クライアントの成長を支えます。</p>
          <div className="so-items">
            <div className="so-item">SEO対策・コンテンツマーケティング</div>
            <div className="so-item">リスティング・SNS広告運用</div>
            <div className="so-item">SNSアカウント運用支援</div>
            <div className="so-item">アクセス解析・改善提案</div>
          </div>
          <Link className="so-service-cta" to="/contact">お問い合わせ →</Link>
        </div>
        <div className="so-service-visual">
          <p className="so-visual-label">Service 01</p>
          <div className="so-flow">
            <div className="so-flow-step"><span className="so-flow-step-label">現状分析・戦略立案</span><span className="so-flow-step-num">Step 01</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">施策の実行・運用</span><span className="so-flow-step-num">Step 02</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">効果測定・改善</span><span className="so-flow-step-num">Step 03</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">レポーティング</span><span className="so-flow-step-num">Step 04</span></div>
          </div>
          <div className="so-visual-big">01</div>
        </div>
      </div>

      <div className="so-service-block reverse">
        <div className="so-service-info">
          <p className="so-service-num">02 — Antique &amp; Collectibles</p>
          <h2 className="so-service-en">Antique &amp;<br />Collectibles</h2>
          <p className="so-service-jp">骨董・アンティーク越境取引</p>
          <p className="so-service-body">日本国内で厳選した骨董・アンティーク品を、ヨーロッパの市場へ届けます。古物商免許のもと、確かな目利きと誠実な取引を大切にしています。</p>
          <div className="so-items">
            <div className="so-item">日本国内での仕入れ・買取</div>
            <div className="so-item">真贋・状態の査定・管理</div>
            <div className="so-item">ヨーロッパへの輸出・販売</div>
            <div className="so-item">バイヤー・パートナー企業との連携</div>
          </div>
          <Link className="so-service-cta" to="/contact">お問い合わせ →</Link>
        </div>
        <div className="so-service-visual">
          <p className="so-visual-label">Service 02</p>
          <div className="so-flow">
            <div className="so-flow-step"><span className="so-flow-step-label">国内仕入れ・買取</span><span className="so-flow-step-num">Japan</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">査定・クリーニング</span><span className="so-flow-step-num">Osaka</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">輸出手続き・発送</span><span className="so-flow-step-num">JP → EU</span></div>
            <div className="so-flow-step"><span className="so-flow-step-label">ヨーロッパにて販売</span><span className="so-flow-step-num">Europe</span></div>
          </div>
          <div className="so-visual-big">02</div>
        </div>
      </div>

      <div className="so-bridge">
        <p className="so-bridge-label">Our Philosophy</p>
        <div>
          <p className="so-bridge-text">&quot;We don&apos;t just advise —<br />we practice what we preach.&quot;</p>
          <p className="so-bridge-sub">自らも市場に立ち、デジタルで販路を開く。その実践から生まれた知見を、クライアントへの支援に活かしています。</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
