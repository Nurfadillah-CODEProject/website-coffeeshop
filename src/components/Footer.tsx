export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-7 pt-[52px] text-cream md:px-[72px]">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="md:w-[520px]">
          <p className="font-serif text-[48px] font-medium md:text-[64px]">
            Kopi Kita
          </p>
          <p className="mt-3 text-sm text-cream-dark">
            Good coffee. A place for all of us.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:w-[180px]">
          <p className="text-[11px] text-cream-dark">COME A LITTLE CLOSER</p>
          <p>Our menu</p>
          <p>Our story</p>
          <p>Visit the café</p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:w-[280px]">
          <p className="text-[11px] text-cream-dark">LET’S STAY CONNECTED</p>
          <p>Instagram ↗ @kopikita.jkt</p>
          <p>hello@kopikita.co</p>
          <p>+62 812 3456 7890</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-cream-dark md:flex-row md:justify-between">
        <p>© 2026 Kopi Kita. Made for everyday moments.</p>
        <p>Privacy policy / Terms &amp; conditions</p>
        <p>Jakarta, Indonesia</p>
      </div>
    </footer>
  );
}
