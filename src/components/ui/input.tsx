import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    prefix?: string;
    suffix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, prefix, suffix, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-xs font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {prefix && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            {prefix}
                        </span>
                    )}
                    <input
                        type={type}
                        className={cn(
                            "flex h-12 w-full rounded-xl border border-border bg-background px-4 py-2 text-white",
                            "transition-all duration-300",
                            "placeholder:text-slate-600",
                            "focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/40",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            prefix && "pl-10",
                            suffix && "pr-10",
                            error && "border-red-500 focus:ring-red-500",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    {suffix && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            {suffix}
                        </span>
                    )}
                </div>
                {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
