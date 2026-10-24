import MenuPage from "@/components/MenuPage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ meja?: string }>;
}) {
  const { meja } = await searchParams;

  return <MenuPage tableNumber={meja ?? null} />;
}
