"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

export default function MenuList() {
  const [cart, setCart] = useState<Record<number, number>>({});

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

  const cartItems = menuItems
    .filter((item) => cart[item.id])
    .map((item) => ({ ...item, qty: cart[item.id] }));

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={() => addItem(item.id)} />
        ))}
      </div>

      <section className="mt-8 rounded-xl bg-white p-4 shadow">
        <h2 className="text-xl font-bold text-amber-900">Keranjang</h2>

        {cartItems.length === 0 ? (
          <p className="mt-2 text-sm text-gray-500">Keranjang masih kosong.</p>
        ) : (
          <>
            <ul className="mt-3 space-y-3">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-amber-900">{item.nameId}</p>
                    <p className="text-sm text-amber-700">
                      Rp {(item.price * item.qty).toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 rounded bg-amber-100 text-amber-900"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => addItem(item.id)}
                      className="h-8 w-8 rounded bg-amber-700 text-white"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between border-t pt-3 font-bold text-amber-900">
              <span>Total</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </>
        )}
      </section>
    </>
  );
}
