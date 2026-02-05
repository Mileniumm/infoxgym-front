import { Button } from "@/components/ui/button";

const horarios = [
    {
        "id": 1,
        "name": "Lunes",
        "schedules": [
            {
                "id": 1,
                "trainer": "Jorge",
                "activity": "Crossfit",
                "end_time": "10:00",
                "start_time": "09:00"
            },
            {
                "id": 2,
                "trainer": "Ana",
                "activity": "Yoga",
                "end_time": "19:00",
                "start_time": "18:00"
            }
        ]
    },
    {
        "id": 2,
        "name": "Martes",
        "schedules": [
            {
                "id": 3,
                "trainer": "Pedro",
                "activity": "Boxeo",
                "end_time": "20:00",
                "start_time": "19:00"
            },
            {
                "id": 4,
                "trainer": "Sofia",
                "activity": "Funcional",
                "end_time": "09:00",
                "start_time": "08:00"
            }
        ]
    },
    {
        "id": 3,
        "name": "Miércoles",
        "schedules": [
            {
                "id": 5,
                "trainer": "Jorge",
                "activity": "Crossfit",
                "end_time": "10:00",
                "start_time": "09:00"
            },
            {
                "id": 6,
                "trainer": "Carlos",
                "activity": "Musculación",
                "end_time": "18:00",
                "start_time": "17:00"
            }
        ]
    },
    {
        "id": 4,
        "name": "Jueves",
        "schedules": [
            {
                "id": 7,
                "trainer": "Sofia",
                "activity": "Funcional",
                "end_time": "09:00",
                "start_time": "08:00"
            },
            {
                "id": 8,
                "trainer": "Ana",
                "activity": "Stretching",
                "end_time": "20:00",
                "start_time": "19:00"
            }
        ]
    },
    {
        "id": 5,
        "name": "Viernes",
        "schedules": [
            {
                "id": 9,
                "trainer": "Jorge",
                "activity": "Crossfit Open",
                "end_time": "19:00",
                "start_time": "18:00"
            },
            {
                "id": 10,
                "trainer": "Ramiro",
                "activity": "HIIT",
                "end_time": "11:00",
                "start_time": "10:00"
            }
        ]
    },
    {
        "id": 6,
        "name": "Sábado",
        "schedules": [
            {
                "id": 11,
                "trainer": "Equipo Infox",
                "activity": "Competencia",
                "end_time": "12:00",
                "start_time": "10:00"
            }
        ]
    },
    {
        "id": 7,
        "name": "Domingo",
        "schedules": []
    }
];

export default function Schedules() {
    const timeSlots = Array.from({ length: 14 }, (_, i) => {
        const hour = i + 8;
        return `${hour.toString().padStart(2, '0')}:00`;
    });
    const getClass = (dayId: number, time: string) => {
        const day = horarios.find(d => d.id === dayId);
        return day?.schedules.find(s => s.start_time === time);
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
                </div>
                <div className="w-full overflow-x-auto pb-4">
                    <table className="w-full min-w-200 border-collapse text-sm">
                        <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="py-6 px-4 text-left font-black text-primary uppercase tracking-wider w-32">
                                Hora
                            </th>
                            {horarios.map((dia) => (
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
                                {horarios.map((dia) => {
                                    const clase = getClass(dia.id, time);
                                    return (
                                        <td key={`${dia.id}-${time}`} className="py-4 px-4 text-zinc-400 font-medium">
                                            {clase ? (
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold uppercase">{clase.activity}</span>
                                                    <span className="text-xs text-primary">{clase.trainer}</span>
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