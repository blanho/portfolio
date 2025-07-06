'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { usePathname } from 'next/navigation'

const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/work' },
    { name: 'Contact', path: '/contact' },
]

const MobileNav = () => {
    const pathName = usePathname();

    const getTextClass = (isActive: boolean) => {
        const baseClass = "block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 relative rounded-lg";

        if (isActive) {
            return `${baseClass} 
                    text-white bg-gradient-to-r from-blue-500 to-purple-600
                    dark:from-blue-400 dark:to-purple-500 
                    shadow-lg transform hover:scale-[1.02]`;
        } else {
            return `${baseClass} 
                    text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
                    dark:text-gray-300 dark:hover:text-white dark:hover:from-blue-400 dark:hover:to-purple-500
                    hover:shadow-md hover:scale-[1.02] active:scale-95`;
        }
    };

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'>
                <CiMenuFries className="text-2xl 
                                     text-slate-600 hover:text-primary
                                     dark:text-gray-300 dark:hover:text-white
                                     transition-colors duration-300" />
            </SheetTrigger>
            <SheetContent className='w-[300px] sm:w-[350px] p-0 bg-white dark:bg-slate-900 border-l border-gray-200 dark:border-slate-700'>
                {/* Header */}
                <SheetHeader className="px-6 py-6 border-b border-gray-200 dark:border-slate-700">
                    <SheetTitle className="text-xl font-bold text-slate-800 dark:text-white text-left">
                        Navigation
                    </SheetTitle>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className='flex flex-col py-6'>
                    <div className="space-y-2 px-3">
                        {links.map((link, index) => {
                            const isActive = link.path === pathName;
                            return (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={getTextClass(isActive)}
                                >
                                    <span className="flex items-center">
                                        {link.name}
                                        {isActive && (
                                            <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                                        )}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-slate-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        © 2025 Portfolio
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav