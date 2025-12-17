'use client';

import { motion } from 'framer-motion';
import { Copy, Disc } from 'lucide-react'; // 'Disc' as generic icon if 'Discord' not avail, but lets use default lucide icons for now
import { useState } from 'react';

export default function Connect() {
    const [copied, setCopied] = useState(false);
    const serverIP = "203.16.163.170:28478";

    const handleCopy = () => {
        navigator.clipboard.writeText(serverIP);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Huge Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                        جاهز لبدء <span className="text-primary-outlined">مغامرتك؟</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                    {/* IP Copy Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-4 bg-[#1a1a1a] p-2 pl-6 rounded-xl border border-white/10 w-full md:w-auto min-w-[300px]"
                    >
                        <div className="flex-1 text-right">
                            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">IP Server</span>
                            <p className="text-white text-lg font-mono">{serverIP}</p>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                        >
                            {copied ? <span className="text-xs font-bold">نسخ!</span> : <Copy size={20} />}
                        </button>
                    </motion.div>

                    {/* Discord Button */}
                    <motion.a
                        href="https://discord.gg/v4zEFnhY"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white p-4 px-8 rounded-xl w-full md:w-auto min-w-[300px] transition-all font-bold text-lg shadow-lg"
                    >
                        {/* Simple visual for discord if icon missing */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419z" /></svg>
                        انضم للديسكورد
                    </motion.a>
                </div>
            </div>

            {/* CSS hack for outlined text effect */}
            <style jsx global>{`
        .text-primary-outlined {
          color: transparent;
          -webkit-text-stroke: 1px var(--primary);
        }
      `}</style>
        </section>
    );
}
