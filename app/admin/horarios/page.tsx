"use client";
import { useState, useEffect, useCallback } from "react";
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
import { Pencil, Trash2, Check, X, Plus } from "lucide-react";

const API_URL = "http://localhost:3001/schedule";

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

export default function AdminHorarios() {
    const [dias, setDias] = useState<DaySchedule[]>([]);
    const [activeDay, setActiveDay] = useState<DaySchedule | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState({ start_time: "", end_time: "", activity: "", trainer: "" });
    const [isCreating, setIsCreating] = useState(false);

    const fetchSchedules = useCallback(async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) {
                console.error("El backend tiró un error:", res.status);
                return;
            }

            const json = await res.json() as { data: DaySchedule[] };
            if (json.data) {
                setDias(json.data);
                if (json.data.length > 0) {
                    setActiveDay((prev: DaySchedule | null) =>
                        prev ? json.data.find((d: DaySchedule) => d.id === prev.id) || json.data[0] : json.data[0]
                    );
                }
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }, []);

    useEffect(() => {
    }, [fetchSchedules]);

    const handleCreate = async () => {
        if (!activeDay) return;
        try {
            await fetch(`${API_URL}/${activeDay.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm),
            });
            setIsCreating(false);
            fetchSchedules();
        } catch (error) {
            console.error("Error creating", error);
        }
    };

    const handleUpdate = async (id: number) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm),
            });
            setEditingId(null);
            fetchSchedules();
        } catch (error) {
            console.error("Error updating", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("¿Seguro que deseas eliminar este horario?")) return;
        try {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            fetchSchedules();
        } catch (error) {
            console.error("Error deleting", error);
        }
    };

    const startEditing = (schedule: ScheduleItem) => {
        setEditingId(schedule.id);
        setIsCreating(false);
        setEditForm({
            start_time: schedule.start_time,
            end_time: schedule.end_time,
            activity: schedule.activity,
            trainer: schedule.trainer
        });
    };

    const startCreating = () => {
        setIsCreating(true);
        setEditingId(null);
        setEditForm({ start_time: "", end_time: "", activity: "", trainer: "" });
    };

    const cancelAction = () => {
        setIsCreating(false);
        setEditingId(null);
    };

    return (
        <div className="p-10 w-full mx-auto min-h-screen">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl text-white font-black uppercase italic tracking-tighter border-b-2 border-orange-500 inline-block pb-1">
                    ADMINISTRACIÓN DE HORARIOS
                </h1>
                <Button
                    onClick={startCreating}
                    disabled={isCreating || editingId !== null}
                    className="bg-primary hover:bg-orange-600 text-white rounded-full px-6 flex items-center gap-2"
                >
                    <Plus size={18} /> Agregar Horario
                </Button>
            </div>

            <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800 mb-6">
                {dias?.map((dia: DaySchedule) => (
                    <button
                        key={dia.id}
                        onClick={() => setActiveDay(dia)}
                        className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${
                            activeDay?.id === dia.id
                                ? "bg-zinc-900 text-orange-500 shadow-sm"
                                : "text-zinc-500 hover:text-zinc-300"
                        }`}
                    >
                        {dia.name}
                    </button>
                ))}
            </div>

            <div className="rounded-xl border border-zinc-800 overflow-hidden bg-black">
                <Table>
                    <TableHeader className="bg-zinc-950">
                        <TableRow className="border-zinc-800 hover:bg-transparent">
                            <TableHead className="text-white font-bold h-14 pl-6 w-32">Inicio</TableHead>
                            <TableHead className="text-white font-bold h-14 w-32">Fin</TableHead>
                            <TableHead className="text-white font-bold h-14 text-center">Actividad</TableHead>
                            <TableHead className="text-white font-bold h-14 text-center">Profesor</TableHead>
                            <TableHead className="w-32"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {isCreating && (
                            <TableRow className="border-zinc-900 bg-zinc-900/40">
                                <TableCell className="pl-6">
                                    <Input type="time" value={editForm.start_time} onChange={(e) => setEditForm({...editForm, start_time: e.target.value})} className="bg-black border-zinc-700 h-8 text-white focus:ring-orange-500" />
                                </TableCell>
                                <TableCell>
                                    <Input type="time" value={editForm.end_time} onChange={(e) => setEditForm({...editForm, end_time: e.target.value})} className="bg-black border-zinc-700 h-8 text-white focus:ring-orange-500" />
                                </TableCell>
                                <TableCell>
                                    <Input placeholder="Ej: Crossfit" value={editForm.activity} onChange={(e) => setEditForm({...editForm, activity: e.target.value})} className="bg-black border-zinc-700 h-8 text-white text-center" />
                                </TableCell>
                                <TableCell>
                                    <Input placeholder="Profesor" value={editForm.trainer} onChange={(e) => setEditForm({...editForm, trainer: e.target.value})} className="bg-black border-zinc-700 h-8 text-white text-center" />
                                </TableCell>
                                <TableCell className="text-right pr-6">
                                    <div className="flex justify-end gap-3">
                                        <Button size="icon" variant="ghost" onClick={handleCreate} className="text-green-500 hover:text-green-400 hover:bg-green-500/10 h-8 w-8">
                                            <Check size={16} />
                                        </Button>
                                        <Button size="icon" variant="ghost" onClick={cancelAction} className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 h-8 w-8">
                                            <X size={16} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}

                        {activeDay && activeDay.schedules && activeDay.schedules.length > 0 ? (
                            activeDay.schedules.map((s: ScheduleItem) => (
                                <TableRow key={s.id} className="border-zinc-900 hover:bg-zinc-900/40 transition-colors">

                                    <TableCell className="pl-6 text-zinc-300">
                                        {editingId === s.id ? (
                                            <Input type="time" value={editForm.start_time} onChange={(e) => setEditForm({...editForm, start_time: e.target.value})} className="bg-black border-zinc-700 h-8 text-white focus:ring-orange-500" />
                                        ) : (
                                            s.start_time
                                        )}
                                    </TableCell>

                                    <TableCell className="text-zinc-300">
                                        {editingId === s.id ? (
                                            <Input type="time" value={editForm.end_time} onChange={(e) => setEditForm({...editForm, end_time: e.target.value})} className="bg-black border-zinc-700 h-8 text-white focus:ring-orange-500" />
                                        ) : (
                                            s.end_time
                                        )}
                                    </TableCell>

                                    <TableCell className="text-center text-zinc-400">
                                        {editingId === s.id ? (
                                            <Input value={editForm.activity} onChange={(e) => setEditForm({...editForm, activity: e.target.value})} className="bg-black border-zinc-700 h-8 text-white text-center" />
                                        ) : (
                                            s.activity
                                        )}
                                    </TableCell>

                                    <TableCell className="text-center text-zinc-400">
                                        {editingId === s.id ? (
                                            <Input value={editForm.trainer} onChange={(e) => setEditForm({...editForm, trainer: e.target.value})} className="bg-black border-zinc-700 h-8 text-white text-center" />
                                        ) : (
                                            s.trainer
                                        )}
                                    </TableCell>

                                    <TableCell className="text-right pr-6">
                                        <div className="flex justify-end gap-3">
                                            {editingId === s.id ? (
                                                <>
                                                    <Button size="icon" variant="ghost" onClick={() => handleUpdate(s.id)} className="text-green-500 hover:text-green-400 hover:bg-green-500/10 h-8 w-8">
                                                        <Check size={16} />
                                                    </Button>
                                                    <Button size="icon" variant="ghost" onClick={cancelAction} className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 h-8 w-8">
                                                        <X size={16} />
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button size="icon" variant="ghost" onClick={() => startEditing(s)} className={`h-8 w-8 ${editingId !== null || isCreating ? 'opacity-50 cursor-not-allowed' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`} disabled={editingId !== null || isCreating}>
                                                        <Pencil size={16} />
                                                    </Button>
                                                    <Button size="icon" variant="ghost" onClick={() => handleDelete(s.id)} className={`h-8 w-8 ${editingId !== null || isCreating ? 'opacity-50 cursor-not-allowed' : 'text-zinc-500 hover:text-red-500 hover:bg-red-500/10'}`} disabled={editingId !== null || isCreating}>
                                                        <Trash2 size={16} />
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            !isCreating && (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center text-zinc-600 italic">
                                        No hay horarios programados para este día.
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}