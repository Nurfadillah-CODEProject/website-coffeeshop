"use client";

import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { useLanguage } from "@/components/LanguageProvider";

type Props = {
  item: MenuItem;
  onAdd: () => void;
};

export default function MenuCard({ item, onAdd }: Props) {
  const { lang, t } = useLanguage();
  const isId = lang === "id";

  return (
    <article className="flex flex-col gap-4">
      <div
        className={`relative h-[200px] rounded-md bg-cream-dark md:h-[246px] ${
          item.soldOut ? "opacity-60" : ""
        }`}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={isId ? item.nameId : item.nameEn}
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="rounded-md object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-medium tracking-wide text-brown">
          {isId ? item.tagId : item.tagEn}
        </p>
        <h2 className="font-serif text-[32px] font-medium leading-[1.1]">
          {isId ? item.nameId : item.nameEn}
        </h2>
        <p className="text-sm leading-normal text-muted">
          {isId ? item.descId : item.descEn}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-medium">Rp{item.price.toLocaleString("id-ID")}</p>
        <button
          onClick={onAdd}
          disabled={item.soldOut}
          className={`flex h-[42px] items-center gap-4 rounded border px-4 text-xs font-medium ${
            item.soldOut
              ? "cursor-not-allowed border-line text-muted"
              : "border-ink hover:bg-ink hover:text-cream"
          }`}
        >
          {item.soldOut ? t.soldOut : t.add}
          {!item.soldOut && <span className="text-xl font-normal">+</span>}
        </button>
      </div>
    </article>
  );
}
