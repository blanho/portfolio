"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ThemeTextProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'gradient' | 'glow' | 'shimmer';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const ThemeText = ({
    children,
    className,
    variant = 'default',
    size = 'md',
    weight = 'normal'
}: ThemeTextProps) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl'
    };

    const weightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    };

    const variantClasses = {
        default: cn(
            "transition-colors duration-300",
            "text-foreground"
        ),
        gradient: cn(
            "transition-all duration-300",
            "text-slate-800 font-semibold",
            "dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 dark:bg-clip-text"
        ),
        glow: cn(
            "transition-all duration-300",
            "text-slate-700 font-medium",
            "dark:text-white dark:drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]"
        ),
        shimmer: cn(
            "relative overflow-hidden transition-all duration-300",
            "text-slate-800 font-semibold",
            "dark:text-white dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent dark:bg-clip-text",
            "dark:bg-[length:200%_100%] dark:animate-shimmer"
        )
    };

    return (
        <span className={cn(
            sizeClasses[size],
            weightClasses[weight],
            variantClasses[variant],
            className
        )}>
            {children}
        </span>
    );
};

// Hero text component for large headings
export const HeroText = ({
    children,
    className,
    animated = true
}: {
    children: ReactNode;
    className?: string;
    animated?: boolean;
}) => {
    return (
        <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight",
            "text-slate-900",
            "dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 dark:bg-clip-text",
            animated && "transition-all duration-500 hover:scale-105 transform",
            className
        )}>
            {children}
        </h1>
    );
};

// Subtitle component with theme-responsive styling
export const SubtitleText = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <p className={cn(
            "text-lg md:text-xl",
            "text-slate-600",
            "dark:text-gray-300 dark:drop-shadow-sm",
            "transition-colors duration-300",
            className
        )}>
            {children}
        </p>
    );
};

// Accent text for highlights
export const AccentText = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <span className={cn(
            "font-medium",
            "text-blue-600",
            "dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 dark:bg-clip-text",
            "transition-all duration-300",
            className
        )}>
            {children}
        </span>
    );
};
