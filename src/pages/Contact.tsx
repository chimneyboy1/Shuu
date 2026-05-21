import { useState } from "react";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const FORMSPREE_ID = "YOUR_FORM_ID"; // ← FormspreeのフォームIDに置き換える

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  usePageTitle("お問い合わせ / Contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name, company, email, type, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setCompany("");
        setEmail("");
        setType("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

          {status === "success" ? (
            <div className="shuu-form-success">
              <p>お問い合わせを受け付けました。</p>
              <p>3営業日以内にご返信いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="shuu-field">
                <div className="shuu-field-label">
                  <span>お名前 / Name</span>
                </div>
                <input
                  className="shuu-input"
                  type="text"
                  placeholder="山田 太郎 / Taro Yamada"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label">
                  <span>会社名 / Company</span>
                </div>
                <input
                  className="shuu-input"
                  type="text"
                  placeholder="株式会社●●●●"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label">
                  <span>メールアドレス / Email</span>
                </div>
                <input
                  className="shuu-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label">
                  <span>お問い合わせ種別 / Inquiry Type</span>
                </div>
                <div className="shuu-select-wrap">
                  <select
                    className="shuu-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
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
                </div>
                <textarea
                  className="shuu-textarea"
                  placeholder={"ご用件をご記入ください。\nPlease describe your inquiry."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {status === "error" && (
                <p className="shuu-form-error">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
              <button
                className="shuu-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "送信中…" : "送信する"}
              </button>
              <p className="shuu-form-note">
                送信後、3営業日以内にご返信いたします。
                <br />
                We will reply within 3 business days.
              </p>
            </form>
          )}
        </div>
        <div className="shuu-info-area">
          <p className="shuu-section-label">Contact Info</p>
          <div className="shuu-contact-items">
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Email</span>
              <span className="shuu-contact-item-val">info@theshuu.com</span>
            </div>
            <div className="shuu-contact-item">
              <span className="shuu-contact-item-label">Location</span>
              <span className="shuu-contact-item-val">
                〒580-0034
                <br />
                大阪府松原市天美西１丁目９−１５− 2階
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
              <span className="shuu-contact-item-val">3営業日以内</span>
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
