import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-background hover:bg-primary-hover shadow-premium font-black uppercase tracking-widest text-[10px]",
            secondary: "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
            outline: "border-2 border-primary text-primary hover:bg-primary/5 shadow-glow",
            ghost: "text-slate-400 hover:bg-white/5 hover:text-white",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-5 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                ) : null}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
