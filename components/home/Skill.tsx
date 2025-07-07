'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { ThemeText } from '../ui/theme-text'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    FRONTEND_SKILLS,
    BACKEND_SKILLS,
    CLOUD_DEVOPS_SKILLS,
    ARCHITECTURE_SKILLS,
    PERSONAL_SKILLS,
    SKILL_CATEGORIES
} from '@/constants/skills'

const Skill = () => {
    const t = useTranslations('home.skills')

    return (
        <TooltipProvider>
            <React.Fragment>
                <div className="text-center xl:text-left space-y-4 xl:space-y-6">
                    <div className="relative">
                        <ThemeText variant="gradient" size="lg" weight="bold" className="mb-4">
                            {t('technicalExpertise')}
                        </ThemeText>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 
                              rounded-full opacity-20 animate-ping"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${SKILL_CATEGORIES.frontend.color}`}>
                                {t('categories.frontend')}
                            </span>
                            <div className={`flex-1 h-px bg-gradient-to-r ${SKILL_CATEGORIES.frontend.lineGradient}`}></div>
                        </div>
                        <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                            {FRONTEND_SKILLS.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full text-xs font-semibold
                               shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 
                               transition-all duration-300 cursor-pointer animate-fadeInUp"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${SKILL_CATEGORIES.backend.color}`}>
                                {t('categories.backend')}
                            </span>
                            <div className={`flex-1 h-px bg-gradient-to-r ${SKILL_CATEGORIES.backend.lineGradient}`}></div>
                        </div>
                        <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                            {BACKEND_SKILLS.map((skill, index) => (
                                <span
                                    key={skill.name}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} text-white rounded-full text-xs font-semibold
                               shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 
                               transition-all duration-300 cursor-pointer animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${SKILL_CATEGORIES.cloud.color}`}>
                                {t('categories.cloud')}
                            </span>
                            <div className={`flex-1 h-px bg-gradient-to-r ${SKILL_CATEGORIES.cloud.lineGradient}`}></div>
                        </div>
                        <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                            {CLOUD_DEVOPS_SKILLS.map((skill, index) => (
                                <span
                                    key={skill.name}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} text-white rounded-full text-xs font-semibold
                               shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 
                               transition-all duration-300 cursor-pointer animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${SKILL_CATEGORIES.architecture.color}`}>
                                {t('categories.architecture')}
                            </span>
                            <div className={`flex-1 h-px bg-gradient-to-r ${SKILL_CATEGORIES.architecture.lineGradient}`}></div>
                        </div>
                        <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                            {ARCHITECTURE_SKILLS.map((skill, index) => (
                                <span
                                    key={skill.name}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} text-white rounded-full text-xs font-semibold
                               shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 
                               transition-all duration-300 cursor-pointer animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center xl:text-left space-y-4 xl:space-y-5">
                    <div className="relative">
                        <ThemeText variant="gradient" size="lg" weight="bold" className="mb-2">
                            {t('letsConnect')}
                        </ThemeText>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex justify-center xl:justify-start gap-4 mb-2 animate-fadeInUp animation-delay-800">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="https://github.com/blanho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 bg-gradient-to-br from-gray-900 to-gray-700 
                                   hover:from-gray-800 hover:to-gray-600 rounded-xl shadow-lg 
                                   hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-3 transition-all duration-300
                                   dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white
                                        dark:border-gray-800 animate-bounce"></div>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('tooltips.github')}</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="https://linkedin.com/in/blanho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 bg-gradient-to-br from-blue-600 to-blue-800 
                                   hover:from-blue-500 hover:to-blue-700 rounded-xl shadow-lg 
                                   hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-3 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white
                                        dark:border-gray-800 animate-pulse"></div>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('tooltips.linkedin')}</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="https://teams.microsoft.com/l/chat/0/0?users=h.baolan20025@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 
                                   hover:from-indigo-400 hover:to-indigo-600 rounded-xl shadow-lg 
                                   hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-3 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.25 2.25H3.75C2.784 2.25 2 3.034 2 4v16c0 .966.784 1.75 1.75 1.75h16.5c.966 0 1.75-.784 1.75-1.75V4c0-.966-.784-1.75-1.75-1.75zM9.5 18.5v-13h5v13h-5zm-6.25-13h4.5v13h-4.5v-13zm12.5 13v-13h4.5v13h-4.5z" />
                                    </svg>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('tooltips.teams')}</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="mailto:blanho1211@gmail.com"
                                    className="group relative p-3 bg-gradient-to-br from-purple-500 to-purple-700 
                                   hover:from-purple-400 hover:to-purple-600 rounded-xl shadow-lg 
                                   hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-3 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('tooltips.email')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <div className="text-center xl:text-left space-y-3 xl:space-y-4">
                    <div className="relative">
                        <ThemeText variant="gradient" size="lg" weight="bold" className="mb-3">
                            {t('languagesCertificatesInterests')}
                        </ThemeText>
                    </div>
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                        {PERSONAL_SKILLS.map((skill) => (
                            <span
                                key={skill.name}
                                className={`px-3 py-1 ${skill.bgColor} ${skill.textColor} ${skill.darkBgColor} ${skill.darkTextColor} 
                                       rounded-full text-xs font-medium border ${skill.borderColor} ${skill.darkBorderColor}
                                       ${skill.hoverBgColor} ${skill.darkHoverBgColor} transition-colors duration-200`}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        </TooltipProvider>
    )
}

export default Skill