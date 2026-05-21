import { useLang } from "../context/LangContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="shuu-footer">
      <div className="shuu-footer-logo">
        {lang === "ja" ? "宗株式会社" : "Shuu Corporation"}
      </div>
      <p className="shuu-footer-copy">
        © 2024 Shuu Corporation. All rights reserved.
      </p>
    </footer>
  );
}
