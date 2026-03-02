"use client";
import { usePathname } from 'next/navigation';
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const esLogin = pathname === "/admin";

    return (
        <div className="flex h-screen bg-neutral-950 text-white overflow-hidden">
            {!esLogin && <AdminSidebar />}

            <main className="flex-1 overflow-y-auto bg-neutral-950 relative">
                {children}
            </main>
        </div>
    );
}