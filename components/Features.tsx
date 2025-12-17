'use client';

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Shield, Car, Briefcase, Server, Star, Crown, Zap } from 'lucide-react';
import { motion } from "framer-motion";

export default function Features() {
    return (
        <section id="features" className="py-24 relative">
            {/* Global noise handles the texture now */}

            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-4 leading-relaxed">
                    مميزات <span className="text-primary">السيرفر</span>
                </h2>
                <p className="mt-4 text-gray-400">كل ما تحتاجه لتجربة رول بلاي متكاملة</p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto px-4">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2 bg-[#0a0a0a]" : "bg-[#0a0a0a]"}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse border border-white/5"></div>
);

const items = [
    {
        title: "سيارات حصرية",
        description: "أسطول ضخم من السيارات الواقعية بجودة عالية وتعديلات خاصة.",
        header: <div className="w-full h-64 rounded-xl bg-[url('/assets/cars.png')] bg-cover bg-center grayscale-0 shadow-lg group-hover/bento:scale-105 transition-transform duration-300"></div>,
        icon: <Car className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "وظائف وتجارة",
        description: "اقتصاد واقعي ومتوازن مع عشرات الوظائف المتاحة.",
        header: <div className="w-full h-64 rounded-xl bg-[url('/assets/jobs.png')] bg-cover bg-center grayscale-0 shadow-lg group-hover/bento:scale-105 transition-transform duration-300"></div>,
        icon: <Briefcase className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "إدارة متواجدة",
        description: "فريق دعم فني متواجد 24/7 لخدمتك في الديسكورد وداخل اللعبة.",
        header: <div className="w-full h-64 rounded-xl bg-[url('/assets/admin.png')] bg-cover bg-center grayscale-0 shadow-lg group-hover/bento:scale-105 transition-transform duration-300"></div>,
        icon: <Crown className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "أداء عالي (High FPS)",
        description: "تحسينات جذرية على السيرفر لضمان أعلى عدد إطارات حتى للأجهزة المتوسطة.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-green-900/20 to-black border border-green-500/20 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><h3 className="text-4xl font-bold text-green-500">144+ FPS</h3></div>,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "حماية قوية (Anti-Cheat)",
        description: "نظام حماية متطور يضمن لك تجربة لعب نظيفة وعادلة خالية من الغش.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 items-center justify-center"><Shield className="w-12 h-12 text-red-500" /></div>,
        icon: <Shield className="h-4 w-4 text-neutral-500" />,
    },
];
