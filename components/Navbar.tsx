'use client';

import { motion } from 'framer-motion';
import { Home, Info, Book, ShoppingCart, MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
    { name: 'الرئيسية', icon: Home, href: '#' },
    { name: 'عن السيرفر', icon: Info, href: '#features' },
    /*   { name: 'القوانين', icon: Book, href: '#' },
      { name: 'المتجر', icon: ShoppingCart, href: '#' }, */
];

export default function Navbar() {
    return (
        <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className={cn(
                    "flex items-center justify-between p-2 rounded-full",
                    "bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.5)]",
                    "hover:border-primary/30 transition-colors duration-300"
                )}
            >
                {/* Logo Icon */}
                <div className="pl-4 pr-2 border-l border-white/10">
                    <span className="font-bold text-white tracking-tighter">
                        Venom<span className="text-primary">RP</span>
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all group flex items-center gap-2"
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <item.icon className="w-4 h-4 md:hidden" />
                            {/* Active Dot (Optional, can be dynamic) */}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="pl-1">
                    <a href="https://discord.gg/v4zEFnhY" className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                        <MessageCircle size={18} />
                    </a>
                </div>
            </motion.nav>
        </div>
    );
}
