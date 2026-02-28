import Link from "next/link";
import { LayoutDashboard, CalendarDays, Wallet, Image as ImageIcon, ChevronLeft } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-neutral-950 text-white overflow-hidden">
            <aside className="w-64 bg-[#111111] border-r border-zinc-900 flex flex-col justify-between">
                <div>
                    <div className="p-8 pb-12">
                        <span className="text-white text-3xl font-black tracking-tighter">IN</span>
                        <span className="text-primary text-3xl font-black tracking-tighter">FOX</span>
                    </div>
                    <nav className="space-y-2 px-4">
                        <Link href="/admin/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50">
                            <LayoutDashboard size={20} />
                            <span className="font-medium text-sm">Dashboard</span>
                        </Link>
                        <Link href="/admin/horarios" className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50">
                            <CalendarDays size={20} />
                            <span className="font-medium text-sm">Horarios</span>
                        </Link>

                        <Link href="/admin/tarifas" className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50">
                            <Wallet size={20} />
                            <span className="font-medium text-sm">Tarifas</span>
                        </Link>

                        <Link href="/admin/galeria" className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50">
                            <ImageIcon size={20} />
                            <span className="font-medium text-sm">Galeria</span>
                        </Link>
                    </nav>
                </div>

                <div className="p-4 border-t border-zinc-900">
                    <Link href="/admin" className="flex items-center gap-4 text-zinc-400 hover:text-white hover:bg-zinc-800/50 px-4 py-3 rounded-lg transition-colors">
                        <ChevronLeft size={20} />
                        <span className="font-medium text-sm">Salir</span>
                    </Link>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto bg-neutral-950 relative">
                {children}
            </main>
        </div>
    );
}