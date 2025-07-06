'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                {/* Page content with slide and fade animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            delay: 0.3,
                            duration: 0.6,
                            ease: [0.6, -0.05, 0.01, 0.99],
                            staggerChildren: 0.1
                        }
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                >
                    {children}
                </motion.div>

                {/* Primary transition overlay with gradient */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{
                        scaleY: 0,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                        }
                    }}
                    exit={{
                        scaleY: 1,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                    }}
                    style={{ originY: 1 }}
                    className='h-screen w-screen fixed bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 top-0 pointer-events-none z-50'
                />

                {/* Secondary overlay for smoother transition */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{
                        scaleY: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }
                    }}
                    exit={{
                        scaleY: 1,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    style={{ originY: 0 }}
                    className='h-screen w-screen fixed bg-gradient-to-tl from-slate-900 via-gray-800 to-slate-700 top-0 pointer-events-none z-40'
                />

                {/* Loading indicator */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        opacity: 0,
                        scale: 0,
                        transition: { delay: 0.3, duration: 0.3, ease: "easeOut" }
                    }}
                    className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 pointer-events-none'
                >
                    <div className="relative">
                        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-l-blue-300 rounded-full animate-spin animation-delay-150"></div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default PageTransition