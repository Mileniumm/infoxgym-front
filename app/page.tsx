import Image from "next/image";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Features from "@/components/core/Features";
import Schedule from "@/components/core/Schedules";
import { Button } from "@/components/ui/button";
import BoxImage from "@/components/assets/box.jpg";

export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-950 w-full relative selection:bg-primary selection:text-white">
            <Navbar />
            <section id="inicio" className="relative w-full h-screen overflow-hidden bg-neutral-950">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={BoxImage}
                        alt="Boxeador In Fox Gym"
                        fill
                        className="object-cover object-[center_top] md:object-right"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/60 md:hidden" />
                </div>
                <div className="hidden md:block absolute top-0 -left-[40%] w-[80%] lg:w-[75%] h-full bg-neutral-950/85 backdrop-blur-[2px] transform skew-x-[25deg] origin-top-left border-r-[15px] border-primary/90 z-10" />
                <div className="relative z-20 h-full w-full px-10 md:px-20 lg:px-32 flex flex-col justify-center pt-20">
                    <div className="max-w-sm md:max-w-md space-y-6">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm md:text-base block">
                            Fitness & More
                        </span>
                        <h1 className="flex flex-col gap-0 font-black text-white uppercase italic tracking-tighter drop-shadow-xl text-4xl md:text-6xl lg:text-7xl leading-tight">
                            <span>Entrenar es</span>
                            <span className="text-white">mejor</span>
                            <span>acompañado</span>
                        </h1>
                        <div className="pt-2">
                            <Button className="bg-primary hover:bg-orange-600 text-white font-bold tracking-wider text-sm rounded-full px-10 py-6 h-auto shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
                                Apuntate
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <Features />
            <Schedule />
            <Footer />
        </main>
    );
}