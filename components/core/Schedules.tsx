import { Button } from "@/components/ui/button";
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const horarios = [
    { hora: "08:00", actividades: ["Crossfit", "Musculación", "Crossfit", "Musculación", "Crossfit", "Yoga"] },
    { hora: "09:00", actividades: ["Funcional", "", "Funcional", "", "Funcional", "Yoga"] },
    { hora: "10:00", actividades: ["", "Boxeo", "", "Boxeo", "", ""] },
    { hora: "18:00", actividades: ["Boxeo", "Funcional", "Boxeo", "Funcional", "Boxeo", ""] },
    { hora: "19:00", actividades: ["Crossfit", "Zumba", "Crossfit", "Zumba", "Crossfit", ""] },
    { hora: "20:00", actividades: ["Jiu-Jitsu", "", "Jiu-Jitsu", "", "Jiu-Jitsu", ""] },
];
export default function Schedules() {
    return (
        <section id="schedules" className="py-24 bg-neutral-950 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        Organiza tu cambio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                        Horario de Clases
                    </h2>
                </div>
                <div className="w-full overflow-x-auto pb-4">
                    <table className="w-full min-w-200 border-collapse text-sm">
                        <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="py-6 px-4 text-left font-black text-primary uppercase tracking-wider w-32">
                                Hora
                            </th>
                            {dias.map((dia) => (
                                <th key={dia} className="py-6 px-4 text-left font-black text-primary uppercase tracking-wider">
                                    {dia}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {horarios.map((fila, index) => (
                            <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                                <td className="py-6 px-4 font-bold text-white">
                                    {fila.hora}
                                </td>
                                {fila.actividades.map((actividad, i) => (
                                    <td key={i} className="py-4 px-4 text-zinc-400 font-medium">
                                        {actividad ? (
                                            <span className="text-white">{actividad}</span>
                                        ) : (
                                            <span className="text-zinc-800">-</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-12 flex justify-center">
                    <Button className="bg-white text-black hover:bg-primary hover:text-white font-bold uppercase tracking-wider text-sm rounded-full px-8 py-6 h-auto transition-all">
                        Descargar Horario PDF
                    </Button>
                </div>
            </div>
        </section>
    );
}