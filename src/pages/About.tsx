import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";
import { usePageTitle } from "../hooks/usePageTitle";

const content = {
  ja: {
    eyebrow: "About Us",
    title: ["Who", "We Are."],
    titleJp: "会社概要",
    lead: "大阪を拠点に、デジタルマーケティングと骨董・アンティークの越境取引を手がける会社です。日本とヨーロッパを繋ぐ架け橋として、誠実な取引と実践知を大切にしています。",
    profileLabel: "Company Profile",
    table: [
      { label: "Company", value: "宗株式会社", sub: "Shuu Corporation" },
      { label: "Founded", value: "2026年" },
      {
        label: "Location",
        value: "〒580-0034 大阪府松原市天美西１丁目９−１５− 2階",
        sub: "Osaka, Japan",
      },
      { label: "代表取締役", value: "安栖宗健" },
      {
        label: "Business",
        value: "デジタルマーケティング支援\n骨董・アンティーク越境取引",
      },
      { label: "License", value: "古物商許可証（大阪府公安委員会）" },
    ],
    licenseLabel: "古物商許可証番号",
    licenseNum: "62224R085831",
    licenseSub: "大阪府公安委員会許可",
    accessLabel: "Access",
    access: [
      {
        label: "Address",
        value: "〒580-0034 大阪府松原市天美西１丁目９−１５− 2階",
        sub: "Osaka, Japan",
      },
      { label: "Email", value: "info@theshuu.com" },
      {
        label: "Hours",
        value: "平日 10:00 — 18:00",
        sub: "Mon – Fri, 10:00 – 18:00 JST",
      },
    ],
  },
  en: {
    eyebrow: "About Us",
    title: ["Who", "We Are."],
    titleJp: "Company Overview",
    lead: "Based in Osaka, we specialize in digital marketing and cross-border antique trading. As a bridge between Japan and Europe, we value honest transactions and expertise grounded in practice.",
    profileLabel: "Company Profile",
    table: [
      { label: "Company", value: "Shuu Corporation", sub: "宗株式会社" },
      { label: "Founded", value: "2026" },
      {
        label: "Location",
        value: "1-9-15-2F Tamaminishi, Matsubara, Osaka 580-0034, Japan",
        sub: "Osaka, Japan",
      },
      { label: "CEO", value: "Munetake Yasuzumi" },
      {
        label: "Business",
        value: "Digital Marketing Support\nCross-border Antique Trading",
      },
      {
        label: "License",
        value:
          "Antique Dealer License (Osaka Prefectural Public Safety Commission)",
      },
    ],
    licenseLabel: "Antique Dealer License No.",
    licenseNum: "62224R085831",
    licenseSub: "Osaka Prefectural Public Safety Commission",
    accessLabel: "Access",
    access: [
      {
        label: "Address",
        value: "1-9-15-2F Tamaminishi, Matsubara, Osaka 580-0034, Japan",
        sub: "Osaka, Japan",
      },
      { label: "Email", value: "info@theshuu.com" },
      {
        label: "Hours",
        value: "Mon – Fri, 10:00 – 18:00 JST",
      },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];
  usePageTitle(lang === "ja" ? "会社概要" : "About Us");

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
      <div className="shuu-info-section">
        <div className="shuu-info-left">
          <p className="shuu-section-label">{t.profileLabel}</p>
          <table className="shuu-table">
            <tbody>
              {t.table.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>
                    {row.value.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < row.value.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                    {row.sub && (
                      <>
                        <br />
                        <span className="shuu-muted-en">{row.sub}</span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="shuu-license">
            <p className="shuu-license-label">{t.licenseLabel}</p>
            <p className="shuu-license-num">{t.licenseNum}</p>
            <p className="shuu-license-sub">{t.licenseSub}</p>
          </div>
        </div>
        <div className="shuu-info-right">
          <p className="shuu-section-label">{t.accessLabel}</p>
          <div className="shuu-access-items">
            {t.access.map((item) => (
              <div className="shuu-access-item" key={item.label}>
                <p className="shuu-access-item-label">{item.label}</p>
                <p className="shuu-access-item-val">{item.value}</p>
                {item.sub && <p className="shuu-access-item-en">{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
