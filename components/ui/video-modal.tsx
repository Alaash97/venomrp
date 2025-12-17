"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const VideoModal = ({
    videoId,
    isOpen,
    onClose,
}: {
    videoId: string;
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-20"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-full max-w-7xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
