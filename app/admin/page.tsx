import Link from "next/link";

export default function AdminLogin() {
    return (
        <main className="flex min-h-screen w-full bg-neutral-950 items-center justify-center relative">
            <div className="z-10 w-full max-w-sm px-6 flex flex-col items-center">
                <h1 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-10 drop-shadow-lg">
                    ADMIN
                </h1>
                <form className="w-full flex flex-col gap-4">

                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 placeholder:text-zinc-600 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-all"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 placeholder:text-zinc-600 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-all"
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="flex justify-center mt-6">
                            <a href="/admin/dashboard">
                                <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm uppercase tracking-wider py-2 px-10 rounded-full transition-all shadow-lg shadow-orange-900/20 hover:scale-105 active:scale-95">
                                    Enviar
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </form>

            </div>

        </main>
    );
}