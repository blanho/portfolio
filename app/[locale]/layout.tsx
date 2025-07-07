import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../animations.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Providers from "../providers";
import PageTransition from "@/components/transition/PageTransition";
import StairTransititon from "@/components/transition/StairTransititon";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio | Bao Lan Ho",
    description: "Full-stack developer portfolio",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!['en', 'ja', 'zh', 'fr', 'vi'].includes(locale)) {
        notFound();
    }

    const messages = await getMessages({ locale });

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
                suppressHydrationWarning
            >
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <Header />
                        <StairTransititon />
                        <PageTransition>
                            {children}
                        </PageTransition>
                        <Footer />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
