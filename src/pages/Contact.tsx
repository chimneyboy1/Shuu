import { useState } from "react";
import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";
import { usePageTitle } from "../hooks/usePageTitle";

const FORMSPREE_ID = "YOUR_FORM_ID"; // ← FormspreeのフォームIDに置き換える

const content = {
  ja: {
    eyebrow: "Contact",
    title: ["Get in", "Touch."],
    titleJp: "お問い合わせ",
    lead: "デジタルマーケティング支援のご相談、骨董・アンティーク品の買取・取引に関するお問い合わせは、こちらからお気軽にご連絡ください。日本語・英語にて対応いたします。",
    formLabel: "Inquiry Form",
    fieldName: "お名前",
    fieldNamePh: "山田 太郎",
    fieldCompany: "会社名",
    fieldCompanyPh: "株式会社●●●●",
    fieldEmail: "メールアドレス",
    fieldType: "お問い合わせ種別",
    selectDefault: "選択してください",
    selectOptions: [
      "デジタルマーケティング支援について",
      "骨董・アンティーク品の買取について",
      "骨董・アンティーク品の購入について",
      "パートナーシップについて",
      "その他",
    ],
    fieldMessage: "お問い合わせ内容",
    messagePh: "ご用件をご記入ください。\nPlease describe your inquiry.",
    submit: "送信する",
    sending: "送信中…",
    note: "送信後、3営業日以内にご返信いたします。\nWe will reply within 3 business days.",
    successTitle: "お問い合わせを受け付けました。",
    successBody: "3営業日以内にご返信いたします。",
    errorMsg: "送信に失敗しました。時間をおいて再度お試しください。",
    infoLabel: "Contact Info",
    items: [
      { label: "Email", value: "info@theshuu.com" },
      { label: "Location", value: "〒580-0034\n大阪府松原市天美西１丁目９−１５− 2階" },
      { label: "Hours", value: "平日 10:00 — 18:00\nMon – Fri, 10:00 – 18:00 JST" },
      { label: "Response", value: "3営業日以内" },
    ],
    langNoteLabel: "Languages",
    langNote: "日本語・英語にてご対応いたします。ヨーロッパからのお問い合わせも歓迎しております。\n\nWe respond in both Japanese and English. Inquiries from Europe are warmly welcomed.",
  },
  en: {
    eyebrow: "Contact",
    title: ["Get in", "Touch."],
    titleJp: "Inquiries",
    lead: "For inquiries about digital marketing support, or purchasing and selling antiques and collectibles, please feel free to reach out. We respond in both Japanese and English.",
    formLabel: "Inquiry Form",
    fieldName: "Name",
    fieldNamePh: "Taro Yamada",
    fieldCompany: "Company",
    fieldCompanyPh: "Company Name",
    fieldEmail: "Email Address",
    fieldType: "Inquiry Type",
    selectDefault: "Please select",
    selectOptions: [
      "Digital Marketing Support",
      "Selling Antiques & Collectibles",
      "Purchasing Antiques & Collectibles",
      "Partnership",
      "Other",
    ],
    fieldMessage: "Message",
    messagePh: "Please describe your inquiry.",
    submit: "Send",
    sending: "Sending…",
    note: "We will reply within 3 business days.",
    successTitle: "Thank you for your inquiry.",
    successBody: "We will reply within 3 business days.",
    errorMsg: "Something went wrong. Please try again later.",
    infoLabel: "Contact Info",
    items: [
      { label: "Email", value: "info@theshuu.com" },
      { label: "Location", value: "1-9-15-2F Tamaminishi\nMatsubara, Osaka 580-0034, Japan" },
      { label: "Hours", value: "Mon – Fri, 10:00 – 18:00 JST" },
      { label: "Response", value: "Within 3 business days" },
    ],
    langNoteLabel: "Languages",
    langNote: "We respond in both Japanese and English. Inquiries from Europe are warmly welcomed.",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];
  usePageTitle(lang === "ja" ? "お問い合わせ" : "Contact");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
        setName(""); setCompany(""); setEmail(""); setType(""); setMessage("");
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
          <p className="shuu-page-eyebrow">{t.eyebrow}</p>
          <h1 className="shuu-page-title">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h1>
          <p className="shuu-page-title-jp">{t.titleJp}</p>
        </div>
        <p className="shuu-page-lead">{t.lead}</p>
      </div>
      <div className="shuu-contact-body">
        <div className="shuu-form-area">
          <p className="shuu-section-label">{t.formLabel}</p>
          {status === "success" ? (
            <div className="shuu-form-success">
              <p>{t.successTitle}</p>
              <p>{t.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="shuu-field">
                <div className="shuu-field-label"><span>{t.fieldName}</span></div>
                <input className="shuu-input" type="text" placeholder={t.fieldNamePh}
                  value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label"><span>{t.fieldCompany}</span></div>
                <input className="shuu-input" type="text" placeholder={t.fieldCompanyPh}
                  value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label"><span>{t.fieldEmail}</span></div>
                <input className="shuu-input" type="email" placeholder="your@email.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label"><span>{t.fieldType}</span></div>
                <div className="shuu-select-wrap">
                  <select className="shuu-select" value={type}
                    onChange={(e) => setType(e.target.value)} required>
                    <option value="">{t.selectDefault}</option>
                    {t.selectOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
              <div className="shuu-field">
                <div className="shuu-field-label"><span>{t.fieldMessage}</span></div>
                <textarea className="shuu-textarea" placeholder={t.messagePh}
                  value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              {status === "error" && (
                <p className="shuu-form-error">{t.errorMsg}</p>
              )}
              <button className="shuu-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? t.sending : t.submit}
              </button>
              <p className="shuu-form-note">
                {t.note.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </form>
          )}
        </div>
        <div className="shuu-info-area">
          <p className="shuu-section-label">{t.infoLabel}</p>
          <div className="shuu-contact-items">
            {t.items.map((item) => (
              <div className="shuu-contact-item" key={item.label}>
                <span className="shuu-contact-item-label">{item.label}</span>
                <span className="shuu-contact-item-val">
                  {item.value.split("\n").map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div className="shuu-lang-note">
            <p className="shuu-lang-note-label">{t.langNoteLabel}</p>
            <p className="shuu-lang-note-text">
              {t.langNote.split("\n").map((line, i) =>
                line === "" ? <br key={i} /> : <span key={i}>{line}</span>
              )}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
