import { Button } from "@/components/ui/button";

interface ScheduleItem {
    id: number;
    start_time: string;
    end_time: string;
    activity: string;
    trainer: string;
}

interface DaySchedule {
    id: number;
    name: string;
    schedules: ScheduleItem[];
}

async function getHorarios(): Promise<DaySchedule[]> {
    try {
        const res = await fetch("http://localhost:3001/schedule", {
            cache: "no-store"
        });
        if (!res.ok) throw new Error("Error al obtener los horarios");

        const json = await res.json() as { data: DaySchedule[] };
        return json.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function Schedules() {
    const horarios = await getHorarios();

    const timeSlots = Array.from({ length: 14 }, (_, i) => {
        const hour = i + 8;
        return `${hour.toString().padStart(2, '0')}:00`;
    });

    const getClass = (dayId: number, time: string) => {
        const day = horarios.find((d: DaySchedule) => d.id === dayId);
        return day?.schedules.find((s: ScheduleItem) => s.start_time === time);
    };
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
                    <p className="md:hidden text-zinc-500 text-xs mt-4 animate-pulse">
                        ← Desliza la tabla para ver todos los días →
                    </p>
                </div>
                <div className="w-full overflow-x-auto pb-4">
                    <table className="w-full min-w-[800px] border-collapse text-sm">
                        <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="py-6 px-4 text-left font-black text-primary uppercase tracking-wider w-32">
                                Hora
                            </th>
                            {horarios.map((dia: DaySchedule) => (
                                <th key={dia.id} className="py-6 px-4 text-left font-black text-primary uppercase tracking-wider">
                                    {dia.name}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {timeSlots.map((time) => (
                            <tr key={time} className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                                <td className="py-6 px-4 font-bold text-white">
                                    {time}
                                </td>
                                {horarios.map((dia: DaySchedule) => {
                                    const clase = getClass(dia.id, time);
                                    return (
                                        <td key={`${dia.id}-${time}`} className="py-4 px-4 text-zinc-400 font-medium">
                                            {clase ? (
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold uppercase">{clase.activity}</span>
                                                    <span className="text-xs text-primary">{clase.trainer}</span>
                                                    <span className="text-[10px] text-zinc-600">{clase.start_time} - {clase.end_time}</span>
                                                </div>
                                            ) : (
                                                <span className="text-zinc-800">-</span>
                                            )}
                                        </td>
                                    );
                                })}
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