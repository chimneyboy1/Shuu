import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="page">
      <div className="shuu-page-header">
        <div>
          <p className="shuu-page-eyebrow">About Us</p>
          <h1 className="shuu-page-title">
            Who
            <br />
            We Are.
          </h1>
          <p className="shuu-page-title-jp">会社概要</p>
        </div>
        <p className="shuu-page-lead">
          大阪を拠点に、デジタルマーケティングと骨董・アンティークの越境取引を手がける会社です。日本とヨーロッパを繋ぐ架け橋として、誠実な取引と実践知を大切にしています。
        </p>
      </div>
      <div className="shuu-info-section">
        <div className="shuu-info-left">
          <p className="shuu-section-label">Company Profile</p>
          <table className="shuu-table">
            <tbody>
              <tr>
                <td>Company</td>
                <td>
                  宗株式会社
                  <br />
                  <span className="shuu-muted-en">Shuu Corporation</span>
                </td>
              </tr>
              <tr>
                <td>Founded</td>
                <td>2024年</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  大阪府大阪市
                  <br />
                  <span className="shuu-muted-en">Osaka, Japan</span>
                </td>
              </tr>
              <tr>
                <td>Business</td>
                <td>
                  デジタルマーケティング支援
                  <br />
                  骨董・アンティーク越境取引
                </td>
              </tr>
              <tr>
                <td>License</td>
                <td>古物商許可証（大阪府公安委員会）</td>
              </tr>
            </tbody>
          </table>
          <div className="shuu-license">
            <p className="shuu-license-label">古物商許可証番号</p>
            <p className="shuu-license-num">第 〇〇〇〇〇〇〇〇〇〇〇 号</p>
            <p className="shuu-license-sub">大阪府公安委員会許可</p>
          </div>
        </div>
        <div className="shuu-info-right">
          <p className="shuu-section-label">Access</p>
          <div className="shuu-access-items">
            <div className="shuu-access-item">
              <p className="shuu-access-item-label">Address</p>
              <p className="shuu-access-item-val">大阪府大阪市●●区●●●●</p>
              <p className="shuu-access-item-en">Osaka, Japan</p>
            </div>
            <div className="shuu-access-item">
              <p className="shuu-access-item-label">Email</p>
              <p className="shuu-access-item-val">
                info@shuu-corporation.co.jp
              </p>
            </div>
            <div className="shuu-access-item">
              <p className="shuu-access-item-label">Hours</p>
              <p className="shuu-access-item-val">平日 10:00 — 18:00</p>
              <p className="shuu-access-item-en">
                Mon – Fri, 10:00 – 18:00 JST
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
