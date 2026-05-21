import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="page">
      <div className="so-page-header">
        <div>
          <p className="so-page-eyebrow">About Us</p>
          <h1 className="so-page-title">Who<br />We Are.</h1>
          <p className="so-page-title-jp">会社概要</p>
        </div>
        <p className="so-page-lead">大阪を拠点に、デジタルマーケティングと骨董・アンティークの越境取引を手がける会社です。日本とヨーロッパを繋ぐ架け橋として、誠実な取引と実践知を大切にしています。</p>
      </div>
      <div className="so-info-section">
        <div className="so-info-left">
          <p className="so-section-label">Company Profile</p>
          <table className="so-table">
            <tbody>
              <tr><td>Company</td><td>宗株式会社<br /><span className="so-muted-en">Shuu Corporation</span></td></tr>
              <tr><td>Founded</td><td>2024年</td></tr>
              <tr><td>Location</td><td>大阪府大阪市<br /><span className="so-muted-en">Osaka, Japan</span></td></tr>
              <tr><td>Business</td><td>デジタルマーケティング支援<br />骨董・アンティーク越境取引</td></tr>
              <tr><td>License</td><td>古物商許可証（大阪府公安委員会）</td></tr>
            </tbody>
          </table>
          <div className="so-license">
            <p className="so-license-label">古物商許可証番号</p>
            <p className="so-license-num">第 〇〇〇〇〇〇〇〇〇〇〇 号</p>
            <p className="so-license-sub">大阪府公安委員会許可</p>
          </div>
        </div>
        <div className="so-info-right">
          <p className="so-section-label">Access</p>
          <div className="so-access-items">
            <div className="so-access-item">
              <p className="so-access-item-label">Address</p>
              <p className="so-access-item-val">大阪府大阪市●●区●●●●</p>
              <p className="so-access-item-en">Osaka, Japan</p>
            </div>
            <div className="so-access-item">
              <p className="so-access-item-label">Email</p>
              <p className="so-access-item-val">info@shuu-corporation.co.jp</p>
            </div>
            <div className="so-access-item">
              <p className="so-access-item-label">Hours</p>
              <p className="so-access-item-val">平日 10:00 — 18:00</p>
              <p className="so-access-item-en">Mon – Fri, 10:00 – 18:00 JST</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
