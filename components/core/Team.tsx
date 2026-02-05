import Image from "next/image";
import Couch3 from "@/components/assets/couch3.png";
import Couch2 from "@/components/assets/couch2.png";
import Couch1 from "@/components/assets/couch1.png";

const teamMembers = [
    {
        name: "Horincha",
        role: "Entrenadora Funcional",
        description: "Especialista en biomecánica y corrección postural. Te ayudará a moverte mejor y sin dolor.",
        image: Couch3,
    },
    {
        name: "Horincho",
        role: "Head Coach",
        description: "Un profesional cualificado que diseña programas de ejercicio individualizados y supervisa la técnica.",
        image: Couch2,
    },
    {
        name: "Chohori",
        role: "Musculación",
        description: "Experto en hipertrofia y fuerza. Su enfoque es llevar tu cuerpo al siguiente nivel de resistencia.",
        image: Couch1,
    },
];
export default function Team() {
    return (
        <section id="team" className="relative py-24 bg-neutral-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        NUESTRO EQUIPO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                        ¿QUIENES SOMOS?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300 shadow-2xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                />
                            </div>

                            <h3 className="text-xl font-black text-white uppercase italic mb-1">
                                {member.name}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto mt-3">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-300" />
                    </div>
                </div>
        </section>
    );
}