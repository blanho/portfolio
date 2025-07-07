'use client'

import React from 'react'
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '../ui/button';
import NavBar from './NavBar';
import DarkMode from './DarkMode';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations('buttons');
    const locale = useLocale();

    return (
        <header className='py-6 xl:py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="flex items-center gap-4">
                    <DarkMode />
                    <LanguageSwitcher />
                </div>
                <div className="hidden xl:flex items-center gap-8">
                    <NavBar />
                    <Link href={`/${locale}/contact`}>
                        <Button>{t('hireMe')}</Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header