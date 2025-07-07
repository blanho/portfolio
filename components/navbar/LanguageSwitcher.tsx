'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Globe, ChevronDown } from 'lucide-react'

// Flag components using CSS and Unicode
const USFlag = () => (
    <div className="w-4 h-4 rounded-sm overflow-hidden border border-gray-300 flex flex-col">
        <div className="h-1/2 bg-red-500 flex">
            <div className="w-1/3 bg-blue-800"></div>
        </div>
        <div className="h-1/2 bg-white"></div>
    </div>
)

const JapanFlag = () => (
    <div className="w-4 h-4 rounded-sm overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
    </div>
)

const ChinaFlag = () => (
    <div className="w-4 h-4 rounded-sm overflow-hidden border border-gray-300 bg-red-600 flex items-center justify-center">
        <div className="w-1 h-1 bg-yellow-400 rounded-full absolute"></div>
        <div className="w-3 h-3 bg-red-600 relative flex items-center justify-center">
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
        </div>
    </div>
)

const FranceFlag = () => (
    <div className="w-4 h-4 rounded-sm overflow-hidden border border-gray-300 flex">
        <div className="w-1/3 bg-blue-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-red-600"></div>
    </div>
)

const VietnamFlag = () => (
    <div className="w-4 h-4 rounded-sm overflow-hidden border border-gray-300 bg-red-600 flex items-center justify-center">
        <div className="w-2 h-2 bg-yellow-400 transform rotate-12">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-red-600 rotate-45"></div>
            </div>
        </div>
    </div>
)

const languages = [
    {
        code: 'en',
        name: 'English',
        icon: <USFlag />
    },
    {
        code: 'ja',
        name: '日本語',
        icon: <JapanFlag />
    },
    {
        code: 'zh',
        name: '中文',
        icon: <ChinaFlag />
    },
    {
        code: 'fr',
        name: 'Français',
        icon: <FranceFlag />
    },
    {
        code: 'vi',
        name: 'Tiếng Việt',
        icon: <VietnamFlag />
    }
]

export default function LanguageSwitcher() {
    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()
    const [currentLocale, setCurrentLocale] = useState(locale)

    useEffect(() => {
        const pathLocale = pathname.split('/')[1]
        if (pathLocale && ['en', 'ja', 'zh', 'fr', 'vi'].includes(pathLocale)) {
            setCurrentLocale(pathLocale)
        } else if (locale) {
            setCurrentLocale(locale)
        } else {
            setCurrentLocale('en')
        }
    }, [pathname, locale])

    const currentLanguage = languages.find(lang => lang.code === currentLocale)

    const handleLanguageChange = (newLocale: 'en' | 'ja' | 'zh' | 'fr' | 'vi') => {
        if (newLocale === currentLocale) return
        const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
        const newUrl = `/${newLocale}${pathnameWithoutLocale}`
        setCurrentLocale(newLocale)
        router.push(newUrl)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 min-w-[100px]"
                >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{currentLanguage?.icon}</span>
                    <span className="hidden md:inline">{currentLanguage?.name}</span>
                    <ChevronDown className="w-3 h-3" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code as 'en' | 'ja' | 'zh' | 'fr' | 'vi')}
                        className={`flex items-center gap-2 cursor-pointer ${currentLocale === language.code ? 'bg-accent' : ''
                            }`}
                    >
                        <span className="flex items-center">{language.icon}</span>
                        <span>{language.name}</span>
                        {currentLocale === language.code && (
                            <span className="ml-auto text-xs text-muted-foreground">✓</span>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
