import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — Shuu Corporation`;
    return () => {
      document.title = "宗株式会社 — Shuu Corporation";
    };
  }, [title]);
}
