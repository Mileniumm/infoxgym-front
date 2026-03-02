import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const planes = [
    {
        nombre: "PASE DIARIO",
        precio: "$8.000",
        periodo: "/día",
        descripcion: "Ideal para probar nuestras instalaciones o si estás de paso.",
        beneficios: ["Acceso a musculación", "Uso de vestuarios", "Sin límite de tiempo"],
        destacado: false,
    },
    {
        nombre: "PASE LIBRE",
        precio: "$60.000",
        periodo: "/mes",
        descripcion: "Nuestro plan más popular. Entrena sin restricciones todos los días.",
        beneficios: ["Acceso a musculación", "Clases grupales incluidas", "Rutina personalizada", "Uso de vestuarios"],
        destacado: true,
    },
    {
        nombre: "TRIMESTRAL",
        precio: "$145.000",
        periodo: "/3 meses",
        descripcion: "Comprométete con tu cambio físico y ahorra a largo plazo.",
        beneficios: ["Todo lo del Pase Libre", "Congelamiento de cuota", "Evaluación mensual", "1 invitado al mes"],
        destacado: false,
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="hidden md:block py-24...">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        DESCUBRE TODAS NUESTRAS OFERTAS
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                        TARIFAS
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {planes.map((plan, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col bg-zinc-900/40 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:border-zinc-700 ${
                                plan.destacado ? "border-primary border-2 shadow-lg shadow-primary/10" : "border-zinc-800"
                            }`}
                        >
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="text-white font-black uppercase tracking-wider text-xl mb-2">
                                    {plan.nombre}
                                </CardTitle>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-black text-white">{plan.precio}</span>
                                    <span className="text-zinc-500 font-bold">{plan.periodo}</span>
                                </div>
                                <CardDescription className="text-zinc-400 mt-4 h-10">
                                    {plan.descripcion}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow pt-6">
                                <ul className="space-y-4">
                                    {plan.beneficios.map((beneficio, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-zinc-300 text-sm">{beneficio}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={`w-full font-bold uppercase tracking-wider text-xs rounded-full py-6 transition-all hover:scale-[1.02] ${
                                        plan.destacado
                                            ? "bg-primary hover:bg-orange-600 text-white"
                                            : "bg-white text-black hover:bg-zinc-200"
                                    }`}
                                >
                                    Elegir Plan
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}