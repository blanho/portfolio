"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const NavBar = () => {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const locale = useLocale();
    const [isNavigating, setIsNavigating] = useState(false);
    const [pendingPath, setPendingPath] = useState<string | null>(null);

    // Extract current locale from pathname to ensure we use the correct one
    const currentLocale = (() => {
        const pathLocale = pathname.split('/')[1];
        return pathLocale && ['en', 'ja', 'zh', 'fr', 'vi'].includes(pathLocale) ? pathLocale : locale || 'en';
    })();

    const links = [
        { href: `/${currentLocale}`, label: t('home') },
        { href: `/${currentLocale}/resume`, label: t('resume') },
        { href: `/${currentLocale}/services`, label: t('services') },
        { href: `/${currentLocale}/projects`, label: t('projects') },
        { href: `/${currentLocale}/contact`, label: t('contact') },
    ];

    // Reset loading state when pathname changes
    useEffect(() => {
        if (pendingPath && pathname === pendingPath) {
            setIsNavigating(false);
            setPendingPath(null);
        }
    }, [pathname, pendingPath]);

    const handleLinkClick = (href: string, event: React.MouseEvent) => {
        // Don't interfere if it's the current page
        if (href === pathname) {
            return;
        }

        // Don't interfere with special clicks (ctrl, cmd, middle click, etc.)
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) {
            return;
        }

        setIsNavigating(true);
        setPendingPath(href);

        // Fallback timeout in case navigation fails
        setTimeout(() => {
            setIsNavigating(false);
            setPendingPath(null);
        }, 3000);
    };

    const getTextClass = (isActive: boolean) => {
        const baseClass = "capitalize font-medium transition-all duration-300 relative";

        if (isActive) {
            return `${baseClass} 
                    text-primary font-semibold border-b-2 border-primary
                    dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 
                    dark:bg-clip-text dark:border-transparent dark:shadow-lg
                    hover:scale-105 transform`;
        } else {
            return `${baseClass} 
                    text-slate-600 hover:text-primary hover:font-semibold
                    dark:text-gray-300 dark:hover:text-transparent dark:hover:bg-gradient-to-r 
                    dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-pink-300 
                    dark:hover:bg-clip-text dark:hover:drop-shadow-sm
                    hover:scale-105 transform`;
        }
    };

    return (
        <nav className='flex gap-8 relative'>
            {/* Loading indicator */}
            {isNavigating && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                               bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg 
                               border border-gray-200 dark:border-gray-700 z-50">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Loading...</span>
                    </div>
                </div>
            )}

            {links.map((link, index) => {
                const isActive = link.href === pathname;
                return (
                    <Link
                        href={link.href}
                        key={index}
                        className={`${getTextClass(isActive)} ${isNavigating ? 'opacity-50 pointer-events-none' : ''}`}
                        onClick={(e) => handleLinkClick(link.href, e)}
                    >
                        {link.label}
                        {isActive && (
                            <>
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                               bg-primary dark:hidden rounded-full"></span>
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                               bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                                               hidden dark:block rounded-full"></span>
                            </>
                        )}
                    </Link>
                );
            })}
        </nav>
    )
}

export default NavBar;