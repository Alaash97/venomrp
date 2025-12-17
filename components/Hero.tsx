'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { YouTubeBackground } from './ui/youtube-background';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { VideoModal } from './ui/video-modal';
import { Play } from 'lucide-react';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Placeholder GTA V Cinematic ID - User will replace this
    const videoId = "IqlsPlxW0Oc";

    return (
        <section className="relative h-screen min-h-[800px]">
            <YouTubeBackground videoId={videoId}>
                <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-20">

                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative mb-8"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                            {/* Pulse Effect Behind Logo */}
                            <div className="absolute inset-0 bg-red-600/20 blur-[80px] rounded-full animate-pulse group-hover:bg-red-600/30 transition-all" />
                            <motion.img
                                src="/assets/logo.png"
                                alt="VenomRP Logo"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(220,20,60,0.5)]"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Play Button Overlay on Logo Hover */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(220,20,60,0.6)]">
                                    <Play fill="white" size={32} className="text-white ml-1" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Title Section */}
                    <div className="mb-6 relative z-10 flex flex-col items-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl mb-2"
                        >
                            VENOM <span className="text-primary">RP</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
                        />
                    </div>

                    {/* Description with Typing Effect */}
                    <div className="max-w-2xl mx-auto mb-10">
                        <TextGenerateEffect
                            words="إكتشف المعنى الحقيقي للحياة الواقعية. سيرفر متكامل، إدارة احترافية، ومجتمع لا يقبل إلا بالأفضل."
                            className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-md text-center"
                        />
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <a href="https://discord.gg/v4zEFnhY" target="_blank" rel="noopener noreferrer" className="relative group w-full md:w-auto flex-1 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-sm font-bold text-white backdrop-blur-3xl gap-2 transition-transform group-hover:bg-slate-900 group-hover:text-primary">
                                انضم للديسكورد
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                        </a>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full md:w-auto flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                        >
                            <Play size={18} />
                            شاهد العرض
                        </button>
                    </motion.div>
                </div>
            </YouTubeBackground>

            <VideoModal
                videoId={videoId}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
