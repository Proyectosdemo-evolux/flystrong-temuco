export default function Home() {
  return (
    <main>
      <section className="flex min-h-[85dvh] flex-col justify-end gap-6 px-4 pb-12 pt-24 sm:px-8">
        {/* ponytail: fotografía real pendiente; el hero queda sin imagen hasta recibirla */}
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Flystrong Temuco</p>
        <h1 className="font-display text-5xl font-bold uppercase leading-[1.05] sm:text-7xl">
          Entrena fuerte.
          <br />
          Entrena con propósito.
        </h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#planes"
            className="flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 font-semibold text-bg"
          >
            Explorar planes
          </a>
          <a
            href="#conoce"
            className="flex min-h-12 items-center justify-center rounded-xl border border-border px-6 font-semibold"
          >
            Conoce Flystrong
          </a>
        </div>
      </section>

      <section id="planes" className="px-4 py-12 sm:px-8">
        <h2 className="font-display text-3xl uppercase">Planes</h2>
        <p className="mt-2 text-muted">En construcción.</p>
      </section>

      <section id="conoce" className="px-4 py-12 sm:px-8">
        <h2 className="font-display text-3xl uppercase">Conoce Flystrong</h2>
        <p className="mt-2 text-muted">En construcción.</p>
      </section>
    </main>
  );
}
