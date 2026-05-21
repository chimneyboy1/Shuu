import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <div className="page">
      <div className="shuu-page-header">
        <div>
          <p className="shuu-page-eyebrow">Our Services</p>
          <h1 className="shuu-page-title">
            What
            <br />
            We Do.
          </h1>
          <p className="shuu-page-title-jp">事業内容</p>
        </div>
        <p className="shuu-page-lead">
          デジタルマーケティング支援と、骨董・アンティークの越境取引。
          <br />
          ふたつの事業は、ひとつの哲学から生まれています。
          <br />
          自らも市場に立つからこそ、実践に根ざした提案ができる。
        </p>
      </div>

      <div className="shuu-service-block">
        <div className="shuu-service-info">
          <p className="shuu-service-num">01 — Digital Marketing</p>
          <h2 className="shuu-service-en">
            Digital
            <br />
            Marketing
          </h2>
          <p className="shuu-service-jp">デジタルマーケティング支援</p>
          <p className="shuu-service-body">
            法人向けのデジタル集客支援を行います。SEOから広告運用、SNSマーケティングまで、自社での実践から得た知見をもとに、クライアントの成長を支えます。
          </p>
          <div className="shuu-items">
            <div className="shuu-item">SEO対策・コンテンツマーケティング</div>
            <div className="shuu-item">リスティング・SNS広告運用</div>
            <div className="shuu-item">SNSアカウント運用支援</div>
            <div className="shuu-item">アクセス解析・改善提案</div>
          </div>
          <Link className="shuu-service-cta" to="/contact">
            お問い合わせ →
          </Link>
        </div>
        <div className="shuu-service-visual">
          <p className="shuu-visual-label">Service 01</p>
          <div className="shuu-flow">
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">現状分析・戦略立案</span>
              <span className="shuu-flow-step-num">Step 01</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">施策の実行・運用</span>
              <span className="shuu-flow-step-num">Step 02</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">効果測定・改善</span>
              <span className="shuu-flow-step-num">Step 03</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">レポーティング</span>
              <span className="shuu-flow-step-num">Step 04</span>
            </div>
          </div>
          <div className="shuu-visual-big">01</div>
        </div>
      </div>

      <div className="shuu-service-block reverse">
        <div className="shuu-service-info">
          <p className="shuu-service-num">02 — Antique &amp; Collectibles</p>
          <h2 className="shuu-service-en">
            Antique &amp;
            <br />
            Collectibles
          </h2>
          <p className="shuu-service-jp">骨董・アンティーク越境取引</p>
          <p className="shuu-service-body">
            日本国内で厳選した骨董・アンティーク品を、ヨーロッパの市場へ届けます。古物商免許のもと、確かな目利きと誠実な取引を大切にしています。
          </p>
          <div className="shuu-items">
            <div className="shuu-item">日本国内での仕入れ・買取</div>
            <div className="shuu-item">真贋・状態の査定・管理</div>
            <div className="shuu-item">ヨーロッパへの輸出・販売</div>
            <div className="shuu-item">バイヤー・パートナー企業との連携</div>
          </div>
          <Link className="shuu-service-cta" to="/contact">
            お問い合わせ →
          </Link>
        </div>
        <div className="shuu-service-visual">
          <p className="shuu-visual-label">Service 02</p>
          <div className="shuu-flow">
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">国内仕入れ・買取</span>
              <span className="shuu-flow-step-num">Japan</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">査定・クリーニング</span>
              <span className="shuu-flow-step-num">Osaka</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">輸出手続き・発送</span>
              <span className="shuu-flow-step-num">JP → EU</span>
            </div>
            <div className="shuu-flow-step">
              <span className="shuu-flow-step-label">ヨーロッパにて販売</span>
              <span className="shuu-flow-step-num">Europe</span>
            </div>
          </div>
          <div className="shuu-visual-big">02</div>
        </div>
      </div>

      <div className="shuu-bridge">
        <p className="shuu-bridge-label">Our Philosophy</p>
        <div>
          <p className="shuu-bridge-text">
            &quot;We don&apos;t just advise —<br />
            we practice what we preach.&quot;
          </p>
          <p className="shuu-bridge-sub">
            自らも市場に立ち、デジタルで販路を開く。その実践から生まれた知見を、クライアントへの支援に活かしています。
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
