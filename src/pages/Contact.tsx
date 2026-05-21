import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";

const content = {
  ja: {
    eyebrow: "Contact",
    title: ["Get in", "Touch."],
    titleJp: "お問い合わせ",
    lead: "デジタルマーケティング支援のご相談、骨董・アンティーク品の買取・取引に関するお問い合わせは、こちらからお気軽にご連絡ください。日本語・英語にて対応いたします。",
    formLabel: "Inquiry Form",
    fields: [
      { label: "お名前", placeholder: "山田 太郎", type: "text" },
      { label: "会社名", placeholder: "株式会社●●●●", type: "text" },
      { label: "メールアドレス", placeholder: "your@email.com", type: "email" },
    ],
    selectLabel: "お問い合わせ種別",
    selectDefault: "選択してください",
    selectOptions: [
      "デジタルマーケティング支援について",
      "骨董・アンティーク品の買取について",
      "骨董・アンティーク品の購入について",
      "パートナーシップについて",
      "その他",
    ],
    messageLabel: "お問い合わせ内容",
    messagePlaceholder: "ご用件をご記入ください。",
    submit: "送信する",
    note: "送信後、3営業日以内にご返信いたします。",
    infoLabel: "Contact Info",
    infoItems: [
      { label: "Email", value: "info@theshuu.com" },
      {
        label: "Location",
        value: "〒580-0034\n大阪府松原市天美西１丁目９−１５− 2階",
      },
      { label: "Hours", value: "平日 10:00 — 18:00\nMon – Fri, 10:00 – 18:00 JST" },
      { label: "Response", value: "3営業日以内" },
    ],
    langNoteLabel: "Languages",
    langNoteText:
      "日本語・英語にてご対応いたします。ヨーロッパからのお問い合わせも歓迎しております。\n\nWe respond in both Japanese and English. Inquiries from Europe are warmly welcomed.",
  },
  en: {
    eyebrow: "Contact",
    title: ["Get in", "Touch."],
    titleJp: "Inquiries",
    lead: "For inquiries about digital marketing support, or purchasing and selling antiques and collectibles, please feel free to reach out. We respond in both Japanese and English.",
    formLabel: "Inquiry Form",
    fields: [
      { label: "Name", placeholder: "Taro Yamada", type: "text" },
      { label: "Company", placeholder: "Company Name", type: "text" },
      { label: "Email Address", placeholder: "your@email.com", type: "email" },
    ],
    selectLabel: "Inquiry Type",
    selectDefault: "Please select",
    selectOptions: [
      "Digital Marketing Support",
      "Selling Antiques & Collectibles",
      "Purchasing Antiques & Collectibles",
      "Partnership",
      "Other",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Please describe your inquiry.",
    submit: "Send",
    note: "We will reply within 3 business days.",
    infoLabel: "Contact Info",
    infoItems: [
      { label: "Email", value: "info@theshuu.com" },
      {
        label: "Location",
        value: "1-9-15-2F Tamaminishi\nMatsubara, Osaka 580-0034, Japan",
      },
      { label: "Hours", value: "Mon – Fri, 10:00 – 18:00 JST" },
      { label: "Response", value: "Within 3 business days" },
    ],
    langNoteLabel: "Languages",
    langNoteText:
      "We respond in both Japanese and English. Inquiries from Europe are warmly welcomed.",
  },
};

export default function Contact() {
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
        <p className="shuu-page-lead">{t.lead}</p>
      </div>
      <div className="shuu-contact-body">
        <div className="shuu-form-area">
          <p className="shuu-section-label">{t.formLabel}</p>
          {t.fields.map((f) => (
            <div className="shuu-field" key={f.label}>
              <div className="shuu-field-label">
                <span>{f.label}</span>
              </div>
              <input
                className="shuu-input"
                type={f.type}
                placeholder={f.placeholder}
              />
            </div>
          ))}
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>{t.selectLabel}</span>
            </div>
            <div className="shuu-select-wrap">
              <select className="shuu-select" defaultValue="">
                <option value="">{t.selectDefault}</option>
                {t.selectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="shuu-field">
            <div className="shuu-field-label">
              <span>{t.messageLabel}</span>
            </div>
            <textarea
              className="shuu-textarea"
              placeholder={t.messagePlaceholder}
            />
          </div>
          <button className="shuu-submit" type="button">
            {t.submit}
          </button>
          <p className="shuu-form-note">{t.note}</p>
        </div>
        <div className="shuu-info-area">
          <p className="shuu-section-label">{t.infoLabel}</p>
          <div className="shuu-contact-items">
            {t.infoItems.map((item) => (
              <div className="shuu-contact-item" key={item.label}>
                <span className="shuu-contact-item-label">{item.label}</span>
                <span className="shuu-contact-item-val">
                  {item.value.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div className="shuu-lang-note">
            <p className="shuu-lang-note-label">{t.langNoteLabel}</p>
            <p className="shuu-lang-note-text">
              {t.langNoteText.split("\n").map((line, i) =>
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
