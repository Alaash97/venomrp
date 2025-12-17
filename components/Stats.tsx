'use client';

import { motion } from 'framer-motion';
import { Users, Code, Zap } from 'lucide-react';

const stats = [
    { icon: Users, label: 'لاعبين نشطين', value: '+500' },
    { icon: Code, label: 'سكربتات حصرية', value: '100%' },
    { icon: Zap, label: 'أداء عالي', value: 'FPS++' },
];

export default function Stats() {
    return (
        <div className="w-full bg-black border-y border-white/5 py-10 relative z-20 -mt-20 md:-mt-32 mx-auto container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-2xl">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-2 group"
                    >
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors mb-2">
                            <stat.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                        <p className="text-gray-400 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
