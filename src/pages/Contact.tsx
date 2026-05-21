import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="page">
      <div className="so-page-header">
        <div>
          <p className="so-page-eyebrow">Contact</p>
          <h1 className="so-page-title">Get in<br />Touch.</h1>
          <p className="so-page-title-jp">お問い合わせ</p>
        </div>
        <p className="so-page-lead">デジタルマーケティング支援のご相談、骨董・アンティーク品の買取・取引に関するお問い合わせは、こちらからお気軽にご連絡ください。日本語・英語にて対応いたします。</p>
      </div>
      <div className="so-contact-body">
        <div className="so-form-area">
          <p className="so-section-label">Inquiry Form</p>
          <div className="so-field">
            <div className="so-field-label"><span>お名前 / Name</span><span className="so-required">Required</span></div>
            <input className="so-input" type="text" placeholder="山田 太郎 / Taro Yamada" />
          </div>
          <div className="so-field">
            <div className="so-field-label"><span>会社名 / Company</span><span className="so-required">Optional</span></div>
            <input className="so-input" type="text" placeholder="株式会社●●●●" />
          </div>
          <div className="so-field">
            <div className="so-field-label"><span>メールアドレス / Email</span><span className="so-required">Required</span></div>
            <input className="so-input" type="email" placeholder="your@email.com" />
          </div>
          <div className="so-field">
            <div className="so-field-label"><span>お問い合わせ種別 / Inquiry Type</span><span className="so-required">Required</span></div>
            <div className="so-select-wrap">
              <select className="so-select" defaultValue="">
                <option value="">選択してください / Please select</option>
                <option>デジタルマーケティング支援について</option>
                <option>骨董・アンティーク品の買取について</option>
                <option>骨董・アンティーク品の購入について</option>
                <option>パートナーシップについて</option>
                <option>その他 / Other</option>
              </select>
            </div>
          </div>
          <div className="so-field">
            <div className="so-field-label"><span>お問い合わせ内容 / Message</span><span className="so-required">Required</span></div>
            <textarea className="so-textarea" placeholder={"ご用件をご記入ください。\nPlease describe your inquiry."}></textarea>
          </div>
          <button className="so-submit" type="button">Send Message — 送信する</button>
          <p className="so-form-note">送信後、3営業日以内にご返信いたします。<br />We will reply within 3 business days.</p>
        </div>
        <div className="so-info-area">
          <p className="so-section-label">Contact Info</p>
          <div className="so-contact-items">
            <div className="so-contact-item"><span className="so-contact-item-label">Email</span><span className="so-contact-item-val">info@shuu-corporation.co.jp</span></div>
            <div className="so-contact-item"><span className="so-contact-item-label">Location</span><span className="so-contact-item-val">大阪府大阪市<br />Osaka, Japan</span></div>
            <div className="so-contact-item"><span className="so-contact-item-label">Hours</span><span className="so-contact-item-val">平日 10:00 — 18:00<br />Mon – Fri, 10:00 – 18:00 JST</span></div>
            <div className="so-contact-item"><span className="so-contact-item-label">Response</span><span className="so-contact-item-val">3営業日以内<br />Within 3 business days</span></div>
          </div>
          <div className="so-lang-note">
            <p className="so-lang-note-label">Languages</p>
            <p className="so-lang-note-text">日本語・英語にてご対応いたします。ヨーロッパからのお問い合わせも歓迎しております。<br /><br />We respond in both Japanese and English. Inquiries from Europe are warmly welcomed.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
