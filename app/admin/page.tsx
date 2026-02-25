import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function AdminLogin() {
    return (
        <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-75 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-sm space-y-8 z-10">
                <div className="text-center">
                    <h1 className="text-white text-6xl font-black uppercase tracking-tighter italic leading-none">
                        ADMIN
                    </h1>
                </div>
                <div className="mt-8 space-y-4">
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-6 py-3 bg-neutral-900/60 border border-neutral-800 rounded-full text-white text-base placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-6 py-3 bg-neutral-900/60 border border-neutral-800 rounded-full text-white text-base placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md"
                        />
                    </div>

                    <div className="pt-4 flex justify-center">
                        <Button
                            asChild
                            className="bg-primary hover:bg-orange-600 text-neutral-950 font-black tracking-widest uppercase text-lg px-12 py-6 h-auto rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                        >
                            <Link href="/admin/horarios">
                                Enviar
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}