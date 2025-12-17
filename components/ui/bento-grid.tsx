import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "row-span-1 relative rounded-3xl group/bento transition duration-200 shadow-none p-4 bg-neutral-900/50 border border-white/10 flex flex-col gap-4 overflow-hidden backdrop-blur-md",
                "hover:shadow-[0_0_50px_rgba(220,20,60,0.25)] hover:border-red-600/50",
                className
            )}
        >
            {/* Venom Glow Effect */}
            <div
                className="absolute -right-20 -top-20 h-[200px] w-[200px] bg-red-600/20 blur-[100px] group-hover/bento:bg-red-600/40 transition-all duration-500 rounded-full pointer-events-none"
            />

            <div className="w-full shrink-0 overflow-hidden rounded-xl">
                {header}
            </div>

            <div className="flex flex-col justify-end grow group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 w-fit rounded-lg bg-black border border-white/10 group-hover/bento:border-red-500/50 group-hover/bento:bg-red-950/30 transition-colors shadow-lg">
                        {icon}
                    </div>
                    <div className="font-sans font-bold text-white text-xl tracking-wide group-hover:text-red-400 transition-colors">
                        {title}
                    </div>
                </div>
                <div className="font-sans font-light text-neutral-400 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
