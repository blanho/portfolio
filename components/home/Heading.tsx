'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { AccentText, HeroText, SubtitleText, ThemeText } from '../ui/theme-text'

const Heading = () => {
    const t = useTranslations('home')
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

    // Define animated titles - these will cycle through
    const animatedTitles = [
        t('title'),
        t('titles.developer') || 'Full Stack Developer',
        t('titles.engineer') || 'Software Engineer'
    ]

    // Cycle through titles every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % animatedTitles.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [animatedTitles.length])

    return (
        <React.Fragment>
            <div className="text-center xl:text-left animate-fadeInUp animation-delay-200">
                <HeroText className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight mb-3">
                    {t('greeting')} <br />
                    <AccentText>{t('name')}</AccentText>
                </HeroText>

                <div className="h-12 flex items-center justify-center xl:justify-start">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTitleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <ThemeText
                                variant="gradient"
                                size="xl"
                                weight="semibold"
                                className="animate-fadeInUp animation-delay-300"
                            >
                                {animatedTitles[currentTitleIndex]}
                            </ThemeText>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <SubtitleText className="text-center xl:text-left text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto xl:mx-0
                                               animate-fadeInUp animation-delay-400">
                {t('description')}
            </SubtitleText>
        </React.Fragment>
    )
}

export default Heading