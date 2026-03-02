import { Send, MessageCircle } from "lucide-react";
export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-zinc-900 pt-16 pb-8 text-zinc-400">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

                    <div className="space-y-6 text-left flex flex-col items-start">
                        <div className="text-2xl font-black tracking-tighter">
                            <span className="text-white">IN</span>
                            <span className="text-primary">FOX</span>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-400 md:pr-4">
                            Un espacio o establecimiento equipado para la práctica de deportes, ejercicios físicos y actividades de fitness, con aparatos y máquinas.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="bg-white text-black p-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center">
                                <MessageCircle size={20} strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-white font-bold uppercase mb-6 inline-block border-b-2 border-primary pb-1 text-sm tracking-wider">
                            Enlaces
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#schedules" className="hover:text-primary transition-colors">Horarios</a></li>
                            <li><a href="#sales" className="hover:text-primary transition-colors">Tarifas</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex text-left flex-col items-start">
                        <h3 className="text-white font-bold uppercase mb-6 inline-block border-b-2 border-primary pb-1 text-sm tracking-wider">
                            Contactanos
                        </h3>

                        <ul className="space-y-4 text-sm mb-8 flex flex-col items-start">
                            <li className="flex flex-col gap-1">
                                <span className="text-zinc-500">Telefono:</span>
                                <span className="text-zinc-300">(+54) 351 6469650</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-zinc-500">Direccion:</span>
                                <span className="text-zinc-300">Soconcho 3865 Barrio Jardín Horizonte</span>
                            </li>
                        </ul>
                        <div className="relative w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-600"
                            />
                            <button className="absolute right-1 top-1 bg-primary w-9 h-9 rounded-full text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-zinc-900 pt-8 text-center text-xs text-zinc-500">
                    <p>© InFox - Derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
