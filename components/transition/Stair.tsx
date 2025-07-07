import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
}

const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stair = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1
                    }}
                    className="h-full w-full relative overflow-hidden
                             bg-gradient-to-br from-slate-50 to-slate-200
                             dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900
                             border-r border-slate-200 dark:border-slate-700"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 0.8,
                            delay: reverseIndex(index) * 0.1 + 0.2,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 
                                 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20
                                 dark:from-blue-400/30 dark:via-purple-400/30 dark:to-pink-400/30"
                    />

                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{
                            duration: 0.6,
                            delay: reverseIndex(index) * 0.1 + 0.1,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 
                                 bg-gradient-to-r from-transparent via-white/50 to-transparent
                                 dark:via-white/20 skew-x-12"
                    />
                </motion.div>
            ))}
        </>
    )
}

export default Stair