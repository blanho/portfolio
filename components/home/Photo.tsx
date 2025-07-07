'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const Photo = () => {
    return (
        <div className="relative w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -inset-2 -z-10 blur-2xl
                         bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20
                         dark:from-blue-400/30 dark:via-purple-400/30 dark:to-pink-400/30
                         rounded-full"
            />

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
                    transition: { duration: 0.3 }
                }}
                className="relative group w-full h-full"
            >
                <div className="relative w-full h-full rounded-full overflow-hidden 
                               border-4 border-white dark:border-gray-700
                               shadow-xl shadow-black/20 dark:shadow-black/40
                               bg-white dark:bg-gray-800">
                    <Image
                        src="/assets/lan.jpg"
                        alt="Photo of Lan"
                        fill
                        priority
                        quality={100}
                        className="object-cover transition-all duration-300 
                                 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 
                                   transition-all duration-300" />
                </div>
            </motion.div>

        </div>
    )
}

export default Photo

