"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

const NavBar = () => {
    const pathname = usePathname();

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
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                const isActive = link.href === pathname;
                return (
                    <Link
                        href={link.href}
                        key={index}
                        className={getTextClass(isActive)}
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