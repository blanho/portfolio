'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const Photo = () => {
    return (
        <div className="relative w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] mx-auto">
            {/* Animated background glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -inset-4 -z-10 blur-xl
                         bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30
                         dark:from-blue-400/40 dark:via-purple-400/40 dark:to-pink-400/40
                         rounded-full"
            />

            {/* Photo container with gradient border */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                }}
                className="relative group w-full h-full"
            >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 p-1 animate-pulse">
                    {/* Inner background */}
                    <div className="w-full h-full rounded-full bg-background dark:bg-slate-900 p-1">
                        {/* Image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 dark:shadow-purple-500/30">
                            <Image
                                src="/assets/lan.jpg"
                                alt="Photo of Lan"
                                fill
                                priority
                                quality={100}
                                className="object-cover transition-all duration-300 
                                         brightness-110 contrast-110
                                         group-hover:brightness-125 group-hover:contrast-125 group-hover:scale-110"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                            x: [0, (i % 2 === 0 ? 30 : -30)],
                            y: [0, (i < 2 ? -30 : 30)],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/60 dark:bg-purple-400/60 blur-sm"
                        style={{
                            left: i % 2 === 0 ? '20%' : '80%',
                            top: i < 2 ? '20%' : '80%',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Photo

