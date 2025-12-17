import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";


export const YouTubeBackground = ({
    videoId,
    children,
    className,
}: {
    videoId: string;
    children: React.ReactNode;
    className?: string;
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={cn("relative w-full h-full min-h-screen overflow-hidden bg-black", className)} />;
    }

    return (
        <div className={cn("relative w-full h-full min-h-screen overflow-hidden bg-black", className)}>
            {/* Video Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-[1.35]">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&getinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080&origin=${window.location.origin}`}
                    className="w-full h-full aspect-video object-cover opacity-60"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/50 to-black/30 backdrop-blur-[1px]" />

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
