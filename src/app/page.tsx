import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-3xl font-bold text-amber-900">Kopi Kita</h1>
      <p className="mt-2 text-amber-700">Pilih menu favoritmu.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
