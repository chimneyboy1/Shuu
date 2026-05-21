import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="page">
      <div className="shuu-page-header">
        <div>
          <p className="shuu-page-eyebrow">Contact</p>
          <h1 className="shuu-page-title">
            Get in
            <br />
            Touch.
          </h1>
          <p className="shuu-page-title-jp">お問い合わせ</p>
        </div>
        <p className="shuu-page-lead">
          デジタルマーケティング支援のご相談、骨董・アンティーク品の買取・取引に関するお問い合わせは、こちらからお気軽にご連絡ください。日本語・英語にて対応いたします。
        </p>
      </div>
      <div className="shuu-contact-body">
        <div className="shuu-form-area">
          <p className="shuu-section-label">Inquiry Form</p>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>お名前 / Name</span>
              <span className="shuu-required">Required</span>
            </div>
            <input
              className="shuu-input"
              type="text"
              placeholder="山田 太郎 / Taro Yamada"
            />
          </div>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>会社名 / Company</span>
              <span className="shuu-required">Optional</span>
            </div>
            <input
              className="shuu-input"
              type="text"
              placeholder="株式会社●●●●"
            />
          </div>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>メールアドレス / Email</span>
              <span className="shuu-required">Required</span>
            </div>
            <input
              className="shuu-input"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>お問い合わせ種別 / Inquiry Type</span>
              <span className="shuu-required">Required</span>
            </div>
            <div className="shuu-select-wrap">
              <select className="shuu-select" defaultValue="">
                <option value="">選択してください / Please select</option>
                <option>デジタルマーケティング支援について</option>
                <option>骨董・アンティーク品の買取について</option>
                <option>骨董・アンティーク品の購入について</option>
                <option>パートナーシップについて</option>
                <option>その他 / Other</option>
              </select>
            </div>
          </div>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>お問い合わせ内容 / Message</span>
              <span className="shuu-required">Required</span>
            </div>
            <textarea
              className="shuu-textarea"
              placeholder={
                "ご用件をご記入ください。\nPlease describe your inquiry."
              }
            ></textarea>
          </div>
          <button className="shuu-submit" type="button">
            Send Message — 送信する
          </button>
          <p className="shuu-form-note">
            送信後、3営業日以内にご返信いたします。
            <br />
            We will reply within 3 business days.
          </p>
        </div>
        <div className="shuu-info-area">
          <p className="shuu-section-label">Contact Info</p>
          <div className="shuu-contact-items">
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Email</span>
              <span className="shuu-contact-item-val">
                info@shuu-corporation.co.jp
              </span>
            </div>
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Location</span>
              <span className="shuu-contact-item-val">
                大阪府大阪市
                <br />
                Osaka, Japan
              </span>
            </div>
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Hours</span>
              <span className="shuu-contact-item-val">
                平日 10:00 — 18:00
                <br />
                Mon – Fri, 10:00 – 18:00 JST
              </span>
            </div>
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Response</span>
              <span className="shuu-contact-item-val">
                3営業日以内
                <br />
                Within 3 business days
              </span>
            </div>
          </div>
          <div className="shuu-lang-note">
            <p className="shuu-lang-note-label">Languages</p>
            <p className="shuu-lang-note-text">
              日本語・英語にてご対応いたします。ヨーロッパからのお問い合わせも歓迎しております。
              <br />
              <br />
              We respond in both Japanese and English. Inquiries from Europe are
              warmly welcomed.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
