'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { FiDownload, FiMail, FiEye, FiFolder, FiTool } from 'react-icons/fi'
import { Loader2 } from 'lucide-react'

const ActionButton = () => {
    const t = useTranslations('home.actions')
    const tNav = useTranslations('nav')
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isNavigating, setIsNavigating] = React.useState(false)
    const [loadingButton, setLoadingButton] = React.useState<string | null>(null)

    const getCurrentLocale = () => {
        const pathLocale = pathname.split('/')[1]
        if (pathLocale && ['en', 'ja', 'zh', 'fr', 'vi'].includes(pathLocale)) {
            return pathLocale
        }
        return locale || 'en'
    }

    const currentLocale = getCurrentLocale()

    const handleNavigation = (path: string, buttonId: string) => {
        setIsNavigating(true)
        setLoadingButton(buttonId)
        router.push(`/${currentLocale}${path}`)
        setTimeout(() => {
            setIsNavigating(false)
            setLoadingButton(null)
        }, 500)
    }

    const handleDownload = () => {
        setLoadingButton('download')
        const link = document.createElement('a')
        link.href = '/resume.pdf'
        link.download = 'Resume.pdf'
        link.click()

        setTimeout(() => {
            setLoadingButton(null)
        }, 1000)
    }

    return (
        <React.Fragment>
            <div className="flex flex-col gap-4 animate-fadeInUp animation-delay-600 pb-4 sm:pb-0">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                             text-white font-semibold shadow-lg hover:shadow-xl
                             transform hover:scale-105 transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={() => handleNavigation('/resume', 'resume')}
                        disabled={isNavigating}
                    >
                        {loadingButton === 'resume' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <FiEye className="mr-2 h-4 w-4" />
                        )}
                        {t('viewResume')}
                    </Button>

                    <Button
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 
                             text-white font-semibold shadow-lg hover:shadow-xl
                             transform hover:scale-105 transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={handleDownload}
                        disabled={loadingButton === 'download'}
                    >
                        {loadingButton === 'download' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <FiDownload className="mr-2 h-4 w-4 animate-bounce" />
                        )}
                        {t('downloadCV')}
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50
                             dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900/20
                             transform hover:scale-105 transition-all duration-300 font-semibold cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={() => handleNavigation('/contact', 'contact')}
                        disabled={isNavigating}
                    >
                        {loadingButton === 'contact' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <FiMail className="mr-2 h-4 w-4" />
                        )}
                        {t('contactMe')}
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 
                             text-white font-semibold shadow-lg hover:shadow-xl
                             transform hover:scale-105 transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={() => handleNavigation('/projects', 'projects')}
                        disabled={isNavigating}
                    >
                        {loadingButton === 'projects' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <FiFolder className="mr-2 h-4 w-4" />
                        )}
                        {tNav('projects')}
                    </Button>

                    <Button
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 
                             text-white font-semibold shadow-lg hover:shadow-xl
                             transform hover:scale-105 transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={() => handleNavigation('/services', 'services')}
                        disabled={isNavigating}
                    >
                        {loadingButton === 'services' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <FiTool className="mr-2 h-4 w-4" />
                        )}
                        {tNav('services')}
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ActionButton