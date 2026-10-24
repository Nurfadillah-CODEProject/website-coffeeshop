import type { MenuItem } from "@/data/menu";

type Props = {
  item: MenuItem;
  onAdd: () => void;
};

export default function MenuCard({ item, onAdd }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h2 className="font-semibold text-amber-900">{item.nameId}</h2>
      <p className="text-sm text-amber-700">
        Rp {item.price.toLocaleString("id-ID")}
      </p>
      {item.soldOut ? (
        <span className="mt-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm text-gray-500">
          Habis
        </span>
      ) : (
        <button
          onClick={onAdd}
          className="mt-3 rounded bg-amber-700 px-3 py-1 text-sm text-white"
        >
          Tambah
        </button>
      )}
    </div>
  );
}
