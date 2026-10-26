"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Header({ count }: { count: number }) {
  const { lang, setLang, t } = useLanguage();

  function goToBasket() {
    document
      .getElementById("basket")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="flex h-[72px] items-center justify-between border-b border-line px-5 md:h-[104px] md:px-[72px]">
      <p className="font-serif text-[28px] font-semibold md:text-[38px]">
        Kopi Kita
      </p>

      <nav className="hidden items-center gap-9 text-sm md:flex">
        <span className="border-b border-transparent py-2">{t.navHome}</span>
        <span className="border-b border-ink py-2 font-semibold">
          {t.navMenu}
        </span>
        <span className="border-b border-transparent py-2">{t.navVisit}</span>
      </nav>

      <div className="flex items-center gap-3">
        <div className="flex overflow-hidden rounded border border-line text-xs">
          {(["id", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-2 uppercase ${
                lang === l ? "bg-ink text-cream" : "text-muted"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          onClick={goToBasket}
          className="flex h-11 items-center gap-3 rounded border border-line px-4 text-[13px] hover:bg-cream-dark"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 7h12l-1 13H7L6 7Z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
          <span className="hidden sm:inline">{t.basket}</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-ink text-[11px] text-cream">
            {count}
          </span>
        </button>
      </div>
    </header>
  );
}
