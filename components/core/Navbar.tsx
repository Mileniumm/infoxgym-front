import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

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
                        <span className="hidden sm:block">Soconcho 3865, Barrio Jardín Horizonte</span>
                        <span className="sm:hidden">Barrio Jardín Horizonte</span>
                    </div>
                </div>
            </div>
            <div className="w-full bg-neutral-900/95 backdrop-blur-md border-b border-zinc-800 relative">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    <div className="text-primary text-2xl tracking-tighter cursor-pointer font-black">
                        <span className="text-white">IN</span>
                        <span className="text-primary">FOX</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-white">
                        <a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a>
                        <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
                        <a href="#schedules" className="hover:text-primary transition-colors">Horarios</a>
                        <a href="#pricing" className="hover:text-primary transition-colors">Tarifas</a>
                    </div>

                    <div className="flex items-center gap-4">

                        <Button className="hidden md:flex font-bold uppercase tracking-wider text-xs rounded-full px-6 bg-primary hover:bg-orange-600 text-white">
                            Contacto
                        </Button>
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800">
                                        <Menu size={28} />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="right" className="bg-neutral-950 border-l border-zinc-800 w-[300px] sm:w-[400px]">
                                    <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                                    <div className="flex flex-col gap-8 mt-16 items-center">
                                        <a href="#about" className="text-white font-bold text-lg tracking-widest hover:text-primary transition-colors">
                                            Sobre Nosotros
                                        </a>
                                        <a href="#services" className="text-white font-bold text-lg tracking-widest hover:text-primary transition-colors">
                                            Servicios
                                        </a>
                                        <a href="#schedules" className="text-white font-bold text-lg tracking-widest hover:text-primary transition-colors">
                                            Horarios
                                        </a>
                                        <a href="#pricing" className="text-white font-bold text-lg tracking-widest hover:text-primary transition-colors">
                                            Tarifas
                                        </a>
                                        <Button className="mt-4 font-bold uppercase tracking-wider text-sm rounded-full px-8 py-6 h-auto bg-primary hover:bg-orange-600 text-white w-full">
                                            Contacto
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}