export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
            DESCUBRE TODAS NUESTRA OFERTAS
          </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                        TARIFAS
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="h-125 w-full bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-zinc-700 transition-all duration-300"
                        >
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}