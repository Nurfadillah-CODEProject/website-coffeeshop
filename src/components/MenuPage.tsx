"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { useLanguage } from "@/components/LanguageProvider";
import { menuItems, type Category } from "@/data/menu";

type Filter = "all" | Category;

export default function MenuPage({
  tableNumber,
}: {
  tableNumber: string | null;
}) {
  const { lang, t } = useLanguage();
  const [cart, setCart] = useState<Record<number, number>>({});
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  function addItem(id: number) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function removeItem(id: number) {
    setCart((prev) => {
      const qty = (prev[id] ?? 0) - 1;
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }

  const nameOf = (item: (typeof menuItems)[number]) =>
    lang === "id" ? item.nameId : item.nameEn;

  const visibleItems = menuItems.filter(
    (item) =>
      (filter === "all" || item.category === filter) &&
      nameOf(item).toLowerCase().includes(query.toLowerCase()),
  );

  const cartItems = menuItems
    .filter((item) => cart[item.id])
    .map((item) => ({ ...item, qty: cart[item.id] }));
  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: t.tabAll },
    { key: "coffee", label: t.tabCoffee },
    { key: "non-coffee", label: t.tabNonCoffee },
    { key: "bakes", label: t.tabBakes },
  ];
  const countOf = (key: Filter) =>
    key === "all"
      ? menuItems.length
      : menuItems.filter((item) => item.category === key).length;

  function checkout() {
    const order = {
      tableNumber,
      type: "dine-in",
      items: cartItems.map((item) => ({
        menuId: item.id,
        qty: item.qty,
        price: item.price,
      })),
      total,
    };
    console.log("Pesanan:", order);
    alert("Pesanan tercatat di console (belum dikirim ke server).");
  }

  return (
    <>
      <Header count={itemCount} />

      <main className="px-5 pb-20 pt-10 md:px-[72px]">
        <p className="text-[11px] font-medium tracking-wide text-brown">
          {t.eyebrow}
        </p>

        <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="font-serif text-[44px] font-medium leading-[1.02] md:text-[68px]">
            {t.heroLine1}
            <br />
            {t.heroLine2}
          </h1>
          <div className="flex flex-col gap-5 md:w-[345px]">
            <p className="text-[15px] leading-[1.7] text-muted">{t.heroNote}</p>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="h-11 w-full rounded border border-line bg-transparent px-[14px] text-[13px] outline-none placeholder:text-muted focus:border-ink"
            />
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 rounded bg-cream-dark px-5 py-4 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-medium">
              {tableNumber ? `${t.tableLabel} ${tableNumber}` : t.noTable}
            </span>
            {tableNumber && (
              <span className="text-muted">
                {" "}
                · {t.tableNote} · {t.readyIn}
              </span>
            )}
          </p>
          <p className="text-xs text-olive">● {t.openUntil}</p>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto border-b border-line pb-5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`h-10 shrink-0 rounded-full px-5 text-[13px] ${
                filter === tab.key ? "bg-ink text-cream" : "text-muted"
              }`}
            >
              {tab.label} · {countOf(tab.key)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_328px]">
          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-[30px] font-medium">
                {t.wholeMenu}
              </h2>
              <p className="text-xs text-muted">
                {visibleItems.length} {t.reasons}
              </p>
            </div>

            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {visibleItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAdd={() => addItem(item.id)}
                />
              ))}
            </div>

            <p className="mt-10 border-t border-line pt-5 text-xs leading-normal text-muted">
              {t.priceNote}
            </p>
          </section>

          <aside className="h-fit rounded-md border border-line bg-card p-6 lg:sticky lg:top-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[30px] font-medium">
                {t.yourBasket}
              </h2>
              <p className="text-xs text-muted">
                {itemCount} {t.items}
              </p>
            </div>
            <div className="my-6 h-px bg-line" />

            {cartItems.length === 0 ? (
              <p className="text-sm text-muted">{t.empty}</p>
            ) : (
              <>
                <ul className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <div className="h-[72px] w-16 shrink-0 rounded-md bg-cream-dark" />
                      <div className="flex flex-1 flex-col gap-1">
                        <p className="text-[13px] font-medium">
                          {nameOf(item)}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex h-7 items-center gap-3 rounded-[3px] border border-line px-2 text-[11px]">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-sm"
                            >
                              −
                            </button>
                            <span>{item.qty}</span>
                            <button
                              onClick={() => addItem(item.id)}
                              className="text-sm"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-xs">
                            Rp{(item.price * item.qty).toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-line" />

                <div className="flex justify-between text-sm">
                  <span className="text-muted">
                    {t.subtotal} · {itemCount} {t.items}
                  </span>
                  <span>Rp{total.toLocaleString("id-ID")}</span>
                </div>
                <div className="my-3.5 h-px bg-line" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{t.total}</span>
                  <span className="text-xl font-medium">
                    Rp{total.toLocaleString("id-ID")}
                  </span>
                </div>

                <button
                  onClick={checkout}
                  disabled={!tableNumber}
                  className="mt-6 flex h-[50px] w-full items-center justify-center gap-6 rounded bg-ink text-sm font-medium text-cream disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {t.checkout} <span className="text-xl">↗</span>
                </button>
                <p className="mt-4 text-center text-[11px] leading-normal text-muted">
                  {tableNumber ? t.basketNote : t.noTable}
                </p>
              </>
            )}
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
