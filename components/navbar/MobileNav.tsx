'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { usePathname } from 'next/navigation'

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
]

const MobileNav = () => {
    const pathName = usePathname();

    const getTextClass = (isActive: boolean) => {
        const baseClass = "capitalize font-medium transition-all duration-300 relative";

        if (isActive) {
            return `${baseClass} 
                    text-primary font-semibold
                    dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 
                    dark:bg-clip-text dark:shadow-lg
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
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className="text-xl 
                                     text-slate-600 hover:text-primary
                                     dark:text-gray-300 dark:hover:text-white
                                     transition-colors duration-300" />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-background dark:bg-slate-900 border-border dark:border-slate-700'>
                <nav className='flex flex-col gap-8 items-center'>
                    {links.map((link, index) => {
                        const isActive = link.path === pathName;
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={getTextClass(isActive)}
                            >
                                {link.name}
                                {/* Decorative element for active state */}
                                {isActive && (
                                    <>
                                        {/* Light mode underline */}
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                                       bg-primary dark:hidden rounded-full"></span>
                                        {/* Dark mode gradient underline */}
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                                       bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                                                       hidden dark:block rounded-full"></span>
                                    </>
                                )}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav