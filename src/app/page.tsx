import MenuList from "@/components/MenuList";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-3xl font-bold text-amber-900">Kopi Kita</h1>
      <p className="mt-2 text-amber-700">Pilih menu favoritmu.</p>

      <MenuList />
    </main>
  );
}
