'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { ThemeText } from '../ui/theme-text'

const Footer = () => {
    const t = useTranslations('footer')
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-2 mt-2 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <div className="space-y-3">
                        <ThemeText variant="default" size="sm" className="font-medium text-gray-600 dark:text-gray-400">
                            © {currentYear} {t('createdBy')} <span className="font-semibold text-blue-600 dark:text-blue-400">Ho Bao Lan</span>
                        </ThemeText>
                        <ThemeText variant="default" size="sm" className="ml-1.5 max-w-md text-gray-500 dark:text-gray-500 text-xs leading-tight">
                            {t('licenseText')}
                        </ThemeText>
                    </div>

                    <div className="flex items-center justify-center space-x-6 pt-1">
                        <a
                            href="https://github.com/blanho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com/in/blanho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        <a
                            href="mailto:blanho1211@gmail.com"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="Email"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>

                    <div className="pt-1 border-t border-gray-200 dark:border-gray-700 w-full max-w-md">
                        <ThemeText variant="default" size="sm" className="text-center text-gray-500 dark:text-gray-500 text-xs leading-tight">
                            {t('builtWith')} <span className="text-blue-600 dark:text-blue-400">Next.js</span>, <span className="text-blue-600 dark:text-blue-400">TypeScript</span> & <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>
                        </ThemeText>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
