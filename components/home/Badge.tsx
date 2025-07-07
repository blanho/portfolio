'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const Badge = () => {
    const t = useTranslations('home')

    return (
        <React.Fragment>
            <div className="inline-flex items-center px-4 py-3 rounded-full w-fit mx-auto xl:mx-0
                          bg-blue-50 border border-blue-200 shadow-sm
                          dark:bg-slate-800 dark:border-slate-600
                          transform hover:scale-105 transition-all duration-300 cursor-default">
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {t('badge')}
                </span>
            </div>
        </React.Fragment>
    )
}

export default Badge