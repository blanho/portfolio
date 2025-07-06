import React from 'react'
import { ThemeText } from '../ui/theme-text'

const QuickStats = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fadeInUp animation-delay-500">
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-md
                                    dark:bg-card dark:border-border text-center
                                    transform hover:scale-105 hover:-translate-y-1 
                                    transition-all duration-300 cursor-default
                                    hover:shadow-xl delay-100">
                    <ThemeText weight="bold" size="lg" className="block text-blue-600 dark:text-blue-400">3+</ThemeText>
                    <ThemeText size="sm" className="text-gray-600 dark:text-muted-foreground">Years</ThemeText>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-md
                                    dark:bg-card dark:border-border text-center
                                    transform hover:scale-105 hover:-translate-y-1 
                                    transition-all duration-300 cursor-default
                                    hover:shadow-xl delay-200">
                    <ThemeText weight="bold" size="lg" className="block text-blue-600 dark:text-blue-400">50+</ThemeText>
                    <ThemeText size="sm" className="text-gray-600 dark:text-muted-foreground">Projects</ThemeText>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-md
                                    dark:bg-card dark:border-border text-center
                                    transform hover:scale-105 hover:-translate-y-1 
                                    transition-all duration-300 cursor-default
                                    hover:shadow-xl delay-300">
                    <ThemeText weight="bold" size="lg" className="block text-blue-600 dark:text-blue-400">100%</ThemeText>
                    <ThemeText size="sm" className="text-gray-600 dark:text-muted-foreground">Quality</ThemeText>
                </div>
            </div>
        </React.Fragment>
    )
}

export default QuickStats