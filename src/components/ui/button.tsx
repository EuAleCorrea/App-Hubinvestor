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
            primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
            ghost: "text-gray-600 hover:bg-gray-100",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-5 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium",
                    "transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
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
