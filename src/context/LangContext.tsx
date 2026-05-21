import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Lang = "ja" | "en";

const LangContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: "ja",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");
  const toggleLang = () => setLang((l) => (l === "ja" ? "en" : "ja"));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
