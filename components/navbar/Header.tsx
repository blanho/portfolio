import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';
import NavBar from './NavBar';
import DarkMode from './DarkMode';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header className='py-6 xl:py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <DarkMode />
                <div className="hidden xl:flex items-center gap-8">
                    <NavBar />
                    <Link href="/contact">
                        <Button>Hire me</Button>
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