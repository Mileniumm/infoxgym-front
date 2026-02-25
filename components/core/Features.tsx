import { Dumbbell } from "lucide-react";
import Image from "next/image";
import Butterfly from "@/components/assets/butterfly.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
    {
        title: "PROGRESIÓN",
        text: "La progresión de ejercicios consiste en aumentar gradualmente la dificultad, intensidad o volumen de un entrenamiento.",
    },
    {
        title: "EJERCICIOS",
        text: "Los mejores ejercicios de gimnasio para tonificar y ganar masa muscular incluyen movimientos compuestos como sentadillas.",
    },
    {
        title: "NUTRICIÓN",
        text: "La nutrición es la ciencia y el proceso biológico mediante el cual el organismo incorpora, transforma y utiliza nutrientes.",
    },
    {
        title: "CUIDADO",
        text: "El cuidado nutricional es un proceso integral e interdisciplinario diseñado para satisfacer las necesidades de energía.",
    },
];

export default function Features() {
    return (
        <section id="services" className="relative py-24 bg-neutral-950 overflow-hidden">
            <div className="hidden lg:block absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-150 h-150 border-60 border-primary rounded-full opacity-10 pointer-events-none z-0" />
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="hidden lg:flex relative justify-center lg:justify-start">
                        <div className="relative w-87.5 h-87.5 md:w-112.5 md:h-112.5">
                            <div className="absolute -bottom-8 -left-8 w-full h-full rounded-full border-30 border-primary z-0" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neutral-950 z-10 shadow-2xl">
                                <Image
                                    src={Butterfly}
                                    alt="Hombre entrenando"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-12 text-center lg:text-left">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                                Nuestras mejores características
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                                ¿POR QUÉ ELEGIRNOS?
                            </h2>
                        </div>
                        <div className="hidden md:grid md:grid-cols-2 gap-x-8 gap-y-12">
                            {features.map((item, index) => (
                                <div key={index} className="flex flex-col items-start text-left group">
                                    <div className="mb-4 w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-zinc-800 transition-colors duration-300">
                                        <Dumbbell className="text-primary w-7 h-7" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="block md:hidden w-full px-4">
                            <Carousel opts={{ loop: true }} className="w-full">
                                <CarouselContent>
                                    {features.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="flex flex-col items-center text-center group py-4">
                                                <div className="mb-6 w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors duration-300">
                                                    <Dumbbell className="text-primary w-8 h-8" />
                                                </div>
                                                <h3 className="text-white font-black text-xl uppercase tracking-wide mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="text-zinc-400 text-sm leading-relaxed px-6">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white hover:bg-transparent hover:text-primary z-10" />
                                <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white hover:bg-transparent hover:text-primary z-10" />
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}