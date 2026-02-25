"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2, Check, X } from "lucide-react";
type Schedule = {
    id: number;
    day: string;
    time: string;
    activity: string;
    trainer: string;
};

const initialData: Schedule[] = [
    { id: 1, day: "Martes", time: "01:00 - 02:00", activity: "Crossfit", trainer: "hori" },
    { id: 2, day: "Martes", time: "02:00 - 03:00", activity: "Musculación", trainer: "hori" },
    { id: 3, day: "Martes", time: "03:00 - 04:00", activity: "Crossfit", trainer: "hori" },
];

export default function AdminHorarios() {
    const dias = ["Lunes", "Martes", "Jueves", "Viernes", "Sabado", "Domingo"];
    const [activeDay, setActiveDay] = useState("Martes");
    const [schedules, setSchedules] = useState(initialData);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState({ time: "", activity: "", trainer: "" });

    const filteredSchedules = schedules.filter(s => s.day === activeDay);
    const handleEditClick = (schedule: Schedule) => {
        setEditingId(schedule.id);
        setEditForm({ time: schedule.time, activity: schedule.activity, trainer: schedule.trainer });
    };

    const handleSaveClick = (id: number) => {
        setSchedules(schedules.map(s => s.id === id ? { ...s, ...editForm } : s));
        setEditingId(null);
    };

    const handleDeleteClick = (id: number) => {
        setSchedules(schedules.filter(s => s.id !== id));
    };

    return (
        <div className="p-10 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl text-white font-black uppercase italic tracking-tighter border-b-2 border-primary inline-block pb-1">
                    ADMINISTRACION DE HORARIOS
                </h1>
                <Button variant="outline" className="bg-transparent text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white rounded-full px-6">
                    Reiniciar tabla
                </Button>
            </div>

            <div className="flex bg-neutral-900 rounded-lg p-1 border border-zinc-800 mb-6">
                {dias.map(dia => (
                    <button
                        key={dia}
                        onClick={() => setActiveDay(dia)}
                        className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${
                            activeDay === dia
                                ? "bg-zinc-800 text-primary shadow-sm"
                                : "text-zinc-500 hover:text-zinc-300"
                        }`}
                    >
                        {dia}
                    </button>
                ))}
            </div>

            <div className="rounded-xl border border-zinc-800 overflow-hidden bg-neutral-900/50">
                <Table>
                    <TableHeader className="bg-neutral-900">
                        <TableRow className="border-zinc-800 hover:bg-transparent">
                            <TableHead className="text-white font-bold h-14 pl-6">Hora</TableHead>
                            <TableHead className="text-white font-bold h-14 text-center">Actividad</TableHead>
                            <TableHead className="text-white font-bold h-14 text-center">Profesor</TableHead>
                            <TableHead className="w-32"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredSchedules.map((s) => (
                            <TableRow key={s.id} className="border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                                <TableCell className="pl-6 text-zinc-300">
                                    {editingId === s.id ? (
                                        <Input
                                            value={editForm.time}
                                            onChange={(e) => setEditForm({...editForm, time: e.target.value})}
                                            className="bg-zinc-950 border-zinc-700 h-8 text-white"
                                        />
                                    ) : (
                                        s.time
                                    )}
                                </TableCell>
                                <TableCell className="text-center text-zinc-400">
                                    {editingId === s.id ? (
                                        <Input
                                            value={editForm.activity}
                                            onChange={(e) => setEditForm({...editForm, activity: e.target.value})}
                                            className="bg-zinc-950 border-zinc-700 h-8 text-white text-center"
                                        />
                                    ) : (
                                        s.activity
                                    )}
                                </TableCell>
                                <TableCell className="text-center text-zinc-400">
                                    {editingId === s.id ? (
                                        <Input
                                            value={editForm.trainer}
                                            onChange={(e) => setEditForm({...editForm, trainer: e.target.value})}
                                            className="bg-zinc-950 border-zinc-700 h-8 text-white text-center"
                                        />
                                    ) : (
                                        s.trainer
                                    )}
                                </TableCell>
                                <TableCell className="text-right pr-6">
                                    <div className="flex justify-end gap-3">
                                        {editingId === s.id ? (
                                            <>
                                                <Button size="icon" variant="ghost" onClick={() => handleSaveClick(s.id)} className="text-green-500 hover:text-green-400 hover:bg-green-500/10 h-8 w-8">
                                                    <Check size={16} />
                                                </Button>
                                                <Button size="icon" variant="ghost" onClick={() => setEditingId(null)} className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 h-8 w-8">
                                                    <X size={16} />
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button size="icon" variant="ghost" onClick={() => handleEditClick(s)} className={`h-8 w-8 ${editingId !== null ? 'opacity-50 cursor-not-allowed' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`} disabled={editingId !== null}>
                                                    <Pencil size={16} />
                                                </Button>
                                                <Button size="icon" variant="ghost" onClick={() => handleDeleteClick(s.id)} className="h-8 w-8 text-zinc-400 hover:text-red-500 hover:bg-red-500/10">
                                                    <Trash2 size={16} />
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}