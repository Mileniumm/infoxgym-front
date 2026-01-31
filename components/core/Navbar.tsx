import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="bg-neutral-800 h-10 w-full border-b border-zinc-900">
                <div className="h-full flex items-center justify-center gap-4 text-[10px] md:text-xs font-medium text-white tracking-wide">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary" />
                        <span>(+54) 351 6469650</span>
                    </div>
                    <span className="hidden sm:block text-zinc-600">|</span>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        <span>Soconcho 3865, Barrio Jardín Horizonte</span>
                    </div>
                </div>
            </div>
            <div className="w-full bg-neutral-900/95 backdrop-blur-md border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-primary text-2xl tracking-tighter cursor-pointer font-black">
                        <span className="text-white">IN</span>
                        <span className="text-primary">FOX</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-white">
                        <a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a>
                        <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
                        <a href="#schedules" className="hover:text-primary transition-colors">Horarios</a>
                        <a href="#sales" className="hover:text-primary transition-colors">Tarifas</a>
                    </div>
                    <Button className="font-bold uppercase tracking-wider text-xs rounded-full px-6 bg-primary hover:bg-orange-600 text-white">
                        Contacto
                    </Button>
                </div>
            </div>
        </nav>
    );
}