import Image from "next/image";
import Dumbell from "@/components/assets/dumbell.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const galleryImages = [
    { src: Dumbell, alt: "Pesas" },
    { src: Dumbell, alt: "Cardio" },
    { src: Dumbell, alt: "Clases" },
];
export default function Facilities() {
    return (
        <section id="facilities" className="relative py-24 bg-neutral-950 overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border-50 border-primary pointer-events-none opacity-100 z-0 -rotate-12 skew-y-12" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        CONOCE NUESTRA SUCURSAL
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                        NUESTRAS INSTALACIONES
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-lg">
                            GALERÍA
                        </h3>
                        <div className="w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden relative group shadow-2xl">
                            <Carousel opts={{ loop: true }} className="w-full">
                                <CarouselContent className="ml-0">
                                    {galleryImages.map((img, index) => (
                                        <CarouselItem key={index} className="pl-0 basis-full">
                                            <div className="relative w-full aspect-4/3">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    className="object-cover"
                                                    placeholder="blur"
                                                />
                                                <div className="absolute inset-0 bg-black/20" />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white z-10" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white z-10" />
                            </Carousel>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-lg">
                            UBICACIÓN
                        </h3>
                        <div className="aspect-4/3 w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden relative shadow-2xl group">
                            <iframe
                                src="https://maps.google.com/maps?q=Soconcho+3865,+Barrio+Jardín+Horizonte,+Córdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 border border-zinc-800 p-4 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <p className="text-white font-bold text-sm">Soconcho 3865</p>
                                <p className="text-zinc-400 text-xs">Barrio Jardín Horizonte, Córdoba</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}