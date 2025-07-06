'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence>
            <div key={pathName}>
                {/* Page content - always visible */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </motion.div>

                {/* Transition overlay - fades out to reveal content */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50'
                />
            </div>
        </AnimatePresence>
    )
}

export default PageTransition