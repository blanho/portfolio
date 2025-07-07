'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import {
    Code,
    Cloud,
    Database,
    Settings,
    Layers,
    CheckCircle,
    Star,
    Globe,
    Zap,
    Shield
} from 'lucide-react'

const Services = () => {
    const t = useTranslations('services')

    const expertise = [
        {
            icon: <Code className="w-8 h-8" />,
            title: t('webDev.title'),
            description: t('webDev.description'),
            features: t.raw('webDev.features'),
            gradient: "from-blue-500 to-cyan-500",
            popular: t.raw('webDev.popular')
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: t('integration.title'),
            description: t('integration.description'),
            features: t.raw('integration.features'),
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: t('migration.title'),
            description: t('migration.description'),
            features: t.raw('migration.features'),
            gradient: "from-green-500 to-teal-500"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: t('cloud.title'),
            description: t('cloud.description'),
            features: t.raw('cloud.features'),
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: t('database.title'),
            description: t('database.description'),
            features: t.raw('database.features'),
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: t('api.title'),
            description: t('api.description'),
            features: t.raw('api.features'),
            gradient: "from-gray-600 to-gray-800"
        }
    ]

    const technologies = [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: ".NET", icon: "🔷" },
        { name: "Azure", icon: "☁️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Docker", icon: "🐳" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Redis", icon: "🔴" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <span className="text-lg">{tech.icon}</span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {expertise.map((service, index) => (
                        <div
                            key={index}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-blue-500' : ''
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    {t('popular')}
                                </div>
                            )}

                            <div className={`h-32 bg-gradient-to-r ${service.gradient} p-6 flex items-center justify-center`}>
                                <div className="text-white">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        {t('approach.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: t('approach.steps.discovery.title'),
                                description: t('approach.steps.discovery.description'),
                                icon: <Globe className="w-6 h-6" />
                            },
                            {
                                step: "02",
                                title: t('approach.steps.planning.title'),
                                description: t('approach.steps.planning.description'),
                                icon: <Layers className="w-6 h-6" />
                            },
                            {
                                step: "03",
                                title: t('approach.steps.development.title'),
                                description: t('approach.steps.development.description'),
                                icon: <Code className="w-6 h-6" />
                            },
                            {
                                step: "04",
                                title: t('approach.steps.delivery.title'),
                                description: t('approach.steps.delivery.description'),
                                icon: <Zap className="w-6 h-6" />
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="text-white">
                                        {process.icon}
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {process.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services