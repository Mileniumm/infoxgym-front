import { Dumbbell } from "lucide-react";
const features = [
    {
        title: "PROGRESIÓN",
        text: "La progresión de ejercicios consiste en aumentar gradualmente la dificultad, intensidad o volumen de un entrenamiento para forzar la adaptación muscular.",
    },
    {
        title: "EJERCICIOS",
        text: "Los mejores ejercicios de gimnasio para tonificar y ganar masa muscular incluyen movimientos compuestos como sentadillas, press de banca y peso muerto.",
    },
    {
        title: "NUTRICION",
        text: "La nutrición es la ciencia y el proceso biológico mediante el cual el organismo incorpora, transforma y utiliza las sustancias químicas presentes en los alimentos.",
    },
    {
        title: "CUIDADO",
        text: "El cuidado nutricional es un proceso integral e interdisciplinario diseñado para satisfacer las necesidades de energía y nutrientes de una persona.",
    },
];
export default function Features() {
    return (
        <section id="services" className="relative py-24 bg-neutral-950 overflow-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-125 h-125 border-40 border-primary/20 rounded-full blur-3xl" />
            <div className="hidden lg:block absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-150 h-150 border-60 border-primary rounded-full opacity-10" />
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
                        Nuestras mejores características
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                        ¿Por qué elegirnos?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-zinc-800 transition-all duration-300 shadow-lg group-hover:shadow-primary/10">
                                <Dumbbell className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}